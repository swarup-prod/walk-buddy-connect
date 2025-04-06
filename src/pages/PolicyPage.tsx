
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const PolicyPage: React.FC = () => {
  const { policyType } = useParams<{ policyType?: string }>();
  const navigate = useNavigate();
  
  const policyTitle = policyType === 'privacy' 
    ? 'Privacy Policy' 
    : policyType === 'terms' 
      ? 'Terms of Service' 
      : 'Community Guidelines';

  const renderContent = () => {
    switch (policyType) {
      case 'privacy':
        return <PrivacyPolicyContent />;
      case 'terms':
        return <TermsOfServiceContent />;
      default:
        return <CommunityGuidelinesContent />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 border-b sticky top-0 bg-background z-10">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft />
          </Button>
          <h1 className="text-xl font-bold">{policyTitle}</h1>
        </div>
      </div>
      
      <div className="p-4 max-w-2xl mx-auto">
        {renderContent()}
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Last updated: April 6, 2024
          </p>
          <Button variant="outline" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicyContent: React.FC = () => (
  <div className="prose prose-sm max-w-none">
    <p className="text-muted-foreground mb-4">
      WalkBuddy Connect is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">1. Information We Collect</h2>
    <p>We collect the following types of information:</p>
    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li>Personal information (name, email, phone number)</li>
      <li>Profile information (age, gender, interests)</li>
      <li>Location data (to find nearby walking buddies)</li>
      <li>Device information</li>
      <li>Usage information</li>
    </ul>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
    <p>We use your information to:</p>
    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li>Provide and improve our services</li>
      <li>Match you with compatible walking buddies</li>
      <li>Send notifications about walks and messages</li>
      <li>Ensure safety and security</li>
      <li>Comply with legal obligations</li>
    </ul>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">3. Data Retention</h2>
    <p>
      We implement the following data minimization practices:
    </p>
    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li>Chat messages are automatically deleted after 7 days</li>
      <li>Location data is only stored temporarily</li>
      <li>You can request deletion of your account at any time</li>
    </ul>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">4. Data Protection and Security</h2>
    <p>
      We implement appropriate security measures to protect your personal information. 
      These include encryption, secure data storage, and regular security audits.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">5. Your Rights</h2>
    <p>You have the right to:</p>
    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li>Access your personal data</li>
      <li>Correct inaccurate data</li>
      <li>Delete your data</li>
      <li>Restrict processing</li>
      <li>Data portability</li>
      <li>Withdraw consent</li>
    </ul>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
    <p>
      We may update this Privacy Policy periodically. We will notify you of any significant changes.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">7. Contact Us</h2>
    <p>
      If you have questions about this Privacy Policy, please contact us at privacy@walkbuddy.com
    </p>
  </div>
);

const TermsOfServiceContent: React.FC = () => (
  <div className="prose prose-sm max-w-none">
    <p className="text-muted-foreground mb-4">
      These Terms of Service govern your use of the WalkBuddy Connect application. By using our app, you agree to these terms.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">1. Account Registration</h2>
    <p>
      To use WalkBuddy Connect, you must create an account with accurate information. You are responsible for maintaining the confidentiality of your account.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">2. User Conduct</h2>
    <p>You agree not to:</p>
    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li>Use the app for illegal purposes</li>
      <li>Harass or harm other users</li>
      <li>Share inappropriate or offensive content</li>
      <li>Attempt to access other users' accounts</li>
      <li>Use the app to organize activities other than walking</li>
      <li>Use automated systems to access the app</li>
    </ul>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">3. Safety Guidelines</h2>
    <p>For your safety, we recommend:</p>
    <ul className="list-disc pl-5 space-y-1 mb-4">
      <li>Meeting your walking buddy in public places</li>
      <li>Informing someone about your walking plans</li>
      <li>Using the in-app reporting features if needed</li>
      <li>Avoiding sharing personal financial information</li>
    </ul>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">4. Intellectual Property</h2>
    <p>
      The app, including its content and features, is owned by WalkBuddy Connect and is protected by copyright, trademark, and other laws.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">5. Disclaimer of Warranties</h2>
    <p>
      The app is provided "as is" without warranties of any kind, whether express or implied.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
    <p>
      WalkBuddy Connect shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">7. Termination</h2>
    <p>
      We may terminate or suspend your account at any time for violations of these Terms.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">8. Governing Law</h2>
    <p>
      These Terms shall be governed by the laws of India.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">9. Changes to Terms</h2>
    <p>
      We may revise these Terms at any time. By continuing to use the app after changes become effective, you agree to the revised Terms.
    </p>
  </div>
);

const CommunityGuidelinesContent: React.FC = () => (
  <div className="prose prose-sm max-w-none">
    <p className="text-muted-foreground mb-4">
      At WalkBuddy Connect, we're building a safe and respectful community. These guidelines help ensure a positive experience for everyone.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">1. Be Respectful</h2>
    <p>
      Treat all users with respect and kindness. Harassment, discrimination, or bullying of any kind is not tolerated.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">2. Authenticity</h2>
    <p>
      Use your real identity and provide accurate information in your profile. Fake profiles or impersonation is prohibited.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">3. Walking Focus</h2>
    <p>
      This platform is designed for finding walking companions. It should not be used for dating, commercial activities, or other unrelated purposes.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">4. Appropriate Communication</h2>
    <p>
      Keep all messages and interactions appropriate. Offensive language, sexual content, or solicitation is prohibited.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">5. Privacy Respect</h2>
    <p>
      Respect other users' privacy. Do not share their personal information without consent.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">6. Safety First</h2>
    <p>
      Prioritize your safety. Meet in public places, inform someone about your plans, and use the safety features in the app.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">7. Report Violations</h2>
    <p>
      If you encounter any violations of these guidelines, please report them immediately through the app.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">8. No Illegal Activities</h2>
    <p>
      Do not use WalkBuddy Connect for illegal activities or to promote harmful behavior.
    </p>
    
    <h2 className="text-lg font-semibold mt-6 mb-2">9. Consequences</h2>
    <p>
      Violations of these guidelines may result in warnings, temporary suspension, or permanent removal from WalkBuddy Connect.
    </p>
  </div>
);

export default PolicyPage;
