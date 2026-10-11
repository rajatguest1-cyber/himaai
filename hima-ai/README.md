# HIMA AI

Pink-and-lavender Next.js chat website connected to NVIDIA's OpenAI-compatible Chat Completions API.

## NVIDIA settings
Create a new API key at https://build.nvidia.com/ and choose a model in the NVIDIA API Catalog. Copy that model's exact ID. Use these environment variables (the model value below is only a placeholder):

- `AI_BASE_URL` = `https://integrate.api.nvidia.com/v1`
- `AI_API_KEY` = your new private NVIDIA key
- `AI_MODEL` = exact model ID from the NVIDIA model page

Never place the key in browser code or a variable named `NEXT_PUBLIC_...`. Never upload `.env.local` to GitHub.

## Deploy on Vercel
1. Create a new GitHub repository called `hima-ai`.
2. Upload the files in this folder to the repository root, without `.env.local` or any real key.
3. Go to https://vercel.com/new and import the GitHub repository.
4. Keep Next.js and the default build settings.
5. In Vercel project Settings → Environment Variables, add the three variables listed above. Select Production (and Preview if you want preview deployments).
6. Save the variables and redeploy. New environment variables apply to new deployments.
7. Open the `.vercel.app` address and send a test message.

Official guide: https://vercel.com/docs/environment-variables

Chat history is not saved after a page reload. Before making the site widely public, add authentication and rate limiting to prevent unexpected API usage.
