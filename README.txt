Web-Based Multi-User NS-3 Simulation of Computer Networks (Wired and Wireless)

  Network simulation offers a number of advantages with regards to the design and performance analysis of 5G networks. It allows detailed assessment of network capacity, throughput, latency, and reliability under various scenarios before deploying the real network. It reduces the need for expensive and time- consuming field testing by enabling. It facilitates testing of different configurations to determine bottlenecks and identify optimal solutions. It enables rapid testing of new concepts, protocols, and technologies before real-world implementation.

  NS-3 (Network Simulator 3) is an open-source, discrete-event network simulation platform widely used for research and development in networking. It allows users to model and simulate complex network scenarios, including wireless, wired, and mobile networks, to study performance, protocol behavior, and system architecture. NS-3 provides a flexible and extensible environment with a library of modules for various network protocols and technologies, making it a valuable tool for researchers, educators, and network engineers to analyze and optimize network systems.

Interestingly, the NS-3 is a standalone application and has a steep learning curve. Therefore, to make NS-3 more accessible to end-users in a potentially collaborative environment, a web-based multi-user interface is proposed.


  WS-1 is designed to allow users to: 
    - Configure network parameters using the web-interface 
    - Configure simulation scenarios 
    - Run NS-3 simulations through the web-interface 
    - Enable logging of simulation events 
    - Enable the collection of performance data 
    - Provide adequate visualization of simulation results including real-time plots 
    - Store simulation parameters and results 
    - Generate reports of simulation results


  The MEAN stack should be used. (MEAN = MongoDB, Express.js, Angular, Node.js). One should ensure that multiple users can simultaneously access and work with the Octave scripts via the web- interface. This would involve, among other things, testing with simulated multi-user loads, logging of user activities for audit and debugging. A web-based multi-user system would ensure accessibility and scalability, increase the potential for collaboration and allow for more efficient data management and maintenance.
