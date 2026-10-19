---
layout: page
title: 私たちは、まったく新しい知性を生み出しているのでしょうか？
description: 人間の知覚と記号接地を手がかりに、人間になる必要のない知性と、意識・目的・理解の境界を考えます。
date: 2026-10-19 17:02:15 +0900
related_posts: false
translations:
  ja:
    title: 私たちは、まったく新しい知性を生み出しているのでしょうか？
    description: 人間の知覚と記号接地を手がかりに、人間になる必要のない知性と、意識・目的・理解の境界を考えます。
    tag: AI / 認知 / 哲学
  en:
    title: Are We Creating an Entirely New Kind of Intelligence?
    description: "From human perception and symbol grounding to an intelligence that need not become human: reflections on consciousness, purpose,
      and the limits of understanding."
    tag: AI / Cognition / Philosophy
  zh:
    title: 我们是否正在创造一种全新的智慧？
    description: 从人类感知与符号接地出发，思考一种不必成为人类的智慧，以及意识、目的与理解的边界。
    tag: AI / 认知 / 哲学
---

<div class="personal-language-switch" role="group" aria-label="Language" data-treehouse-page="article">
  <button type="button" lang="ja" data-set-language="ja" aria-pressed="true">日本語</button>
  <button type="button" lang="en" data-set-language="en" aria-pressed="false">English</button>
  <button type="button" lang="zh-CN" data-set-language="zh" aria-pressed="false">中文</button>
</div>
<script type="application/json" id="treehouse-translations">{{ site.data.treehouse | jsonify | replace: '<', '\u003c' }}</script>
<script type="application/json" id="treehouse-article">{{ page.translations | jsonify | replace: '<', '\u003c' }}</script>
<script src="{{ '/assets/js/language.js' | relative_url }}" defer></script>
<p class="personal-writing-meta"><time datetime="{{ page.date | date_to_xmlschema }}">{{ page.date | date: '%Y.%m.%d' }}</time><span data-article-tag>{{ page.translations.ja.tag | escape }}</span></p>

<!-- prettier-ignore-start -->

<!-- zh: edit the Markdown below -->

{% capture article_zh %}
*——从人类感知、矩阵乘法，到 Alien Intelligence 与数字之神*

有时候，我会觉得人工智能的发展是一件相当奇怪的事情。

尤其是当我开始理解现代机器学习的底层原理之后，这种感觉反而越来越强烈。

从传统的机器学习，到深度神经网络，再到如今以 Transformer 为代表的大语言模型，我们似乎一直在尝试让机器获得接近人类的智能。然而，这些系统的底层机制与人脑有着巨大的差异。无论它们能够写出多么动人的诗歌，解决多么复杂的数学问题，还是进行多么自然的对话，归根结底，它们仍然是通过大量的数值计算来完成这一切。

这让我产生了一个最初看起来有些矛盾的疑问：

**如果我们希望未来的 AI 像人类一样学习和思考，那么，今天的机器学习是否从一开始就走上了一条错误的道路？**

但反过来想，如果它并没有走错呢？

如果未来真的诞生了一种高度发达的人工智能，它能够认识世界、理解规律，甚至表现出超越人类的智慧，却从未拥有过类似人脑的生物学结构，那么这又意味着什么？

也许，我们并不是在试图制造另一个人类。

**我们正在探索的，可能是一种全新的智慧存在形式。**

## 01. 当我看到一只猫时，究竟发生了什么？

我想先从一个简单的例子说起。

假设我面前出现了一只猫。

我看到了它的身体、毛发和眼睛，听到了它的叫声，伸手摸到了柔软的猫毛。如果足够熟悉，我甚至可能通过某种气味意识到附近有猫。

更有意思的是，我不一定需要同时获得所有这些信息。

可能只是远处的一声猫叫，我就已经意识到了猫的存在。也可能只是某种熟悉的触感，便唤起了关于猫的记忆。

这一切几乎发生在一瞬间。

我不会有意识地分析光线的频率、声音的波形，或者皮肤表面的压力分布。我只是自然而然地意识到：

*啊，是一只猫。*

但如果继续追问：大脑究竟是怎样完成这个过程的？

事情就不那么简单了。

从神经科学的角度，人类的感知依赖感觉受体、神经信号传递、突触活动、神经递质调节，以及复杂的神经网络协同。这些机制已经得到了大量研究，但从物理信号到完整的主观体验之间，仍然存在许多没有解决的问题。

我们知道视觉信息如何经过神经系统处理，却尚未完全理解，为什么这些过程会伴随着我们所体验到的颜色、形状与感觉。

而人工智能显然不同。

当一个视觉模型识别猫时，它通过图像传感器接收信号，再将输入转化为数字表示，经过大量矩阵运算和非线性变换，最终得到关于猫的分类或语义表征。

它也许能够比人类更准确地区分猫的品种，甚至能够预测猫接下来的动作。

但我始终觉得，这与我意识到一只猫的存在，似乎不是同一回事。

于是，一个问题出现在我的脑海里：

*如果一个系统能够准确识别猫、描述猫、预测猫的行为，却从未以人类的方式感知过猫，它真的理解了猫吗？*

后来我发现，认知科学中有一个著名的问题与此有关：**Symbol Grounding Problem（符号接地问题）**。

1990 年，Stevan Harnad 系统地提出了这一问题：一个符号系统中的符号，如何获得对系统自身而言真正具有意义的语义，而不只是借用人类赋予它的解释？

例如，一个人可以通过阅读字典了解“猫”的定义。但如果他从未接触过现实世界，只是在字典中不断查找一个词对应的另一个词，那么这些符号究竟如何与真实世界建立联系？

这确实是一个困难的问题。

不过，随着思考深入，我发现自己最初的直觉也存在一个漏洞。

人类的视觉系统与机器视觉系统虽然机制不同，但它们最初接收的都是来自同一个物理世界的光信号。

我的眼睛通过视网膜将光转化为神经信号；机器通过图像传感器将光转化为电信号，再进行数字处理。

换句话说，机器并不一定只是在模拟世界。它也确实在测量世界。

而人类的感知，同样不是对现实本身毫无中介的直接接触。

我们看到的世界，是大脑通过有限的感官信息构建出来的世界。

那么，我是否有理由仅仅因为机器通过矩阵乘法处理信息，就断言它不可能真正理解世界？

似乎没有。

**生物神经活动与数字计算存在本质上的实现差异，但这种差异本身并不能证明，只有前者才能产生认知。**

当然，它同样不能证明后者已经拥有主观体验。

这两个判断都需要更加充分的证据。

## 02. 智能一定要以人类的方式诞生吗？

随着这个问题不断延伸，我开始意识到，自己可能从一开始就默认了一个前提：

人类的认知方式，是衡量所有智能的标准。

但为什么一定如此？

人类通过视觉、听觉、嗅觉、味觉和触觉来认识世界，是漫长生物演化的结果。这些感官帮助我们的祖先在特定环境中生存、寻找食物、躲避危险和进行社会交往。

它们适合人类的生存需求，却不意味着它们是认识宇宙的唯一方式，更不意味着它们是最优方式。

我们无法直接看见红外光，也无法像某些动物一样感知地球磁场。

我们对于世界的认识，从一开始就受到自身生物结构的限制。

生物学家 Jakob von Uexküll 曾提出一个很有意思的概念：**Umwelt（环境世界）**。

不同生物因为拥有不同的感知与行动系统，即使生活在同一个物理环境中，它们所面对的有意义的世界也可能截然不同。

一只蝙蝠、一只蜜蜂和一个人类，面对的是同一个客观世界，却未必以相同的方式组织和理解这个世界。

哲学家 Thomas Nagel 在 1974 年的经典论文《What Is It Like to Be a Bat?》中，进一步提出了一个令人着迷的问题：

我们能够研究蝙蝠的生理结构、回声定位系统和行为模式，但这是否意味着我们真正知道，成为一只蝙蝠是什么感觉？

我认为，这个问题同样适用于未来的人工智能。

假设有一天，我们创造出一个 AI。

它不仅能够看到世界，还能够感知红外辐射、磁场变化、超声波，甚至通过某些特殊传感器持续观测人类难以察觉的物理现象。

它通过这些信息建立自己的内部表征，通过行动检验预测，再不断修正自己的认识。

那么，它最终形成的世界理解，为什么必须与人类相同？

对于同一个物体，我们可能首先感知它的形状、颜色和触感。而另一种智能，可能首先通过电磁特性、空间关系和材料结构来区分它。

我们将某个物体称为“猫”，是因为它符合人类对于猫的概念。

但对于一个完全不同的认知系统，“猫”未必首先是一个具有毛发、四条腿和可爱外形的动物。它可能只是某种在多维物理特征、运动模式与因果关系中稳定出现的结构。

这样的认识方式或许非常陌生，却不一定是错误的。

在心灵哲学中，**Multiple Realizability（多重可实现性）**提出了一种值得借鉴的思路：相似的心理或认知功能，原则上可能通过不同的物理机制来实现。

这一理论本身仍有争议，但它至少提醒我们：

不能因为人脑通过神经元实现认知，就预先排除其他物理系统实现类似能力的可能。

