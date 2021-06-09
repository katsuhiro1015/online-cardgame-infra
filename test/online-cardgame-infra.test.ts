import * as cdk from 'aws-cdk-lib';
import * as OnlineCardgameInfra from '../lib/online-cardgame-infra-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new OnlineCardgameInfra.OnlineCardgameInfraStack(app, 'MyTestStack');
    // THEN
    const actual = app.synth().getStackArtifact(stack.artifactId).template;
    expect(actual.Resources ?? {}).toEqual({});
});
