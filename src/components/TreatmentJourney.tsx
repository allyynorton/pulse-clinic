"use client";

import { useState } from "react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
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
        icon: "clipboard",
        description:
          "You will complete a detailed intake form covering your full health history, symptoms, lifestyle, diet, stress levels, goals, etc. At your first visit we go through everything together (may take 60-90 minutes). There is no rushing, no quick conversations. We want to know you as a whole person.",
      },
      {
        number: 2,
        title: "Advanced Lab Testing",
        icon: "microscope",
        description:
          "Based on your symptoms and history, we will order appropriate advanced functional lab panels that go far beyond standard bloodwork. These tests help us uncover root-causes such as nutrient deficiencies, hormone imbalances, gut dysfunction, and inflammatory markers that often get missed.",
      },
      {
        number: 3,
        title: "Prioritize Your Approach",
        icon: "target",
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
        icon: "leaf",
        description:
          "We address how you fuel your body. Whether it is an anti-inflammatory protocol, gut-healing nutrition plan, or sustainable exercise routine, we design a strategy that works with your lifestyle and abilities.",
      },
      {
        number: 5,
        title: "Sleep & Stress Management",
        icon: "moon",
        description:
          "Chronic stress and poor sleep can be silent killers. They can truly undermine every other area of health without even knowing it. We implement strategies to allow your body to achieve optimal recovery time.",
      },
      {
        number: 6,
        title: "Gut Health & Inflammation",
        icon: "heart",
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
        icon: "scale",
        description:
          "After we get a solid foundation, we fine-tune hormone health including thyroid, metabolic markers, and sex hormones. Treatment may include lifestyle optimization, targeted supplementation, or prescription therapies only if clinically appropriate.",
      },
      {
        number: 8,
        title: "Cellular Repair & Health",
        icon: "sparkle",
        description:
          "This supports your body's ability to repair at the cellular level. Including addressing stress on your cells and mitochondria (the powerhouse of your cells). This ensures your cells have what they need to thrive long-term.",
      },
      {
        number: 9,
        title: "Mindset & Emotional Balance",
        icon: "brain",
        description:
          "True wellness includes mental and emotional health. This is where changes are solidified. We are here to walk with you through your health journey so that you have a positive relationship with your body and health.",
      },
    ],
  },
];

function StepIcon({ name, color }: { name: string; color: string }) {
  switch (name) {
    case "clipboard":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      );
    case "microscope":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h8" /><path d="M3 22h18" /><path d="M14 22a7 7 0 1 0 0-14h-1" />
          <path d="M9 14h2" /><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
        </svg>
      );
    case "target":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "leaf":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case "moon":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      );
    case "heart":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case "scale":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="M7 21h10" /><path d="M12 3v18" />
        </svg>
      );
    case "sparkle":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
        </svg>
      );
    case "brain":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
          <path d="M12 18v4" />
        </svg>
      );
    default:
      return null;
  }
}

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
                    {/* Step Icon Circle */}
                    <div
                      className="flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        width: "44px",
                        height: "44px",
                        backgroundColor: isActive
                          ? phase.iconBg
                          : `${phase.iconBg}99`,
                        transform: isActive ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      <StepIcon name={step.icon} color="#ffffff" />
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
