#!/bin/bash
npm i --save asciidoctor @asciidoctor/reveal.js
npm pkg set scripts.html="npx asciidoctor-reavealjs *.adoc"