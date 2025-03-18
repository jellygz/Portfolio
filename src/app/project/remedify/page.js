"use client";

import React from 'react'
import ProjectOverview from '@/app/components/ProjectOverview'
import styles from './remedify.module.css'
import Image from 'next/image'

export default function Remedify() {
  // Example values, replace these with dynamic data if necessary
  const title = 'In a world of complexity, can simplicity save us   ?'
  const content = 'Remedify is a medication management app designed to simplify health rountines and improve accessibility for diverse users. This project aimed to address usability challenges and enhance inclusivity, ensuring the app supports effective medication tracking for everyone. We chose this focus because medication managemnet is vital to well-being, yet many apps fail to prioritize accessibility, leaving gaps in user needs.'
  const role = 'Front-end Developer'
  const duration = '3 months'
  const time = 'June - August 2024'
  const projecttype = 'Healthcare App'
  const tools = 'React, Next.js, Node.js'

  return (
    <main>


        {/* Section 1 */}
      <section className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>
                <h2 className={styles.firsttitle}>Your Health</h2>
                <h2 className={styles.secondtitle}>Our <span className={styles.highlight}>Priority</span></h2>
            </div>
            <div className={styles.detailContainer}>
                <h3 className={styles.casestudy}>Case Study</h3>
                <p className={styles.duration}>8 min. read</p>
            </div>
        </div>
        <Image className={styles.image} src="/remedify/Mockup.png" alt="herobanner" width={600} height={600} />
    </section>


    {/* Section 2 */}
      <section className={styles.lightGreyContainer} style={{display: 'flex', flexDirection: 'row'}}>

    <div style={{flex: '5'}}>
        <div className={styles.subHeadingContainer} style={{paddingRight: '800px'}}>
          <h5>Mobile App Design</h5>
          <span> | </span>
          <p>Overview</p>
        </div>
        <div className={styles.titleContainer}>
          <h2 style={{ color: 'black' }}>{title}</h2>
          <p style={{color: 'grey'}}>{content}</p>
        </div>
        <div className={styles.detailContainer}>
          <div>
            <p className={styles.detailTitle}>Role</p>
            <p className={styles.detailContent}>{role}</p>
          </div>
          <div>
            <p className={styles.detailTitle}>Duration</p>
            <div>
              <p className={styles.detailContent}>{duration}</p>
              <p className={styles.detailContent}>{time}</p>
            </div>
          </div>
          <div>
            <p className={styles.detailTitle}>Project Type</p>
            <p className={styles.detailContent}>{projecttype}</p>
          </div>
          <div>
            <p className={styles.detailTitle}>Tools</p>
            <p className={styles.detailContent}>{tools}</p>
          </div>
        </div>
        </div>

        <div style={{flex: '2'}}>
            <Image className={styles.image}
            src="/remedify/Drugs_Medicine.png" 
            alt="medicine woman" 
            width={600} 
            height={600} 
            style={{paddingLeft: '30px',
            maxWidth: "70%",
            height: "auto",
            
            }}
            />
        </div>
        </section>


        {/* Section 3 */}
        <section className={styles.container} style={{alignItems: 'center'}}>

                <h3 style={{color: 'lightgrey', fontSize: '80px', paddingTop: '80px'}}>
                EMPHATHIZE
                </h3>


                <p style={{color: 'lightgrey', fontSize: '20px'}}>
                    01 Problem Statement
                </p>


            <h2 style={{color: 'white', fontSize: '30px', textAlign: 'center'}}>
            Medications shouldn’t be a hurdle to better health.
            </h2>

            <div style={{padding: "3vw 16vw", textAlign: 'center'}}>
                <p style={{color: 'white', fontsize: ' 15px'}}>
                Occasional medication use often be managed with simple alarms; however managing multiple daily medications are significantly more complex and often requires caregiver support. This challenge is particularly difficult for individuals experiencing cognitive decline or health conditions that impact memory and overall functioning.
                </p>
            </div>

                <p style={{color: 'lightgrey', fontSize: '20px'}}>
                02 Secondary Research
                </p>

            <h2 style={{color: 'white', fontSize: '30px', textAlign: 'center'}}>
            Half of us are unknowingly sabotaging our own health.
            </h2>

            <div style={{padding: "3vw 16vw", textAlign: 'center'}}>
            <p style={{color: 'white', fontsize: ' 15px', paddingBottom:'90px'}}>
            Our research reveals that 50% of individuals underuse medications, with 60% misunderstanding instructions and 49.6% forgetting doses. While occasional medication use can be managed with alarms, managing multiple daily medications is far more complex, often requiring caregiver support. These statistics highlight the urgent need for a solution to improve medication management for those with intricate regimens.
            </p>
            </div>
        </section>


        {/* Section 4 */}
        <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{padding: "25vw 10vw"}}>
            <h2 style={{fontSize: '50px'}}>HOW CAN <span className={styles.highlight}>REMEDIFY</span> HELP?</h2>
            </div>
        </section>


        {/* Section 5 */}
        <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

        {/* First double div */}
        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <div style={{flex: '1', padding: '10vw 10vw'}}>
                <h4 style={{color: 'green'}}>Main Home Screen Feature</h4>
                <h3 style={{fontSize: '40px', color:'grey', paddingTop: '40px'}}>One-Tap</h3>
                <h3 style={{fontSize: '40px', color:'grey'}}>Log</h3>
                <p style={{paddingTop: '30px'}}>
                One-Tap Medication Logging allows users to log doses instantly from the home screen’s main CTA. This simple, intuitive feature streamlines the tracking process, reducing manual input and minimizing errors for a quick, accurate, and hassle-free experience.
                </p>

                <Image className={styles.image}
                src="/remedify/Metoprolol.png" 
                alt="25mg" 
                width={600} 
                height={600} 
                style={{
                    maxWidth: "98%",
                    height: "auto",
                    paddingLeft: '80px',
                    paddingTop: '60px'
                }}
                />

                <Image className={styles.image}
                src="/remedify/George.png" 
                alt="George" 
                width={600} 
                height={600} 
                style={{
                    maxWidth: "98%",
                    height: "auto",
                    paddingRight: '80px',
                    paddingTop: '60px'
                }}
                />
            </div>
            <div style={{ flex: 1, padding: "10vw 3vw", position: "relative" }}>
            <Image
                className={styles.image}
                src="/remedify/homescreen1.png"
                alt="homescreen"
                fill  // Makes the image fill the parent div
                style={{
                    objectFit: "cover", // Ensures the image fills the div while maintaining aspect ratio
                }}
            />
            </div>

        </div>

        {/* Second double div */}
        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
        <div style={{ flex: 1, padding: "10vw 3vw", position: "relative" }}>
            <Image
                className={styles.image}
                src="/remedify/medlib_copy.png"
                alt="medlib"
                fill  // Makes the image fill the parent div
                style={{
                    objectFit: "cover", // Ensures the image fills the div while maintaining aspect ratio
                }}
            />
        </div>
            <div style={{flex: '1', padding: '10vw 10vw'}}>
            <h4 style={{color: 'green'}}>Library Feature</h4>
                <h3 style={{fontSize: '40px', color:'grey', paddingTop: '40px'}}>Medication</h3>
                <h3 style={{fontSize: '40px', color:'grey'}}>Library</h3>
                <p style={{paddingTop: '30px'}}>
                Keep track of all your medications in one organized and accessible library. Easily review essential details like dosage, frequency, duration, and active ingredients at a glance. Get reliable, easy-to-understand information to stay informed and in control of your health.
                </p>

                <Image className={styles.image}
                src="/remedify/Insulin.png" 
                alt="George" 
                width={600} 
                height={600} 
                style={{
                    maxWidth: "98%",
                    height: "auto",
                    paddingRight: '80px',
                    paddingTop: '60px'
                }}
                />
            </div>
        </div>

        {/* Third double div */}
        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <div style={{flex: '1', padding: '10vw 10vw'}}>
            <h4 style={{color: 'green'}}>AI-Powered Scanning Feature</h4>
                <h3 style={{fontSize: '40px', color:'grey', paddingTop: '40px'}}>Label</h3>
                <h3 style={{fontSize: '40px', color:'grey'}}>Scanning</h3>
                <p style={{paddingTop: '30px'}}>
                Effortlessly scan your medication labels, and our smart AI-powered system will automatically set up reminders for you—no manual input required. Minimize hassle, reduce missed doses, and simplify your health routine with ease!
            </p>

            <Image className={styles.image}
            src="/remedify/Nembutal.png" 
            alt="25mg" 
            width={600} 
            height={600} 
            style={{
                maxWidth: "98%",
                height: "auto",
                paddingLeft: '80px',
                paddingTop: '60px'
            }}
            />

            <Image className={styles.image}
            src="/remedify/photo_again.png" 
            alt="George" 
            width={600} 
            height={600} 
            style={{
                maxWidth: "98%",
                height: "auto",
                paddingRight: '80px',
                paddingTop: '60px'
            }}
            />
            </div>

            <div style={{ flex: 1, padding: "10vw 6vw", position: "relative" }}>
            <Image
                className={styles.image}
                src="/remedify/scanning_1.png"
                alt="scanning"
                fill  // Makes the image fill the parent div
                style={{
                    objectFit: "cover", // Ensures the image fills the div while maintaining aspect ratio
                    paddingRight: '10px',
                }}
            />
            </div>
        </div>
    </section>

        {/* Section 6 */}
    <section className={styles.lightGreyContainer} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '100px'}}>
        <h3 style={{color: 'lightgrey', fontSize: '80px', paddingTop: '80px'}}>
            Define
        </h3>

        <p style={{color: 'lightgrey', fontSize: '20px'}}>
        01 User Research Findings (In-Depth)
        </p>

        <h2 style={{color: 'black', fontSize: '30px', textAlign: 'center'}}>
        We interviewed users, caregivers, and experts.
        </h2>

        <div style={{padding: "2vw 16vw", textAlign: 'center'}}>
            <p style={{color: 'black', fontsize: ' 15px'}}>
            We conducted in-depth surveys, interviews, and secondary research to better understand the struggles of individuals managing medication and their caregivers. Our research revealed key pain points, user needs, and insights that guided our solution.
            </p>
        </div>

        {/* flex 5-2 */}
        <div style={{display: 'flex', flexDirection: 'row', gap: '40px'}}>
                <div style={{flex: '5'}}>
                    <h4 style={{fontSize: '35px', paddingBottom: '30px', paddingTop: '40px'}}>
                        💬  Real Voices: Challenges & Needs in Medication Management
                    </h4>
                    <p>
                    Managing medications isn’t just about taking pills—it’s about remembering, tracking, and ensuring adherence, especially for those with complex routines or caregiving responsibilities. Through our research, we conducted interviews with patients and caregivers to understand their struggles. Their responses highlight the pain points, concerns, and ideal solutions that shaped our app’s design.
                    </p>
                    
                    <Image
                        className={styles.image}
                        src="/remedify/Patient1.png" 
                        alt="patient1" 
                        width={600} 
                        height={600} 
                        style={{
                            maxWidth: "50%",
                            height: "auto",
                            paddingLeft: "80px",
                            paddingTop: "60px",
                            display: "block",  // Ensures proper alignment
                            marginLeft: "auto" // Pushes the image to the right
                        }}
                    />

                    <p style={{paddingTop: '40px'}}>
                    (Referenced from Urgent Care Nurse: "It would be beneficial to have easy access to GP and pharmacists for refills.")
                    </p>

                </div>
                <div style={{ 
                flex: '2', 
                position: 'relative', 
                padding: '10vw 10vw',
                width: '100%', // Ensures the div stretches properly
                height: 'auto', // Allows flexibility in height
                }}>
                <Image
                    className={styles.image}
                    src="/remedify/BiggestChallenge.png"
                    alt="Challenge"
                    fill
                    style={{
                        objectFit: "contain", // Prevents clipping, scales image to fit inside div
                    }}/>
                </div>
            </div>
    </section>

    {/* Section 7 */}
    <section className={styles.lightGreyContainer} 
    style={{
        display: 'flex', 
        flexDirection: 'column', 
        padding: '20px',
        paddingLeft: '6vw',
    }}>
    <div style={{
        alignSelf: 'flex-start' // Pushes the div to the left
    }}>
        <h3 style={{color: 'lightgrey', fontSize: '20px'}}>
            02.1 Mapping the Experience: User Flow
        </h3>

        <p style={{paddingTop: '30px'}}>
        To ensure a seamless and intuitive experience, we mapped out the User Flow, outlining how users navigate the app to manage their medications. This helps us visualize the key steps users take—from setting up reminders to tracking adherence—ensuring efficiency and ease of use.
        </p>
    </div>

    <div style={{
    marginLeft: 'auto', // Pushes the div to the right
    display: 'flex', // Ensures flex properties apply
    justifyContent: 'flex-end', // Aligns content to the right
}}>
    <Image
        className={styles.image}
        src="/remedify/userflow.png"
        alt="User Flow"
        width={600}
        height={600}
        style={{
            maxWidth: "80%",
            height: "auto",
            paddingTop: '30px',
            paddingRight: '30px'
        }}/>
        </div>
        </section>

    {/* Section 8 */}
    <section className={styles.lightGreyContainer} style={{alignItems: 'center'}}>

        <p style={{color: 'lightgrey', fontSize: '20px'}}>
        03 Design Opportunity Statement
        </p>

        <h2 style={{color: 'black', fontSize: '30px', textAlign: 'center'}}>
        When a Simple Reminder Isn’t Enough, What’s the Next Step?
        </h2>

        <div style={{padding: "2vw 16vw", textAlign: 'center'}}>
            <p style={{color: 'black', fontsize: ' 15px'}}>
            How might we create an intuitive and supportive medication management system that helps users stay on track with their prescriptions, reduces forgetfulness, and allows caregivers to monitor adherence while respecting privacy?
            </p>
        </div>
    </section>

    {/* Section 9 */}
    <section className={styles.container} style={{alignItems: 'center'}}>

        <h3 style={{color: 'lightgrey', fontSize: '80px', paddingTop: '80px'}}>
        IDEATE
        </h3>


        <p style={{color: 'lightgrey', fontSize: '20px'}}>
        01 Value Proposition
        </p>


        <h2 style={{color: 'white', fontSize: '30px', textAlign: 'center'}}>
        Value Proposition: Redefining Medication Management            </h2>

        <div style={{padding: "3vw 16vw", textAlign: 'center', paddingBottom: '100px'}}>
            <p style={{color: 'white', fontsize: ' 15px'}}>
            Managing medications shouldn’t be complicated. Remedify streamlines adherence with clear schedules, smart reminders, and effortless tracking, ensuring users stay on top of their prescriptions with ease. Unlike standard pill reminder apps, it enhances the experience with AI-powered label scanning, an accessible medication library, and one-tap logging, minimizing manual input while maximizing efficiency. By providing organized regimens, essential drug information, and intuitive tracking, Remedify empowers users to manage their health effortlessly.                
            </p>
        </div>
    </section>

    {/* Section 10 */}
    <section className={styles.lightGreyContainer} style={{alignItems: 'center'}}>
        <div>
            <h2 style={{color: 'grey'}}>
            02 Competitive Analysis—How does Remedify compare to existing solutions?
            </h2>
        </div>

        <div style={{display: 'flex', gap: '40px', paddingTop: '40px'}}>
            <div style={{flex: 5}}>
                <p style={{fontSize: '20px'}}>
                Before designing our solution, we conducted an in-depth analysis of eight existing apps, including four direct competitors in medication management and four habit-tracking apps with strong engagement strategies. While many apps offer basic reminders, few go beyond simple notifications to provide a smarter, more adaptive experience. Through this analysis, we identified gaps in personalization, accessibility, and caregiver integration, highlighting an opportunity to create an app that not only reminds users to take their medication but actively supports their adherence journey. For clarity, showcased below are two key studies—one from each category—that best represent the patterns and gaps we discovered across all eight studies.
                </p>
            </div>
            <div style={{flex: 2}}>
                <div>
                    <h4 style={{fontSize: '15px'}}><span className={styles.highlight} style={{fontSize: '50px'}}>8x</span> total analysis</h4>
                </div>
                <div>
                    <h4 style={{fontSize: '15px'}}><span className={styles.highlight} style={{fontSize: '50px'}}>4x</span> direct competitors</h4>
                </div>
                <div>
                    <h4 style={{fontSize: '15px'}}><span className={styles.highlight} style={{fontSize: '50px'}}>4x</span> indirect competitors</h4>
                </div>
            </div>
        </div>
        <div style={{
            display: 'flex', // Ensures flex properties apply
            justifyContent: 'center', // Aligns content to the center
            }}>
    <Image
        className={styles.image}
        src="/remedify/companyAnalysis.png"
        alt="company analysis"
        width={600}
        height={600}
        style={{
            maxWidth: "80%",
            height: "auto",
            paddingTop: '30px',
        }}/>
        </div>
    </section>

    {/* Section 11 */}
    <section className={styles.container} style={{alignItems: 'center', gap: '40px'}}>
        <div style={{paddingTop: '80px'}}>
            <p style={{color: 'lightgrey', fontSize: '20px'}}>
                03 From Concept to Structure: Low-Fidelity Wireframes
            </p>
        </div>
        <div style={{padding: "3vw 16vw", textAlign: 'center'}}>
            <p style={{color: 'white', fontsize: ' 15px', textAlign: 'center'}}>
            With a clear understanding of user needs and competitive gaps, we translated our ideas into low-fidelity wireframes to define the core structure and functionality of Remedify. These early sketches helped us visualize user flows and test layout concepts before moving into hi-fi designs.
            </p>
        </div>

        <div style={{
            display: 'flex', // Ensures flex properties apply
            justifyContent: 'center', // Aligns content to the center
            paddingBottom: '100px'
            }}>
    <Image
        className={styles.image}
        src="/remedify/Wireframe.png"
        alt="wireframe"
        width={600}
        height={600}
        style={{
            maxWidth: "60%",
            height: "auto",
            paddingTop: '30px',
        }}/>
        </div>
    </section>

    {/* Section 12 */}
    <section className={styles.container} style={{alignItems: 'center'}}>
        <h3 style={{color: 'lightgrey', fontSize: '80px', paddingTop: '80px'}}>
        PROTOTYPE
        </h3>

        <p style={{color: 'lightgrey', fontSize: '20px'}}>
        01 Design Iterations
        </p>

        <h2 style={{color: 'white', fontSize: '30px', textAlign: 'center'}}>
        Iterate → Improve → Perfect
        </h2>

        <div style={{padding: "3vw 16vw", textAlign: 'center'}}>
        <p style={{color: 'white', fontsize: ' 15px'}}>
        Designing a solution that truly addresses medication adherence requires iterative prototyping and user validation. This section showcases how initial wireframes evolved into high-fidelity designs based on real user feedback.
        </p>
        </div>
    </section>

    {/* Section 13 */}
    <section className={styles.lightGreyContainer} style={{alignItems: 'center'}}>
        <div>
            <h2 style={{color: 'grey'}}>
            🎨 Refining the Design: Elevating Usability & Visual Cohesion
            </h2>
        </div>

        <div style={{display: 'flex', gap: '40px', paddingTop: '40px'}}>
            <div style={{flex: 5}}>
                <p style={{fontSize: '20px'}}>
                As the Principal UI Designer of Remedify, I led the redesign efforts to create a more visually cohesive and user-friendly experience. This included refining the design language by reducing saturation levels in our colour palette for a softer, more accessible interface. I also restructured the layouts of most screens to maintain consistency and clarity across the app.
                </p>
                <p style={{fontSize: '20px', paddingTop: '40px'}}>
                With a tight timeline, I spearheaded these changes independently, ensuring we met our deadlines while significantly improving usability. Key enhancements included:
                </p>

                <div style={{padding: '40px', fontSize: '20px'}}>
                <ul>
                    <li>A clear primary CTA on the home screen to streamline medication logging.</li>
                    <li>Color-coded medication times (morning, afternoon, evening) for a quick, at-a-glance schedule.</li>
                    <li>Introduction of a secondary font (Public Sans) to enhance visual hierarchy and readability, complementing our primary typeface, Poppins.</li>
                </ul>
                </div>

                <p style={{fontSize: '20px', paddingTop: '20px'}}>
                This redesign aimed to not only improve aesthetics but also boost functionality, making medication tracking easier and more intuitive for users.
                </p>

            </div>
            <div style={{flex: 2}}>
                <div>
                    <h4 style={{fontSize: '20px'}}><span className={styles.highlight} style={{fontSize: '50px'}}>01</span>  a clear primary CTA</h4>
                </div>
                <div>
                    <h4 style={{fontSize: '20px'}}><span className={styles.highlight} style={{fontSize: '50px'}}>02</span> colour-coded medication times</h4>
                </div>
                <div>
                    <h4 style={{fontSize: '20px'}}><span className={styles.highlight} style={{fontSize: '50px'}}>03</span> introduction of secondary font</h4>
                </div>
            </div>
        </div>
        <div style={{
            display: 'flex', // Ensures flex properties apply
            justifyContent: 'center', // Aligns content to the center
            }}>
    <Image
        className={styles.image}
        src="/remedify/GoodMorningJohn.png"
        alt="GM"
        width={600}
        height={600}
        style={{
            maxWidth: "80%",
            height: "auto",
            paddingTop: '30px',
        }}/>
        </div>
    </section>

    {/* Section 14 */}
    <section className={styles.lightGreyContainer} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '100px'}}>
        <h3 style={{color: 'lightgrey', fontSize: '80px', paddingTop: '80px'}}>
        REFLECTION        
        </h3>

        <p style={{color: 'lightgrey', fontSize: '20px'}}>
        Almost the end…
        </p>

        <h2 style={{color: 'black', fontSize: '30px', textAlign: 'center'}}>
        🎢 The Rollercoaster Ride: Final Reflections
        </h2>

        <div style={{padding: "2vw 16vw", textAlign: 'center'}}>
            <p style={{color: 'black', fontSize: '20px'}}>
            December 6th—the big day—finally arrived. Did I survive? Kind of. After countless sleepless nights, juggling life, personal chaos, a mountain of schoolwork, and this beast of a project, we somehow made it to the finish line. There were moments I thought I wouldn’t (seriously, who needs sleep anyway?), 

