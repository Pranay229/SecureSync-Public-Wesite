import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Mic, Bot, FileText } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Recording Prevention System',
    description: 'Advanced protection that blocks all unauthorized screen capture and recording attempts in real-time.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Mic,
    title: 'Private Voice Channels',
    description: 'Zero-recording confidential discussions with military-grade encryption and ephemeral messaging.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Bot,
    title: 'Live AI Transcription',
    description: 'Real-time smart transcriptions with sentiment analysis, action items, and intelligent insights.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: FileText,
    title: 'Document Security',
    description: 'DRM protection with blockchain audit trails for complete document lifecycle traceability.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  }
];

const FeatureHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Security-First Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary features that redefine what's possible in secure enterprise collaboration
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#0043CE] transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#0043CE] mb-2">99.9%</div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#0043CE] mb-2">256-bit</div>
            <div className="text-gray-600">AES Encryption</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#0043CE] mb-2">0</div>
            <div className="text-gray-600">Data Breaches</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#0043CE] mb-2">24/7</div>
            <div className="text-gray-600">Security Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;