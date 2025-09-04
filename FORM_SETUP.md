# Form Handling Setup Guide

Your contact form is configured with multiple fallback options to ensure reliability.

## Option 1: Formspree (Recommended for Quick Launch)

### Setup Steps:
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form project
4. Copy your form endpoint (looks like: `https://formspree.io/f/xxxxxxxxxxx`)
5. Update your environment variables:

```bash
# In .env.local
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-actual-form-id
```

### Formspree Configuration:
- **Redirect**: Set to `https://unlokie.com` (after submission)
- **Email**: Configure to forward to `forms@unlokie.com`
- **Spam Protection**: Enable built-in spam filtering
- **Email Template**: Customize the notification email format

## Option 2: Cloudflare Pages Functions (Advanced)

The form will automatically try to use the Cloudflare Pages function first, then fall back to Formspree if needed.

### Requirements:
1. Deploy to Cloudflare Pages
2. Set up email routing for `forms@unlokie.com`
3. Enable MailChannels integration

## Option 3: Direct Email (Fallback)

If both options fail, users will see an error message with `forms@unlokie.com` for direct contact.

## Current Form Features:

✅ **Dual submission paths** (Cloudflare → Formspree)  
✅ **Form validation** with real-time error display  
✅ **Spam protection** ready  
✅ **Success/error states** with user feedback  
✅ **Investor deck request** checkbox  
✅ **Mobile responsive** design  

## Testing:

```bash
# Test the form locally
npm run dev
# Go to http://localhost:3000/#contact
# Fill out and submit the form
```

The form will log any errors to the browser console for debugging.

## Recommended: Test with Formspree First

1. Set up Formspree account
2. Update `.env.local` with your form endpoint  
3. Test form submission
4. Deploy to Cloudflare Pages
5. Later, optimize with Cloudflare functions if needed

This ensures your form works immediately while you perfect the advanced setup.
