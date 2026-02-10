# Form Handling Setup Guide

Your contact form is configured with fallback options to ensure reliability.

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

## Option 2: Direct Email (Fallback)

If both options fail, users will see an error message with `forms@unlokie.com` for direct contact.

## Current Form Features:

✅ **Fallback submission path** (Formspree)  
✅ **Form validation** with real-time error display  
✅ **Spam protection** ready  
✅ **Success/error states** with user feedback  
✅ **Investor deck request** checkbox  
✅ **Mobile responsive** design  

## Testing:

```bash
# Test the form locally
pnpm run dev
# Go to http://localhost:3000/#contact
# Fill out and submit the form
```

The form will log any errors to the browser console for debugging.

## Recommended: Test with Formspree First

1. Set up Formspree account
2. Update `.env.local` with your form endpoint  
3. Test form submission
4. Validate behavior in your self-hosted environment

This ensures your form works immediately in the self-hosted stack.
