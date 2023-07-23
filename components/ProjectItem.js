import React from 'react'

const ProjectItem = ({item}) => {
  return ( 
    <>
    {item == 'fishcreek' ? (
<div className="container mx-auto p-4">
  <h3 class="text-2xl font-bold mb-4">Overview</h3>
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
          By leveraging OpenWeather's data, I provide real-time weather updates, allowing hikers to stay informed
          about current conditions, and ensuring a safe and enjoyable experience amidst the stunning landscapes of
          Fish Creek.
      </li>
      <li class="mb-2">
          The integration with Instagram's Personal API allows hikers to view captivating photos and videos shared
          by us, inspiring hikers to embark on their own memorable journeys and fostering a vibrant hiking
          community.
      </li>
      <li class="mb-2">
          Through the integration of Google Maps API, hikers can explore interactive maps, discover hiking trails,
          and access detailed directions, making it convenient for both local and international hikers to navigate
          and explore Fish Creek's picturesque terrain.
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
        <strong>Website link:</strong> <a class="text-blue-500 hover:underline" href="https://fish-creek.azurewebsites.net" target="_blank">https://fish-creek.azurewebsites.net</a>
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
        <h1 class="text-4xl font-bold mb-4">Overview</h1>
        <p class="mb-4">
            I designed and implemented an NFT marketplace and a collection for SAIT NMPD classmates in the first semester. I
            targeted to demonstrate the values of blockchain networking using NFT as an example. The following are the major
            benefits of the solution.
        </p>
        <ol class="list-decimal list-inside mb-4">
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
        <p class="mb-4">
            The website has employed technologies provided by Microsoft Azure Cloud.
        </p>
        <p class="mb-4">
            <strong>Website link:</strong> <a class="text-blue-500 hover:underline" href="https://gentle-field-08583d510.3.azurestaticapps.net/" target="_blank">https://gentle-field-08583d510.3.azurestaticapps.net/</a>
        </p>
        <p class="mb-4">
            <strong>Video demo:</strong> <a class="text-blue-500 hover:underline" href="/assets/projects/nft.mp4" target="_blank">/assets/projects/nft.mp4</a>
        </p>
        <p class="mb-0">
            <strong>Source code:</strong> <a class="text-blue-500 hover:underline" href="https://github.com/zerospeedzero/sait-blockchain.git" target="_blank">https://github.com/zerospeedzero/sait-blockchain.git</a>
        </p>
        <p class="mt-2">All work is done by George Cheng.</p>
        <p class="mt-2"><em>Note: You need to have a digital wallet on your computer in order to connect to the NFT Blockchain.</em></p>
</div>
    ):(null)
  }  
    {item == 'ec' ? (
<div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-4">Overview</h1>
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
    <h1 class="text-4xl font-bold mb-4">Overview</h1>
    <p class="mb-4">
        I've developed a website that safeguards a secret message, requiring successful authentication for access. Following are the functions and features of this website.
    </p>
    <ol class="list-decimal list-inside mb-4">
        <li class="mb-2">
            To enhance the user experience, I incorporated a dynamic background animation using vanilla JavaScript.
        </li>
        <li class="mb-2">
            Prior to signing in, the background animation displays a captivating black and green matrix effect.
        </li>
        <li class="mb-2">
            Once authenticated, the secret message "Artificial intelligence for IT Operations" is revealed to the authorized user as an animated background.
        </li>
        <li class="mb-2">
            To ensure a seamless transition, logging out triggers a colour transformation of the text, resembling the matrix animation with colour texts.
        </li>
        <li class="mb-2">
            This website doesn't rely on videos, After Effects, or other external animation tools; the entire animation is achieved purely through JavaScript coding. By leveraging vanilla JavaScript, I was able to create a dynamic and interactive website without the need for additional libraries or frameworks.
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
    ):(null)}


    </>
  )


}

export default ProjectItem