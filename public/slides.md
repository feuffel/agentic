
<!-- .slide: data-background-iframe="vanta-bg.html?v=2" data-background-color="#000000" class="dark-slide" -->

# Agentic AI

### From Concepts To Code

Note:
Welcome to this presentation on Agentic AI. We'll explore what makes AI systems truly autonomous, how they're built, and where the field is headed.

---

<!-- .slide: class="compact-slide" -->

## Agenda

<div class="agenda-columns">
<ol>
<li>What is Agentic AI?</li>
<li>Spectrum of autonomy</li>
<li>Core architecture</li>
<li>Tool use & function calling</li>
<li>The ReAct pattern</li>
<li>Planning strategies</li>
<li>Memory systems</li>
</ol>
<ol start="8">
<li>Multi-agent systems</li>
<li>Real-world applications</li>
<li>Safety & alignment</li>
<li>Building your first agent</li>
<li>Frameworks & tools</li>
<li>The road ahead</li>
</ol>
</div>

Note:
Here's a roadmap of what we'll cover today.

---

## What Is Agentic AI?

> An **agent** is a system that uses an LLM to decide the control flow of an application.

- Goes beyond simple prompt → response <!-- .element: class="fragment" -->
- Perceives, reasons, plans, and **acts** <!-- .element: class="fragment" -->
- Operates with a degree of **autonomy** <!-- .element: class="fragment" -->

Note:
Unlike a chatbot that only responds to questions, an agentic system takes initiative, uses tools, and pursues goals over multiple steps.

---

## Spectrum of AI Autonomy

| Level | Description | Example |
|-------|------------|---------|
| 🔹 Chat | Single turn Q&A | ChatGPT |
| 🔹 CoT | Multi-step reasoning | Chain-of-thought |
| 🔸 Tool use | Calls external APIs | Function calling |
| 🔸 Agentic | Autonomous loops | Coding agents |
| 🟠 Multi-agent | Collaborating agents | Research swarms |

Note:
Agentic AI sits on a spectrum. Not every system needs full autonomy — pick the right level for your use case.

---

<!-- .slide: class="compact-code" -->

## Core Architecture

```text
         ┌──────────────┐
         │   User Goal   │
         └──────┬───────┘
                ▼
         ┌──────────────┐
    ┌───▶│   LLM Core   │◀──┐
    │    └──────┬───────┘   │
    │           ▼           │
    │    ┌──────────────┐   │
    │    │   Planner     │   │
    │    └──────┬───────┘   │
    │           ▼           │
    │    ┌──────────────┐   │
    │    │  Tool Router  │   │
    │    └──────┬───────┘   │
    │           ▼           │
    │    ┌──────────────┐   │
    └────│   Memory      │──┘
         └──────────────┘
```

Note:
The core loop: the LLM reasons about the goal, plans next steps, calls tools, stores results in memory, and repeats until the task is done.

---

<!-- .slide: class="compact-code" -->

## Tool Use & Function Calling

```json
{
  "name": "search_web",
  "description": "Search the web for a query",
  "parameters": {
    "type": "object",
    "properties": {
      "query": {
        "type": "string",
        "description": "The search query"
      }
    },
    "required": ["query"]
  }
}
```

- LLM chooses **which** tool and **what** arguments <!-- .element: class="fragment" -->
- Runtime executes the tool and returns results <!-- .element: class="fragment" -->
- LLM interprets results and decides next action <!-- .element: class="fragment" -->

Note:
Tool definitions use JSON Schema. The model doesn't execute anything — it outputs structured requests that your code fulfills.

---

<!-- .slide: class="compact-code" -->

## The ReAct Pattern

**Re**asoning + **Act**ing in an interleaved loop:

```text
Thought: I need to find the current weather in Paris.
Action:  get_weather(location="Paris")
Observation: 18°C, partly cloudy
Thought: Now I can answer the user's question.
Answer:  It's 18°C and partly cloudy in Paris.
```

- Combines chain-of-thought with tool use <!-- .element: class="fragment" -->
- Self-corrects by observing results <!-- .element: class="fragment" -->
- Naturally produces an audit trail <!-- .element: class="fragment" -->

