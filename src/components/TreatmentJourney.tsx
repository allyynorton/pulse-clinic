"use client";

import { useState } from "react";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface Phase {
  name: string;
  subtitle: string;
  color: string;
  bgColor: string;
  borderColor: string;
  iconBg: string;
  steps: Step[];
}

const phases: Phase[] = [
  {
    name: "Phase 1",
    subtitle: "Cleanse",
    color: "#5d6b57",
    bgColor: "#f0f4ee",
    borderColor: "#c5d1bf",
    iconBg: "#5d6b57",
    steps: [
      {
        number: 1,
        title: "Comprehensive Intake",
        description:
          "You will complete a detailed intake form covering your full health history, symptoms, lifestyle, diet, stress levels, goals, etc. At your first visit we go through everything together (may take 60-90 minutes). There is no rushing, no quick conversations. We want to know you as a whole person.",
      },
      {
        number: 2,
        title: "Advanced Lab Testing",
        description:
          "Based on your symptoms and history, we will order appropriate advanced functional lab panels that go far beyond standard bloodwork. These tests help us uncover root-causes such as nutrient deficiencies, hormone imbalances, gut dysfunction, and inflammatory markers that often get missed.",
      },
      {
        number: 3,
        title: "Prioritize Your Approach",
        description:
          "Once we have the full clinical picture in hand, we build a personalized roadmap together. We identify which areas need attention first and create an achievable, sustainable, step-by-step plan for healing. Your life deserves more than a one-size-fits-all approach.",
      },
    ],
  },
  {
    name: "Phase 2",
    subtitle: "Center",
    color: "#b8752f",
    bgColor: "#fdf6ee",
    borderColor: "#e8cfa8",
    iconBg: "#b8752f",
    steps: [
      {
        number: 4,
        title: "Nutrition, Diet & Exercise",
        description:
          "We address how you fuel your body. Whether it is an anti-inflammatory protocol, gut-healing nutrition plan, or sustainable exercise routine, we design a strategy that works with your lifestyle and abilities.",
      },
      {
        number: 5,
        title: "Sleep & Stress Management",
        description:
          "Chronic stress and poor sleep can be silent killers. They can truly undermine every other area of health without even knowing it. We implement strategies to allow your body to achieve optimal recovery time.",
      },
      {
        number: 6,
        title: "Gut Health & Inflammation",
        description:
          "The gut is the gateway to whole-body health. We work to improve bloating, food sensitivities, indigestion, and inflammation because when the gut heals, everything else follows.",
      },
    ],
  },
  {
    name: "Phase 3",
    subtitle: "Cultivate",
    color: "#8B6914",
    bgColor: "#faf5eb",
    borderColor: "#d4c49a",
    iconBg: "#8B6914",
    steps: [
      {
        number: 7,
        title: "Hormone Rebalancing",
        description:
          "After we get a solid foundation, we fine-tune hormone health including thyroid, metabolic markers, and sex hormones. Treatment may include lifestyle optimization, targeted supplementation, or prescription therapies only if clinically appropriate.",
      },
      {
        number: 8,
        title: "Cellular Repair & Health",
        description:
          "This supports your body's ability to repair at the cellular level. Including addressing stress on your cells and mitochondria (the powerhouse of your cells). This ensures your cells have what they need to thrive long-term.",
      },
      {
        number: 9,
        title: "Mindset & Emotional Balance",
        description:
          "True wellness includes mental and emotional health. This is where changes are solidified. We are here to walk with you through your health journey so that you have a positive relationship with your body and health.",
      },
    ],
  },
];

export default function TreatmentJourney() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-10">
        <h3
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{ color: "#b8752f" }}
        >
          Your Wellness Journey
        </h3>
        <p
          className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#5d6b57" }}
        >
          {"At Pulse we don't just treat your symptoms. We take a deep dive into you as a whole person to find the root cause and help you heal from within. Here is what your journey with Pulse will look like."}
        </p>
      </div>

      {/* Phase Tabs */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center">
        {phases.map((phase, index) => (
          <button
            key={index}
            onClick={() => {
              setActivePhase(index);
              setActiveStep(null);
            }}
            className="relative px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 border-2"
            style={{
              backgroundColor:
                activePhase === index ? phase.iconBg : "transparent",
              color: activePhase === index ? "#ffffff" : phase.color,
              borderColor: activePhase === index ? phase.iconBg : phase.borderColor,
              transform: activePhase === index ? "scale(1.02)" : "scale(1)",
            }}
          >
            <span className="block text-xs opacity-75 mb-0.5 font-normal">
              {phase.name}
            </span>
            {phase.subtitle}
          </button>
        ))}
      </div>

      {/* Active Phase Content */}
      <div
        className="rounded-2xl p-6 sm:p-8 transition-all duration-500"
        style={{
          backgroundColor: phases[activePhase].bgColor,
          borderLeft: `4px solid ${phases[activePhase].iconBg}`,
        }}
      >
        {/* Steps */}
        <div className="space-y-4">
          {phases[activePhase].steps.map((step) => {
            const isActive = activeStep === step.number;
            const phase = phases[activePhase];

            return (
              <div
                key={step.number}
                className="group cursor-pointer"
                onClick={() =>
                  setActiveStep(isActive ? null : step.number)
                }
              >
                <div
                  className="rounded-xl p-5 transition-all duration-300 border"
                  style={{
                    backgroundColor: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                    borderColor: isActive ? phase.iconBg : "transparent",
                    boxShadow: isActive
                      ? "0 4px 20px rgba(0,0,0,0.08)"
                      : "none",
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Step Number Circle */}
                    <div
                      className="flex-shrink-0 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300"
                      style={{
                        width: "44px",
                        height: "44px",
                        fontSize: "18px",
                        lineHeight: "1",
                        backgroundColor: isActive
                          ? phase.iconBg
                          : `${phase.iconBg}99`,
                        transform: isActive ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <h4
                          className="text-lg font-semibold transition-colors duration-300"
                          style={{ color: isActive ? phase.iconBg : "#374151" }}
                        >
                          {step.title}
                        </h4>
                        <svg
                          className="w-5 h-5 ml-auto flex-shrink-0 transition-transform duration-300"
                          style={{
                            color: phase.iconBg,
                            transform: isActive
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {/* Expanded Description */}
                      <div
                        className="overflow-hidden transition-all duration-500"
                        style={{
                          maxHeight: isActive ? "300px" : "0",
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? "12px" : "0",
                        }}
                      >
                        <p
                          className="text-base leading-relaxed"
                          style={{ color: "#5d6b57" }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ongoing Care Footer */}
      <div
        className="mt-8 rounded-2xl p-6 sm:p-8 text-center border-2 border-dashed"
        style={{ borderColor: "#c5d1bf", backgroundColor: "#f8faf7" }}
      >
        <h4
          className="text-xl font-semibold mb-2"
          style={{ color: "#b8752f" }}
        >
          Ongoing Partnership
        </h4>
        <p
          className="text-base max-w-xl mx-auto leading-relaxed"
          style={{ color: "#5d6b57" }}
        >
          {"Once you're optimized, we don't disappear. You'll return every 6-12 months for follow-up labs and check-ins to ensure you're maintaining balance. Every appointment is in-depth - because your health story is always evolving, and we're here for the whole chapter."}
        </p>
      </div>

      {/* Progress indicator */}
      <div className="mt-6 flex justify-center items-center gap-2">
        <span className="text-xs font-medium" style={{ color: "#8a9584" }}>
          Click each step to learn more
        </span>
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  activePhase === i
                    ? phases[i].iconBg
                    : "#d1d5db",
                transform: activePhase === i ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