but against all odds, I pulled through! 🎉 
            </p>
        </div>

{/* flex 5-2 */}
<div style={{ display: 'flex', flexDirection: 'row', gap: '40px' }}>
    <div style={{ flex: '5' }}>
        <h4 style={{ fontSize: '35px', paddingBottom: '30px', paddingTop: '40px' }}>
            💡 A Room Full of Ideas: Sharing Our Innovation
        </h4>

        {/* Image below the text */}
        <div style={{ width: '100%' }}>
            <Image
                className={styles.image}
                src="/remedify/mayorpic.png"
                alt="Mayor"
                width={600} // You can specify width and height
                height={400} // Adjust these values as needed
                style={{
                    maxWidth: '100%', // Make the image fill the container width
                    height: 'auto', // Keep the aspect ratio intact
                    objectFit: 'cover', // Ensure it covers the div without stretching
                }}
            />
        </div>
    </div>

    <div style={{ flex: '2' }}>
        <p style={{ fontSize: '20px', paddingTop: '120px' }}>
            A few hours before the big presentation, we set up our stands, and the room quickly transformed into a showcase of creativity and innovation. Every team brought something unique—snacks, pamphlets, speakers, even costumes—you name it! The energy was incredible, with passionate students excited to share their work. Families, CEOs, mayors, and first-year students lined up, eager to explore the innovations on display. It was an honor to present our finished product and witness the impact of our hard work. (Though I won’t lie—talking to the mayor of Burnaby had my nerves working.) 
            (See picture on the left.)
        </p>
    </div>
