// Cloudflare Pages Function to handle form submissions
// This will send emails to forms@unlokie.com

export async function onRequestPost(context: any) {
  const { request, env } = context;
  
  try {
    // Parse form data
    const formData = await request.json();
    const { name, email, organization, message, requestDeck } = formData;
    
    // Validate required fields
    if (!name || !email || !organization || !message) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'All fields are required' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Create email content
    const emailContent = `
New Unlokie Contact Form Submission

Name: ${name}
Email: ${email}
Organization: ${organization}
Request Investor Deck: ${requestDeck ? 'Yes' : 'No'}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
IP Address: ${request.headers.get('CF-Connecting-IP') || 'Unknown'}
User Agent: ${request.headers.get('User-Agent') || 'Unknown'}
    `.trim();
    
    // Send email using Cloudflare MailChannels (free tier)
    const emailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'forms@unlokie.com', name: 'Unlokie Forms' }],
            reply_to: { email: email, name: name }
          },
        ],
        from: {
          email: 'noreply@unlokie.com',
          name: 'Unlokie Landing Page',
        },
        subject: `New Contact Form: ${name} from ${organization}`,
        content: [
          {
            type: 'text/plain',
            value: emailContent,
          },
        ],
      }),
    });
    
    if (!emailResponse.ok) {
      throw new Error(`Email service error: ${emailResponse.status}`);
    }
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Form submitted successfully' 
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://unlokie.com',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Failed to submit form. Please try again.' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Handle preflight requests for CORS
export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://unlokie.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
