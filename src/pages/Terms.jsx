import { LegalLayout } from "@/components/layout/legal-layout";

const Terms = () => {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="September 2026">
            <p>
                These Terms of Service ("Terms") govern your use of JobFin (the "Service"). By creating an
                account or using JobFin, you agree to these Terms.
            </p>

            <h2>1. Description of Service</h2>
            <p>
                JobFin is a job application tracker that lets you log job applications, view an overview of
                your progress, and estimate the commute distance and travel time between your home address
                and each company's address.
            </p>

            <h2>2. Creating an Account</h2>
            <p>
                You can create an account using an email and password, or by signing in with your Google
                account. You are responsible for keeping your login credentials confidential and for all
                activity that happens under your account.
            </p>

            <h2>3. Your Content</h2>
            <p>
                Any information you enter into JobFin — job applications, notes, your home address, and
                similar data — remains yours. You are responsible for the accuracy of the information you
                provide.
            </p>

            <h2>4. Distance &amp; Route Estimates</h2>
            <p>
                Commute distance, travel time, and route information are calculated using third-party mapping
                services (OpenStreetMap Nominatim and OSRM). These estimates are provided <strong>"as is"</strong>{" "}
                for planning purposes only and may not reflect real-time traffic, road closures, or actual
                travel conditions. Do not rely on them as the sole basis for time-sensitive decisions.
            </p>

            <h2>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
                <li>Use JobFin for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to other users' accounts or data</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
            </ul>

            <h2>6. Account Termination</h2>
            <p>
                You may stop using JobFin at any time. We reserve the right to suspend or terminate accounts
                that violate these Terms.
            </p>

            <h2>7. Disclaimer of Warranties</h2>
            <p>
                JobFin is provided on an "as is" and "as available" basis, without warranties of any kind,
                whether express or implied. We do not guarantee that the Service will be uninterrupted,
                error-free, or that estimates provided (such as distance or duration) will be fully accurate.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
                To the fullest extent permitted by law, JobFin and its creator shall not be liable for any
                indirect, incidental, or consequential damages arising from your use of the Service, including
                decisions made based on distance or commute estimates.
            </p>

            <h2>9. Changes to These Terms</h2>
            <p>
                We may update these Terms from time to time. Continued use of JobFin after changes are posted
                constitutes acceptance of the updated Terms.
            </p>

            <h2>10. Contact</h2>
            <p>
                Questions about these Terms can be sent to{" "}
                <a href="mailto:rifandiyusuf47@gmail.com">rifandiyusuf47@gmail.com</a>.
            </p>
        </LegalLayout>
    );
};

export default Terms;