# SIXTUS MOTORS — Gemini chatbot setup

Implemented in the Desktop project, on every page via the floating “Ask Sixtus” button.

## Enable locally
1. Copy `.env.example` to `.env.local` in the project folder.
2. Set `GEMINI_API_KEY` to your Google AI Studio key. Do not put it in a NEXT_PUBLIC variable or commit the file.
3. Optional: set `GEMINI_MODEL` to a generateContent-compatible model enabled for your Google project. Default: gemini-3.5-flash.
4. Restart the Next.js server and test the chat.

## Enable on Vercel
In your project's Settings → Environment Variables, add GEMINI_API_KEY for the desired deployment environments. Optionally add GEMINI_MODEL. Redeploy after saving. The key is used only by the server route /api/chat.

## Company information
`content/company-knowledge.mjs` is the editable company knowledge base. It covers company identity, establishment/registration, address, customer care, services, materials, fleet, leadership, staff, values, mission, clients/agencies and enquiry handling.

This is knowledge grounding: the server includes the knowledge with each conversation in Gemini's system instruction. It is not model training or fine-tuning. Update this file and redeploy when facts change. Current engagements and availability must be checked with customer care.

## Customer experience
Suggested questions, conversational context, loading/error messages, a new-chat button, keyboard focus handling, Escape to close, and WhatsApp customer care handoff. No chat transcripts are saved by this application. Messages are sent to Google's Gemini API to generate answers; review the terms/data policy applicable to your Google project before production use. The widget discloses this to visitors.

The assistant is instructed to stay within company information, avoid invented prices/availability/booking confirmations and refer unknowns to customer care. These are model instructions, not a guarantee of perfect factuality. Review real responses before public launch.

## Request protection
Input size and role validation, same-origin checks, server timeout, safe provider errors and a 20-request/10-minute per-IP in-memory limit. In-memory limits reset on restart and do not synchronize across Vercel instances. Configure Vercel Firewall/WAF limits or a shared rate-limit store before exposing significant public traffic; also set Google project quota/budget controls. No external moderation, persistent storage or paid-service account was provisioned.

## Verification
Run `node --test tests/chat.test.mjs` with Node.js. Seven checks cover validation, foreign origin rejection, missing key handling, mocked Gemini requests/replies, safe errors, rate limits and knowledge constraints.
Actual Gemini responses cannot be verified until GEMINI_API_KEY is configured. No key was supplied in this session. A missing key produces an honest customer-care fallback, not a fake AI response.

Official API reference: https://ai.google.dev/api/generate-content
Google AI Studio keys: https://aistudio.google.com/apikey
