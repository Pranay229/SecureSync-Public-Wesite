import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, MessageCircle, Workflow, BarChart3, Shield, Code, ArrowRight } from 'lucide-react';

const products = [
  {
    icon: Video,
    name: 'SecureSync Meet',
    description: 'Encrypted meetings and calls with advanced recording prevention and real-time security monitoring.',
    features: ['HD Video & Audio', 'Recording Prevention', 'Screen Share Protection', 'Meeting Analytics'],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: MessageCircle,
    name: 'SecureSync Connect',
    description: 'Advanced team and cross-org messaging with ephemeral channels and compliance tracking.',
    features: ['Encrypted Messaging', 'Private Channels', 'File Sharing DRM', 'Compliance Logs'],
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Workflow,
    name: 'SecureSync Flow',
    description: 'Project and workflow management with secure document collaboration and audit trails.',
    features: ['Project Management', 'Secure Collaboration', 'Workflow Automation', 'Task Analytics'],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: BarChart3,
    name: 'SecureSync Insights',
    description: 'AI analytics, transcription, and knowledge hub with intelligent data classification.',
    features: ['AI Transcription', 'Sentiment Analysis', 'Knowledge Base', 'Smart Search'],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Shield,
    name: 'SecureSync Shield',
    description: 'Enterprise-grade security and document control with blockchain audit and DLP.',
    features: ['Document DRM', 'Blockchain Audit', 'Access Control', 'Threat Detection'],
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Code,
    name: 'SecureSync Dev',
    description: 'Developer collaboration and repo integration with secure code review and deployment.',
    features: ['Code Collaboration', 'Secure Reviews', 'CI/CD Integration', 'Vulnerability Scanning'],
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

const ProductSuite = () => {
  return (
    <section id="products" className="py-20 bg-[#F5F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Security Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Six integrated modules that work seamlessly together to provide comprehensive security across your entire collaboration workflow
          </p>
          <Button variant="outline" className="!bg-transparent !hover:bg-transparent border-[#0043CE] text-[#0043CE] hover:text-[#0078FF]">
            Explore the Suite
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-gray-200"
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 ${product.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${product.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#0043CE] transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#0043CE] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 text-[#0043CE] hover:text-[#0078FF] hover:bg-[#0043CE]/5"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Integration Note */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
            <p className="text-gray-600 mb-6">
              All SecureSync Pro modules share the same security foundation, user management, and audit system. 
              Deploy individually or as a complete suite with unified SSO and centralized administration.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="bg-gray-100 px-3 py-1 rounded-full">Single Sign-On</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Unified Audit Logs</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Centralized Admin</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Cross-Module Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;