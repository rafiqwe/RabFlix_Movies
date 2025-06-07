<div dir="ltr" data-orientation="horizontal" class="mt-4"><div role="tablist" aria-orientation="horizontal" class="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2" tabindex="0" data-orientation="horizontal" style="outline: none;"><button type="button" role="tab" aria-selected="true" aria-controls="radix-:r15:-content-preview" data-state="active" id="radix-:r15:-trigger-preview" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm" tabindex="0" data-orientation="horizontal" data-radix-collection-item="">Preview </button><button type="button" role="tab" aria-selected="false" aria-controls="radix-:r15:-content-edit" data-state="inactive" id="radix-:r15:-trigger-edit" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm" tabindex="-1" data-orientation="horizontal" data-radix-collection-item="">Edit</button></div><div data-state="active" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:r15:-trigger-preview" id="radix-:r15:-content-preview" tabindex="0" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" style=""><div class="border border-border rounded-lg bg-background p-6 shadow-sm"><div class="prose prose-sm md:prose-base lg:prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600" style="user-select: none;"><div id="top" oncopy="" class="">

<div align="center" class="text-center">
<h1>RABFLIX_MOVIES</h1>
<p><em>Discover, Stream, and Enjoy Movies Effortlessly</em></p>

<img alt="last-commit" src="https://img.shields.io/github/last-commit/rafiqwe/RabFlix_Movies?style=flat&amp;logo=git&amp;logoColor=white&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="repo-top-language" src="https://img.shields.io/github/languages/top/rafiqwe/RabFlix_Movies?style=flat&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="repo-language-count" src="https://img.shields.io/github/languages/count/rafiqwe/RabFlix_Movies?style=flat&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
<p><em>Built with the tools and technologies:</em></p>
<img alt="JSON" src="https://img.shields.io/badge/JSON-000000.svg?style=flat&amp;logo=JSON&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Markdown" src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&amp;logo=Markdown&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="npm" src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&amp;logo=npm&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&amp;logo=JavaScript&amp;logoColor=black" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="React" src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&amp;logo=React&amp;logoColor=black" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&amp;logo=Vite&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&amp;logo=ESLint&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Axios" src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&amp;logo=Axios&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
</div>
<br>
<hr>
<h2>Table of Contents</h2>
<ul class="list-disc pl-4 my-0">
<li class="my-0"><a href="#overview">Overview</a></li>
<li class="my-0"><a href="#getting-started">Getting Started</a>
<ul class="list-disc pl-4 my-0">
<li class="my-0"><a href="#prerequisites">Prerequisites</a></li>
<li class="my-0"><a href="#installation">Installation</a></li>
<li class="my-0"><a href="#usage">Usage</a></li>
<li class="my-0"><a href="#testing">Testing</a></li>
</ul>
</li>
</ul>
<hr>
<h2>Overview</h2>
<p>RabFlix_Movies is a modern web application designed for movie and anime enthusiasts, leveraging the power of React and Vite for a seamless user experience.</p>
<p><strong>Why RabFlix_Movies?</strong></p>
<p>This project aims to provide an engaging platform for discovering and managing movie and anime content. The core features include:</p>
<ul class="list-disc pl-4 my-0">
<li class="my-0">🎬 <strong>Dynamic Content Rendering:</strong> Enjoy a responsive and interactive interface powered by React.</li>
<li class="my-0">🌟 <strong>API Integration:</strong> Access a vast database of movies and anime through TMDB and Jikan APIs.</li>
<li class="my-0">❤️ <strong>Custom Hooks for Favorites:</strong> Easily manage user preferences with a simple favorites system.</li>
<li class="my-0">🌈 <strong>Theme Toggle:</strong> Switch between light and dark modes for a personalized experience.</li>
<li class="my-0">📱 <strong>Responsive Design with Tailwind CSS:</strong> Ensure a visually appealing layout on all devices.</li>
<li class="my-0">⏳ <strong>Error Handling and Loading States:</strong> Enhance user experience with feedback during data fetching.</li>
</ul>
<hr>
<h2>Getting Started</h2>
<h3>Prerequisites</h3>
<p>This project requires the following dependencies:</p>
<ul class="list-disc pl-4 my-0">
<li class="my-0"><strong>Programming Language:</strong> JavaScript</li>
<li class="my-0"><strong>Package Manager:</strong> Npm</li>
</ul>
<h3>Installation</h3>
<p>Build RabFlix_Movies from the source and intsall dependencies:</p>
<ol>
<li class="my-0">
<p><strong>Clone the repository:</strong></p>
<pre><code class="language-sh">❯ git clone https://github.com/rafiqwe/RabFlix_Movies
</code></pre>
</li>
<li class="my-0">
<p><strong>Navigate to the project directory:</strong></p>
<pre><code class="language-sh">❯ cd RabFlix_Movies
</code></pre>
</li>
<li class="my-0">
<p><strong>Install the dependencies:</strong></p>
</li>
</ol>
<p><strong>Using <a href="https://www.npmjs.com/">npm</a>:</strong></p>
<pre><code class="language-sh">❯ npm install
</code></pre>
<h3>Usage</h3>
<p>Run the project with:</p>
<p><strong>Using <a href="https://www.npmjs.com/">npm</a>:</strong></p>
<pre><code class="language-sh">npm start
</code></pre>
<h3>Testing</h3>
<p>Rabflix_movies uses the {<strong>test_framework</strong>} test framework. Run the test suite with:</p>
<p><strong>Using <a href="https://www.npmjs.com/">npm</a>:</strong></p>
<pre><code class="language-sh">npm test
</code></pre>
<hr>
<div align="left" class=""><a href="#top">⬆ Return</a></div>
<hr></div></div></div></div><div data-state="inactive" data-orientation="horizontal" role="tabpanel" aria-labelledby="radix-:r15:-trigger-edit" hidden="" id="radix-:r15:-content-edit" tabindex="0" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"></div></div>
