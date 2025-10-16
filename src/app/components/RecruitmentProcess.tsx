"use client";
import { useEffect } from "react";

export default function RecruitmentProcess() {
  useEffect(() => {
    // Add joinUsBackground class to body for styling
    document.body.classList.add('joinUsBackground');
    
    let script: HTMLScriptElement | null = null;
    let retryCount = 0;
    const maxRetries = 50; // 5 seconds max wait time
    
    // Wait for jQuery to be available before loading joinUs.js
    const loadJoinUsScript = () => {
      if (typeof window !== 'undefined' && (window as any).$ && (window as any).jQuery) {
        script = document.createElement('script');
        script.src = '/js/vendor/joinUs.js';
        script.async = true;
        
        // Add onload handler to ensure the script runs after DOM is ready
        script.onload = () => {
          console.log('JoinUs script loaded successfully');
          // Manually trigger the recruitment process initialization
          setTimeout(() => {
            // Execute the recruitment process directly
            if ((window as any).$ && document.querySelector(".ring-bg")) {
              console.log('Initializing recruitment process...');
              // Call the createRecruitmentProcess function directly
              (window as any).$(document).ready(() => {
                // Re-create the recruitment process logic inline
                const createRecruitmentProcess = () => {
                  const path = document.querySelector(".ring-bg") as SVGPathElement;
                  if (!path) return;
                  
                  const length = path.getTotalLength();
                  const ring = (window as any).$(path);
                  const noPoints = parseInt((window as any).$(".recruitment-wrap").attr("data-points"), 10);
                  let currentPoint = 0;
                  let lastPoint = 0;
                  const plane = (window as any).$(".plane-wrap");
                  let animating = false;
                  const recruitmentText = (window as any).$('.recruitment-text');

                  function changeTextHeight(a: number) {
                    const newHeight = (window as any).$(".step:nth-child("+(a+1)+")").outerHeight();
                    recruitmentText.css('height', newHeight);
                  }

                  // Clear existing points first
                  (window as any).$(".point-wrap").empty();
                  (window as any).$(".dots").empty();

                  // Generate points
                  for (let i = 0; i < noPoints; i++) {
                    // Add points to DOM
                    (window as any).$(".point-wrap").append(
                      '<div class="point"><div class="point-inner"><div class="point-transform"><span>' +
                      (i + 1) +
                      "</span></div></div></div>"
                    );

                    // Add dots to DOM
                    (window as any).$(".dots").append('<div class="dot"></div>');

                    // Set point position
                    (window as any).$(".point:nth-child(" + (i + 1) + ")")
                      .css({
                        transform: "translateY(-50%) rotate(" + 360 / noPoints * i + "deg)"
                      })
                      .find(".point-inner")
                      .css({
                        transform: "rotate(" + -360 / noPoints * i + "deg)"
                      });
                  }

                  // Add default state
                  (window as any).$(".point:nth-child(1)").addClass("active");
                  (window as any).$(".dot:nth-child(1)").addClass("active");
                  (window as any).$(".step:nth-child(1)").addClass("active");
                  
                  // Ensure center images are properly initialized
                  (window as any).$(".center-img").removeClass("active");
                  (window as any).$(".center-img:nth-child(1)").addClass("active");
                  
                  // Set line animation to 0
                  ring.css({
                    "stroke-dasharray": length,
                    "stroke-dashoffset": length
                  });

                  changeTextHeight(0);

                  // Add animation to line
                  setTimeout(() => {
                    ring.addClass("animate");
                  }, 10);

                  // Initialize center wipe animation
                  setTimeout(() => {
                    const centerWipe = (window as any).$(".center-wipe");
                    if (centerWipe.length) {
                      centerWipe.css({
                        "background-position": "0%"
                      });
                    }
                  }, 100);

                  // Change point function
                  function changePoint(a: number) {
                    animating = true;
                    setTimeout(() => {
                      animating = false;
                    }, 1000);

                    // Change active point
                    (window as any).$(".point.active").removeClass("active");
                    (window as any).$(".point:nth-child(" + (a + 1) + ")").addClass("active");

                    (window as any).$(".dot.active").removeClass("active");
                    (window as any).$(".dot:nth-child(" + (a + 1) + ")").addClass("active");

                    // Change Text
                    const lastText = (window as any).$(".step.active");
                    lastText.addClass("next").removeClass("active");

                    setTimeout(() => {
                      lastText.removeClass("next");
                    }, 800);

                    setTimeout(() => {
                      (window as any).$(".step:nth-child(" + (a + 1) + ")").addClass("active");
                    }, 100);

                    changeTextHeight(a);

                    // Reverse direction of plane
                    if (lastPoint > currentPoint) {
                      plane.addClass("reverse");
                    } else {
                      plane.removeClass("reverse");
                    }

                    // Get plane rotation
                    const rotation = 360 / noPoints * a;

                    // Change position of plane's shadow based on rotation
                    if (rotation > 90 && rotation < 270) {
                      plane.addClass("shadow");
                    } else {
                      plane.removeClass("shadow");
                    }

                    // Work out animation duration
                    let difference = lastPoint - a;
                    if (difference < 0) {
                      difference = difference * -1;
                    }

                    const animationDuration = 1000 + 300 * difference;

                    // Rotate plane
                    plane.css({
                      transition: animationDuration + "ms all cubic-bezier(0.645, 0.045, 0.355, 1)",
                      transform: "translateY(-50%) rotate(" + rotation + "deg)"
                    });

                    // Animate ring
                    ring.css({
                      transition: animationDuration + "ms all cubic-bezier(0.645, 0.045, 0.355, 1)",
                      "stroke-dasharray": length,
                      "stroke-dashoffset": length - length / noPoints * a
                    });

                    // Simple center image transition without wipe animation
                    setTimeout(() => {
                      (window as any).$(".center-img").removeClass("active");
                      (window as any).$(".center-img:nth-child(" + (a + 1) + ")").addClass("active");
                    }, 300);
                  }

                  // Click interaction with point
                  (window as any).$(".recruitment-wrap").on("click", ".point", function(this: HTMLElement) {
                    if (animating) return;
                    if ((window as any).$(this).hasClass("active")) return;
                    lastPoint = currentPoint;
                    currentPoint = (window as any).$(this).index();
                    changePoint(currentPoint);
                  });

                  // Click Interaction with dot
                  (window as any).$(".recruitment-text").on("click", ".dot", function(this: HTMLElement) {
                    if (animating) return;
                    if ((window as any).$(this).hasClass("active")) return;
                    lastPoint = currentPoint;
                    currentPoint = (window as any).$(this).index();
                    changePoint(currentPoint);
                  });

                  // Click interaction with Arrow
                  (window as any).$(".arrow").on("click", function(this: HTMLElement) {
                    if (animating) return;
                    const direction = parseInt((window as any).$(this).attr("data-direction"), 10);
                    lastPoint = currentPoint;
                    currentPoint += direction;

                    if (currentPoint > noPoints - 1) {
                      currentPoint = 0;
                    }
                    if (currentPoint < 0) {
                      currentPoint = noPoints - 1;
                    }
                    changePoint(currentPoint);
                  });

                  (window as any).$(window).on('resize', function() {
                    let resizeTimer: any;
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(() => {
                      changeTextHeight(currentPoint);
                    }, 250);
                  });
                };

                createRecruitmentProcess();
              });
            }
          }, 200);
        };
        
        document.body.appendChild(script);
      } else if (retryCount < maxRetries) {
        retryCount++;
        setTimeout(loadJoinUsScript, 100);
      } else {
        console.error('jQuery failed to load after maximum retries');
      }
    };

    // Start loading after a longer delay to ensure DOM is ready
    setTimeout(loadJoinUsScript, 500);

    return () => {
      // Remove joinUsBackground class when leaving page
      document.body.classList.remove('joinUsBackground');
      
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component only handles side effects
}
