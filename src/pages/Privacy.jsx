import { LegalLayout } from "@/components/layout/legal-layout";

const Privacy = () => {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="September 2026">
            <p>
                This Privacy Policy explains what information JobFin collects, how it's used, and the choices
                you have.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect the following information when you use JobFin:</p>
            <ul>
                <li>
                    <strong>Account information</strong> — name, email address, and password (stored as a
                    secure hash, never in plain text). If you sign in with Google, we receive your name,
                    email, and profile picture from Google.
                </li>
                <li>
                    <strong>Home address</strong> — optional, used only to calculate commute distance and
                    route to your job applications. It is converted into map coordinates for this purpose.
                </li>
                <li>
                    <strong>Job application data</strong> — company name, position, status, notes, and company
                    address that you choose to enter.
                </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
                <li>To create and secure your account (authentication)</li>
                <li>To display your job applications and dashboard analytics</li>
                <li>To calculate commute distance and route between your home address and a company address</li>
                <li>To send you transactional emails, such as password reset links</li>
            </ul>

            <h2>3. Third-Party Services</h2>
            <p>We use the following third-party services to operate JobFin:</p>
            <ul>
                <li><strong>Google OAuth</strong> — to let you sign in with your Google account</li>
                <li>
                    <strong>OpenStreetMap Nominatim &amp; OSRM</strong> — to convert addresses into map
                    coordinates and calculate routes. Addresses you enter (home and company) are sent to these
                    services solely to perform this calculation.
                </li>
                <li><strong>Resend</strong> — to deliver transactional emails (e.g. password reset)</li>
            </ul>
            <p>
                We do not sell your personal information to third parties, and we do not use your data for
                advertising.
            </p>

            <h2>4. Data Storage &amp; Security</h2>
            <p>
                Your data is stored in our database and is only accessible through your authenticated account.
                Passwords are hashed using industry-standard hashing (bcrypt) before being stored. Session
                authentication is handled using JSON Web Tokens (JWT).
            </p>

            <h2>5. Your Choices</h2>
            <ul>
                <li>You can view and update your account information, home address, and password anytime from the Settings page</li>
                <li>You can delete individual job applications at any time</li>
                <li>Your home address is optional — the app works without it, except for the commute distance feature</li>
            </ul>

            <h2>6. Local Storage</h2>
            <p>
                JobFin stores your authentication token in your browser's local storage to keep you signed in.
                This token is removed when you log out.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>JobFin is not directed at children under 13, and we do not knowingly collect data from children.</p>

            <h2>8. Changes to This Policy</h2>
            <p>
                We may update this Privacy Policy from time to time. Material changes will be reflected by
                updating the "Last updated" date above.
            </p>

            <h2>9. Contact</h2>
            <p>
                Questions about this policy or your data can be sent to{" "}
                <a href="mailto:rifandiyusuf47@gmail.com">rifandiyusuf47@gmail.com</a>.
            </p>
        </LegalLayout>
    );
};

export default Privacy;