Note:
ReAct was introduced by Yao et al. (2022). It's the most common pattern in agentic systems today because it's simple and effective.

---

## Planning Strategies

How agents break down complex goals

----

<!-- .slide: class="compact-code" -->

### Task Decomposition

Break a big goal into manageable sub-tasks:

```text
Goal: "Write a blog post about quantum computing"

Plan:
  1. Research recent breakthroughs
  2. Create an outline
  3. Draft introduction
  4. Write each section
  5. Add code examples
  6. Review and edit
```

- Top-down decomposition <!-- .element: class="fragment" -->
- Each step is independently verifiable <!-- .element: class="fragment" -->

Note:
Good decomposition is the key to reliable agents. Each sub-task should be small enough that the LLM can handle it in one pass.

----

<!-- .slide: class="compact-code" -->

### Reflection & Self-Critique

Agents that evaluate their own output:

```text
Draft:  "Quantum computing uses qubits..."
Critic: "Too vague. Add specific examples
         and explain superposition."
Revise: "Quantum computing leverages qubits,
         which exploit superposition to exist
         in multiple states simultaneously..."
```

- Generate → Critique → Revise loop <!-- .element: class="fragment" -->
- Catches errors before they compound <!-- .element: class="fragment" -->

Note:
Reflexion (Shinn et al. 2023) showed that self-critique significantly improves agent performance on complex tasks.

---

## Memory Systems

| Type | Duration | Example |
|------|----------|---------|
| **Working** | Current task | Conversation context |
| **Short-term** | Session | Scratchpad / notes |
| **Long-term** | Persistent | Vector DB, files |

- **Retrieval-Augmented Generation** (RAG) for long-term recall <!-- .element: class="fragment" -->
- Embeddings + vector search for semantic retrieval <!-- .element: class="fragment" -->
- Structured memory (knowledge graphs) for relationships <!-- .element: class="fragment" -->

Note:
Without memory, agents repeat mistakes and lose context. Memory systems let agents learn from experience and maintain coherence over long tasks.

---

<!-- .slide: class="compact-code" -->

## Multi-Agent Systems

```text
┌──────────┐    ┌──────────┐    ┌──────────┐
│ Planner  │───▶│ Coder    │───▶│ Reviewer │
└──────────┘    └──────────┘    └──────────┘
      │                               │
      └───────────◀───────────────────┘
                feedback
```

- **Specialization** — each agent has a focused role <!-- .element: class="fragment" -->
- **Debate** — agents challenge each other's reasoning <!-- .element: class="fragment" -->
- **Orchestration** — a supervisor routes tasks <!-- .element: class="fragment" -->

Note:
Multi-agent architectures mirror how human teams work. Different models or prompts can specialize in different roles.

---

## Real-world applications

<div class="grid-2col">
  <div class="grid-cell">
    <h4>Software Engineering</h4>
    <p>Coding agents (Claude Code, Copilot, Cursor)</p>
  </div>
  <div class="grid-cell">
    <h4>Research</h4>
    <p>Literature review, hypothesis generation</p>
  </div>
  <div class="grid-cell">
    <h4>Data Analysis</h4>
    <p>Autonomous EDA and reporting</p>
  </div>
  <div class="grid-cell">
    <h4>Customer Support</h4>
    <p>Multi-step issue resolution</p>
  </div>
  <div class="grid-cell">
    <h4>DevOps</h4>
    <p>Incident response and remediation</p>
  </div>
  <div class="grid-cell">
    <h4>Finance</h4>
    <p>Portfolio analysis, compliance automation</p>
  </div>
</div>

Note:
Coding agents are the most mature agentic application today. They can write, test, debug, and commit code with minimal human oversight.

---

<iframe data-src="market-cap-losses.html" width="1920" height="1080" frameborder="0" style="border:none; max-width:100%; max-height:100%;"></iframe>

Note:
The DeepSeek R1 release triggered significant market cap losses across major software companies in late January 2026 — a sign of how seriously the market takes agentic AI disruption.

---