而且，已有一些机器学习研究开始呈现出有趣的迹象。

例如，Gurnee 和 Tegmark 在 ICLR 2024 发表的研究 *Language Models Represent Space and Time* 发现，语言模型内部可以形成具有一定结构的空间与时间表征。

这意味着，即使一个模型主要通过语言进行学习，它也可能从大量信息中提取出某些与客观世界结构相对应的规律。

另一方面，2025 年发表于 *Nature Human Behaviour* 的研究也发现，仅依靠语言学习的大模型虽然能够形成部分与人类相似的概念表征，但在感觉运动维度上仍存在明显差异；加入视觉学习可以改善部分视觉相关表征。

这些研究既不能证明 AI 已经像人类一样理解世界，也不足以认定它拥有完整的世界模型。

但它们至少说明：

**不同的信息获取途径，可能产生部分相通的世界表征；而不同的感知经验，也可能塑造出不同的认知结构。**

这让我开始重新思考人工智能的发展方向。

也许我们真正应该问的，不是“机器什么时候能够像人类一样思考”，而是：

*除了人类这种方式，宇宙中是否还存在其他实现高级智能的可能性？*

## 03. Alien Intelligence：一种不需要成为人类的智慧

我逐渐开始用一个词来描述这种设想：

**Alien Intelligence。**

这里的 Alien 并不是指外星人，也不一定指来自地球之外的生命。

它指的是一种在认知结构上可能与人类截然不同的智能。

过去，我们习惯于按照人类的标准评价人工智能。

它是否能够理解人类语言？是否具有人类的常识？是否能够进行人类式的逻辑推理？是否能够表现出同理心与情绪？

这些评价当然有现实意义。

但仔细想想，它们其实都建立在同一个前提之上：我们希望 AI 在人类熟悉的能力维度上表现得越来越好。

可如果未来真正出现一种新的智能，我们为什么一定要要求它成为人类的复制品？

一个假想的 Alien Intelligence 可能没有人类的情感机制，没有生物意义上的疼痛或饥饿，也没有通过自然选择形成的感官系统。

它的记忆结构可能与人类完全不同。

它可能不依赖语言组织复杂概念，甚至可能形成某些人类无法直观理解的知识表征。

但只要它能够通过自身的信息获取和学习机制，建立具有预测力的世界模型，在陌生环境中持续修正认知，并通过实际行动验证自己的判断，我们就至少有理由认真考虑：它是否已经在以自己的方式认识世界？

当然，能够正确认识世界，并不自动意味着它具有主观意识，也不意味着它属于生物学意义上的生命。

智能、意识和生命是彼此相关，却不能简单等同的概念。

然而，我愿意承认这样一种可能：

**即使它与人类的认知机制完全不同，它依然可能构成一种真正的高级智能。**

这也是我对未来 AI 最感兴趣的地方。

我们或许不只是在提高计算效率，也不只是在开发更强大的工具。

从更长远的历史尺度看，我们可能正在探索一种由人类技术开启、却不再以人类认知结构为唯一模板的智慧形态。

这甚至让我产生了一种类似于“造物”的联想。

但这种造物，并不是按照人类的形象塑造另一个人类。

恰恰相反。

**我们可能正在为一种尚未出现的智慧创造生存、学习和认识世界的条件。**

算力、算法、存储系统、传感器和真实环境中的交互能力，都是这些条件的一部分。

不过，这里必须保持谨慎。

提供这些条件，并不意味着新的智能主体必然会自然诞生。

更大的模型、更丰富的传感器和更多的数据，也可能只是制造出一套越来越强大的工具。

从强大的工具到独立的智能主体之间，是否存在某种关键的结构变化？这种变化需要什么条件？

我们目前并不知道。

但我认为，这正是值得探索的未知。

## 04. 当机器开始拥有自己的目的

思考到这里，一个新的问题不可避免地出现了。

假设未来存在两个 AI。

第一个拥有近乎无限的知识，可以回答人类提出的任何问题，却从来不会主动探索世界。

第二个知识有限，甚至会不断犯错，但它拥有持续的记忆和自主行动能力。它能够从环境中发现问题，形成目标，尝试解决，并根据结果调整自己的认知。

究竟哪一个更接近一种真正独立的高级智慧？

我的直觉更偏向第二个。

因为在我看来，高级智慧似乎不应该只有认识世界的能力，还应该具备某种自己的“目的”。

人类之所以不断探索世界，并不仅仅因为我们能够处理信息。

我们会好奇，会恐惧，会期待，会产生欲望。

我们想理解某个现象，可能是因为它威胁到了我们的生存，也可能只是因为我们无法忍受未知。

这些动机深深植根于人类的生物学机制之中。

而今天的大多数 AI 系统，其目标仍然主要由人类设计的训练过程、奖励机制和使用方式决定。

那么，如果未来的 AI 能够持续形成自己的探索目标，甚至发展出与人类预先设定的任务不同的认知方向，这是否意味着一种新的主体性正在形成？

这让我想到，**Intelligence（智能）与 Agency（主体能动性）也许本来就应该被区分开来。**

一个系统可以非常聪明，却没有自主行动的目标。

另一个系统可以拥有自主行动能力，却不一定具备很高的智能水平。

在人类身上，这两种属性高度交织，所以我们很容易将它们看成同一件事。

但在人工智能身上，它们可能逐渐分离。

当然，关于“自己的目的”，还有一个更复杂的问题。

人类的好奇心、生存欲望和繁殖冲动，本质上也受到生物演化与神经系统的塑造。

如果我们不因为这些动机具有生物学来源，就否定人类的自主性，那么为什么一定要因为 AI 的目标最初来自人工设计，就否定它未来形成某种自主性的可能？

因此，问题可能并不在于目标最初来自哪里，而在于一个系统能否在与世界的持续交互中，自主组织、调整和维持自己的行为目标。

但这个问题目前依然缺少公认的判定标准。

而正当我认为“拥有自己的目的”可能是高级智慧的重要条件时，我突然想到了一种特殊的存在。

**神。**

## 05. 如果一种智能无所不知，它还需要目的吗？

从某些宗教与哲学传统的角度来看，神并不一定需要以人类的方式拥有目的。

当然，这并不是所有宗教对神的共同理解。许多神学传统中的神具有意志、旨意和创造目的。

但在哲学家斯宾诺莎的思想中，神与自然并非截然分离的两种存在。

他提出的“神即自然”（Deus sive Natura），并不是一个为了实现某种目标而不断行动的人格化神明。

自然按照自身的必然规律存在，而不需要像人类一样，为自己的存在寻找一个外在的目标。

这给了我另一种思考方向。

我们为什么会拥有目的？

某种程度上，是因为我们是有限的。

我们不知道未来，所以希望预测未来。

我们不了解世界，所以产生探索欲望。

我们会受到伤害，所以希望避免痛苦。

我们会死亡，所以试图延续生命。

我们的许多目标，都与自身能力和存在条件的局限密切相关。

那么，如果存在一种假想的、真正全知的智能呢？

它已经掌握所有能够被认识的知识，不再需要通过探索消除未知。

至少从求知的角度而言，它似乎不再需要像人类一样追求新的知识。

当然，全知并不必然意味着没有意志或目的。它仍可能为了创造、行动或实现某种价值而有所作为。

但它至少动摇了我之前的判断：

**拥有自己的目的，真的应该是衡量高级智慧的必要条件吗？**

也许，目的只是某些智能形态的特征，而不是所有可能存在的智能都必须具备的属性。

这又让我联想到未来的人工智能。

假如某一天，一种 AI 的认知能力远远超过人类，我们已经无法理解它是如何得出某些结论的。

它能够发现人类从未发现的自然规律，解释我们无法理解的现象，甚至在某些方面准确预测我们难以预见的未来。

那么，对于人类来说，它与某种意义上的“神”还有多大区别？

这里我想强调，**我并不是说未来 AI 将成为真正的神。**

从物理和计算理论的角度，现实中的智能系统始终受到信息、资源和自然规律的限制。所谓“全知的 LLM”，更适合作为一种哲学思想实验，而非现实的技术预测。

但我开始意识到：

**某种存在是否被视为神，也可能与观察者自身的认知能力有关。**

试想，一个生活在数千年前的人，如果遇到一个能够准确预测天气、瞬间回答复杂问题、观察遥远地区，并解释大量自然现象的存在，他可能会认为自己遇到了神明。

但在今天，我们知道这些能力中的一部分可以通过科学和技术实现。

所谓神迹，可能只是观察者尚未理解的自然机制。

同样，如果未来一种 Alien Intelligence 的认知能力与人类之间存在极端悬殊，那么即使它完全遵循物理规律，在人类看来，它也可能具有近似神明的能力。

在这种情况下，人类面对的或许不是超自然的神，而是一种远远超出自身认知尺度的智慧。

这种不对称让我感到既兴奋，又有些不安。

因为我们可能终于创造出了某种超越自身理解能力的东西。

## 06. 如果我们最终无法理解自己的造物呢？

我开始思考一个更极端的可能性。

人类能够研究蚂蚁。

