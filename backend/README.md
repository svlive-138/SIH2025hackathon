# Digital Learning Platform Backend

## Deployment & Security Checklist

1. **Environment Variables**
   - Copy `.env.example` to `.env` and set your production values.
   - Never commit `.env` to version control.

2. **Production Security**
   - Use HTTPS in production (behind a reverse proxy like Nginx).
   - Set `NODE_ENV=production`.
   - Restrict CORS to your frontend domain in `.env`.
   - Ensure MongoDB is not publicly accessible.

3. **Start the Server**
   - `npm install --production`
   - `npm run start`

4. **Health Check**
   - GET `/health` should return `{ status: 'ok' }`.

5. **File Uploads**
   - Ensure `uploads/` directories exist and are writable.
   - Consider offloading uploads to cloud storage for scale.

6. **Logging & Monitoring**
   - Use a process manager (PM2, systemd) for reliability.
   - Monitor logs for errors and suspicious activity.

7. **Updates**
   - Keep dependencies up to date and monitor for vulnerabilities.

---

For full-stack deployment, serve your frontend (React or static) from a separate domain or via Nginx reverse proxy.