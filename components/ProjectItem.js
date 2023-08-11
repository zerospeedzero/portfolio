import React from 'react'

const ProjectItem = ({item}) => {
  return ( 
    <>
    {item == 'fishcreek' ? (
<div className="container mx-auto p-4">
  <h1 class="text-2xl semi-bold mb-4">Overview</h1>
  <p class="mb-4">
      I designed and implemented an Interactive map solution in the third semester. It is a group project, and I
      am the one and only one who did all the program development and UX/UI design work (except the Google map
      marker icon). Below are the Information Technologies that have been employed in my web and software
      development.
  </p>
  <ol class="list-decimal list-inside mb-4">
      <li class="mb-2">
          I did web and program development of the website for promoting Fish Creek hiking trails using
          cutting-edge technologies such as OpenWeather API, Instagram Personal API, Google Maps API, and social
          media integrations with Facebook, Instagram, WhatsApp, and LinkedIn. It intends to create an immersive
          experience for hiking enthusiasts.
      </li>
      <li class="mb-2">
          With the integration of Next.js, my website offers lightning-fast performance and seamless navigation,
          ensuring users can effortlessly explore the natural beauty of Fish Creek and plan their hiking adventures
          with ease.
      </li>
      <li class="mb-2">
          By leveraging OpenWeather&apos;s data, I provide real-time weather updates, allowing hikers to stay informed
          about current conditions, and ensuring a safe and enjoyable experience amidst the stunning landscapes of
          Fish Creek.
      </li>
      <li class="mb-2">
          The integration with Instagram&apos;s Personal API allows hikers to view captivating photos and videos shared
          by us, inspiring hikers to embark on their own memorable journeys and fostering a vibrant hiking
          community.
      </li>
      <li class="mb-2">
          Through the integration of Google Maps API, hikers can explore interactive maps, discover hiking trails,
          and access detailed directions, making it convenient for both local and international hikers to navigate
          and explore Fish Creek&apos;s picturesque terrain.
      </li>
      <li class="mb-2">
          Additionally, the website incorporates seamless social media integration, enabling hikers to easily share
          their hiking experiences on Facebook, Instagram, WhatsApp, and LinkedIn, allowing hikers to connect with
          friends, inspire others, and spread the beauty of Fish Creek through their personal networks.
      </li>
      <li class="mb-2">
          By combining these technologies and incorporating Google Analytics for measurement, the website presents
          Fish Creek as a must-visit destination for hiking enthusiasts, providing hikers with a comprehensive
          platform to plan, share, and relish their outdoor adventures in the heart of Calgary.
      </li>
  </ol>
  <p class="mb-4">
      The website has employed technologies provided by Microsoft Azure Cloud and it follows mobile-first design
      best practices.
  </p>
  <p class="mb-4">
        <strong>Website link:</strong> <a class="text-blue-500 hover:underline" href="https://green-ocean-09524b910.3.azurestaticapps.net/" target="_blank">https://green-ocean-09524b910.3.azurestaticapps.net/</a>
  </p>
  <p class="mb-4">
      <strong>Video demo:</strong> <a class="text-blue-500 hover:underline" href="/assets/projects/fishcreek.mp4" target="_blank">fishcreek.mp4</a>
  </p>
  <p class="mb-4">
      <strong>Source code:</strong> <a class="text-blue-500 hover:underline" href="https://github.com/zerospeedzero/fish-creek.git" target="_blank">https://github.com/zerospeedzero/fish-creek.git</a>
  </p>
</div> 
    ):(null)
    }    
    {item == 'nft' ? (
<div class="container mx-auto p-4">
        <h1 class="text-2xl semi-bold mb-4">Overview</h1>
        <p class="mb-4">
            I designed and implemented an NFT marketplace and a collection for SAIT NMPD classmates in the first semester. I
            targeted to demonstrate the values of blockchain networking using NFT as an example. The following are the major
            benefits of the solution.
        </p>
        <ol class="list-decimal list-inside mb-4">
            <li class="mb-2">Non-Fungible Tokens (NFTs) have revolutionized the digital asset landscape by leveraging smart contracts on the blockchain network. These unique tokens are created and transacted according to well-defined standards, ensuring transparency and trust among participants.</li>
            <li class="mb-2">
                By utilizing NFTs, my solution ensures rock-solid ownership records and provenance tracking, safeguarding the
                unique value of student graphic assets and minimizing the risk of unauthorized use or plagiarism.
            </li>
            <li class="mb-2">
                With the SAIT NFT marketplace built on blockchain tech, students can directly sell their graphic assets to
                buyers, eliminating intermediaries and unnecessary fees, and ensuring transparent and secure transactions that
                empower students.
            </li>
            <li class="mb-2">
                The NFT marketplace opens up exciting opportunities for students to showcase their graphic assets to a global
                audience, increasing exposure and attracting potential buyers from around the world, expanding their creative
                horizons.
            </li>
            <li class="mb-2">
                The smart contracts (generated in Thirdweb) associated with NFTs empower students to receive ongoing royalties
                from subsequent sales, ensuring they benefit from the increasing value of their graphic assets, even after the
                initial sale, creating a fair and sustainable ecosystem for our talented students.
            </li>
        </ol>

        <h2 class="text-2xl semi-bold mb-4">NFT SAIT marketplace</h2>
        <ol class="list-decimal list-inside mb-4">
            <li class="mb-2">In this cutting-edge project, I have developed a Web 3.0 application hosted on the Azure Cloud platform, providing a curated listing of my exclusive NFT products. My NFT graphic products showcase the exceptional work from the Visual Communication and Web Communication courses.</li>
            <li class="mb-2">Central to this application are two pre-defined smart contracts: &quot;Marketplace&quot; and &quot;NFT Collection.&quot; The &quot;Marketplace&quot; smart contract supports NFTs in both ERC721 and ERC1155 formats, enabling seamless listing and auctioning of our NFTs. To make these products accessible to the public, the &quot;Marketplace&quot; smart contract must be deployed as a transaction on the selected blockchain network. As an illustration, I have deployed the &quot;SAIT NFT&quot; marketplace on the Goerli network, which serves as a testing blockchain network for developers on Ethereum. Consequently, any participant on this blockchain network gains visibility into my NFT listings and auctions via the unique address &quot;0x75B9cb48afE6D68Dc4ed40e79741eA8Ca71AC02d&quot; associated with the NFT &quot;Marketplace.&quot;</li>
            <li class="mb-2">Additionally, I have utilized the &quot;NFT Collection&quot; smart contract to group NFTs for selling or auctioning purposes. These collections serve as another type of smart contract on the blockchain network. As an example, I have introduced the &quot;VisualCommunication&quot; NFT collection within the marketplace to showcase my assets from the Visual Communication assignments. Ownership of these NFTs is attributed to specific account addresses, which will be elaborated on in a subsequent section.</li>
            <li class="">Embracing NFTs and blockchain technology, owners of graphic design assets now enjoy unparalleled accessibility to potential buyers, with robust digital ownership protection. Most notably, this technology significantly reduces the total cost of ownership required to set up an eCommerce platform, thereby offering considerable advantages to small startup graphic design companies and freelancers alike.</li>
        </ol>
        <p class="mb-4">
            The website has employed technologies provided by Microsoft Azure Cloud.
        </p>
        <p class="mb-4">
            <strong>Website link:</strong> <a class="text-blue-500 hover:underline" href="https://gentle-field-08583d510.3.azurestaticapps.net/" target="_blank">Web demo</a>
        </p>
        <p class="mb-4">
            <strong>Video demo:</strong> <a class="text-blue-500 hover:underline" href="/assets/projects/nft.mp4" target="_blank">/assets/projects/nft.mp4</a>
        </p>
        <p class="mb-0">
            <strong>Source code:</strong> <a class="text-blue-500 hover:underline" href="https://github.com/zerospeedzero/sait-blockchain.git" target="_blank">sait-blockchain.git</a>
        </p>
        <p class="mt-2">All work is done by George Cheng.</p>
        <p class="mt-2"><em>Note: You need to have a digital wallet on your computer in order to connect to the NFT Blockchain.</em></p>
</div>
    ):(null)
    }  
    {item == 'ec' ? (
<div class="container mx-auto p-4">
    <h1 class="text-4xl semi-bold mb-4">Overview</h1>
    <p class="mb-4">
        I designed and implemented an eCommerce website in the second semester. Following are the functions and features of this eCommerce website.
    </p>
    <ol class="list-decimal list-inside mb-4">
        <li class="mb-2">
            This web solution I developed is an eCommerce website selling electronic products, using ground-zero PHP code
            and vanilla JavaScript. No framework is used for faster and easier website development in this project.
        </li>
        <li class="mb-2">
            It has a dynamic carousel feature that showcases the products in a stylish manner to provide a better user experience.
        </li>
        <li class="mb-2">
            Users can filter the products by category and sort them by price or name for easier navigation.
        </li>
        <li class="mb-2">
            Detailed specifications of the selected products are displayed when they are clicked.
        </li>
        <li class="mb-2">
            The shopping cart feature allows users to add products and calculates the total cost, including shipping detail.
        </li>
        <li class="mb-2">
            Shipping information such as name and email address is collected and recorded for order processing.
        </li>
        <li class="mb-2">
            All orders and transactions are stored in a table for efficient tracking and management.
        </li>
        <li class="mb-2">
            The web solution is designed to be mobile-friendly, providing a seamless browsing experience on smartphones.
        </li>
        <li class="mb-2">
            It was developed from scratch without using pre-made templates, resulting in a customized and unique design.
        </li>
        <li class="mb-2">
            Overall, this user-friendly web solution offers efficient online shopping for electronic products.
        </li>
    </ol>
    <p class="mb-4">
        <strong>Website link:</strong> <a class="text-blue-500 hover:underline" href="http://dev.saitnewmedia.ca/~gcheng/mmda225/final/" target="_blank">eCommerce</a>
    </p>
    <p class="mb-4">
        <strong>Video demo:</strong> <a class="text-blue-500 hover:underline" href="/assets/projects/eCommerce.mp4" target="_blank">eCommerce.mp4</a>
    </p>
    <p class="mb-0">
        <strong>Source code:</strong> <a class="text-blue-500 hover:underline" href="https://github.com/zerospeedzero/eCommerce.git" target="_blank">eCommerce in GitHub</a>
    </p>
    <p class="mt-2">All work is done by George Cheng.</p>
</div>
    ):(null)
    }
    {item == 'secret' ? (
<div class="container mx-auto p-4">
    <h1 class="text-4xl semi-bold mb-4">Overview</h1>
    <p class="mb-4">
        I&apos;ve developed a website that safeguards a secret message, requiring successful authentication for access. Following are the functions and features of this website.
    </p>
    <ol class="list-decimal list-inside mb-4">
        <li class="mb-2">
            To enhance the user experience, I incorporated a dynamic background animation using vanilla JavaScript.
        </li>
        <li class="mb-2">
            Prior to signing in, the background animation displays a captivating black and green matrix effect.
        </li>
        <li class="mb-2">
            Once authenticated, the secret message &quot;Artificial intelligence for IT Operations&quot; is revealed to the authorized user as an animated background.
        </li>
        <li class="mb-2">
            To ensure a seamless transition, logging out triggers a colour transformation of the text, resembling the matrix animation with colour texts.
        </li>
        <li class="mb-2">
            This website doesn&apos;t rely on videos, After Effects, or other external animation tools; the entire animation is achieved purely through JavaScript coding. By leveraging vanilla JavaScript, I was able to create a dynamic and interactive website without the need for additional libraries or frameworks.
        </li>
        <li class="mb-2">
            Users are provided with a secure and immersive experience, as they navigate through the authentication process and discover the hidden secret.
        </li>
    </ol>
    <p class="mb-4">
        <strong>Demo link:</strong> <a class="text-blue-500 hover:underline" href="http://dev.saitnewmedia.ca/~gcheng/mmda225/login/" target="_blank">Secret</a>
    </p>
    <p class="mb-4">
        <strong>Video demo:</strong> <a class="text-blue-500 hover:underline" href="/assets/projects/secret.mp4" target="_blank">secret.mp4</a>
    </p>
    <p class="mb-0">
        <strong>Source code:</strong> <a class="text-blue-500 hover:underline" href="https://github.com/zerospeedzero/secret.git" target="_blank">https://github.com/zerospeedzero/secret.git</a>
    </p>
    <p class="mt-2">All work is done by George Cheng.</p>
    <p class="mt-2"><em>Note: username is “agent” and password is “password123”</em></p>
</div>
    ):(null)
    }
    {item == 'shangri-la' ? (
<div class="container mx-auto p-4">
    <h1 class="text-4xl semi-bold mb-6">Case Study: Shangri-La Resort WordPress Theme</h1>

    <h2 class="text-2xl semi-bold mb-4">Overview</h2>
    <p class="text-gray-700 mb-8">
        The objective of this case study was to create a customized WordPress theme for the Shangri-La resort,
        enhancing its visual appeal and modernizing its web interface while maintaining the existing layout and
        data of the website.
    </p>

    <h2 class="text-2xl semi-bold mb-4">Inspirations and Research</h2>
    <p class="text-gray-700 mb-8">
        To achieve the project&apos;s goals, a thorough analysis was conducted by visiting the official website of
        Shangri-La. This involved studying the colour theory, tuning, and underlying technology utilized on the
        website. Additionally, a focus was placed on understanding the business value delivered to potential
        customers through the web interface.
    </p>

    <h2 class="text-2xl semi-bold mb-4">Role</h2>
    <p class="text-gray-700 mb-8">
        The project was led and executed by me with skills in graphic design and web development. The primary
        responsibility was the development of the WordPress theme module.
    </p>

    <h2 class="text-2xl semi-bold mb-4">Planning Milestones</h2>
    <ul class="list-disc list-inside text-gray-700 mb-8">
        <li>Definition of Key Performance Indicators (KPIs) and mission-critical success factors to guide
            project evaluation.</li>
        <li>Development of a comprehensive project task plan, including estimates for task completion durations.</li>
        <li>Identification of the project&apos;s critical path to prioritize essential elements.</li>
        <li>Researching the process of building WordPress theme modules.</li>
        <li>Designing the new web layout to ensure a visually appealing interface.</li>
        <li>Implementing coding and graphic design elements in accordance with the new theme.</li>
        <li>Conducting thorough function tests and peer reviews to ensure quality and reliability.</li>
        <li>Project kick-off and final submission of the completed WordPress theme.</li>
    </ul>

    <h2 class="text-2xl semi-bold mb-4">Two Draft Versions of the Web Layout with Colour Combination</h2>
    <p class="text-gray-700 mb-8">
        Initial draft versions of the web layout were developed, showcasing the proposed colour combinations and
        design elements.
    </p>

    <h2 class="text-2xl semi-bold mb-4">Final Version</h2>
    <p class="text-gray-700 mb-8">
        The final version of the WordPress theme closely resembled the official Shangri-La resort hotel website,
        with similar colour schemes and web layouts.
    </p>

    <h2 class="text-2xl semi-bold mb-4">Pain Points / Challenges</h2>
    <ul class="list-disc list-inside text-gray-700 mb-8">
        <li>Restriction on modifying existing data and data relationships, necessitating the retention and
            seamless migration of existing authors and their posts to the new modern solution.</li>
        <li>Non-containerized web element data provided by WordPress, such as headings, images, and paragraphs for
            posts, require meticulous styling to address the lack of HTML element grouping.</li>
        <li>Limited functionality with only theming modules, resulting in partial web page reloads during page
            switching, which negatively impacted user experience when compared to modern JavaScript frameworks.</li>
    </ul>

    <h2 class="text-2xl semi-bold mb-4">Call-to-Action</h2>
    <p class="text-gray-700 mb-8">
        Despite the aforementioned constraints, the project successfully addressed these challenges, and the
        required WordPress theme modules were developed, significantly enhancing the overall modernity of the
        original website.
    </p>
    <p class="mb-4">
        <strong>Demo link:</strong> <a class="text-blue-500 hover:underline" href="http://dev.saitnewmedia.ca/~gcheng/mmda324/final/" target="_blank">Shangri-La</a>
    </p>
    <p class="mb-4">
        <strong>Video demo:</strong> <a class="text-blue-500 hover:underline" href="/assets/projects/shangri-la.mp4" target="_blank">shangri-la.mp4</a>
    </p>
    <p class="mb-0">
        <strong>Source code:</strong> <a class="text-blue-500 hover:underline" href="https://github.com/zerospeedzero/shangri-la.git" target="_blank">https://github.com/zerospeedzero/shangri-la.git</a>
    </p>
    <p class="mt-2">All programming and design work is done by George Cheng.</p>
    <p>Photographs by Easa Shamih, Raj Deutunder, and Paryitno under a Creative Commons Attribution 2.0 Generic (CC BY 2.0) license</p>
</div>
    ):(null)
    }
    {item == 'microservices' ? (
<div class="container mx-auto p-4">
    <h1 class="text-2xl semi-bold">Microservices Architecture, Cloud-Native Platform, and DevSecOps</h1>
    <p class="text-lg font-medium mb-6">Empowering IBM Partners and Customers</p>    
    <h2 class="text-xl semi-bold mb-4">Background:</h2>
    <p class="mb-4">Initiated in 2022, this transformative project aimed to empower IBM business partners with 
    <strong> containerized technologies</strong> offered by IBM solutions and facilitate IBM customers in their modernization journey
    through <strong>hands-on workshops</strong>.</p>

    <h2 class="text-xl semi-bold mb-4">My Role:</h2>
    <p class="mb-4">As a Consulting IT Specialist, I spearheaded the design and development of a comprehensive
    workshop platform. This platform facilitated skill transfers to over <strong>50 business partners and enterprises</strong>,
    enabling them to harness the potential of containerized workload technology from IBM and prominent open-source
    projects.</p>

    <h2 class="text-xl semi-bold mb-4">Benefits and Content of the Solution:</h2>
    <ol class="list-decimal list-inside mb-4">
    <li class="mb-2"><strong>Agile Business</strong> Solutions: The adoption of microservices architecture grants customers the
        ability to respond rapidly to dynamic market demands, enhancing their IT solutions&apos; business agility.</li>
    <li class="mb-2"><strong>Cloud-Native</strong> Efficiency: Leveraging cloud-native applications results in improved operational
        efficiency and cost-effectiveness across diverse cloud environments. Containerized applications can be
        seamlessly migrated to different cloud platforms.</li>
    <li class="mb-2">Efficient <strong>CI/CD</strong> Integration: To support application enhancement and bug fixing efficiently, the
        architecture incorporates technology from leading open-source vendors. Continuous Integration and Continuous
        Delivery (CI/CD) are seamlessly integrated to streamline the development process.</li>
    <li class="mb-2"><strong>AIOps</strong> for Availability and Capacity Planning: The solution includes AIOPs (Artificial
        Intelligence for IT Operations) solutions to ensure high availability and robust capacity planning.</li>
    <li class="mb-2">Robot Shop <strong>Microservices</strong> Application: In this workshop platform, I choose a microservices 
        application called &quot;Robot Shop&quot;.
        This application comprising various components, including front-end, Nginx (reverse proxy), user module, product
        catalogue, rating module, shopping cart, payment, and shipment modules. Each component runs in its own CRIO
        container on the RedHat OpenShift platform, an enterprise-grade Kubernetes solution. While most databases run
        on the Kubernetes cluster, payment and shipping databases are hosted on traditional VM server farms.</li>
    </ol>

    <h2 class="text-xl semi-bold mb-4">Technology Deployed in the Workshop:</h2>
    <ol class="list-decimal list-inside mb-4">
    <li class="mb-2">RedHat OpenShift: The <strong>Kubernetes</strong> platform serves as a host and manager for containerized
        applications.</li>
    <li class="mb-2"><strong>VMware</strong> Environment: Traditional databases are hosted on VMware, providing reliable data
        storage.</li>
    <li class="mb-2"><strong>GitLab</strong> Ultimate: This platform handles source code control, CICD integration, containerized
        application build, code quality control, unit testing triggering, containerized image creation and hosting,
        image security scanning, secret detection, live application security scanning, and deployment to development
        environments.</li>
    <li class="mb-2"><strong>Instana</strong>: Observability monitoring of microservices and transaction checking on the instrumented
        Robot Shop application. It supports a range of technologies, including <strong>NodeJS</strong>, <strong>Springboot</strong>, <strong>Python</strong>, <strong>Golang</strong>, 
         <strong> MongoDb</strong>, <strong>Redis</strong>, <strong>MySQL</strong>, <strong>RabbitMQ</strong>, <strong>Nginx</strong>, and <strong>Angular JS</strong>.</li>
    <li class="mb-2"><strong>Turbonomic</strong>: A vital component providing application resource management. It employs artificial
        intelligence to determine application demand and efficiently allocate IT resources in private and public cloud
        environments, ensuring optimal performance and cost-efficiency.</li>
    </ol>

    <p class="text-center italic text-gray-600">By successfully implementing this microservices architecture,
    cloud-native platform, and DevSecOps approach, this project has empowered IBM business partners and customers to
    embrace containerized technologies for a more resilient and innovative modernization journey.</p>
    <p class="mb-0 mt-8">
        <strong>Source code and full workshop documentation:</strong> <a class="text-blue-500 hover:underline" href="https://github.com/zerospeedzero/devsecops.git" target="_blank">https://github.com/zerospeedzero/devsecops.git</a>
    </p>
    <p class="mt-2">All programming and design work is done by George Cheng.</p>
</div>
        ):(null)
    }
    {item == 'monopoly' ? (
<div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-4">Modern E-Learning Platform for Monopoly Game Skill Transfer</h1>
    <div class="">
        <h2 class="text-xl font-semibold mb-4">Overview:</h2>
        <p>The primary objective of our project is to develop an advanced e-learning platform tailored to young
            professionals, our predominant target demographic. This platform aims to impart comprehensive skill
            transfer in the domain of the Monopoly game. Our solution is centered around delivering the following
            core values:</p>
        <ul class="list-disc list-inside pl-0 mt-2">
            <li class="mb-1">Engagement Generation: Create an intrinsic allure among the target audience for
                Monopoly games.</li>
            <li class="mb-1">Foundational Proficiency: Deliver foundational expertise, enabling beginners to
                initiate gameplay confidently with peers and family.</li>
            <li class="mb-1">Strategic Mastery: Present advanced modules designed to educate users on tactical
                nuances, enhancing their probability of success.</li>
            <li class="mb-1">Variation Awareness: Provide an expansive repository of knowledge about diverse
                iterations of Monopoly games.</li>
            <li class="mb-1">Progress Monitoring: I implemented a systematic progression monitoring mechanism to track
                student learning journeys.</li>
            <li class="mb-1">Game practice: I made use of Open Source project to develop an online version of the classic Monopoly game that users can play against a computer opponent, which uses smart decision-making strategies.</li>
            <li class="mb-1">Generative Pre-training Transformer (GPT): I took information from our website and past documents and uses them to create a embedding with LangChain and OpenAI that can have conversations with our users.</li>
        </ul>
    </div>
    <div class="mt-4">
        <h2 class="text-xl font-semibold mb-4">Role:</h2>
        <p className="ml-4">As the sole IT solution architect and implementer, I undertake the strategic design and execution of
            this web-based e-learning solution. Additionally, I hold the responsibility for the User Interface (UI)
            and User Experience (UX) design. My role encompasses seamless integration with external systems to
            facilitate optimal service delivery to our users.</p>
    </div>
    <div class="mt-4">
        <h2 class="text-xl font-semibold mb-4">Technology and Functionality:</h2>
        <ol class="list-decimal list-inside pl-0 mt-2">
            <li class="mb-1"><strong>Next JS:</strong> The project harnesses the power of the Next JS framework,
                serving as the foundation for the e-learning platform&apos;s structure.</li>
            <li class="mb-1"><strong>Motion Framer:</strong> The integration of Motion Framer infuses the platform
                with dynamic web-based animations, amplifying the overall user experience during training
                sessions.</li>
            <li class="mb-1"><strong>YouTube API:</strong> To enhance the learning experience, the platform leverages
                the YouTube API. This allows us to exert control over video playback, facilitating topic-specific
                navigation within video training modules. Moreover, the API enables tracking of video completion,
                crucial for module progression.</li>
            <li class="mb-1"><strong>Slides.com:</strong> Our training materials, designed on slides.com, are
                seamlessly incorporated into the e-learning solution. Tailored embedding techniques ensure a
                harmonious convergence of content creation and website development, optimizing project
                efficiency.</li>
            <li class="mb-1"><strong>Quizzes:</strong> In-depth quizzes accompany each training module. Users
                advancement hinges on successful quiz completion, thereby ensuring a comprehensive understanding
                before progressing.</li>
            <li class="mb-1"><strong>AI-Powered Monopoly Practice:</strong> An AI-driven Monopoly practice game,
                built upon an open-source foundation, assesses user skills. Modifications to the AI&apos;s decision
                tree enhance its decision-making capabilities, such as recalibrating the &quot;GO&quot; slot rule to retain a
                minimum of $100.</li>
            <li class="mb-1"><strong>Knowledge Consolidation with Generative Pre-training Transformer (GPT) Integration:</strong>
                <ul className='list-disc list-inside pl-0 mt-2'>
                    <li>Training materials, along with client brief and module content, are synthesized into a unified document for embedding.</li>
                    <li>Through LangChain and OpenAI text-embedding-ada-002 embedding model (Not GhatGPT), this data is segmented into 1000 tokens (with 200 tokens overlap), 
                        subsequently stored in vectorstores within Supabase.com. This establishment acts as a repository for long-term memory and internal semantic search, 
                        enabling efficient querying on our website with natural language understanding response. After successfully clearing quizzes, users access this GPT capabilities.</li> 
                    <li>It serves as a private knowledge base, addressing project-specific queries, which conventional large language models lack expertise in handling, 
                        such as identifying project graphic designers. I think using large language model and implementation of private knowledge databases would be the trend of IT industry for coming years.</li>
                </ul>
            </li>
        </ol>
    </div>
    <h1 class="text-2xl font-semibold mb-4 mt-8">Project Team Roles</h1>
    <strong class="">
        Project Leader (George Cheng)
    </strong>
    <p class="mb-8 ml-4">
        Responsible for deliverables planning and updating, process control, and project management.
    </p>
    <strong class="">
        Graphic Design (Yan Lok Yuen)
    </strong>
    <p class="mb-8 ml-4">
        Responsible for colour, typographic, graphic, 3D and VR design.
    </p>
    <strong class="">
        Programming (George Cheng)
    </strong>
    <p class="mb-8 ml-4">
        Responsible for website building, solution architecture, technologies deployed and technical support.
    </p>
    <strong class="">
        Content Writer (Ryan Ngo)
    </strong>
    <p class="mb-8 ml-4">
        Responsible for content writing for the beginner module.
    </p>
    <strong class="">
        Content Writer (Danny Ha)
    </strong>
    <p class="mb-8 ml-4">
        Responsible for content writing for the tactics module.
    </p>
    <strong class="">
        Content Writer (Jake Morin)
    </strong>
    <p class="mb-8 ml-4">
        Responsible for content writing for the various versions of the Monopoly module.
    </p>
    <strong class="">
        Writer and Visual Assistant (Jimmy Chan)
    </strong>
    <p class="mb-8 ml-4">
        Responsible for the introduction and history of Monopoly writing and assisting other teammates with visual
        creation. Also, he is responsible for all 3D model creation.
    </p>
    <h1 class="text-2xl font-semibold mb-4 mt-8">Resources</h1>
    <p class="mt-4 mb-4">
        The website has employed technologies provided by Microsoft Azure Cloud, YouTube API, Slides.com embedding, LangChain, OpenAI, Vectorstores and NextJS framework.
    </p>
    <p class="mb-4">
            <strong>Website link:</strong> <a class="text-blue-500 hover:underline" href="https://sait-monopoly.azurewebsites.net/" target="_blank">https://sait-monopoly.azurewebsites.net/</a>
    </p>
    <p class="mb-4">
        <strong>Video demo:</strong> <a class="text-blue-500 hover:underline" href="/assets/projects/monopoly.mp4" target="_blank">monopoly.mp4</a>
    </p>
    <p class="mb-4">
        <strong>Source code:</strong> <a class="text-blue-500 hover:underline" href="https://github.com/zerospeedzero/monopoly" target="_blank">https://github.com/zerospeedzero/monopoly</a>
    </p>
</div>
        ):(null)
    }
    {item == 'private' ? (
<div class="container mx-auto p-4">
    <h1 class="text-2xl semi-bold mb-4">Private Cloud Project</h1>
    <h2 class="text-xl semi-bold  mb-2">Background</h2>
    <p class="mb-4">As a specialist in private cloud solutions with expertise in Kubernetes and OpenShift, I was tasked with showcasing the capabilities of our <strong>private native cloud platform</strong> to a banking client. The primary objectives were to enhance the agility of their mobile app platform and kickstart their first pilot project using container technology. We were selected as one of the three vendors for this <strong>competitive opportunity</strong>.</p>
    
    <h2 class="text-xl semi-bold  mb-2">My Role</h2>
    <p class="mb-4">I served as the <strong>solution architect</strong> responsible for designing and implementing the proof of technology environment, analyzing the customer&apos;s cloud journey requirements, delivering a comprehensive presentation and demonstration, providing investment summaries, and facilitating the deal closure by aligning solution components based on precise license calculations.</p>
    
    <h2 class="text-xl semi-bold mb-2">The Outcome</h2>
    <p class="mb-4">During the rigorous selection process, I devised and established an integrated private cloud platform utilizing enterprise-grade Kubernetes solutions and relevant open-source tools already familiar to the client. Our efforts culminated in <strong>securing this valuable opportunity</strong>, and the client has successfully integrated the majority of our recommended products and solutions into their private cloud environment.</p>
    <h2 class="text-xl semi-bold mb-4">Technology Deployed in the Project:</h2>
    <ol class="list-decimal list-inside space-y-2">
            <li class="mb-2">
                Deployment of <strong>pfSense</strong> Network Alliance: I implemented a virtual security appliance, pfSense Network Alliance, to emulate <strong>network segregation</strong> between the Kubernetes internal cluster network and the production network that serves end users. This strategic deployment enhances security and ensures controlled connectivity.
            </li>
            <li class="mb-2">
                Configuration of <strong>HAProxy</strong> Load Balancer: I orchestrated the setup and customization of an HAProxy server, running on a Red Hat Enterprise Linux (RHEL) server. This HAProxy instance serves as a <strong>load balancer</strong>, efficiently managing traffic for both the Kubernetes cluster network and incoming requests through Ingress.
            </li>
            <li class="mb-2">
                Establishment of <strong>Dedicated DNS and DHCP</strong> Servers for Kubernetes: To support flexible scaling in both vertical and horizontal dimensions, dedicated DNS and DHCP servers were implemented specifically for the Kubernetes environment. This infrastructure includes predefined network card MAC addresses, IP addresses, and DNS names, essential for the <strong>autoscaler</strong> functionality of Red Hat OpenShift.
            </li>
            <li class="mb-2">
                Deployment of Simulated <strong>Certificate Authority</strong> Microservices: I deployed the &quot;EJBCA&quot; Certificate Authority microservices, alongside <strong>Cert Manager</strong>, within this solution. This setup effectively manages the entire lifecycle of certificate management, ensuring secure connections and seamless integration with other IT components. It&apos;s important to note that while this solution serves a demonstration purpose here, it wouldn&apos;t be suitable for a production environment.
            </li>
    </ol>
    <h2 class="text-xl semi-bold my-4">Portfolio Highlights</h2>
    <p class="mb-4">Due to <strong>confidentiality</strong> and security considerations, I&apos;m unable to disclose the specific and customized technology stacks and the proof-of-technology environment used in this project. However, I&apos;ve prepared an <strong>alternate IT environment</strong> for reference, and I&apos;ll be showcasing the project&apos;s impact using a sample application in lieu of the customer&apos;s proprietary applications.</p>
    <p class="mb-4">
        <strong>Video demo:</strong> <a class="text-blue-500 hover:underline" href="/assets/projects/private.mp4" target="_blank">Enterprise Private Cloud</a>
    </p>
    <p class="mb-0">
        <strong>Source code:</strong> <a class="text-blue-500 hover:underline" href="https://github.com/zerospeedzero/private-cloud.git" target="_blank">https://github.com/zerospeedzero/private-cloud.git</a>
    </p>
    <p class="mt-2">All programming and design work is done by George Cheng.</p>
</div>
        ):(null)
    }
    {item == 'pipeline' ? (
<div class="container mx-auto p-4">
    <h1 class="text-2xl semi-bold mb-4">Establishment of a robust DevOps toolset for an insurance client</h1>
    <h2 class="text-xl semi-bold mb-2">Background and my role</h2>
    <p class="mb-4">In this initiative, the goal was to create a robust <strong>DevOps toolset</strong> and a streamlined pipeline framework to enable efficient deployment of containerized software for our insurance client. The client had already made tool selections, and my role involved assisting them in the implementation of these tools within their Proof of Concept (POC) environment. To demonstrate the toolchain&apos;s effectiveness while maintaining confidentiality, I utilized a separate application for illustrative purposes.</p>

    <h2 class="text-xl semi-bold mb-2">Technology Stack Deployed in This Solution</h2>
    <ul class="list-disc list-inside space-y-2">
            <li>
            <strong>Jenkins</strong>: Engine for continuous integration and continuous delivery, providing a reliable automation framework.
            </li>
            <li>
            <strong>GitLab</strong>: Source control management, facilitating efficient version control and collaboration.
            </li>
            <li>
            <strong>Harbor</strong>: Docker image storage registry, ensuring secure and accessible storage of container images.
            </li>
            <li>
            <strong>SonarQube</strong>: Application code security scanning, enhancing code quality and security.
            </li>
            <li>
            <strong>OpenShift</strong> BuildConfig: Trigger for the Jenkins pipeline, automating the deployment process.
            </li>
            <li>
            <strong>Sock Shop</strong>: Microservices application used for demonstration purposes, showcasing the capabilities of the toolset.
            </li>
        </ul>
        <p class="my-4">
            <strong>Video demo:</strong> <a class="text-blue-500 hover:underline" href="/assets/projects/pipeline.mp4" target="_blank">Open Source Pipeline</a>
        </p>
        <p class="mb-4">
            <strong>Source code:</strong> <a class="text-blue-500 hover:underline" href="https://github.com/zerospeedzero/pipeline.git" target="_blank">https://github.com/zerospeedzero/Pipeline.git</a>
        </p>
        <p class="mt-0">All programming and design work is done by George Cheng.</p>

</div>


        ):(null)
    }
    </>
  )


}

export default ProjectItem