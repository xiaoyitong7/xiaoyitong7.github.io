---
title: Fandom MBTI
summary: A WeChat mini program that turns a 12-question fandom personality test into 16 results, AI-generated profiles and shareable social interactions.
role: Product strategy, interaction design, visual design and development
projectType: AI-enabled WeChat mini program
year: "2026"
accent: "#D8E85C"
cover: ../../assets/images/fandom/home.png
date: 2026-08-18
tags: [Product Design, WeChat Mini Program, AI Experience]
layout: product
homeOrder: 1
status: Working prototype
featured: true
gallery:
  - alt: Fandom MBTI home screen
    caption: The entry point introduces the test and directs returning users to saved reports.
    image: ../../assets/images/fandom/home.png
  - alt: Fandom MBTI question flow
    caption: Twelve questions map choices across four personality dimensions with clear progress feedback.
    image: ../../assets/images/fandom/quiz.png
  - alt: Representative Fandom MBTI personality result
    caption: Each of the sixteen results combines a memorable type identity with an accessible trait summary.
    image: ../../assets/images/fandom/result.png
  - alt: AI-generated fandom profile
    caption: A structured AI response turns test data into a playful, readable fandom profile.
    image: ../../assets/images/fandom/ai-profile.png
  - alt: Friend compatibility analysis
    caption: Two result types can be compared to create a shared compatibility reading.
    image: ../../assets/images/fandom/compatibility.png
  - alt: Detailed report or share poster
    caption: Detailed reports and posters extend the result into a saved and shareable artifact.
    image: ../../assets/images/fandom/report.png
---

## Product idea

Fandom MBTI turns familiar fan behaviours into a lightweight personality test and a reason to start a conversation. The concept combines a recognisable format with language and scenarios specific to fan culture.

## Core flow

The working prototype moves from a 12-question test through four scoring dimensions to one of 16 personality results. A concise result page leads into a detailed report without making the first outcome difficult to scan.

## AI experience

Tencent Hunyuan generates a personalised fandom profile and a friend compatibility analysis. Responses use structured JSON, a daily limit and local fallback content so the experience remains understandable when the cloud request is unavailable. The interface also states that the result is for entertainment.

## Social loop

Users can compare results with a friend, save a result poster and share a Mini Program code. These actions turn an individual test result into a repeatable social exchange while preserving a clear route back into the product.

## Reliability

The implementation includes exception handling, subpackage loading, audio controls, scoring tests and fallbacks for unavailable AI or advertising services. These decisions keep the main test and result flow usable under imperfect conditions.

## Reflection

The project is a working prototype rather than a formally launched product. A next iteration would test the question wording, report comprehension and sharing flow with real participants before making claims about engagement or retention.