<iframe data-src="systemization_of_things.html" width="1920" height="1080" frameborder="0" style="border:none; max-width:100%; max-height:100%;"></iframe>

Note:
An animated timeline of software systemization from 2002 to 2016 — tracking the evolution from a single progressing system to a full suite of 15 integrated applications managing millions of work hours.

---

<!-- .slide: class="compact-slide" -->

## Safety & Alignment

### Key Challenges

- **Goal misalignment** — optimizing the wrong objective <!-- .element: class="fragment" -->
- **Reward hacking** — finding shortcuts that satisfy metrics but miss intent <!-- .element: class="fragment" -->
- **Uncontrolled autonomy** — acting without human checkpoints <!-- .element: class="fragment" -->

### Mitigations <!-- .element: class="fragment" -->

- Human-in-the-loop approval gates <!-- .element: class="fragment" -->
- Sandboxed execution environments <!-- .element: class="fragment" -->
- Scope limits and budget constraints <!-- .element: class="fragment" -->
- Audit logs and observability <!-- .element: class="fragment" -->

Note:
Safety isn't optional. Every production agent needs guardrails. The key principle: make it easy to supervise and hard to cause harm.

---

<!-- .slide: class="compact-code compact-slide-xs" -->

## Building Your First Agent

```python
import anthropic

client = anthropic.Anthropic()
tools = [{"name": "get_weather", "description": "...",
          "input_schema": {...}}]

messages = [{"role": "user",
             "content": "What's the weather in Paris?"}]

while True:
    response = client.messages.create(
        model="claude-sonnet-4-5-20250929",
        max_tokens=1024,
        tools=tools,
        messages=messages,
    )
    if response.stop_reason == "tool_use":
        result = execute_tool(response)  # your code
        messages.append({"role": "assistant",
                         "content": response.content})
        messages.append({"role": "user",
                         "content": [result]})
    else:
        break  # final answer
```

Note:
This is the minimal agentic loop. The key insight: it's just a while loop that keeps calling the API until the model stops requesting tools.

---

## Frameworks & Tools

| Framework | Language | Strength |
|-----------|----------|----------|
| **Claude Code** | CLI | Full coding agent |
| **LangGraph** | Python | Stateful graphs |
| **CrewAI** | Python | Multi-agent roles |
| **AutoGen** | Python | Conversational agents |
| **Mastra** | TypeScript | TS-native agents |
| **Vercel AI SDK** | TypeScript | Streaming + UI |

Note:
You don't always need a framework. Start with a simple loop, then adopt a framework when you need state management, complex routing, or multi-agent orchestration.

---

## The Road Ahead

- **Longer autonomy** — agents that work for hours, not seconds <!-- .element: class="fragment" -->
- **Better planning** — more reliable decomposition and recovery <!-- .element: class="fragment" -->
- **Richer tool ecosystems** — MCP, standardized protocols <!-- .element: class="fragment" -->
- **Computer use** — agents that operate GUIs directly <!-- .element: class="fragment" -->
- **Formal verification** — provable safety guarantees <!-- .element: class="fragment" -->

Note:
We're still early. The gap between what agents can do in demos vs production is closing fast, but reliability and safety remain the key challenges.

---

## Key Takeaways

1. Agentic AI = LLM + tools + loops + memory
2. Start simple — a while loop is enough
3. ReAct is the dominant pattern
4. Planning and memory unlock complex tasks
5. Safety guardrails are non-negotiable

Note:
Remember: the simplest agent is just a loop. Build from there, adding complexity only as needed.

---

## Claude

<img src="claude_shannon.png" alt="Claude Shannon" style="max-height: 55vh; max-width: 80vw; object-fit: contain;" />

---

<iframe data-src="clawd-walk.html" width="1700" height="950" frameborder="0" style="border:none; max-width:95%; max-height:95%;"></iframe>

---

<!-- .slide: data-background-color="#000000" class="dark-slide" -->

# Thank You

### Questions?

<br>

Press **S** for speaker notes throughout this deck

Note:
Thank you for attending! Happy to take questions about any of the topics we covered.
