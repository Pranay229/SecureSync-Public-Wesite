import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, Brain, Database, Eye, ArrowRight } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'Military-Grade Encryption',
    description: 'End-to-end AES-256 encryption with perfect forward secrecy and quantum-resistant algorithms.',
    details: ['Zero-knowledge architecture', 'Hardware security modules', 'Key rotation protocols']
  },
  {
    icon: Brain,
    title: 'AI-Powered Defense',
    description: 'Machine learning algorithms that detect and prevent security threats in real-time.',
    details: ['Behavioral anomaly detection', 'Threat pattern recognition', 'Automated response systems']
  },
  {
    icon: Database,
    title: 'Blockchain Audit Trail',
    description: 'Immutable audit logs stored on distributed ledger for complete transparency and compliance.',
    details: ['Tamper-proof logging', 'Regulatory compliance', 'Forensic investigation support']
  },
  {
    icon: Eye,
    title: 'Privacy by Design',
    description: 'Built from the ground up with privacy principles embedded in every component and process.',
    details: ['Data minimization', 'Purpose limitation', 'User consent management']
  }
];

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0043CE] to-[#0078FF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Security Beyond Encryption
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            SecureSync Pro combines multiple layers of protection to create the world's most secure 
                                       communication ecosystem.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-blue-100">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Compliance Badges
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8">Trusted by Regulators Worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl font-bold mb-2">SOC 2</div>
              <div className="text-sm text-blue-100">Type II Certified</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl font-bold mb-2">ISO 27001</div>
              <div className="text-sm text-blue-100">Certified</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl font-bold mb-2">GDPR</div>
              <div className="text-sm text-blue-100">Compliant</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl font-bold mb-2">HIPAA</div>
              <div className="text-sm text-blue-100">Ready</div>
            </div>
          </div>
        </div> */}

        {/* Tech Stack */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-6">Built with Enterprise-Grade Technology</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-lg font-semibold mb-2">Frontend</div>
              <div className="text-sm text-blue-100">React, TypeScript, Next.js</div>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2">Backend</div>
              <div className="text-sm text-blue-100">Node.js, GraphQL, Microservices</div>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2">Database</div>
              <div className="text-sm text-blue-100">MongoDB, Redis, Blockchain</div>
            </div>
            <div>
              <div className="text-lg font-semibold mb-2">AI/ML</div>
              <div className="text-sm text-blue-100">TensorFlow, PyTorch, OpenAI</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-white text-[#0043CE] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            View Security Documentation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;