"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ProjectDetail {
  title: string;
  description: string;
  media?: string;
  mediaType?: "image" | "video";
  links?: { title: string; url: string }[];
  technologies?: string[];
}

export default function ContentWrapper({
  children,
  projectDetails,
  onClose,
}: {
  children: React.ReactNode;
  projectDetails?: ProjectDetail;
  onClose?: () => void;
}) {
  const isProjectOpen = !!projectDetails;

  return (
    <div className="flex min-h-screen w-screen">
      <motion.div
        className="flex-1 flex flex-col justify-center mx-auto px-8 md:px-24"
        style={{ maxWidth: "896px" }}
        animate={{
          maxWidth: isProjectOpen ? "1024px" : "896px",
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="relative">
          <AnimatePresence mode="wait">
            {/* Container for both cards */}
            <div className="relative">
              {/* Main Content Card */}
              <motion.div
                key="main-card"
                className="relative border border-fern_green-500/20 rounded-lg backdrop-blur-sm bg-black/20 content-card"
                initial={{ opacity: 0, y: 20, width: "100%" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  width: isProjectOpen ? "50%" : "100%",
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Card Header */}
                <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fern_green-500/50 to-transparent" />

                {/* Content Area */}
                <div className="max-h-[70vh] overflow-y-auto scrollbar-hide">
                  <div className="p-8">{children}</div>
                </div>

                {/* Card Footer */}
                <div className="absolute -bottom-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fern_green-500/50 to-transparent" />
              </motion.div>

              {/* Project Details Card */}
              <AnimatePresence>
                {isProjectOpen && projectDetails && (
                  <motion.div
                    key="project-details"
                    className="absolute top-0 left-[50%] h-full border-l-0 border border-fern_green-500/20 rounded-lg rounded-l-none backdrop-blur-sm bg-black/20 content-card"
                    initial={{ opacity: 0, width: "0%" }}
                    animate={{
                      opacity: 1,
                      width: "50%",
                    }}
                    exit={{ opacity: 0, width: "0%" }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                      opacity: { delay: 0.1 },
                    }}
                  >
                    {/* Card Header */}
                    <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fern_green-500/50 to-transparent" />

                    {/* Close Button */}
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 text-alabaster-400/80 hover:text-fern_green-400 transition-colors duration-300 z-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    {/* Project Content */}
                    <div className="h-full max-h-[70vh] overflow-y-auto scrollbar-hide">
                      <div className="p-8">
                        <div className="space-y-6">
                          <motion.h2
                            className="text-3xl font-doto text-alabaster-400 animate-glow-pulse"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            {projectDetails.title}
                          </motion.h2>

                          {/* Media Section */}
                          {projectDetails.media && (
                            <motion.div
                              className="rounded-lg overflow-hidden border border-fern_green-500/20"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              {projectDetails.mediaType === "video" ? (
                                <video
                                  className="w-full"
                                  controls
                                  autoPlay
                                  loop
                                  muted
                                >
                                  <source
                                    src={projectDetails.media}
                                    type="video/mp4"
                                  />
                                </video>
                              ) : (
                                <img
                                  src={projectDetails.media}
                                  alt={projectDetails.title}
                                  className="w-full h-auto"
                                />
                              )}
                            </motion.div>
                          )}

                          {/* Description */}
                          <motion.p
                            className="text-lg text-alabaster-400/80"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            {projectDetails.description}
                          </motion.p>

                          {/* Technologies */}
                          {projectDetails.technologies && (
                            <motion.div
                              className="flex flex-wrap gap-2"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                            >
                              {projectDetails.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 text-sm text-fern_green-400 border border-fern_green-500/20 rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </motion.div>
                          )}

                          {/* Links */}
                          {projectDetails.links && (
                            <motion.div
                              className="flex flex-wrap gap-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              {projectDetails.links.map((link) => (
                                <a
                                  key={link.title}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-fern_green-400 hover:text-fern_green-300 transition-colors duration-300"
                                >
                                  {link.title} →
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="absolute -bottom-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fern_green-500/50 to-transparent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export type { ProjectDetail };
