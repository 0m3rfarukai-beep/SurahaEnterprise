import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';

const questions = [
  {
    id: 'service',
    question: 'What do you need help with?',
    options: ['Website', 'SEO', 'Marketing', 'IT Support', 'Cyber Security', 'Not sure']
  },
  {
    id: 'size',
    question: 'What is your business size?',
    options: ['Startup', 'Small business', 'Growing business']
  },
  {
    id: 'budget',
    question: 'What is your budget range?',
    options: ['Under £500', '£500-£1000', '£1000+']
  },
  {
    id: 'timeline',
    question: 'How soon do you need help?',
    options: ['ASAP', 'This month', 'Planning ahead']
  }
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelect = (option) => {
    setAnswers({ ...answers, [questions[currentStep].id]: option });
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        calculateResult();
      }
    }, 400); // Small delay for UX so they see it selected
  };

  const calculateResult = () => {
    let recommendation = 'Custom Consultation';
    const budget = answers.budget;
    const service = answers.service;

    if (budget === 'Under £500' && service === 'Website') recommendation = 'Starter Package';
    else if (budget === '£500-£1000') recommendation = 'Growth Package';
    else if (budget === '£1000+') recommendation = 'Premium Package';
    
    setResult(recommendation);
    localStorage.setItem('suraha_quiz_result', JSON.stringify({ answers, recommendation }));
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      <PageHeader
        eyebrow="Service Quiz"
        title="Find the right starting point"
        description="Answer 4 quick questions and we will recommend a sensible next step for your business."
      />

      <div className="container mx-auto px-6 max-w-3xl py-16 md:py-24 -mt-12">

        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-blue-900/5 border border-slate-100 relative min-h-[400px] flex flex-col justify-center overflow-hidden">
          
          {/* Progress Bar */}
          {!result && (
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
              <motion.div 
                className="h-full bg-blue-600"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep) / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col flex-1 justify-center"
              >
                <div className="text-sm font-bold text-blue-600 mb-4 tracking-wider uppercase">Question {currentStep + 1} of {questions.length}</div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">{questions[currentStep].question}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentStep].options.map((option, index) => {
                    const isSelected = answers[questions[currentStep].id] === option;
                    return (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        key={index}
                        onClick={() => handleSelect(option)}
                        className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-md ${
                          isSelected 
                            ? 'border-blue-600 bg-blue-50/80 shadow-blue-600/10' 
                            : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`text-lg font-semibold ${isSelected ? 'text-blue-700' : 'text-slate-700'}`}>{option}</span>
                        {isSelected && <CheckCircle2 className="text-blue-600" size={24} />}
                      </motion.button>
                    )
                  })}
                </div>
                
                {currentStep > 0 && (
                  <button 
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="mt-8 flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors w-fit font-semibold"
                  >
                    <ArrowLeft size={16} /> Previous Question
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center flex flex-col items-center flex-1 justify-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center text-blue-600 mb-8 shadow-inner border border-white">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                    <CheckCircle2 size={48} strokeWidth={2.5} />
                  </motion.div>
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Your Perfect Match</h2>
                <p className="text-xl text-slate-700 mb-8 max-w-lg">Based on your business size and goals, we strongly recommend our:</p>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                  className="bg-slate-950 text-white p-10 rounded-[2rem] w-full max-w-md shadow-2xl shadow-blue-900/30 mb-10 relative overflow-hidden border border-slate-800"
                >
                   <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/40 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2" />
                   <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-600/20 blur-[50px] rounded-full translate-y-1/2 -translate-x-1/2" />
                   <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-3 relative z-10">{result}</h3>
                   <p className="text-slate-300 text-lg relative z-10 font-medium">Tailored exactly for your goals and budget.</p>
                </motion.div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md"
                >
                  <Link to="/contact" className="w-full">
                    <Button className="h-14 w-full text-lg font-bold rounded-xl shadow-xl shadow-blue-600/20 hover:-translate-y-1 transition-transform">
                      Send My Recommendation <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <Button variant="outline" onClick={resetQuiz} className="h-14 w-full sm:w-auto px-8 text-lg font-bold rounded-xl border-2 hover:bg-slate-50">
                    Retake
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