</div>
</section>

{/* Section 15 */}
<section className={styles.lightGreyContainer} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
    {/* Image 1 */}
    <div style={{ flex: '1 1 22%', minWidth: '200px' }}>
        <Image 
            src="/remedify/Remedify-1.png"
            alt="Image 1"
            width={400}
            height={300}
            style={{ width: '100%', height: 'auto' }}
        />
    </div>
    {/* Image 2 */}
    <div style={{ flex: '1 1 22%', minWidth: '200px' }}>
        <Image 
            src="/remedify/Remedify-2.png"
            alt="Image 2"
            width={400}
            height={300}
            style={{ width: '100%', height: 'auto' }}
        />
    </div>
    {/* Image 3 */}
    <div style={{ flex: '1 1 22%', minWidth: '200px' }}>
        <Image 
            src="/remedify/Remedify-3.png"
            alt="Image 3"
            width={400}
            height={300}
            style={{ width: '100%', height: 'auto' }}
        />
    </div>
    {/* Image 4 */}
    <div style={{ flex: '1 1 22%', minWidth: '200px' }}>
        <Image 
            src="/remedify/Remedify.png"
            alt="Image 4"
            width={400}
            height={300}
            style={{ width: '100%', height: 'auto' }}
        />
    </div>
</section>

{/* Section16 */}
    <section className={styles.finalSection}>
        <h3 className={styles.endText}>The End 💚</h3>
        <h2 className={styles.finalHeading}>Final Reflections</h2>
        <p className={styles.finalDescription}>
        Through this journey, I learned how to <strong>communicate my ideas</strong> as an introverted designer, 
        collaborate with <strong>minds that think differently</strong>, and contribute to a team of <strong>incredibly talented individuals</strong>.
        </p>
        <p className={styles.finalDescription}>
        Remedify wouldn’t be what it is without them, and I’m beyond grateful to have been part of this process.
        Also—random, but meaningful—a <strong>wallet I cherished</strong> (lost two weeks before the presentation) 
        was miraculously returned to me <strong>right after we finished presenting</strong>. 
        It felt like the perfect full-circle moment, making this experience even more impactful.
        </p>
        <p className={styles.thankYouText}>
            <strong>Thank you for reading!</strong> Check out our <a href="/landing">[landing page]</a> while you’re here. 😊
        </p>

        <button className={styles.backHomeButton} onClick={() => window.location.href = '/'}>
        Go Back Home
        </button>
    </section>
</main>
    ) 
}