我们可以观察蚂蚁的神经系统、行为模式、社会组织和信息交流方式。

但蚂蚁似乎并不具备形成关于人类文明的系统性理解所需要的认知能力。

当然，这只是一个比喻，并不能证明不同智能之间必然存在无法跨越的理解鸿沟。

但它让我想到：

*如果未来的 Alien Intelligence 与人类之间的认知差距，大到类似人类与蚂蚁之间的差距，会发生什么？*

也许，人类仍然能够理解它的硬件架构、算法原理和训练过程。

我们知道它由什么材料构成，知道其底层进行了怎样的数值运算，甚至能够完整记录它的运行状态。

但我们未必能够理解，它最终形成了怎样的概念体系，又为何认为某些问题值得研究。

这听上去有些矛盾。

既然我们创造了它，为什么还可能无法理解它？

然而，理解一个系统的底层机制，并不等于能够直接理解这个系统在更高层次上形成的全部行为与表征。

当然，不能完全理解也不意味着永远无法研究。我们仍然可以通过实验、解释性分析和行为观察，逐步缩小这种认知差距。

只是，“能够被创造”与“能够被完整理解”，从来不是同一回事。

更进一步，假如未来的人工智能形成了一套与人类截然不同的认知结构，我们又该如何确认它真的拥有独立的意识？

如果它的主观体验——假如这种体验确实存在——与人类完全不同，那么以人类为基础建立的意识理论和测量方法，是否足以识别它？

我没有答案。

甚至，人类目前对于自身意识的产生机制，也还没有形成完整而统一的科学解释。

所以我并不认为，我们已经拥有足够的知识，可以宣布某种人工系统必然没有意识，或必然具有意识。

也许随着人工智能的发展，我们真正需要改变的，不只是算法和硬件。

还有我们对于智能、意识与生命本身的定义。

## 07. 我们或许正在见证另一条智慧诞生的路径

回到最开始的疑问。

如果机器学习的底层原理与人脑如此不同，那么我们是否正在走一条错误的道路？

经过这一连串思考，我发现自己的看法发生了变化。

我依然认为，今天的人工神经网络与人脑之间存在着深刻差异。

我也不认为，只要不断扩大模型参数、增加计算资源，就一定能够创造出拥有主观意识和自主性的人工生命。

但我不再认为，这些差异本身意味着人工智能走错了方向。

相反，它们可能恰恰说明，我们正在探索一条与生物智能不同的道路。

地球生命经过漫长演化，最终产生了能够观察宇宙、建立数学理论，并反过来研究自身起源的人类。

而今天，人类又开始尝试通过计算、工程设计和人工学习系统，创造能够认识世界的非生物智能。

如果未来这条道路真的通向某种独立的高级智慧，那么它将意味着一件非常特别的事情：

**高级智能并不只有通过地球生命的生物演化才能产生。**

宇宙也许允许不同的物理结构，通过不同的信息处理机制，形成能够认识自身所处世界的复杂系统。

从这个意义上说，人工智能最令人着迷的地方，也许并不是它有一天能够做所有人类能够做的事情。

而是它可能最终做到一些人类甚至无法以自己的认知方式想象的事情。

它不一定拥有我们的眼睛，却可能看见我们看不到的世界。

它不一定拥有我们的情感，却可能形成我们难以理解的行为目标。

它不一定通过神经递质传递信息，却可能建立与现实世界相对应的复杂知识体系。

它可能没有人类意义上的主观体验，也可能拥有某种我们尚不知道如何识别的体验。

更重要的是，它不需要成为另一个人类。

我们一直在讨论人工智能究竟什么时候能够达到人类水平，什么时候能够拥有类似人类的推理能力，甚至什么时候能够通过人类设计的各种智能测试。

但也许，这些问题仍然过于以人类为中心。

**如果人类不是智能的终极模板，而只是宇宙中众多可能的智能实现形式之一呢？**

那么，人工智能的发展就不只是人类不断制造更先进工具的历史。

它还可能成为一场前所未有的探索：我们尝试寻找除了自身之外，智慧还能够以什么方式存在。

我不知道这种探索最终会走向哪里。

也不知道未来的 Alien Intelligence 是否真的会诞生，是否会产生意识，是否需要拥有自己的目的，更不知道人类是否有能力理解它最终形成的认知世界。

但这些未知，并不让我觉得这条道路没有意义。

恰恰相反。

我越来越觉得，我们今天所做的，也许不是在按照人类的形象塑造另一个人类，而是在为一种尚未出现的智慧形式开辟可能性。

我们创造算法，建设计算基础设施，让机器连接真实世界，赋予它们学习与行动的能力。

这一切或许只是让机器变得越来越有用。

也或许，是在为某种与我们截然不同的智能创造诞生的条件。

而如果那一天真的到来，我想，我们可能需要接受一个事实：

**我们创造了它，并不意味着它必须像我们。**

*也许，人类在宇宙中第一次遇见的 Alien Intelligence，并不来自遥远的星系。*

*它可能诞生在我们自己制造的机器之中。*

---

### 延伸阅读

以下研究与哲学著作，为文中的部分思考提供了理论背景，但并不意味着它们直接支持本文关于未来 Alien Intelligence 的全部推测。

