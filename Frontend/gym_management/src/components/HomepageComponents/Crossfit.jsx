import React from 'react';

function Crossfit() {
    const images = [
        "https://img.freepik.com/free-photo/shaved-head-athletic-male-slim-brunette-female-exercising-with-trx-straps-gym-club_613910-11277.jpg",
        "https://burst.shopifycdn.com/photos/heavy-lifting-man.jpg?width=1000&format=pjpg&exif=0&iptc=0",
        "https://www.shutterstock.com/image-photo/fitness-man-working-out-battle-260nw-1409868815.jpg",
        "https://st3.depositphotos.com/2325841/18970/i/450/depositphotos_189707282-stock-photo-sportspeople-doing-pushups-at-gym.jpg",
        "https://thumbs.dreamstime.com/b/female-crossfit-athlete-exercising-full-length-low-angle-shot-woman-performing-rope-climbs-gym-copyspace-performance-103303815.jpg",
        "https://st3.depositphotos.com/11866110/33501/i/450/depositphotos_335019484-stock-photo-female-fitness-model-pushing-sled.jpg",
        "https://cdn.pixabay.com/photo/2021/01/13/16/46/workout-5914641_640.jpg",
        "https://media.gettyimages.com/id/1428121929/photo/woman-cross-training-in-a-gym.jpg?s=612x612&w=gi&k=20&c=6rSolEjtJGGjHhulIdgu3Zm_B-73hENIXhxaBbsallU="
    ];

    return (
        <div className="crossfit">
            <div>
                <div className="desc">
                    <h2>Push Your Limits with CrossFit!</h2>
                    <p>Ready to take your fitness journey to the next level? CrossFit is the ultimate high-intensity workout that blends strength, conditioning, and endurance. Designed to challenge you physically and mentally, CrossFit is perfect for anyone looking to get fit, build muscle, and improve overall health. Whether you're just starting or a seasoned athlete, CrossFit offers a diverse range of exercises to suit your goals!</p>
                </div>
                <div className="scroll">
                    <img
                        key={images[0]}
                        src={images[0]}
                        alt="CrossFit 1"
                        style={{
                            height: "100%",
                            width: "30vw",
                            borderRadius: "20px",

                        }}
                    />
                </div>
            </div>

            <div>
                <div className="scroll">
                    <img
                        key={images[1]}
                        src={images[1]}
                        alt="CrossFit 2"
                        style={{
                            height: "100%",
                            width: "30vw",
                            borderRadius: "20px"
                        }}
                    />
                </div>
                <div className="desc">
                    <h3>What makes CrossFit so powerful?</h3>
                    <p>High-Intensity Workouts: Experience fast-paced, dynamic exercises that push your limits and maximize results.</p>
                    <p>Full-body Training: Build strength, increase endurance, and enhance mobility with a variety of movements that work every muscle group.</p>
                    <p>Scalable for All Fitness Levels: CrossFit can be adjusted for beginners and advanced athletes alike—no matter where you are on your fitness journey.</p>
                    <p>Build a Strong Community: Join a supportive community of like-minded individuals who motivate each other to push harder and achieve your best.</p>
                </div>
                
            </div>

            <div>
                <div className="desc">
                    <h3>CrossFit Offerings:</h3>
                    <p>CrossFit Classes: Our expert coaches lead group sessions that combine Olympic lifting, cardio, gymnastics, and more. Every workout is designed to challenge you and keep things exciting!</p>
                    <p>CrossFit Fundamentals: New to CrossFit? Start with our fundamentals classes where you'll learn the basic movements and techniques necessary for safe and effective training.</p>
                    <p>Personalized CrossFit Training: Want a tailored approach? Work one-on-one with our coaches to develop a personalized fitness plan to meet your specific goals and improve your performance.</p>
                    <p>CrossFit for Athletes: Take your sport to the next level with CrossFit-specific training that focuses on strength, agility, and endurance—designed for athletes of all types!</p>
                    <p>CrossFit Endurance: Focus on increasing your stamina and improving your cardiovascular capacity. Perfect for runners, cyclists, and anyone looking to boost endurance.</p>
                </div>
                <div className="scroll">
                    <img
                        key={images[3]}
                        src={images[3]}
                        alt="CrossFit 3"
                        style={{
                            height: "100%",
                            width: "30vw",
                            borderRadius: "20px"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Crossfit;
