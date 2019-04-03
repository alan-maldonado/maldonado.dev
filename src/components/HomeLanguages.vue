<template>
  <section id="home-languages" class="py-3 bg-medium">
    <div class="container">
      <h2 class="section-title">Experience With</h2>
      <div class="bottom-line"></div>
      <div class="home-languages">
        <div v-for="logo in logos" :key="logo">
          <img :src="logo">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import angular from "../assets/languages-logos/angular-logo.png";
import aws from "../assets/languages-logos/aws-logo.png";
import braintree from "../assets/languages-logos/braintree-logo.png";
import cSharp from "../assets/languages-logos/c-sharp-logo.png";
import checkmarx from "../assets/languages-logos/checkmarx-logo.png";
import circleci from "../assets/languages-logos/circleci-logo.png";
import css from "../assets/languages-logos/css-logo.png";
import dart from "../assets/languages-logos/dart-logo.png";
import docker from "../assets/languages-logos/docker-logo.png";
import elixir from "../assets/languages-logos/elixir-logo.png";
import flutter from "../assets/languages-logos/flutter-logo.png";
import html from "../assets/languages-logos/html-logo.png";
import java from "../assets/languages-logos/java-logo.png";
import jenkins from "../assets/languages-logos/jenkins-logo.png";
import jest from "../assets/languages-logos/jest-logo.png";
import jquery from "../assets/languages-logos/jquery-logo.png";
import meteor from "../assets/languages-logos/meteor-logo.png";
import node from "../assets/languages-logos/node-logo.png";
import php from "../assets/languages-logos/php-logo.png";
import python from "../assets/languages-logos/python-logo.png";
import react from "../assets/languages-logos/react-logo.png";
import ruby from "../assets/languages-logos/ruby-logo.png";
import scala from "../assets/languages-logos/scala-logo.png";

export default {
  data() {
    return {
      logos: [
        angular,
        aws,
        braintree,
        cSharp,
        checkmarx,
        circleci,
        css,
        dart,
        docker,
        elixir,
        flutter,
        html,
        java,
        jenkins,
        jest,
        jquery,
        meteor,
        node,
        php,
        python,
        react,
        ruby,
        scala
      ]
    };
  }
};
</script>