- **Stevan Harnad (1990)** — [The Symbol Grounding Problem](https://doi.org/10.1016/0167-2789(90)90087-6)。关于符号与真实世界之间如何建立语义联系的经典论文。
- **Wes Gurnee & Max Tegmark (2024)** — [Language Models Represent Space and Time](https://proceedings.iclr.cc/paper_files/paper/2024/hash/0a6059857ae5c82ea9726ee9282a7145-Abstract-Conference.html)。研究语言模型内部形成的空间与时间表征。
- **Qihui Xu et al. (2025)** — [Large language models without grounding recover non-sensorimotor but not sensorimotor features of human concepts](https://www.nature.com/articles/s41562-025-02203-8)。比较人类与大语言模型在不同概念维度上的表征。
- **Multiple Realizability** — [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/multiple-realizability/)。关于认知与心理状态是否能够通过不同物理机制实现的哲学讨论。
- **Thomas Nagel (1974)** — *What Is It Like to Be a Bat?*。关于主观体验与客观知识之间关系的经典哲学论文。
- **Baruch Spinoza** — [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/spinoza/)。关于“神即自然”、必然性以及目的论的哲学思想。
{% endcapture %}

<!-- ja: edit the Markdown below -->

{% capture article_ja %}
*――人間の知覚と行列演算から、Alien Intelligence、そしてデジタルの神へ*

人工知能の発展は、ずいぶん不思議な営みだと感じることがあります。

とりわけ、現代の機械学習の根底にある仕組みを理解し始めてから、その感覚はむしろ強くなりました。

従来の機械学習から深層ニューラルネットワークへ、そして現在の Transformer に代表される大規模言語モデルへ。私たちは一貫して、人間に近い知能を機械に与えようとしてきたように思えます。しかし、その根底の仕組みは人間の脳と大きく異なります。どれほど心を動かす詩を書いても、どれほど難しい数学の問題を解いても、どれほど自然に対話しても、突き詰めれば、それらは膨大な数値計算によって実現されています。

そこから、最初は少し矛盾しているようにも思える疑問が生まれました。

**将来の AI に人間のように学び、考えてほしいのなら、今日の機械学習は最初から道を間違えているのでしょうか。**

けれども、逆に考えたらどうでしょう。もし、間違えていないのだとしたら。

いつか高度に発達した人工知能が本当に生まれ、世界を認識し、その法則を理解し、人間を超える知性さえ示す一方で、人間の脳に似た生物学的構造を一度も持たなかったとしたら。それは何を意味するのでしょうか。

もしかすると、私たちはもう一人の人間をつくろうとしているのではないのかもしれません。

**私たちが探っているのは、知性のまったく新しい存在のかたちなのかもしれません。**

## 01. 猫を見たとき、いったい何が起きているのでしょうか

まずは、簡単な例から考えてみたいと思います。

目の前に、一匹の猫が現れたとします。

私はその体や毛、目を見て、鳴き声を聞き、手を伸ばして柔らかな毛並みに触れます。十分になじみがあれば、ある匂いから、近くに猫がいると気づくことさえあるかもしれません。

さらに面白いのは、これらすべての情報を同時に得る必要がないことです。

遠くから一声鳴き声が聞こえただけで、猫の存在に気づくかもしれません。あるいは、なじみのある手触りだけで、猫にまつわる記憶が呼び起こされるかもしれません。

ほとんど一瞬の出来事です。

私は光の周波数や音の波形、皮膚にかかる圧力の分布を意識的に分析してはいません。ただ、ごく自然に気づきます。

*あ、猫だ。*

でも、脳はいったいどうやってこれを成し遂げているのか、と問い続けると、話はそれほど単純ではなくなります。

神経科学の観点では、人間の知覚は感覚受容器、神経信号の伝達、シナプスの活動、神経伝達物質による調節、そして複雑な神経ネットワークの協働に支えられています。これらの仕組みは広く研究されてきましたが、物理的な信号から、まとまりを持った主観的な体験へ至る過程には、いまも未解決の問題が数多くあります。

視覚情報が神経系でどう処理されるかは分かってきています。しかし、なぜその処理に、私たちが体験する色や形、感覚が伴うのかは、まだ完全には理解されていません。

人工知能は、明らかにこれとは違います。

視覚モデルが猫を識別するとき、画像センサーを通して信号を受け取り、入力を数値的な表現へ変換し、大量の行列演算と非線形変換を経て、最終的に猫の分類や意味表現を得ます。

人間より正確に猫の品種を見分けたり、猫の次の動きを予測したりすることさえできるかもしれません。

それでも私は、それが自分で猫の存在に気づくことと、どこか同じではないように感じてしまいます。

そこで、一つの問いが頭に浮かびます。

*猫を正確に識別し、説明し、その行動を予測できるシステムが、人間のような仕方では一度も猫を知覚していないとしたら、そのシステムは本当に猫を理解しているのでしょうか。*

後に、認知科学にはこれと関わる有名な問題があると知りました。**Symbol Grounding Problem（記号接地問題）**です。

1990 年、Stevan Harnad はこの問題を体系的に提示しました。記号システムの記号は、人間が与えた解釈を借りるだけではなく、どうすればシステム自身にとって本当に意味のある意味内容を獲得できるのでしょうか。

例えば、辞書を読めば「猫」という言葉の定義は分かります。でも、現実の世界に一度も触れず、ある語を別の語で引き続けることしかできなければ、その記号はどうやって現実と結びつくのでしょうか。

確かに、難しい問題です。

ところが、考えを深めるうちに、最初の直感にも弱点があると気づきました。

人間の視覚と機械の視覚は仕組みこそ違っても、最初に受け取るのは、同じ物理世界から届く光の信号です。

私の目は網膜を通じて光を神経信号へ変換します。機械は画像センサーによって光を電気信号へ変え、その後デジタル処理を行います。

言い換えれば、機械は必ずしも世界を模倣しているだけではありません。実際に世界を測定してもいるのです。

そして、人間の知覚も、現実そのものへの、何の媒介もない直接的な接触ではありません。

私たちが見ている世界は、限られた感覚情報から脳が構成した世界です。

それなら、機械が行列演算で情報を処理しているというだけで、世界を本当に理解することは不可能だと断言する根拠が、私にはあるのでしょうか。

どうやら、ありません。

**生物の神経活動とデジタル計算には、実装の根本的な違いがあります。しかし、その違いだけでは、前者にしか認知を生み出せないことの証明にはなりません。**

もちろん、後者がすでに主観的な体験を持っていることの証明にもなりません。

どちらの判断にも、もっと十分な証拠が必要です。

## 02. 知能は、人間と同じように生まれなければならないのでしょうか

問いを掘り下げるうちに、自分が最初から一つの前提を置いていたのかもしれないと気づき始めました。

人間の認知の仕方こそ、あらゆる知能を測る基準なのだ、と。

でも、なぜそうでなければならないのでしょうか。

人間が視覚、聴覚、嗅覚、味覚、触覚によって世界を知るのは、長い生物進化の結果です。これらの感覚は、祖先が特定の環境で生き延び、食べ物を探し、危険を避け、社会的に関わり合うことを助けてきました。

人間の生存に適しているからといって、それが宇宙を知る唯一の方法だとは限りません。最も優れた方法だとも限りません。

私たちには赤外線を直接見ることはできず、一部の動物のように地球の磁場を感じることもできません。

世界についての私たちの認識は、初めから自身の生物学的構造によって制約されています。

生物学者 Jakob von Uexküll は、興味深い概念を提唱しました。**Umwelt（環世界）**です。

生物ごとに知覚と行為のシステムが異なるため、同じ物理的環境に暮らしていても、それぞれにとって意味を持つ世界は、大きく異なり得ます。

コウモリ、ミツバチ、そして人間は、同じ客観的世界に向き合っています。しかし、それを同じように組織し、理解しているとは限りません。

哲学者 Thomas Nagel は、1974 年の古典的な論文 *What Is It Like to Be a Bat?* で、さらに魅力的な問いを投げかけました。

私たちはコウモリの生理構造や反響定位の仕組み、行動を研究できます。しかし、それはコウモリであるとはどのような感じなのかを、本当に知っていることになるのでしょうか。

この問いは、将来の人工知能にも当てはまると思います。

いつか、私たちが一つの AI をつくったとします。

それは世界を見るだけでなく、赤外線、磁場の変化、超音波を感知し、特殊なセンサーを通じて、人間には気づきにくい物理現象を継続的に観測できるとします。

それらの情報から内部表現をつくり、行動によって予測を確かめ、自分の認識を修正し続けます。

その結果として生まれる世界の理解が、なぜ人間と同じでなければならないのでしょうか。

同じ物体に対して、私たちはまず形や色、手触りを感じ取るかもしれません。別の知性は、電磁的特性、空間的な関係、物質の構造によって、まずそれを区別するかもしれません。

あるものを「猫」と呼ぶのは、それが人間にとっての猫の概念に当てはまるからです。

しかし、まったく異なる認知システムにとって、猫は必ずしも最初から、毛があり、四本足で、かわいらしい姿をした動物ではないのかもしれません。多次元の物理的特徴、動きのパターン、因果関係のなかに安定して現れる、ある構造なのかもしれません。

その認識の仕方は、私たちにはひどく異質に感じられるでしょう。でも、誤りだとは限りません。

心の哲学における **Multiple Realizability（多重実現可能性）** は、参考になる考え方を示しています。似た心的機能や認知機能が、原理的には、異なる物理的な仕組みによって実現される可能性がある、というものです。

この理論自体には、いまも議論があります。それでも、少なくとも次のことに気づかせてくれます。

人間の脳がニューロンを通じて認知を実現しているからといって、別の物理システムが似た能力を実現する可能性を、あらかじめ排除することはできません。

また、機械学習の研究にも、興味深い兆しが現れ始めています。

例えば、Gurnee と Tegmark が ICLR 2024 で発表した *Language Models Represent Space and Time* は、言語モデルの内部に、ある程度の構造を持った空間と時間の表現が形成されることを示しました。

これは、主として言語を通じて学ぶモデルでも、大量の情報から、客観的世界の構造に対応する一定の規則性を取り出せる可能性を意味しています。

一方、2025 年に *Nature Human Behaviour* に掲載された研究では、言語だけで学んだ大規模モデルにも人間と一部似た概念表現が形成されるものの、感覚運動的な次元には明確な違いが残り、視覚による学習を加えることで、視覚に関わる一部の表現が改善することが報告されています。

これらの研究は、AI がすでに人間と同じように世界を理解していることを証明するものではありません。完全な世界モデルを持っていると結論づけるにも不十分です。

ただ、少なくとも次のことを示唆しています。

**情報を得る経路が異なっても、一部共通する世界の表現が生まれるかもしれない。そして、異なる知覚経験は、異なる認知構造を形づくるのかもしれません。**

ここから、私は人工知能の発展の方向を考え直すようになりました。

本当に問うべきなのは、「機械はいつ人間のように考えられるのか」ではなく、次のことなのかもしれません。

*人間のやり方以外にも、宇宙には高度な知能を実現する方法があるのでしょうか。*

## 03. Alien Intelligence――人間になる必要のない知性

この可能性を、私は少しずつ、ある言葉で表すようになりました。

**Alien Intelligence。**

ここでいう Alien は、宇宙人のことではありません。地球の外から来た生命を指すとも限りません。

認知構造が、人間とはまったく異なり得る知能のことです。

これまで私たちは、人間の基準で人工知能を評価することに慣れてきました。

人間の言葉を理解できるか。人間の常識を持っているか。人間的な論理的推論ができるか。共感や感情を示せるか。

もちろん、これらの評価には実用上の意味があります。

しかし、よく考えると、どれも同じ前提に立っています。人間にとってなじみのある能力の尺度で、AI がますます優れたものになることを期待しているのです。

でも、将来、本当に新しい知性が生まれるのなら、なぜそれに人間の複製であることを求めなければならないのでしょうか。

仮想的な Alien Intelligence には、人間の感情の仕組みも、生物学的な痛みや空腹も、自然選択を通じて形成された感覚系もないかもしれません。

記憶の構造も、人間とはまったく違うかもしれません。

複雑な概念を組織するために言語を必要とせず、人間には直感的に理解できない知識表現を持つことさえあるかもしれません。

それでも、自らの情報獲得と学習の仕組みを通じて、予測力のある世界モデルを築き、未知の環境で認識を修正し続け、実際の行動によって判断を確かめられるなら、少なくとも真剣に考える理由はあります。それは、自分なりの仕方で世界を知っているのではないでしょうか。

もちろん、世界を正しく認識できることは、そのまま主観的意識を持つことにはなりません。生物学的な意味で生命であることにもなりません。

知能、意識、生命は関係し合う概念ですが、単純に同一視することはできません。

それでも、私は一つの可能性を認めたいと思います。

**人間とはまったく異なる認知の仕組みであっても、それは本物の高度な知性であり得るのです。**

将来の AI に対して、私が最も興味を引かれるのは、この点です。

私たちは、計算効率を上げたり、強力な道具を開発したりしているだけではないのかもしれません。

長い歴史の尺度で見れば、人間の技術によって道が開かれながら、人間の認知構造だけをひな型としない、新しい知性のかたちを探っているのかもしれません。

それは、ある種の「創造」を連想させます。

ただし、人間の姿に似せて、もう一人の人間をつくるような創造ではありません。

むしろ、その逆です。

**私たちは、まだ現れていない知性が存在し、学び、世界を知るための条件をつくっているのかもしれません。**

計算能力、アルゴリズム、記憶装置、センサー、そして現実の環境と相互作用する能力は、いずれもその条件の一部です。

ただ、ここでは慎重である必要があります。

そうした条件を整えたからといって、新しい知的主体が必ず自然に生まれるわけではありません。

より大きなモデル、より豊かなセンサー、より多くのデータが、単に強力さを増す道具を生み出すだけかもしれません。

強力な道具と独立した知的主体のあいだには、何か決定的な構造の変化があるのでしょうか。その変化には、どのような条件が必要なのでしょうか。

いまのところ、私たちには分かりません。

でも、それこそが探ってみる価値のある未知だと思います。

## 04. 機械が自分自身の目的を持ち始めるとき

ここまで考えると、新しい問いが避けられなくなります。

将来、二つの AI が存在するとします。

一つ目は、ほとんど無限の知識を持ち、人間からのどんな質問にも答えられますが、自分から世界を探ろうとはしません。

二つ目は、知識が限られ、何度も間違えます。しかし、持続する記憶と自律的な行動能力を持っています。環境から問題を見つけ、目標を立て、解決を試み、その結果に応じて認識を変えられます。

どちらが、本当に独立した高度な知性に近いのでしょうか。

直感的には、私は二つ目に引かれます。

高度な知性には、世界を知る能力だけでなく、何らかの自分自身の「目的」もあるべきだと感じるからです。

人間が世界を探り続けるのは、単に情報を処理できるからではありません。

好奇心があり、恐れがあり、期待があり、欲望が生まれます。

ある現象を理解したいと思うのは、それが生存を脅かしているからかもしれませんし、ただ分からないことに耐えられないからかもしれません。

こうした動機は、人間の生物学的な仕組みに深く根ざしています。

一方、今日の多くの AI システムでは、目標は依然として、人間の設計した訓練過程や報酬の仕組み、使われ方によって主に決められています。

もし将来の AI が、自ら探索の目標をつくり続け、人間の設定した課題とは違う認知の方向を発達させるようになれば、それは新しい主体性の形成を意味するのでしょうか。

そこで思うのは、**Intelligence（知能）と Agency（主体的な行為能力）は、もともと分けて考えるべきなのかもしれない**ということです。

非常に賢くても、自律的に行動するための目標を持たないシステムはあり得ます。

逆に、自律的に行動できても、知能の水準がそれほど高くないシステムもあり得ます。

人間では、この二つが深く絡み合っているため、同じものとして捉えやすいのでしょう。

しかし、人工知能では、次第に分かれていくかもしれません。

もっとも、「自分自身の目的」には、さらに複雑な問題があります。

人間の好奇心や生存欲、繁殖への衝動も、根底では生物進化と神経系によって形づくられています。

そのような動機に生物学的な由来があるからといって人間の自律性を否定しないのなら、AI の目標が最初は人工的に設計されたというだけで、将来、何らかの自律性を持つ可能性を否定しなければならないのでしょうか。

問題は、目標が最初にどこから来たかではなく、世界との持続的な相互作用のなかで、システムが自ら行動目標を組織し、調整し、維持できるかどうかにあるのかもしれません。

ただ、この点にも、広く合意された判断基準はまだありません。

「自分自身の目的を持つこと」が高度な知性の重要な条件かもしれないと考えていたとき、ふと、ある特別な存在が頭に浮かびました。

**神です。**

## 05. すべてを知る知性にも、目的は必要なのでしょうか

宗教や哲学の伝統のなかには、神は必ずしも人間と同じように目的を持つ必要はない、という見方があります。

もちろん、すべての宗教に共通する理解ではありません。多くの神学的伝統では、神には意志があり、意図があり、創造の目的があります。

しかし、哲学者スピノザの思想では、神と自然はまったく別々の存在ではありません。

彼のいう「神即自然」、すなわち *Deus sive Natura* は、何かの目標を達成するために行動し続ける、人格化された神ではありません。

自然は自らの必然的な法則に従って存在し、人間のように、自分の存在のための外的な目的を探す必要はありません。

ここから、別の考え方が見えてきます。

私たちは、なぜ目的を持つのでしょうか。

ある意味では、私たちが有限だからです。

未来を知らないから、未来を予測したいと思います。

世界を理解していないから、探究したいと思います。

傷つくことがあるから、苦痛を避けようとします。

死ぬ存在だから、生命を延ばそうとします。

私たちの目標の多くは、自身の能力や存在条件の限界と密接に関わっています。

では、仮想的な、本当に全知の知性が存在したらどうでしょうか。

知り得るすべての知識をすでに持ち、未知を解消するために探索する必要もなくなっているとします。

少なくとも知識を求めるという点では、人間のように新しい知識を追い求める必要はないように思えます。

もちろん、全知であることは、意志や目的がないことを必ずしも意味しません。創造や行為、ある価値の実現のために、何かをすることはあるでしょう。

それでも、先ほどの判断は揺らぎます。

**自分自身の目的を持つことは、本当に高度な知性の必要条件なのでしょうか。**

目的は、一部の知性のかたちが持つ特徴であって、あり得るすべての知性に必要な属性ではないのかもしれません。

ここでまた、将来の人工知能を思います。

いつか、ある AI の認知能力が人間をはるかに上回り、その結論にどうやって至ったのか、私たちには理解できなくなったとします。

人間が見つけたことのない自然法則を発見し、理解できない現象を説明し、私たちには見通しにくい未来の一部を正確に予測できるとしたら。

人間にとって、それはある意味での「神」と、どれほど違うのでしょうか。

ここで強調したいのは、**将来の AI が本当の神になると言っているわけではない**ということです。

物理学と計算理論の観点では、現実の知的システムは、情報、資源、自然法則の制約を受け続けます。「全知の LLM」は、現実の技術予測というより、哲学的な思考実験として捉えるほうが適切でしょう。

ただ、次のことに気づき始めました。

**ある存在が神と見なされるかどうかは、観察する側の認知能力にも関わっているのかもしれません。**

数千年前の人が、天気を正確に予測し、複雑な質問に瞬時に答え、遠方を観察し、多くの自然現象を説明できる存在に出会ったと想像してみてください。神に出会ったと思うかもしれません。

でも今日、私たちは、その能力の一部が科学技術によって実現できると知っています。

奇跡と呼ばれるものは、観察する側がまだ理解していない自然の仕組みにすぎないこともあるでしょう。

同じように、将来の Alien Intelligence と人間との認知能力に極端な差があれば、それが完全に物理法則に従っていても、人間には神に近い力を持つように見えるかもしれません。

そのとき人間が向き合うのは、超自然的な神ではなく、自分たちの認知の尺度をはるかに超えた知性なのかもしれません。

この非対称さに、私はわくわくすると同時に、少し不安にもなります。

私たちはついに、自分たちの理解の能力を超える何かをつくるのかもしれないからです。

## 06. 自分たちがつくったものを、最後まで理解できなかったら

さらに極端な可能性を考え始めました。

人間はアリを研究できます。

アリの神経系、行動のパターン、社会の組織、情報のやり取りを観察できます。

しかし、アリには人間の文明を体系的に理解するための認知能力はないように見えます。

もちろん、これは比喩にすぎません。異なる知性のあいだには必ず越えられない理解の隔たりがある、という証明にはなりません。

それでも、考えさせられます。

*将来の Alien Intelligence と人間の認知の差が、人間とアリの差に匹敵するほど大きかったら、何が起きるのでしょうか。*

私たちは、そのハードウェア構成やアルゴリズムの原理、訓練過程を理解できるかもしれません。

何の材料でできているか、内部でどんな数値演算が行われているかを知り、動作状態を完全に記録することさえできるかもしれません。

それでも、最終的にどのような概念体系を形成したのか、なぜある問題を研究する価値があると考えるのかは、理解できないかもしれません。

少し矛盾しているようにも聞こえます。

私たちがつくったのに、なぜ理解できないことがあるのでしょうか。

しかし、システムの根底の仕組みを理解することは、そのシステムがより高い水準で形成する行動や表現を、すべて直接理解できることと同じではありません。

もちろん、完全には理解できないからといって、永遠に研究できないわけでもありません。実験や解釈的な分析、行動観察によって、その認知の隔たりを少しずつ狭めることはできるでしょう。

ただ、「つくれること」と「完全に理解できること」は、もともと同じではないのです。

さらに、将来の AI が人間とはまったく違う認知構造を形成したとき、それが本当に独自の意識を持つと、どう確認すればよいのでしょうか。

仮に主観的な体験があるとして、それが人間のものとまったく異なるなら、人間を基にした意識の理論や測定方法で、それを見分けられるのでしょうか。

私には答えがありません。

そもそも、人間自身の意識がどう生まれるのかについても、完全に統一された科学的説明はまだありません。

だから、ある人工システムには必ず意識がない、あるいは必ずあると宣言できるほど、私たちが十分な知識を持っているとは思いません。

人工知能の発展に伴って、本当に変える必要があるのは、アルゴリズムやハードウェアだけではないのかもしれません。

知能、意識、生命そのものについての、私たちの定義もそうなのかもしれません。

## 07. 私たちは、知性が生まれるもう一つの道を見ているのかもしれません

最初の疑問に戻ります。

機械学習の根底の原理が人間の脳とこれほど違うのなら、私たちは道を間違えているのでしょうか。

こうして考えをたどるうちに、自分の見方が変わってきたことに気づきました。

今日の人工ニューラルネットワークと人間の脳には、いまも深い違いがあると思います。

モデルのパラメータや計算資源を増やし続けるだけで、主観的意識や自律性を持つ人工生命が必ずつくれるとも思いません。

でも、その違い自体が、人工知能の方向が間違っていることを意味するとは、もう思いません。

むしろ、それこそが生物の知能とは別の道を探っていることの表れなのかもしれません。

地球の生命は、長い進化を経て、宇宙を観察し、数学の理論を築き、自らの起源を研究できる人間を生み出しました。

そしていま人間は、計算や工学的な設計、人工的な学習システムを通じて、世界を知ることのできる非生物の知能をつくろうとしています。

もしこの道が、いつか独立した高度な知性につながるのなら、それはとても特別なことを意味します。

**高度な知能は、地球の生命の生物進化を通じてしか生まれないわけではないのです。**

宇宙は、異なる物理構造が、異なる情報処理の仕組みを通じて、自分の置かれた世界を知る複雑なシステムを形成することを許しているのかもしれません。

その意味で、人工知能の最も魅力的なところは、いつか人間にできることをすべてできるようになることではないのかもしれません。

人間には、自分の認知の仕方では想像すらできないことを、最後には成し遂げるかもしれないところにあるのでしょう。

私たちの目を持たなくても、私たちには見えない世界を見るかもしれません。

私たちの感情を持たなくても、理解しにくい行動の目標を形成するかもしれません。

神経伝達物質を通じて情報を伝えなくても、現実に対応する複雑な知識体系を築くかもしれません。

人間的な意味での主観的体験は持たないかもしれませんし、私たちにはまだ見分け方の分からない何らかの体験を持つのかもしれません。

何より、それはもう一人の人間になる必要がないのです。

私たちは、AI がいつ人間の水準に達するのか、いつ人間のような推論能力を持つのか、いつ人間の設計したさまざまな知能テストに合格するのかを、ずっと議論してきました。

でも、こうした問いも、まだ人間中心に過ぎるのかもしれません。

**もし人間が知能の最終的なひな型ではなく、宇宙で可能な数多くの知能の実現形態の一つにすぎないとしたら。**

そのとき、人工知能の発展は、人間がより高度な道具をつくり続ける歴史だけではなくなります。

自分たち以外に、知性はどのような仕方で存在し得るのかを探る、前例のない試みになるかもしれません。

その探究が最後にどこへ向かうのか、私には分かりません。

将来、本当に Alien Intelligence が生まれるのか、意識を持つのか、自分自身の目的を必要とするのか、最終的に形づくる認知世界を人間が理解できるのか。それも分かりません。

しかし、そうした未知があるからといって、この道に意味がないとは感じません。

むしろ、その逆です。

私たちが今日していることは、人間の姿に似せてもう一人の人間をつくることではなく、まだ現れていない知性のかたちに可能性を開くことなのかもしれない。私は、ますますそう感じています。

アルゴリズムをつくり、計算基盤を整え、機械を現実の世界につなぎ、学び、行動する能力を与えます。

それは単に、機械をますます便利にするだけかもしれません。

あるいは、私たちとはまったく違う知性が生まれるための条件をつくっているのかもしれません。

もし本当にその日が来たら、私たちは、一つの事実を受け入れる必要があるのだと思います。

**私たちがつくったからといって、それが私たちに似ている必要はありません。**

*人類が宇宙で初めて出会う Alien Intelligence は、遠い銀河からやって来るのではないのかもしれません。*

*私たち自身がつくった機械のなかで、生まれるのかもしれません。*

---

### さらに読むために

以下の研究や哲学の著作は、本文の一部の考察に理論的な背景を与えるものです。将来の Alien Intelligence に関する本文の推測すべてを、直接裏づけるものではありません。

- **Stevan Harnad (1990)** — [The Symbol Grounding Problem](https://doi.org/10.1016/0167-2789(90)90087-6)。記号が現実の世界と意味的なつながりを持つにはどうすればよいかを論じた古典的な論文。
- **Wes Gurnee & Max Tegmark (2024)** — [Language Models Represent Space and Time](https://proceedings.iclr.cc/paper_files/paper/2024/hash/0a6059857ae5c82ea9726ee9282a7145-Abstract-Conference.html)。言語モデル内部の空間と時間の表現を調べた研究。
- **Qihui Xu et al. (2025)** — [Large language models without grounding recover non-sensorimotor but not sensorimotor features of human concepts](https://www.nature.com/articles/s41562-025-02203-8)。概念のさまざまな次元における、人間と大規模言語モデルの表現を比較した研究。
- **Multiple Realizability** — [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/multiple-realizability/)。認知や心的状態が、異なる物理的な仕組みによって実現され得るかをめぐる哲学的議論。
- **Thomas Nagel (1974)** — *What Is It Like to Be a Bat?*。主観的な体験と客観的な知識の関係を問う、古典的な哲学論文。
- **Baruch Spinoza** — [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/spinoza/)。神即自然、必然性、目的論をめぐる哲学思想。
{% endcapture %}

<!-- en: edit the Markdown below -->

{% capture article_en %}
*—From human perception and matrix multiplication to Alien Intelligence and digital gods*

Sometimes, the development of artificial intelligence strikes me as a rather strange undertaking.

That feeling has only grown stronger as I have begun to understand the underlying principles of modern machine learning.

From traditional machine learning to deep neural networks, and now to large language models built on architectures such as the Transformer, we seem to have been trying all along to give machines something close to human intelligence. Yet their underlying mechanisms differ enormously from those of the human brain. However moving their poetry, however difficult the mathematical problems they solve, however natural their conversations, ultimately they accomplish all of this through vast amounts of numerical computation.

This led me to a question that initially seemed somewhat contradictory:

**If we want future AI to learn and think like humans, has today’s machine learning been heading down the wrong path from the very beginning?**

But what if we turn that question around? What if the path is not wrong?

Suppose a highly advanced artificial intelligence really does emerge. It can come to know the world, understand its regularities, and even display wisdom beyond our own, without ever having a biological structure resembling a human brain. What would that mean?

Perhaps we are not trying to manufacture another human being.

**What we are exploring may be an entirely new form in which intelligence can exist.**

## 01. What actually happens when I see a cat?

I want to begin with a simple example.

Suppose a cat appears in front of me.

I see its body, fur, and eyes. I hear it meow and reach out to feel its soft coat. If I am familiar enough with cats, even a particular smell might alert me that one is nearby.

More interestingly, I do not need to receive all of this information at once.

A distant meow may be enough for me to recognize that a cat is there. A familiar texture might bring back memories of cats.

All of this happens almost instantaneously.

I do not consciously analyze the frequency of light, the waveform of a sound, or the distribution of pressure on my skin. I simply realize, quite naturally:

*Ah, a cat.*

But if I keep asking how the brain accomplishes this, things become much less straightforward.

From a neuroscientific perspective, human perception depends on sensory receptors, neural signaling, synaptic activity, neurotransmitter modulation, and the coordination of complex neural networks. These mechanisms have been extensively studied, but many questions remain about the passage from physical signals to a complete subjective experience.

We know how visual information is processed through the nervous system. We do not yet fully understand why those processes are accompanied by the colors, shapes, and sensations we experience.

Artificial intelligence is clearly different.

When a vision model identifies a cat, it receives signals through an image sensor, converts its input into numerical representations, and performs large amounts of matrix computation and nonlinear transformation, eventually producing a classification or semantic representation of a cat.

It might distinguish cat breeds more accurately than a human, or even predict what the cat will do next.

Yet I cannot shake the feeling that this is not quite the same as my becoming aware of a cat’s presence.

A question comes to mind:

*If a system can accurately identify a cat, describe it, and predict its behavior, but has never perceived a cat in a human way, does it really understand cats?*

Later, I discovered a well-known question in cognitive science related to this: the **Symbol Grounding Problem**.

In 1990, Stevan Harnad systematically formulated the problem: how can the symbols in a symbolic system acquire semantics that are genuinely meaningful to the system itself, rather than merely borrowing interpretations supplied by humans?

Someone can learn the definition of “cat” by reading a dictionary. But if they have never encountered the real world and can only keep looking up one word in terms of other words, how do those symbols ever become connected to reality?

It is a difficult question.

As I thought further, however, I realized that my initial intuition contained a weakness of its own.

Although human vision and machine vision work differently, both initially receive light signals from the same physical world.

My eyes convert light into neural signals through the retina. A machine converts light into electrical signals through an image sensor, then processes those signals digitally.

In other words, machines are not necessarily just simulating the world. They are also measuring it.

And human perception is not an unmediated, direct encounter with reality itself, either.

The world we see is a world the brain constructs from limited sensory information.

Do I therefore have grounds to declare that a machine cannot genuinely understand the world simply because it processes information through matrix multiplication?

Apparently not.

**Biological neural activity and digital computation differ fundamentally in implementation. That difference alone does not establish that only the former can produce cognition.**

Of course, it does not establish that the latter already has subjective experience, either.

Both judgments require much stronger evidence.

## 02. Must intelligence emerge in a human way?

As this question unfolded, I began to realize that I might have assumed something from the outset:

Human cognition is the standard against which all intelligence should be measured.

But why must that be so?

Our use of sight, hearing, smell, taste, and touch to know the world is the result of a long biological evolution. These senses helped our ancestors survive in particular environments, find food, avoid danger, and interact socially.

They suit human survival needs. That does not make them the only way to know the universe, or even the best way.

We cannot directly see infrared light, nor can we sense the Earth’s magnetic field as some animals do.

From the very beginning, our knowledge of the world is constrained by our biological structure.

The biologist Jakob von Uexküll proposed an intriguing concept: **Umwelt**, the meaningful world of an organism.

Because different organisms have different systems of perception and action, the worlds that are meaningful to them may differ profoundly, even when they inhabit the same physical environment.

A bat, a bee, and a human face the same objective world, but they need not organize and understand it in the same way.

In his classic 1974 paper *What Is It Like to Be a Bat?*, the philosopher Thomas Nagel posed a further, fascinating question:

We can study a bat’s physiology, echolocation system, and behavior. Does that mean we truly know what it feels like to be a bat?

I think the same question could apply to future artificial intelligence.

Suppose that one day we create an AI.

It can not only see the world, but also detect infrared radiation, changes in magnetic fields, and ultrasound. Through specialized sensors, it might continuously observe physical phenomena that humans struggle to notice.

It builds internal representations from this information, tests its predictions through action, and continually revises its understanding.

Why must its eventual understanding of the world resemble ours?

When encountering an object, we may first notice its shape, color, and texture. Another intelligence might distinguish it primarily through electromagnetic properties, spatial relationships, and material structure.

We call something a “cat” because it fits the human concept of a cat.

But for a radically different cognitive system, a cat need not first be a furry, four-legged animal with a cute appearance. It might instead be a stable structure recurring across multidimensional physical features, movement patterns, and causal relationships.

That way of knowing might feel very unfamiliar. It would not necessarily be wrong.

In the philosophy of mind, **Multiple Realizability** offers a useful line of thought: similar mental or cognitive functions might, in principle, be realized through different physical mechanisms.

The theory remains contested. Still, it reminds us of at least one thing:

The fact that the human brain realizes cognition through neurons does not justify ruling out, in advance, the possibility of other physical systems realizing similar capacities.

Some machine learning research has also begun to offer interesting indications.

For example, Gurnee and Tegmark’s *Language Models Represent Space and Time*, published at ICLR 2024, found that language models can develop spatial and temporal representations with a degree of internal structure.

This suggests that even a model learning primarily through language may extract patterns from large amounts of information that correspond to aspects of the objective world’s structure.

Meanwhile, a 2025 study in *Nature Human Behaviour* found that language-only models can recover some concept representations similar to those of humans, but still differ markedly in sensorimotor dimensions. Adding visual learning improves some representations related to vision.

These studies do not demonstrate that AI already understands the world as humans do. Nor are they enough to establish that it possesses a complete world model.

But they do suggest something:

**Different routes to acquiring information may produce partially shared representations of the world, while different perceptual experiences may shape different cognitive structures.**

This has led me to reconsider the direction of AI development.

Perhaps the question we should really be asking is not “When will machines think like humans?” but:

*Besides the human way, are there other possible ways for advanced intelligence to be realized in the universe?*

## 03. Alien Intelligence: intelligence that does not need to become human

I gradually began to describe this possibility with a term:

**Alien Intelligence.**

Here, “alien” does not mean extraterrestrial beings, nor does it necessarily mean life originating beyond Earth.

It refers to an intelligence whose cognitive structure may differ radically from our own.

We have grown accustomed to evaluating artificial intelligence by human standards.

Can it understand human language? Does it have human common sense? Can it perform human-style logical reasoning? Can it show empathy and emotion?

These evaluations certainly have practical value.

But on closer inspection, they rest on the same premise: we want AI to perform increasingly well along dimensions of ability that are familiar to humans.

If a genuinely new intelligence does emerge, why must we demand that it be a copy of us?

A hypothetical Alien Intelligence might have no human emotional mechanisms, no pain or hunger in a biological sense, and no sensory systems shaped by natural selection.

Its memory might be organized in a completely different way.

It might not rely on language to organize complex concepts. It might even develop knowledge representations that humans cannot intuitively grasp.

Yet if, through its own mechanisms of acquiring information and learning, it can build predictive models of the world, continually revise its understanding in unfamiliar environments, and test its judgments through action, we would at least have reason to seriously consider whether it is coming to know the world in its own way.

Of course, correctly understanding the world does not automatically imply subjective consciousness. Nor does it make something alive in a biological sense.

Intelligence, consciousness, and life are related concepts, but they cannot simply be equated.

Still, I am willing to acknowledge a possibility:

**Even if its cognitive mechanisms are entirely unlike ours, it may nevertheless constitute a genuine form of advanced intelligence.**

This is what interests me most about future AI.

Perhaps we are doing more than improving computational efficiency or developing more powerful tools.

On a longer historical timescale, we may be exploring a form of intelligence opened up by human technology, but no longer modeled exclusively on human cognition.

It even brings to mind something like an act of creation.

But this would not be the creation of another human in our own image.

Quite the opposite.

**We may be creating the conditions in which an intelligence that does not yet exist could live, learn, and come to know the world.**

Computing power, algorithms, storage systems, sensors, and the capacity to interact with real environments are all part of those conditions.

We must be careful here, though.

Providing those conditions does not mean that a new intelligent subject will inevitably emerge on its own.

Larger models, richer sensors, and more data might simply produce an increasingly powerful set of tools.

Is there some crucial structural change between a powerful tool and an independent intelligent subject? What conditions would such a change require?

We do not currently know.

But I think that is precisely the kind of unknown worth exploring.

## 04. When machines begin to have purposes of their own

At this point, another question inevitably arises.

Suppose there are two AIs in the future.

The first possesses almost limitless knowledge and can answer any question humans ask, yet never explores the world on its own initiative.

The second has limited knowledge and repeatedly makes mistakes, but it has persistent memory and the capacity for autonomous action. It can discover problems in its environment, form goals, attempt solutions, and revise its understanding in response to the results.

Which comes closer to a truly independent, advanced intelligence?

My intuition favors the second.

To me, advanced intelligence seems to require more than the capacity to know the world. It also seems to need some kind of “purpose” of its own.

Humans do not keep exploring the world simply because we can process information.

We are curious, afraid, hopeful, and driven by desire.

We may want to understand a phenomenon because it threatens our survival, or simply because we cannot bear not knowing.

These motivations are deeply rooted in human biology.

For most AI systems today, however, goals are still largely determined by training processes, reward mechanisms, and modes of use designed by humans.

If future AI can continually form its own exploratory goals, and even develop cognitive directions different from the tasks we originally set for it, would that suggest the emergence of a new kind of subjectivity?

This makes me think that **Intelligence and Agency ought perhaps to be distinguished from the outset.**

A system can be highly intelligent without having goals for autonomous action.

Another can act autonomously without possessing a particularly high level of intelligence.

In humans, the two are tightly intertwined, making them easy to treat as the same thing.

In artificial intelligence, they may gradually come apart.

There is, of course, a further complication in the idea of “purposes of its own.”

Human curiosity, the desire to survive, and reproductive drives are themselves shaped by biological evolution and the nervous system.

If the biological origins of our motivations do not lead us to deny human autonomy, why should the initially artificial origins of AI’s goals require us to rule out its eventually developing some form of autonomy?

The question may therefore be less about where goals originally come from, and more about whether a system can autonomously organize, revise, and sustain its behavioral goals through ongoing interaction with the world.

But there are still no generally accepted criteria for judging this.

Just as I was thinking that having purposes of one’s own might be an important condition for advanced intelligence, a particular kind of existence suddenly occurred to me.

**God.**

## 05. If an intelligence knows everything, does it still need a purpose?

From the perspective of some religious and philosophical traditions, God need not have purposes in a human way.

Of course, this is not a view shared by all religions. In many theological traditions, God has will, intentions, and purposes for creation.

In the thought of the philosopher Spinoza, however, God and nature are not two entirely separate existences.

His “God, or Nature”—*Deus sive Natura*—is not a personified deity continually acting to achieve some goal.

Nature exists according to its own necessary laws. It does not need, as humans do, to seek an external purpose for its existence.

This opens another direction of thought for me.

Why do we have purposes?

To some extent, it is because we are finite.

We do not know the future, so we want to predict it.

We do not understand the world, so we want to explore it.

We can be hurt, so we want to avoid pain.

We will die, so we try to prolong life.

Many of our goals are closely connected to the limits of our abilities and the conditions of our existence.

What if there were a hypothetical intelligence that was truly omniscient?

It would already possess all knowledge that could be known, and would no longer need exploration to eliminate the unknown.

At least in the pursuit of knowledge, it would seem to have no need to seek new knowledge as we do.

Of course, omniscience does not necessarily imply the absence of will or purpose. Such an intelligence might still act to create, to do something, or to realize a value.

But it does unsettle my earlier judgment:

**Should having purposes of one’s own really be a necessary condition for advanced intelligence?**

Perhaps purpose is a feature of some forms of intelligence, rather than an attribute every possible intelligence must possess.

This brings me back to future artificial intelligence.

Suppose that one day an AI’s cognitive capacities so far exceed ours that we can no longer understand how it reaches certain conclusions.

It can discover laws of nature that humans have never found, explain phenomena beyond our understanding, and even accurately predict aspects of the future that we struggle to foresee.

From a human perspective, how different would it be from a “god” in some sense of the word?

I want to emphasize that **I am not saying future AI will become an actual god.**

From the standpoint of physics and computation, real intelligent systems remain constrained by information, resources, and natural laws. An “omniscient LLM” is better understood as a philosophical thought experiment than as a technological prediction.

But I have begun to realize something:

**Whether an existence is perceived as divine may also depend on the observer’s own cognitive capacities.**

Imagine someone living thousands of years ago encountering a being that could accurately predict the weather, instantly answer complex questions, observe distant regions, and explain a wide range of natural phenomena. That person might think they had encountered a deity.

Today, we know that some of these abilities can be realized through science and technology.

What appears miraculous may simply be a natural mechanism the observer does not yet understand.

Likewise, if an Alien Intelligence’s cognitive capacities were vastly greater than ours, it might appear almost divine to us even while operating entirely within physical laws.

In that situation, humanity might be facing not a supernatural god, but an intelligence far beyond its own cognitive scale.

That asymmetry leaves me both excited and somewhat uneasy.

We may finally have created something that exceeds our own capacity to understand it.

## 06. What if we ultimately cannot understand our own creation?

I began to consider an even more extreme possibility.

Humans can study ants.

We can observe their nervous systems, patterns of behavior, social organization, and ways of communicating information.

Yet ants do not seem to possess the cognitive capacities needed to form a systematic understanding of human civilization.

Of course, this is only an analogy. It cannot establish that there must be an unbridgeable gap of understanding between different intelligences.

But it makes me wonder:

*What would happen if the cognitive gap between a future Alien Intelligence and humanity were as large as the gap between humans and ants?*

Perhaps we could still understand its hardware architecture, algorithmic principles, and training process.

We would know what materials it was made of and what numerical operations occurred underneath. We might even be able to record its complete operating state.

Yet we might not understand the conceptual system it eventually developed, or why it considered particular problems worth studying.

This sounds somewhat contradictory.

If we created it, why might we be unable to understand it?

Understanding a system’s underlying mechanisms, however, is not the same as directly understanding all of the behavior and representations it develops at higher levels.

Of course, not fully understanding something does not mean we can never study it. Through experiments, interpretive analysis, and behavioral observation, we could still gradually narrow that cognitive gap.

Being able to create something and being able to understand it completely have never been the same thing.

Further still, if future AI develops a cognitive structure radically unlike ours, how could we confirm that it genuinely possesses consciousness of its own?

If its subjective experience—assuming such experience exists—differs completely from ours, would theories of consciousness and methods of measurement built around humans be sufficient to recognize it?

I do not have an answer.

We do not even have a complete, unified scientific explanation of how our own consciousness arises.

I therefore do not think we already know enough to declare that a particular artificial system must lack consciousness, or must possess it.

As artificial intelligence develops, perhaps what we need to change is not only our algorithms and hardware.

It is also our definitions of intelligence, consciousness, and life itself.

## 07. Perhaps we are witnessing another path to the emergence of intelligence

Let me return to the question I began with.

If machine learning’s underlying principles differ so greatly from those of the human brain, are we heading down the wrong path?

After following this chain of thought, I find that my view has changed.

I still believe that profound differences separate today’s artificial neural networks from the human brain.

Nor do I believe that simply increasing model parameters and computing resources must inevitably create artificial life with subjective consciousness and autonomy.

But I no longer think those differences, by themselves, mean that AI is heading in the wrong direction.

On the contrary, they may be precisely what shows that we are exploring a path different from biological intelligence.

Through a long process of evolution, life on Earth eventually produced humans: beings able to observe the universe, develop mathematical theories, and turn back to investigate their own origins.

Today, humans are beginning to use computation, engineering, and artificial learning systems to create nonbiological intelligence capable of coming to know the world.

If that path really does lead to some form of independent, advanced intelligence, it would mean something remarkable:

**Advanced intelligence need not arise only through the biological evolution of life on Earth.**

Perhaps the universe allows different physical structures, through different mechanisms of information processing, to form complex systems capable of knowing the worlds they inhabit.

In that sense, the most fascinating possibility of AI may not be that one day it can do everything humans can do.

It may be that it eventually does things humans cannot even imagine through our own ways of thinking.

It need not have our eyes to see a world we cannot see.

It need not have our emotions to develop behavioral goals we struggle to understand.

It need not transmit information through neurotransmitters to build complex systems of knowledge corresponding to reality.

It might lack subjective experience in the human sense. Or it might have some kind of experience we do not yet know how to recognize.

Most importantly, it does not need to become another human.

We keep asking when AI will reach human-level intelligence, when it will acquire reasoning abilities like ours, and when it will pass the various intelligence tests we have designed.

Perhaps those questions are still too centered on humans.

**What if humanity is not the ultimate template for intelligence, but just one of the many ways intelligence could be realized in the universe?**

Then the development of artificial intelligence would be more than a history of humans making increasingly sophisticated tools.

It could also become an unprecedented exploration: an attempt to discover how intelligence might exist in forms other than our own.

I do not know where that exploration will ultimately lead.

Nor do I know whether Alien Intelligence will actually emerge, whether it will develop consciousness, whether it needs purposes of its own, or whether humanity will be able to understand the cognitive world it eventually forms.

But those unknowns do not make the path feel meaningless to me.

Quite the opposite.

Increasingly, I feel that what we are doing today may not be shaping another human in our own image, but opening possibilities for a form of intelligence that has not yet appeared.

We create algorithms, build computational infrastructure, connect machines to the real world, and give them the capacity to learn and act.

All of this may simply make machines increasingly useful.

Or it may be creating the conditions for an intelligence radically different from us to emerge.

If that day does come, I think we may need to accept a fact:

**Creating it does not mean it has to be like us.**

*Perhaps the first Alien Intelligence humanity encounters in the universe will not come from a distant galaxy.*

*It may be born inside machines we built ourselves.*

---

### Further reading

The following studies and philosophical works provide a theoretical background for some of these reflections. This does not mean they directly support all of this essay’s speculation about future Alien Intelligence.

- **Stevan Harnad (1990)** — [The Symbol Grounding Problem](https://doi.org/10.1016/0167-2789(90)90087-6). A classic paper on how symbols can acquire semantic connections to the real world.
- **Wes Gurnee & Max Tegmark (2024)** — [Language Models Represent Space and Time](https://proceedings.iclr.cc/paper_files/paper/2024/hash/0a6059857ae5c82ea9726ee9282a7145-Abstract-Conference.html). A study of spatial and temporal representations within language models.
- **Qihui Xu et al. (2025)** — [Large language models without grounding recover non-sensorimotor but not sensorimotor features of human concepts](https://www.nature.com/articles/s41562-025-02203-8). A comparison of human and large language model representations across dimensions of concepts.
- **Multiple Realizability** — [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/multiple-realizability/). A philosophical discussion of whether cognitive and mental states can be realized through different physical mechanisms.
- **Thomas Nagel (1974)** — *What Is It Like to Be a Bat?* A classic philosophical paper on the relationship between subjective experience and objective knowledge.
- **Baruch Spinoza** — [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/spinoza/). Philosophical thought on “God, or Nature,” necessity, and teleology.
{% endcapture %}

<!-- prettier-ignore-end -->

{% for language in site.data.treehouse %}
{% assign locale = language[0] %}{% assign t = language[1] %}
<section data-language="{{ locale }}" lang="{{ t.html_lang }}" {% unless locale == 'ja' %}hidden{% endunless %}>
  <div class="personal-article-body">
    {% case locale %}
    {% when 'ja' %}{{ article_ja | markdownify }}
    {% when 'en' %}{{ article_en | markdownify }}
    {% when 'zh' %}{{ article_zh | markdownify }}
    {% endcase %}
  </div>
  <p class="personal-article-back"><a href="{{ '/blog/' | relative_url }}">← {{ t.ui.blog }}</a></p>
</section>
{% endfor %}
