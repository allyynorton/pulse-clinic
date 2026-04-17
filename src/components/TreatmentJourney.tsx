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
    subtitle: "The Foundation",
    color: "#5d6b57",
    bgColor: "#f0f4ee",
    borderColor: "#c5d1bf",
    iconBg: "#5d6b57",
    steps: [
      {
        number: 1,
        title: "Comprehensive Intake",
        description:
          "You'll complete a detailed intake form covering your full health history, symptoms, lifestyle, diet, stress levels, and goals. At your first visit (60-90 minutes), we go through everything together - no rushing, no surface-level conversations. You're a whole person, not a chart number.",
      },
      {
        number: 2,
        title: "Advanced Lab Testing",
        description:
          "Based on your symptoms and history, we order advanced functional lab panels that go far beyond standard bloodwork. These tests help us uncover hidden root causes - things like nutrient deficiencies, hormone imbalances, gut dysfunction, and inflammatory markers that often get missed.",
      },
      {
        number: 3,
        title: "Prioritize Your Approach",
        description:
          "With your labs and full clinical picture in hand, we build a personalized roadmap together. We identify which areas need attention first and create a clear, step-by-step plan tailored to your body and your life - not a one-size-fits-all protocol.",
      },
    ],
  },
  {
    name: "Phase 2",
    subtitle: "The Rebuild",
    color: "#b8752f",
    bgColor: "#fdf6ee",
    borderColor: "#e8cfa8",
    iconBg: "#b8752f",
    steps: [
      {
        number: 4,
        title: "Nutrition, Diet & Exercise",
        description:
          "We address the fuel your body runs on. Whether it's an anti-inflammatory protocol, gut-healing nutrition plan, or a sustainable exercise routine, we design a strategy that works with your lifestyle - not against it.",
      },
      {
        number: 5,
        title: "Sleep & Stress Management",
        description:
          "Chronic stress and poor sleep silently undermine every other area of health. We implement evidence-based strategies to restore your circadian rhythm, calm your nervous system, and give your body the recovery time it needs to heal.",
      },
      {
        number: 6,
        title: "Gut Health & Inflammation",
        description:
          "The gut is the gateway to whole-body health. We work to resolve bloating, food sensitivities, microbiome imbalances, and systemic inflammation using targeted interventions - because when the gut heals, everything else follows.",
      },
    ],
  },
  {
    name: "Phase 3",
    subtitle: "The Optimization",
    color: "#8B6914",
    bgColor: "#faf5eb",
    borderColor: "#d4c49a",
    iconBg: "#8B6914",
    steps: [
      {
        number: 7,
        title: "Hormone Rebalancing",
        description:
          "With your foundation solid, we fine-tune hormone health - thyroid, adrenal, sex hormones, and metabolic markers. Treatment may include lifestyle optimization, targeted supplementation, or prescription therapies when clinically appropriate.",
      },
      {
        number: 8,
        title: "Cellular Repair & Health",
        description:
          "We support your body's ability to detoxify and repair at the cellular level. This includes addressing oxidative stress, mitochondrial function, and ensuring your cells have what they need to regenerate and thrive long-term.",
      },
      {
        number: 9,
        title: "Mindset & Emotional Balance",
        description:
          "True wellness includes mental and emotional health. We address the mind-body connection, supporting you in building resilience, emotional regulation, and a positive relationship with your health journey.",
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
          {"Integrative medicine isn't a quick fix - it's a partnership. Here's how we walk with you from your first visit to lasting health."}
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
