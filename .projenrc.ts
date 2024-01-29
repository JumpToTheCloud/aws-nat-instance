import { ReleasableCommits, awscdk } from 'projen';
import { TrailingComma } from 'projen/lib/javascript';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Jump to the Cloud',
  authorAddress: 'antonio.marquez@jumptothecloud.tech',
  cdkVersion: '2.120.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.3.0',
  name: 'cdk-construct-library-template',
  projenrcTs: true,
  repositoryUrl:
    'git@github.com:JumpToTheCloud/cdk-construct-library-template.git',
  keywords: ['aws', 'cdk'],
  prettier: true,
  prettierOptions: {
    settings: {
      trailingComma: TrailingComma.ES5,
      singleQuote: true,
      bracketSpacing: true,
      semi: true,
    },
  },
  mergify: false,
  release: false,
  jestOptions: {
    jestConfig: {
      verbose: true,
    },
  },
  releasableCommits: ReleasableCommits.featuresAndFixes(),
  releaseFailureIssue: true,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: ['commitizen', 'cz-customizable'],
  // packageName: undefined,  /* The "name" in package.json. */
});

project.addScripts({
  commit: './node_modules/cz-customizable/standalone.js',
});

project.synth();
