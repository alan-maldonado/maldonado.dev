<template>
  <section id="home-languages" class="py-3 bg-medium">
    <div class="container">
      <h2 class="section-title">Experience With</h2>
      <div class="bottom-line"></div>
      <p class="lead">These technologies</p>

      <div class="home-languages">
        <div v-for="logo in technologies" :key="logo">
          <img :src="logo">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import angular from "../assets/languages-logos/angular.png";
import aws from "../assets/languages-logos/aws.png";
import braintree from "../assets/languages-logos/braintree.png";
import cSharp from "../assets/languages-logos/c-sharp.png";
import checkmarx from "../assets/languages-logos/checkmarx.png";
import circleci from "../assets/languages-logos/circleci.png";
import css from "../assets/languages-logos/css.png";
import dart from "../assets/languages-logos/dart.png";
import docker from "../assets/languages-logos/docker.png";
import elixir from "../assets/languages-logos/elixir.png";
import flutter from "../assets/languages-logos/flutter.png";
import html from "../assets/languages-logos/html.png";
import jenkins from "../assets/languages-logos/jenkins.png";
import jest from "../assets/languages-logos/jest.png";
import jquery from "../assets/languages-logos/jquery.png";
import meteor from "../assets/languages-logos/meteor.png";
import mocha from "../assets/languages-logos/mocha.png";
import mongodb from "../assets/languages-logos/mongodb.png";
import mysql from "../assets/languages-logos/mysql.png";
import netlify from "../assets/languages-logos/netlify.png";
import node from "../assets/languages-logos/node.png";
import npm from "../assets/languages-logos/npm.png";
import numpy from "../assets/languages-logos/numpy.png";
import nuxt from "../assets/languages-logos/nuxt.png";
import pandas from "../assets/languages-logos/pandas.png";
import phoenix from "../assets/languages-logos/phoenix.png";
import puppeteer from "../assets/languages-logos/puppeteer.png";
import python from "../assets/languages-logos/python.png";
import react from "../assets/languages-logos/react.png";
import redis from "../assets/languages-logos/redis.png";
import redux from "../assets/languages-logos/redux.png";
import ruby from "../assets/languages-logos/ruby.png";
import sass from "../assets/languages-logos/sass.png";
import scala from "../assets/languages-logos/scala.png";
import serverless from "../assets/languages-logos/serverless.png";
import spark from "../assets/languages-logos/spark.png";
import sqlserver from "../assets/languages-logos/sqlserver.png";
import stripe from "../assets/languages-logos/stripe.png";
import vue from "../assets/languages-logos/vue.png";
import webpack from "../assets/languages-logos/webpack.png";

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
        jenkins,
        jest,
        jquery,
        meteor,
        mocha,
        mongodb,
        mysql,
        netlify,
        node,
        npm,
        numpy,
        nuxt,
        pandas,
        phoenix,
        puppeteer,
        python,
        react,
        redis,
        redux,
        ruby,
        sass,
        scala,
        serverless,
        spark,
        sqlserver,
        stripe,
        vue,
        webpack
      ]
    };
  },
  computed: {
    technologies() {
      const technologies = this.logos.slice(0);
      technologies.sort(function() {
        return 0.5 - Math.random();
      });

      return technologies;
    }
  }
};
</script>
