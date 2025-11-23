# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-gitlab.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-gitlab.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project gitlab_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.Project.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project.Project;

Project.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowMergeOnSkippedPipeline(java.lang.Boolean|IResolvable)
//  .allowPipelineTriggerApproveDeployment(java.lang.Boolean|IResolvable)
//  .analyticsAccessLevel(java.lang.String)
//  .approvalsBeforeMerge(java.lang.Number)
//  .archived(java.lang.Boolean|IResolvable)
//  .archiveOnDestroy(java.lang.Boolean|IResolvable)
//  .autoCancelPendingPipelines(java.lang.String)
//  .autocloseReferencedIssues(java.lang.Boolean|IResolvable)
//  .autoDevopsDeployStrategy(java.lang.String)
//  .autoDevopsEnabled(java.lang.Boolean|IResolvable)
//  .autoDuoCodeReviewEnabled(java.lang.Boolean|IResolvable)
//  .avatar(java.lang.String)
//  .avatarHash(java.lang.String)
//  .branches(java.lang.String)
//  .buildGitStrategy(java.lang.String)
//  .buildsAccessLevel(java.lang.String)
//  .buildTimeout(java.lang.Number)
//  .ciConfigPath(java.lang.String)
//  .ciDefaultGitDepth(java.lang.Number)
//  .ciDeletePipelinesInSeconds(java.lang.Number)
//  .ciForwardDeploymentEnabled(java.lang.Boolean|IResolvable)
//  .ciForwardDeploymentRollbackAllowed(java.lang.Boolean|IResolvable)
//  .ciIdTokenSubClaimComponents(java.util.List<java.lang.String>)
//  .ciPipelineVariablesMinimumOverrideRole(java.lang.String)
//  .ciPushRepositoryForJobTokenAllowed(java.lang.Boolean|IResolvable)
//  .ciRestrictPipelineCancellationRole(java.lang.String)
//  .ciSeparatedCaches(java.lang.Boolean|IResolvable)
//  .containerExpirationPolicy(ProjectContainerExpirationPolicy)
//  .containerRegistryAccessLevel(java.lang.String)
//  .containerRegistryEnabled(java.lang.Boolean|IResolvable)
//  .defaultBranch(java.lang.String)
//  .description(java.lang.String)
//  .emailsEnabled(java.lang.Boolean|IResolvable)
//  .environmentsAccessLevel(java.lang.String)
//  .externalAuthorizationClassificationLabel(java.lang.String)
//  .featureFlagsAccessLevel(java.lang.String)
//  .forkedFromProjectId(java.lang.Number)
//  .forkingAccessLevel(java.lang.String)
//  .groupRunnersEnabled(java.lang.Boolean|IResolvable)
//  .groupWithProjectTemplatesId(java.lang.Number)
//  .id(java.lang.String)
//  .importUrl(java.lang.String)
//  .importUrlPassword(java.lang.String)
//  .importUrlUsername(java.lang.String)
//  .infrastructureAccessLevel(java.lang.String)
//  .initializeWithReadme(java.lang.Boolean|IResolvable)
//  .issuesAccessLevel(java.lang.String)
//  .issuesEnabled(java.lang.Boolean|IResolvable)
//  .issuesTemplate(java.lang.String)
//  .keepLatestArtifact(java.lang.Boolean|IResolvable)
//  .lfsEnabled(java.lang.Boolean|IResolvable)
//  .mergeCommitTemplate(java.lang.String)
//  .mergeMethod(java.lang.String)
//  .mergePipelinesEnabled(java.lang.Boolean|IResolvable)
//  .mergeRequestsAccessLevel(java.lang.String)
//  .mergeRequestsEnabled(java.lang.Boolean|IResolvable)
//  .mergeRequestsTemplate(java.lang.String)
//  .mergeTrainsEnabled(java.lang.Boolean|IResolvable)
//  .mirror(java.lang.Boolean|IResolvable)
//  .mirrorOverwritesDivergedBranches(java.lang.Boolean|IResolvable)
//  .mirrorTriggerBuilds(java.lang.Boolean|IResolvable)
//  .modelExperimentsAccessLevel(java.lang.String)
//  .modelRegistryAccessLevel(java.lang.String)
//  .monitorAccessLevel(java.lang.String)
//  .mrDefaultTargetSelf(java.lang.Boolean|IResolvable)
//  .namespaceId(java.lang.Number)
//  .onlyAllowMergeIfAllDiscussionsAreResolved(java.lang.Boolean|IResolvable)
//  .onlyAllowMergeIfPipelineSucceeds(java.lang.Boolean|IResolvable)
//  .onlyMirrorProtectedBranches(java.lang.Boolean|IResolvable)
//  .packagesEnabled(java.lang.Boolean|IResolvable)
//  .pagesAccessLevel(java.lang.String)
//  .path(java.lang.String)
//  .permanentlyDeleteOnDestroy(java.lang.Boolean|IResolvable)
//  .pipelinesEnabled(java.lang.Boolean|IResolvable)
//  .preReceiveSecretDetectionEnabled(java.lang.Boolean|IResolvable)
//  .preventMergeWithoutJiraIssue(java.lang.Boolean|IResolvable)
//  .printingMergeRequestLinkEnabled(java.lang.Boolean|IResolvable)
//  .publicBuilds(java.lang.Boolean|IResolvable)
//  .publicJobs(java.lang.Boolean|IResolvable)
//  .pushRules(ProjectPushRules)
//  .releasesAccessLevel(java.lang.String)
//  .removeSourceBranchAfterMerge(java.lang.Boolean|IResolvable)
//  .repositoryAccessLevel(java.lang.String)
//  .repositoryStorage(java.lang.String)
//  .requestAccessEnabled(java.lang.Boolean|IResolvable)
//  .requirementsAccessLevel(java.lang.String)
//  .resolveOutdatedDiffDiscussions(java.lang.Boolean|IResolvable)
//  .resourceGroupDefaultProcessMode(java.lang.String)
//  .restrictUserDefinedVariables(java.lang.Boolean|IResolvable)
//  .securityAndComplianceAccessLevel(java.lang.String)
//  .sharedRunnersEnabled(java.lang.Boolean|IResolvable)
//  .skipWaitForDefaultBranchProtection(java.lang.Boolean|IResolvable)
//  .snippetsAccessLevel(java.lang.String)
//  .snippetsEnabled(java.lang.Boolean|IResolvable)
//  .squashCommitTemplate(java.lang.String)
//  .squashOption(java.lang.String)
//  .suggestionCommitMessage(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .templateName(java.lang.String)
//  .templateProjectId(java.lang.Number)
//  .timeouts(ProjectTimeouts)
//  .topics(java.util.List<java.lang.String>)
//  .useCustomTemplate(java.lang.Boolean|IResolvable)
//  .visibilityLevel(java.lang.String)
//  .wikiAccessLevel(java.lang.String)
//  .wikiEnabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.allowMergeOnSkippedPipeline">allowMergeOnSkippedPipeline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true if you want to treat skipped pipelines as if they finished with success. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.allowPipelineTriggerApproveDeployment">allowPipelineTriggerApproveDeployment</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set whether or not a pipeline triggerer is allowed to approve deployments. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.analyticsAccessLevel">analyticsAccessLevel</a></code> | <code>java.lang.String</code> | Set the analytics access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.approvalsBeforeMerge">approvalsBeforeMerge</a></code> | <code>java.lang.Number</code> | Number of merge request approvals required for merging. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.archived">archived</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.archiveOnDestroy">archiveOnDestroy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to `true` to archive the project instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoCancelPendingPipelines">autoCancelPendingPipelines</a></code> | <code>java.lang.String</code> | Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.autocloseReferencedIssues">autocloseReferencedIssues</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set whether auto-closing referenced issues on default branch. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoDevopsDeployStrategy">autoDevopsDeployStrategy</a></code> | <code>java.lang.String</code> | Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable Auto DevOps for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoDuoCodeReviewEnabled">autoDuoCodeReviewEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable automatic reviews by GitLab Duo on merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.avatar">avatar</a></code> | <code>java.lang.String</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.avatarHash">avatarHash</a></code> | <code>java.lang.String</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.branches">branches</a></code> | <code>java.lang.String</code> | Branches to fork (empty for all branches). |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildGitStrategy">buildGitStrategy</a></code> | <code>java.lang.String</code> | The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildsAccessLevel">buildsAccessLevel</a></code> | <code>java.lang.String</code> | Set the builds access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildTimeout">buildTimeout</a></code> | <code>java.lang.Number</code> | The maximum amount of time, in seconds, that a job can run. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciConfigPath">ciConfigPath</a></code> | <code>java.lang.String</code> | Custom Path to CI config file. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciDefaultGitDepth">ciDefaultGitDepth</a></code> | <code>java.lang.Number</code> | Default number of revisions for shallow cloning. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciDeletePipelinesInSeconds">ciDeletePipelinesInSeconds</a></code> | <code>java.lang.Number</code> | Pipelines older than the configured time are deleted. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciForwardDeploymentEnabled">ciForwardDeploymentEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When a new deployment job starts, skip older deployment jobs that are still pending. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciForwardDeploymentRollbackAllowed">ciForwardDeploymentRollbackAllowed</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow job retries even if the deployment job is outdated. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciIdTokenSubClaimComponents">ciIdTokenSubClaimComponents</a></code> | <code>java.util.List<java.lang.String></code> | Fields included in the sub claim of the ID Token. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciPipelineVariablesMinimumOverrideRole">ciPipelineVariablesMinimumOverrideRole</a></code> | <code>java.lang.String</code> | The minimum role required to set variables when running pipelines and jobs. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciPushRepositoryForJobTokenAllowed">ciPushRepositoryForJobTokenAllowed</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow Git push requests to your project repository that are authenticated with a CI/CD job token. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciRestrictPipelineCancellationRole">ciRestrictPipelineCancellationRole</a></code> | <code>java.lang.String</code> | The role required to cancel a pipeline or job. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciSeparatedCaches">ciSeparatedCaches</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use separate caches for protected branches. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.containerExpirationPolicy">containerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | container_expiration_policy block. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.containerRegistryAccessLevel">containerRegistryAccessLevel</a></code> | <code>java.lang.String</code> | Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.containerRegistryEnabled">containerRegistryEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable container registry for the project. Use `container_registry_access_level` instead. To be removed in 19.0. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | The default branch for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.emailsEnabled">emailsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.environmentsAccessLevel">environmentsAccessLevel</a></code> | <code>java.lang.String</code> | Set the environments access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.externalAuthorizationClassificationLabel">externalAuthorizationClassificationLabel</a></code> | <code>java.lang.String</code> | The classification label for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.featureFlagsAccessLevel">featureFlagsAccessLevel</a></code> | <code>java.lang.String</code> | Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.forkedFromProjectId">forkedFromProjectId</a></code> | <code>java.lang.Number</code> | The id of the project to fork. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.forkingAccessLevel">forkingAccessLevel</a></code> | <code>java.lang.String</code> | Set the forking access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.groupRunnersEnabled">groupRunnersEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable group runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.groupWithProjectTemplatesId">groupWithProjectTemplatesId</a></code> | <code>java.lang.Number</code> | For group-level custom templates, specifies ID of group from which all the custom project templates are sourced. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#id Project#id}. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.importUrl">importUrl</a></code> | <code>java.lang.String</code> | Git URL to a repository to be imported. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.importUrlPassword">importUrlPassword</a></code> | <code>java.lang.String</code> | The password for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.importUrlUsername">importUrlUsername</a></code> | <code>java.lang.String</code> | The username for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.infrastructureAccessLevel">infrastructureAccessLevel</a></code> | <code>java.lang.String</code> | Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.initializeWithReadme">initializeWithReadme</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Create main branch with first commit containing a README.md file. Must be set to `true` if importing an uninitialized project with a different `default_branch`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.issuesAccessLevel">issuesAccessLevel</a></code> | <code>java.lang.String</code> | Set the issues access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.issuesEnabled">issuesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable issue tracking for the project. Use `issues_access_level` instead. To be removed in 19.0. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.issuesTemplate">issuesTemplate</a></code> | <code>java.lang.String</code> | Sets the template for new issues in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.keepLatestArtifact">keepLatestArtifact</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Disable or enable the ability to keep the latest artifact for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.lfsEnabled">lfsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable LFS for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeCommitTemplate">mergeCommitTemplate</a></code> | <code>java.lang.String</code> | Template used to create merge commit message in merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeMethod">mergeMethod</a></code> | <code>java.lang.String</code> | Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergePipelinesEnabled">mergePipelinesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable or disable merge pipelines. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeRequestsAccessLevel">mergeRequestsAccessLevel</a></code> | <code>java.lang.String</code> | Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeRequestsEnabled">mergeRequestsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable merge requests for the project. Use `merge_requests_access_level` instead. To be removed in 19.0. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeRequestsTemplate">mergeRequestsTemplate</a></code> | <code>java.lang.String</code> | Sets the template for new merge requests in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeTrainsEnabled">mergeTrainsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mirror">mirror</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable project pull mirror. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mirrorOverwritesDivergedBranches">mirrorOverwritesDivergedBranches</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable overwrite diverged branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mirrorTriggerBuilds">mirrorTriggerBuilds</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable trigger builds on pushes for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.modelExperimentsAccessLevel">modelExperimentsAccessLevel</a></code> | <code>java.lang.String</code> | Set visibility of machine learning model experiments. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.modelRegistryAccessLevel">modelRegistryAccessLevel</a></code> | <code>java.lang.String</code> | Set visibility of machine learning model registry. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.monitorAccessLevel">monitorAccessLevel</a></code> | <code>java.lang.String</code> | Set the monitor access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mrDefaultTargetSelf">mrDefaultTargetSelf</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | For forked projects, target merge requests to this project. If false, the target will be the upstream project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.namespaceId">namespaceId</a></code> | <code>java.lang.Number</code> | The namespace (group or user) of the project. Defaults to your user. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.onlyAllowMergeIfAllDiscussionsAreResolved">onlyAllowMergeIfAllDiscussionsAreResolved</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true if you want allow merges only if all discussions are resolved. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.onlyAllowMergeIfPipelineSucceeds">onlyAllowMergeIfPipelineSucceeds</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true if you want allow merges only if a pipeline succeeds. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.onlyMirrorProtectedBranches">onlyMirrorProtectedBranches</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable only mirror protected branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.packagesEnabled">packagesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable packages repository for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.pagesAccessLevel">pagesAccessLevel</a></code> | <code>java.lang.String</code> | Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The path of the repository. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.permanentlyDeleteOnDestroy">permanentlyDeleteOnDestroy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to `true` to immediately permanently delete the project instead of scheduling a delete for Premium and Ultimate tiers. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.pipelinesEnabled">pipelinesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable pipelines for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.preReceiveSecretDetectionEnabled">preReceiveSecretDetectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether Secret Push Detection is enabled. Requires GitLab Ultimate. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.preventMergeWithoutJiraIssue">preventMergeWithoutJiraIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set whether merge requests require an associated issue from Jira. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.printingMergeRequestLinkEnabled">printingMergeRequestLinkEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Show link to create/view merge request when pushing from the command line. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.publicBuilds">publicBuilds</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.publicJobs">publicJobs</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.pushRules">pushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.releasesAccessLevel">releasesAccessLevel</a></code> | <code>java.lang.String</code> | Set the releases access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.removeSourceBranchAfterMerge">removeSourceBranchAfterMerge</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable `Delete source branch` option by default for all new merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.repositoryAccessLevel">repositoryAccessLevel</a></code> | <code>java.lang.String</code> | Set the repository access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.repositoryStorage">repositoryStorage</a></code> | <code>java.lang.String</code> | Which storage shard the repository is on. (administrator only). |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.requestAccessEnabled">requestAccessEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.requirementsAccessLevel">requirementsAccessLevel</a></code> | <code>java.lang.String</code> | Set the requirements access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.resolveOutdatedDiffDiscussions">resolveOutdatedDiffDiscussions</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Automatically resolve merge request diffs discussions on lines changed with a push. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.resourceGroupDefaultProcessMode">resourceGroupDefaultProcessMode</a></code> | <code>java.lang.String</code> | The default resource group process mode for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.restrictUserDefinedVariables">restrictUserDefinedVariables</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.securityAndComplianceAccessLevel">securityAndComplianceAccessLevel</a></code> | <code>java.lang.String</code> | Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.sharedRunnersEnabled">sharedRunnersEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable shared runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.skipWaitForDefaultBranchProtection">skipWaitForDefaultBranchProtection</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If `true`, the default behavior to wait for the default branch protection to be created is skipped. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.snippetsAccessLevel">snippetsAccessLevel</a></code> | <code>java.lang.String</code> | Set the snippets access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.snippetsEnabled">snippetsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable snippets for the project. Use `snippets_access_level` instead. To be removed in 19.0. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.squashCommitTemplate">squashCommitTemplate</a></code> | <code>java.lang.String</code> | Template used to create squash commit message in merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.squashOption">squashOption</a></code> | <code>java.lang.String</code> | Squash commits when merge request is merged. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.suggestionCommitMessage">suggestionCommitMessage</a></code> | <code>java.lang.String</code> | The commit message used to apply merge request suggestions. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The list of tags for a project; |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.templateName">templateName</a></code> | <code>java.lang.String</code> | When used without use_custom_template, name of a built-in project template. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.templateProjectId">templateProjectId</a></code> | <code>java.lang.Number</code> | When used with use_custom_template, project ID of a custom project template. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | The list of topics for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.useCustomTemplate">useCustomTemplate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition). |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.visibilityLevel">visibilityLevel</a></code> | <code>java.lang.String</code> | Set to `public` to create a public project. Valid values are `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.wikiAccessLevel">wikiAccessLevel</a></code> | <code>java.lang.String</code> | Set the wiki access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.wikiEnabled">wikiEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable wiki for the project. Use `wiki_access_level` instead. To be removed in 19.0. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#name Project#name}

---

##### `allowMergeOnSkippedPipeline`<sup>Optional</sup> <a name="allowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.allowMergeOnSkippedPipeline"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true if you want to treat skipped pipelines as if they finished with success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#allow_merge_on_skipped_pipeline Project#allow_merge_on_skipped_pipeline}

---

##### `allowPipelineTriggerApproveDeployment`<sup>Optional</sup> <a name="allowPipelineTriggerApproveDeployment" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.allowPipelineTriggerApproveDeployment"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set whether or not a pipeline triggerer is allowed to approve deployments. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#allow_pipeline_trigger_approve_deployment Project#allow_pipeline_trigger_approve_deployment}

---

##### `analyticsAccessLevel`<sup>Optional</sup> <a name="analyticsAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.analyticsAccessLevel"></a>

- *Type:* java.lang.String

Set the analytics access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#analytics_access_level Project#analytics_access_level}

---

##### `approvalsBeforeMerge`<sup>Optional</sup> <a name="approvalsBeforeMerge" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.approvalsBeforeMerge"></a>

- *Type:* java.lang.Number

Number of merge request approvals required for merging.

Default is 0. This field **does not** work well in combination with the `gitlab_project_approval_rule` resource. We recommend you do not use this deprecated field and use `gitlab_project_approval_rule` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#approvals_before_merge Project#approvals_before_merge}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.archived"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#archived Project#archived}

---

##### `archiveOnDestroy`<sup>Optional</sup> <a name="archiveOnDestroy" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.archiveOnDestroy"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to `true` to archive the project instead of deleting on destroy.

If set to `true` it will entire omit the `DELETE` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#archive_on_destroy Project#archive_on_destroy}

---

##### `autoCancelPendingPipelines`<sup>Optional</sup> <a name="autoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoCancelPendingPipelines"></a>

- *Type:* java.lang.String

Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#auto_cancel_pending_pipelines Project#auto_cancel_pending_pipelines}

---

##### `autocloseReferencedIssues`<sup>Optional</sup> <a name="autocloseReferencedIssues" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.autocloseReferencedIssues"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set whether auto-closing referenced issues on default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#autoclose_referenced_issues Project#autoclose_referenced_issues}

---

##### `autoDevopsDeployStrategy`<sup>Optional</sup> <a name="autoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoDevopsDeployStrategy"></a>

- *Type:* java.lang.String

Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#auto_devops_deploy_strategy Project#auto_devops_deploy_strategy}

---

##### `autoDevopsEnabled`<sup>Optional</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoDevopsEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable Auto DevOps for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#auto_devops_enabled Project#auto_devops_enabled}

---

##### `autoDuoCodeReviewEnabled`<sup>Optional</sup> <a name="autoDuoCodeReviewEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoDuoCodeReviewEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable automatic reviews by GitLab Duo on merge requests.

Ultimate only. Automatic reviews only work with the GitLab Duo Enterprise add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#auto_duo_code_review_enabled Project#auto_duo_code_review_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.avatar"></a>

- *Type:* java.lang.String

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#avatar Project#avatar}

---

##### `avatarHash`<sup>Optional</sup> <a name="avatarHash" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.avatarHash"></a>

- *Type:* java.lang.String

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#avatar_hash Project#avatar_hash}

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.branches"></a>

- *Type:* java.lang.String

Branches to fork (empty for all branches).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#branches Project#branches}

---

##### `buildGitStrategy`<sup>Optional</sup> <a name="buildGitStrategy" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildGitStrategy"></a>

- *Type:* java.lang.String

The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#build_git_strategy Project#build_git_strategy}

---

##### `buildsAccessLevel`<sup>Optional</sup> <a name="buildsAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildsAccessLevel"></a>

- *Type:* java.lang.String

Set the builds access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#builds_access_level Project#builds_access_level}

---

##### `buildTimeout`<sup>Optional</sup> <a name="buildTimeout" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildTimeout"></a>

- *Type:* java.lang.Number

The maximum amount of time, in seconds, that a job can run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#build_timeout Project#build_timeout}

---

##### `ciConfigPath`<sup>Optional</sup> <a name="ciConfigPath" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciConfigPath"></a>

- *Type:* java.lang.String

Custom Path to CI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_config_path Project#ci_config_path}

---

##### `ciDefaultGitDepth`<sup>Optional</sup> <a name="ciDefaultGitDepth" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciDefaultGitDepth"></a>

- *Type:* java.lang.Number

Default number of revisions for shallow cloning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_default_git_depth Project#ci_default_git_depth}

---

##### `ciDeletePipelinesInSeconds`<sup>Optional</sup> <a name="ciDeletePipelinesInSeconds" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciDeletePipelinesInSeconds"></a>

- *Type:* java.lang.Number

Pipelines older than the configured time are deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_delete_pipelines_in_seconds Project#ci_delete_pipelines_in_seconds}

---

##### `ciForwardDeploymentEnabled`<sup>Optional</sup> <a name="ciForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciForwardDeploymentEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When a new deployment job starts, skip older deployment jobs that are still pending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_forward_deployment_enabled Project#ci_forward_deployment_enabled}

---

##### `ciForwardDeploymentRollbackAllowed`<sup>Optional</sup> <a name="ciForwardDeploymentRollbackAllowed" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciForwardDeploymentRollbackAllowed"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow job retries even if the deployment job is outdated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_forward_deployment_rollback_allowed Project#ci_forward_deployment_rollback_allowed}

---

##### `ciIdTokenSubClaimComponents`<sup>Optional</sup> <a name="ciIdTokenSubClaimComponents" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciIdTokenSubClaimComponents"></a>

- *Type:* java.util.List<java.lang.String>

Fields included in the sub claim of the ID Token.

Accepts an array starting with project_path. The array might also include ref_type and ref. Defaults to ["project_path", "ref_type", "ref"]. Introduced in GitLab 17.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_id_token_sub_claim_components Project#ci_id_token_sub_claim_components}

---

##### `ciPipelineVariablesMinimumOverrideRole`<sup>Optional</sup> <a name="ciPipelineVariablesMinimumOverrideRole" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciPipelineVariablesMinimumOverrideRole"></a>

- *Type:* java.lang.String

The minimum role required to set variables when running pipelines and jobs.

Introduced in GitLab 17.1. Valid values are `developer`, `maintainer`, `owner`, `no_one_allowed`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_pipeline_variables_minimum_override_role Project#ci_pipeline_variables_minimum_override_role}

---

##### `ciPushRepositoryForJobTokenAllowed`<sup>Optional</sup> <a name="ciPushRepositoryForJobTokenAllowed" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciPushRepositoryForJobTokenAllowed"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow Git push requests to your project repository that are authenticated with a CI/CD job token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_push_repository_for_job_token_allowed Project#ci_push_repository_for_job_token_allowed}

---

##### `ciRestrictPipelineCancellationRole`<sup>Optional</sup> <a name="ciRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciRestrictPipelineCancellationRole"></a>

- *Type:* java.lang.String

The role required to cancel a pipeline or job.

Premium and Ultimate only. Valid values are `developer`, `maintainer`, `no one`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_restrict_pipeline_cancellation_role Project#ci_restrict_pipeline_cancellation_role}

---

##### `ciSeparatedCaches`<sup>Optional</sup> <a name="ciSeparatedCaches" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciSeparatedCaches"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use separate caches for protected branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_separated_caches Project#ci_separated_caches}

---

##### `containerExpirationPolicy`<sup>Optional</sup> <a name="containerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.containerExpirationPolicy"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

container_expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#container_expiration_policy Project#container_expiration_policy}

---

##### `containerRegistryAccessLevel`<sup>Optional</sup> <a name="containerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.containerRegistryAccessLevel"></a>

- *Type:* java.lang.String

Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#container_registry_access_level Project#container_registry_access_level}

---

##### `containerRegistryEnabled`<sup>Optional</sup> <a name="containerRegistryEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.containerRegistryEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable container registry for the project. Use `container_registry_access_level` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#container_registry_enabled Project#container_registry_enabled}

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.defaultBranch"></a>

- *Type:* java.lang.String

The default branch for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#default_branch Project#default_branch}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#description Project#description}

---

##### `emailsEnabled`<sup>Optional</sup> <a name="emailsEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.emailsEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#emails_enabled Project#emails_enabled}

---

##### `environmentsAccessLevel`<sup>Optional</sup> <a name="environmentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.environmentsAccessLevel"></a>

- *Type:* java.lang.String

Set the environments access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#environments_access_level Project#environments_access_level}

---

##### `externalAuthorizationClassificationLabel`<sup>Optional</sup> <a name="externalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.externalAuthorizationClassificationLabel"></a>

- *Type:* java.lang.String

The classification label for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#external_authorization_classification_label Project#external_authorization_classification_label}

---

##### `featureFlagsAccessLevel`<sup>Optional</sup> <a name="featureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.featureFlagsAccessLevel"></a>

- *Type:* java.lang.String

Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#feature_flags_access_level Project#feature_flags_access_level}

---

##### `forkedFromProjectId`<sup>Optional</sup> <a name="forkedFromProjectId" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.forkedFromProjectId"></a>

- *Type:* java.lang.Number

The id of the project to fork.

During create the project is forked and during an update the fork relation is changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#forked_from_project_id Project#forked_from_project_id}

---

##### `forkingAccessLevel`<sup>Optional</sup> <a name="forkingAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.forkingAccessLevel"></a>

- *Type:* java.lang.String

Set the forking access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#forking_access_level Project#forking_access_level}

---

##### `groupRunnersEnabled`<sup>Optional</sup> <a name="groupRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.groupRunnersEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable group runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#group_runners_enabled Project#group_runners_enabled}

---

##### `groupWithProjectTemplatesId`<sup>Optional</sup> <a name="groupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.groupWithProjectTemplatesId"></a>

- *Type:* java.lang.Number

For group-level custom templates, specifies ID of group from which all the custom project templates are sourced.

Leave empty for instance-level templates. Requires use_custom_template to be true (enterprise edition).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#group_with_project_templates_id Project#group_with_project_templates_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#id Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importUrl`<sup>Optional</sup> <a name="importUrl" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.importUrl"></a>

- *Type:* java.lang.String

Git URL to a repository to be imported.

Together with `mirror = true` it will setup a Pull Mirror. This can also be used together with `forked_from_project_id` to setup a Pull Mirror for a fork. The fork takes precedence over the import. Make sure to provide the credentials in `import_url_username` and `import_url_password`. GitLab never returns the credentials, thus the provider cannot detect configuration drift in the credentials. They can also not be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#import_url Project#import_url}

---

##### `importUrlPassword`<sup>Optional</sup> <a name="importUrlPassword" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.importUrlPassword"></a>

- *Type:* java.lang.String

The password for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#import_url_password Project#import_url_password}

---

##### `importUrlUsername`<sup>Optional</sup> <a name="importUrlUsername" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.importUrlUsername"></a>

- *Type:* java.lang.String

The username for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`.  See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#import_url_username Project#import_url_username}

---

##### `infrastructureAccessLevel`<sup>Optional</sup> <a name="infrastructureAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.infrastructureAccessLevel"></a>

- *Type:* java.lang.String

Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#infrastructure_access_level Project#infrastructure_access_level}

---

##### `initializeWithReadme`<sup>Optional</sup> <a name="initializeWithReadme" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.initializeWithReadme"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Create main branch with first commit containing a README.md file. Must be set to `true` if importing an uninitialized project with a different `default_branch`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#initialize_with_readme Project#initialize_with_readme}

---

##### `issuesAccessLevel`<sup>Optional</sup> <a name="issuesAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.issuesAccessLevel"></a>

- *Type:* java.lang.String

Set the issues access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#issues_access_level Project#issues_access_level}

---

##### `issuesEnabled`<sup>Optional</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.issuesEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable issue tracking for the project. Use `issues_access_level` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#issues_enabled Project#issues_enabled}

---

##### `issuesTemplate`<sup>Optional</sup> <a name="issuesTemplate" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.issuesTemplate"></a>

- *Type:* java.lang.String

Sets the template for new issues in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#issues_template Project#issues_template}

---

##### `keepLatestArtifact`<sup>Optional</sup> <a name="keepLatestArtifact" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.keepLatestArtifact"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Disable or enable the ability to keep the latest artifact for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#keep_latest_artifact Project#keep_latest_artifact}

---

##### `lfsEnabled`<sup>Optional</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.lfsEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable LFS for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#lfs_enabled Project#lfs_enabled}

---

##### `mergeCommitTemplate`<sup>Optional</sup> <a name="mergeCommitTemplate" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeCommitTemplate"></a>

- *Type:* java.lang.String

Template used to create merge commit message in merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_commit_template Project#merge_commit_template}

---

##### `mergeMethod`<sup>Optional</sup> <a name="mergeMethod" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeMethod"></a>

- *Type:* java.lang.String

Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_method Project#merge_method}

---

##### `mergePipelinesEnabled`<sup>Optional</sup> <a name="mergePipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergePipelinesEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable or disable merge pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_pipelines_enabled Project#merge_pipelines_enabled}

---

##### `mergeRequestsAccessLevel`<sup>Optional</sup> <a name="mergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeRequestsAccessLevel"></a>

- *Type:* java.lang.String

Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_requests_access_level Project#merge_requests_access_level}

---

##### `mergeRequestsEnabled`<sup>Optional</sup> <a name="mergeRequestsEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeRequestsEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable merge requests for the project. Use `merge_requests_access_level` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_requests_enabled Project#merge_requests_enabled}

---

##### `mergeRequestsTemplate`<sup>Optional</sup> <a name="mergeRequestsTemplate" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeRequestsTemplate"></a>

- *Type:* java.lang.String

Sets the template for new merge requests in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_requests_template Project#merge_requests_template}

---

##### `mergeTrainsEnabled`<sup>Optional</sup> <a name="mergeTrainsEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeTrainsEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_trains_enabled Project#merge_trains_enabled}

---

##### `mirror`<sup>Optional</sup> <a name="mirror" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mirror"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable project pull mirror.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#mirror Project#mirror}

---

##### `mirrorOverwritesDivergedBranches`<sup>Optional</sup> <a name="mirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mirrorOverwritesDivergedBranches"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable overwrite diverged branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#mirror_overwrites_diverged_branches Project#mirror_overwrites_diverged_branches}

---

##### `mirrorTriggerBuilds`<sup>Optional</sup> <a name="mirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mirrorTriggerBuilds"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable trigger builds on pushes for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#mirror_trigger_builds Project#mirror_trigger_builds}

---

##### `modelExperimentsAccessLevel`<sup>Optional</sup> <a name="modelExperimentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.modelExperimentsAccessLevel"></a>

- *Type:* java.lang.String

Set visibility of machine learning model experiments. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#model_experiments_access_level Project#model_experiments_access_level}

---

##### `modelRegistryAccessLevel`<sup>Optional</sup> <a name="modelRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.modelRegistryAccessLevel"></a>

- *Type:* java.lang.String

Set visibility of machine learning model registry. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#model_registry_access_level Project#model_registry_access_level}

---

##### `monitorAccessLevel`<sup>Optional</sup> <a name="monitorAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.monitorAccessLevel"></a>

- *Type:* java.lang.String

Set the monitor access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#monitor_access_level Project#monitor_access_level}

---

##### `mrDefaultTargetSelf`<sup>Optional</sup> <a name="mrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mrDefaultTargetSelf"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

For forked projects, target merge requests to this project. If false, the target will be the upstream project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#mr_default_target_self Project#mr_default_target_self}

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.namespaceId"></a>

- *Type:* java.lang.Number

The namespace (group or user) of the project. Defaults to your user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#namespace_id Project#namespace_id}

---

##### `onlyAllowMergeIfAllDiscussionsAreResolved`<sup>Optional</sup> <a name="onlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true if you want allow merges only if all discussions are resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#only_allow_merge_if_all_discussions_are_resolved Project#only_allow_merge_if_all_discussions_are_resolved}

---

##### `onlyAllowMergeIfPipelineSucceeds`<sup>Optional</sup> <a name="onlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.onlyAllowMergeIfPipelineSucceeds"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true if you want allow merges only if a pipeline succeeds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#only_allow_merge_if_pipeline_succeeds Project#only_allow_merge_if_pipeline_succeeds}

---

##### `onlyMirrorProtectedBranches`<sup>Optional</sup> <a name="onlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.onlyMirrorProtectedBranches"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable only mirror protected branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#only_mirror_protected_branches Project#only_mirror_protected_branches}

---

##### `packagesEnabled`<sup>Optional</sup> <a name="packagesEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.packagesEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable packages repository for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#packages_enabled Project#packages_enabled}

---

##### `pagesAccessLevel`<sup>Optional</sup> <a name="pagesAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.pagesAccessLevel"></a>

- *Type:* java.lang.String

Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#pages_access_level Project#pages_access_level}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The path of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#path Project#path}

---

##### `permanentlyDeleteOnDestroy`<sup>Optional</sup> <a name="permanentlyDeleteOnDestroy" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.permanentlyDeleteOnDestroy"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to `true` to immediately permanently delete the project instead of scheduling a delete for Premium and Ultimate tiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#permanently_delete_on_destroy Project#permanently_delete_on_destroy}

---

##### `pipelinesEnabled`<sup>Optional</sup> <a name="pipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.pipelinesEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable pipelines for the project.

The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls. Use `builds_access_level` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#pipelines_enabled Project#pipelines_enabled}

---

##### `preReceiveSecretDetectionEnabled`<sup>Optional</sup> <a name="preReceiveSecretDetectionEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.preReceiveSecretDetectionEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether Secret Push Detection is enabled. Requires GitLab Ultimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#pre_receive_secret_detection_enabled Project#pre_receive_secret_detection_enabled}

---

##### `preventMergeWithoutJiraIssue`<sup>Optional</sup> <a name="preventMergeWithoutJiraIssue" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.preventMergeWithoutJiraIssue"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set whether merge requests require an associated issue from Jira. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#prevent_merge_without_jira_issue Project#prevent_merge_without_jira_issue}

---

##### `printingMergeRequestLinkEnabled`<sup>Optional</sup> <a name="printingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.printingMergeRequestLinkEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Show link to create/view merge request when pushing from the command line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#printing_merge_request_link_enabled Project#printing_merge_request_link_enabled}

---

##### `publicBuilds`<sup>Optional</sup> <a name="publicBuilds" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.publicBuilds"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#public_builds Project#public_builds}

---

##### `publicJobs`<sup>Optional</sup> <a name="publicJobs" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.publicJobs"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#public_jobs Project#public_jobs}

---

##### `pushRules`<sup>Optional</sup> <a name="pushRules" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.pushRules"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#push_rules Project#push_rules}

---

##### `releasesAccessLevel`<sup>Optional</sup> <a name="releasesAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.releasesAccessLevel"></a>

- *Type:* java.lang.String

Set the releases access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#releases_access_level Project#releases_access_level}

---

##### `removeSourceBranchAfterMerge`<sup>Optional</sup> <a name="removeSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.removeSourceBranchAfterMerge"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable `Delete source branch` option by default for all new merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#remove_source_branch_after_merge Project#remove_source_branch_after_merge}

---

##### `repositoryAccessLevel`<sup>Optional</sup> <a name="repositoryAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.repositoryAccessLevel"></a>

- *Type:* java.lang.String

Set the repository access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#repository_access_level Project#repository_access_level}

---

##### `repositoryStorage`<sup>Optional</sup> <a name="repositoryStorage" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.repositoryStorage"></a>

- *Type:* java.lang.String

Which storage shard the repository is on. (administrator only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#repository_storage Project#repository_storage}

---

##### `requestAccessEnabled`<sup>Optional</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.requestAccessEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#request_access_enabled Project#request_access_enabled}

---

##### `requirementsAccessLevel`<sup>Optional</sup> <a name="requirementsAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.requirementsAccessLevel"></a>

- *Type:* java.lang.String

Set the requirements access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#requirements_access_level Project#requirements_access_level}

---

##### `resolveOutdatedDiffDiscussions`<sup>Optional</sup> <a name="resolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.resolveOutdatedDiffDiscussions"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Automatically resolve merge request diffs discussions on lines changed with a push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#resolve_outdated_diff_discussions Project#resolve_outdated_diff_discussions}

---

##### `resourceGroupDefaultProcessMode`<sup>Optional</sup> <a name="resourceGroupDefaultProcessMode" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.resourceGroupDefaultProcessMode"></a>

- *Type:* java.lang.String

The default resource group process mode for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#resource_group_default_process_mode Project#resource_group_default_process_mode}

---

##### `restrictUserDefinedVariables`<sup>Optional</sup> <a name="restrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.restrictUserDefinedVariables"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline.

Use `ci_pipeline_variables_minimum_override_role` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#restrict_user_defined_variables Project#restrict_user_defined_variables}

---

##### `securityAndComplianceAccessLevel`<sup>Optional</sup> <a name="securityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.securityAndComplianceAccessLevel"></a>

- *Type:* java.lang.String

Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#security_and_compliance_access_level Project#security_and_compliance_access_level}

---

##### `sharedRunnersEnabled`<sup>Optional</sup> <a name="sharedRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.sharedRunnersEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable shared runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#shared_runners_enabled Project#shared_runners_enabled}

---

##### `skipWaitForDefaultBranchProtection`<sup>Optional</sup> <a name="skipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.skipWaitForDefaultBranchProtection"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If `true`, the default behavior to wait for the default branch protection to be created is skipped.

This is necessary if the current user is not an admin and the default branch protection is disabled on an instance-level.
There is currently no known way to determine if the default branch protection is disabled on an instance-level for non-admin users.
This attribute is only used during resource creation, thus changes are suppressed and the attribute cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#skip_wait_for_default_branch_protection Project#skip_wait_for_default_branch_protection}

---

##### `snippetsAccessLevel`<sup>Optional</sup> <a name="snippetsAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.snippetsAccessLevel"></a>

- *Type:* java.lang.String

Set the snippets access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#snippets_access_level Project#snippets_access_level}

---

##### `snippetsEnabled`<sup>Optional</sup> <a name="snippetsEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.snippetsEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable snippets for the project. Use `snippets_access_level` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#snippets_enabled Project#snippets_enabled}

---

##### `squashCommitTemplate`<sup>Optional</sup> <a name="squashCommitTemplate" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.squashCommitTemplate"></a>

- *Type:* java.lang.String

Template used to create squash commit message in merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#squash_commit_template Project#squash_commit_template}

---

##### `squashOption`<sup>Optional</sup> <a name="squashOption" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.squashOption"></a>

- *Type:* java.lang.String

Squash commits when merge request is merged.

Valid values are `never` (Do not allow), `always` (Require), `default_on` (Encourage), or `default_off` (Allow). The default value is `default_off` (Allow).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#squash_option Project#squash_option}

---

##### `suggestionCommitMessage`<sup>Optional</sup> <a name="suggestionCommitMessage" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.suggestionCommitMessage"></a>

- *Type:* java.lang.String

The commit message used to apply merge request suggestions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#suggestion_commit_message Project#suggestion_commit_message}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

The list of tags for a project;

put array of tags, that should be finally assigned to a project. Use `topics` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#tags Project#tags}

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.templateName"></a>

- *Type:* java.lang.String

When used without use_custom_template, name of a built-in project template.

When used with use_custom_template, name of a custom project template. This option is mutually exclusive with `template_project_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#template_name Project#template_name}

---

##### `templateProjectId`<sup>Optional</sup> <a name="templateProjectId" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.templateProjectId"></a>

- *Type:* java.lang.Number

When used with use_custom_template, project ID of a custom project template.

This is preferable to using template_name since template_name may be ambiguous (enterprise edition). This option is mutually exclusive with `template_name`. See `gitlab_group_project_file_template` to set a project as a template project. If a project has not been set as a template, using it here will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#template_project_id Project#template_project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#timeouts Project#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.topics"></a>

- *Type:* java.util.List<java.lang.String>

The list of topics for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#topics Project#topics}

---

##### `useCustomTemplate`<sup>Optional</sup> <a name="useCustomTemplate" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.useCustomTemplate"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition).

~> When using a custom template, [Group Tokens won't work](https://docs.gitlab.com/15.7/ee/user/project/settings/import_export_troubleshooting/#import-using-the-rest-api-fails-when-using-a-group-access-token). You must use a real user's Personal Access Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#use_custom_template Project#use_custom_template}

---

##### `visibilityLevel`<sup>Optional</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.visibilityLevel"></a>

- *Type:* java.lang.String

Set to `public` to create a public project. Valid values are `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#visibility_level Project#visibility_level}

---

##### `wikiAccessLevel`<sup>Optional</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.wikiAccessLevel"></a>

- *Type:* java.lang.String

Set the wiki access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#wiki_access_level Project#wiki_access_level}

---

##### `wikiEnabled`<sup>Optional</sup> <a name="wikiEnabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.wikiEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable wiki for the project. Use `wiki_access_level` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#wiki_enabled Project#wiki_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy">putContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putPushRules">putPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAllowMergeOnSkippedPipeline">resetAllowMergeOnSkippedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAllowPipelineTriggerApproveDeployment">resetAllowPipelineTriggerApproveDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAnalyticsAccessLevel">resetAnalyticsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetApprovalsBeforeMerge">resetApprovalsBeforeMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetArchiveOnDestroy">resetArchiveOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoCancelPendingPipelines">resetAutoCancelPendingPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutocloseReferencedIssues">resetAutocloseReferencedIssues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoDevopsDeployStrategy">resetAutoDevopsDeployStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoDevopsEnabled">resetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoDuoCodeReviewEnabled">resetAutoDuoCodeReviewEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAvatar">resetAvatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAvatarHash">resetAvatarHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBranches">resetBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildGitStrategy">resetBuildGitStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildsAccessLevel">resetBuildsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildTimeout">resetBuildTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiConfigPath">resetCiConfigPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiDefaultGitDepth">resetCiDefaultGitDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiDeletePipelinesInSeconds">resetCiDeletePipelinesInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiForwardDeploymentEnabled">resetCiForwardDeploymentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiForwardDeploymentRollbackAllowed">resetCiForwardDeploymentRollbackAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiIdTokenSubClaimComponents">resetCiIdTokenSubClaimComponents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiPipelineVariablesMinimumOverrideRole">resetCiPipelineVariablesMinimumOverrideRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiPushRepositoryForJobTokenAllowed">resetCiPushRepositoryForJobTokenAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiRestrictPipelineCancellationRole">resetCiRestrictPipelineCancellationRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiSeparatedCaches">resetCiSeparatedCaches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerExpirationPolicy">resetContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerRegistryAccessLevel">resetContainerRegistryAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerRegistryEnabled">resetContainerRegistryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetDefaultBranch">resetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetEmailsEnabled">resetEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetEnvironmentsAccessLevel">resetEnvironmentsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetExternalAuthorizationClassificationLabel">resetExternalAuthorizationClassificationLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetFeatureFlagsAccessLevel">resetFeatureFlagsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetForkedFromProjectId">resetForkedFromProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetForkingAccessLevel">resetForkingAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetGroupRunnersEnabled">resetGroupRunnersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetGroupWithProjectTemplatesId">resetGroupWithProjectTemplatesId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetImportUrl">resetImportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetImportUrlPassword">resetImportUrlPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetImportUrlUsername">resetImportUrlUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetInfrastructureAccessLevel">resetInfrastructureAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetInitializeWithReadme">resetInitializeWithReadme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetIssuesAccessLevel">resetIssuesAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetIssuesEnabled">resetIssuesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetIssuesTemplate">resetIssuesTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetKeepLatestArtifact">resetKeepLatestArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetLfsEnabled">resetLfsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeCommitTemplate">resetMergeCommitTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeMethod">resetMergeMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergePipelinesEnabled">resetMergePipelinesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeRequestsAccessLevel">resetMergeRequestsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeRequestsEnabled">resetMergeRequestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeRequestsTemplate">resetMergeRequestsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeTrainsEnabled">resetMergeTrainsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMirror">resetMirror</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMirrorOverwritesDivergedBranches">resetMirrorOverwritesDivergedBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMirrorTriggerBuilds">resetMirrorTriggerBuilds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetModelExperimentsAccessLevel">resetModelExperimentsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetModelRegistryAccessLevel">resetModelRegistryAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMonitorAccessLevel">resetMonitorAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMrDefaultTargetSelf">resetMrDefaultTargetSelf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfAllDiscussionsAreResolved">resetOnlyAllowMergeIfAllDiscussionsAreResolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfPipelineSucceeds">resetOnlyAllowMergeIfPipelineSucceeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOnlyMirrorProtectedBranches">resetOnlyMirrorProtectedBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPackagesEnabled">resetPackagesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPagesAccessLevel">resetPagesAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPermanentlyDeleteOnDestroy">resetPermanentlyDeleteOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPipelinesEnabled">resetPipelinesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPreReceiveSecretDetectionEnabled">resetPreReceiveSecretDetectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPreventMergeWithoutJiraIssue">resetPreventMergeWithoutJiraIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPrintingMergeRequestLinkEnabled">resetPrintingMergeRequestLinkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPublicBuilds">resetPublicBuilds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPublicJobs">resetPublicJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPushRules">resetPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetReleasesAccessLevel">resetReleasesAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRemoveSourceBranchAfterMerge">resetRemoveSourceBranchAfterMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRepositoryAccessLevel">resetRepositoryAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRepositoryStorage">resetRepositoryStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRequestAccessEnabled">resetRequestAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRequirementsAccessLevel">resetRequirementsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetResolveOutdatedDiffDiscussions">resetResolveOutdatedDiffDiscussions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetResourceGroupDefaultProcessMode">resetResourceGroupDefaultProcessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRestrictUserDefinedVariables">resetRestrictUserDefinedVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSecurityAndComplianceAccessLevel">resetSecurityAndComplianceAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSharedRunnersEnabled">resetSharedRunnersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSkipWaitForDefaultBranchProtection">resetSkipWaitForDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSnippetsAccessLevel">resetSnippetsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSnippetsEnabled">resetSnippetsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSquashCommitTemplate">resetSquashCommitTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSquashOption">resetSquashOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSuggestionCommitMessage">resetSuggestionCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTemplateName">resetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTemplateProjectId">resetTemplateProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTopics">resetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetUseCustomTemplate">resetUseCustomTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetVisibilityLevel">resetVisibilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetWikiAccessLevel">resetWikiAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetWikiEnabled">resetWikiEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.project.Project.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.project.Project.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.project.Project.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.project.Project.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.project.Project.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.project.Project.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.project.Project.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.project.Project.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.project.Project.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.project.Project.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.project.Project.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.project.Project.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.project.Project.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.project.Project.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.project.Project.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.project.Project.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.project.Project.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.project.Project.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.project.Project.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.project.Project.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainerExpirationPolicy` <a name="putContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy"></a>

```java
public void putContainerExpirationPolicy(ProjectContainerExpirationPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---

##### `putPushRules` <a name="putPushRules" id="@cdktf/provider-gitlab.project.Project.putPushRules"></a>

```java
public void putPushRules(ProjectPushRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-gitlab.project.Project.putTimeouts"></a>

```java
public void putTimeouts(ProjectTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

---

##### `resetAllowMergeOnSkippedPipeline` <a name="resetAllowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.Project.resetAllowMergeOnSkippedPipeline"></a>

```java
public void resetAllowMergeOnSkippedPipeline()
```

##### `resetAllowPipelineTriggerApproveDeployment` <a name="resetAllowPipelineTriggerApproveDeployment" id="@cdktf/provider-gitlab.project.Project.resetAllowPipelineTriggerApproveDeployment"></a>

```java
public void resetAllowPipelineTriggerApproveDeployment()
```

##### `resetAnalyticsAccessLevel` <a name="resetAnalyticsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetAnalyticsAccessLevel"></a>

```java
public void resetAnalyticsAccessLevel()
```

##### `resetApprovalsBeforeMerge` <a name="resetApprovalsBeforeMerge" id="@cdktf/provider-gitlab.project.Project.resetApprovalsBeforeMerge"></a>

```java
public void resetApprovalsBeforeMerge()
```

##### `resetArchived` <a name="resetArchived" id="@cdktf/provider-gitlab.project.Project.resetArchived"></a>

```java
public void resetArchived()
```

##### `resetArchiveOnDestroy` <a name="resetArchiveOnDestroy" id="@cdktf/provider-gitlab.project.Project.resetArchiveOnDestroy"></a>

```java
public void resetArchiveOnDestroy()
```

##### `resetAutoCancelPendingPipelines` <a name="resetAutoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.Project.resetAutoCancelPendingPipelines"></a>

```java
public void resetAutoCancelPendingPipelines()
```

##### `resetAutocloseReferencedIssues` <a name="resetAutocloseReferencedIssues" id="@cdktf/provider-gitlab.project.Project.resetAutocloseReferencedIssues"></a>

```java
public void resetAutocloseReferencedIssues()
```

##### `resetAutoDevopsDeployStrategy` <a name="resetAutoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.Project.resetAutoDevopsDeployStrategy"></a>

```java
public void resetAutoDevopsDeployStrategy()
```

##### `resetAutoDevopsEnabled` <a name="resetAutoDevopsEnabled" id="@cdktf/provider-gitlab.project.Project.resetAutoDevopsEnabled"></a>

```java
public void resetAutoDevopsEnabled()
```

##### `resetAutoDuoCodeReviewEnabled` <a name="resetAutoDuoCodeReviewEnabled" id="@cdktf/provider-gitlab.project.Project.resetAutoDuoCodeReviewEnabled"></a>

```java
public void resetAutoDuoCodeReviewEnabled()
```

##### `resetAvatar` <a name="resetAvatar" id="@cdktf/provider-gitlab.project.Project.resetAvatar"></a>

```java
public void resetAvatar()
```

##### `resetAvatarHash` <a name="resetAvatarHash" id="@cdktf/provider-gitlab.project.Project.resetAvatarHash"></a>

```java
public void resetAvatarHash()
```

##### `resetBranches` <a name="resetBranches" id="@cdktf/provider-gitlab.project.Project.resetBranches"></a>

```java
public void resetBranches()
```

##### `resetBuildGitStrategy` <a name="resetBuildGitStrategy" id="@cdktf/provider-gitlab.project.Project.resetBuildGitStrategy"></a>

```java
public void resetBuildGitStrategy()
```

##### `resetBuildsAccessLevel` <a name="resetBuildsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetBuildsAccessLevel"></a>

```java
public void resetBuildsAccessLevel()
```

##### `resetBuildTimeout` <a name="resetBuildTimeout" id="@cdktf/provider-gitlab.project.Project.resetBuildTimeout"></a>

```java
public void resetBuildTimeout()
```

##### `resetCiConfigPath` <a name="resetCiConfigPath" id="@cdktf/provider-gitlab.project.Project.resetCiConfigPath"></a>

```java
public void resetCiConfigPath()
```

##### `resetCiDefaultGitDepth` <a name="resetCiDefaultGitDepth" id="@cdktf/provider-gitlab.project.Project.resetCiDefaultGitDepth"></a>

```java
public void resetCiDefaultGitDepth()
```

##### `resetCiDeletePipelinesInSeconds` <a name="resetCiDeletePipelinesInSeconds" id="@cdktf/provider-gitlab.project.Project.resetCiDeletePipelinesInSeconds"></a>

```java
public void resetCiDeletePipelinesInSeconds()
```

##### `resetCiForwardDeploymentEnabled` <a name="resetCiForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.Project.resetCiForwardDeploymentEnabled"></a>

```java
public void resetCiForwardDeploymentEnabled()
```

##### `resetCiForwardDeploymentRollbackAllowed` <a name="resetCiForwardDeploymentRollbackAllowed" id="@cdktf/provider-gitlab.project.Project.resetCiForwardDeploymentRollbackAllowed"></a>

```java
public void resetCiForwardDeploymentRollbackAllowed()
```

##### `resetCiIdTokenSubClaimComponents` <a name="resetCiIdTokenSubClaimComponents" id="@cdktf/provider-gitlab.project.Project.resetCiIdTokenSubClaimComponents"></a>

```java
public void resetCiIdTokenSubClaimComponents()
```

##### `resetCiPipelineVariablesMinimumOverrideRole` <a name="resetCiPipelineVariablesMinimumOverrideRole" id="@cdktf/provider-gitlab.project.Project.resetCiPipelineVariablesMinimumOverrideRole"></a>

```java
public void resetCiPipelineVariablesMinimumOverrideRole()
```

##### `resetCiPushRepositoryForJobTokenAllowed` <a name="resetCiPushRepositoryForJobTokenAllowed" id="@cdktf/provider-gitlab.project.Project.resetCiPushRepositoryForJobTokenAllowed"></a>

```java
public void resetCiPushRepositoryForJobTokenAllowed()
```

##### `resetCiRestrictPipelineCancellationRole` <a name="resetCiRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.project.Project.resetCiRestrictPipelineCancellationRole"></a>

```java
public void resetCiRestrictPipelineCancellationRole()
```

##### `resetCiSeparatedCaches` <a name="resetCiSeparatedCaches" id="@cdktf/provider-gitlab.project.Project.resetCiSeparatedCaches"></a>

```java
public void resetCiSeparatedCaches()
```

##### `resetContainerExpirationPolicy` <a name="resetContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.resetContainerExpirationPolicy"></a>

```java
public void resetContainerExpirationPolicy()
```

##### `resetContainerRegistryAccessLevel` <a name="resetContainerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetContainerRegistryAccessLevel"></a>

```java
public void resetContainerRegistryAccessLevel()
```

##### `resetContainerRegistryEnabled` <a name="resetContainerRegistryEnabled" id="@cdktf/provider-gitlab.project.Project.resetContainerRegistryEnabled"></a>

```java
public void resetContainerRegistryEnabled()
```

##### `resetDefaultBranch` <a name="resetDefaultBranch" id="@cdktf/provider-gitlab.project.Project.resetDefaultBranch"></a>

```java
public void resetDefaultBranch()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.project.Project.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEmailsEnabled` <a name="resetEmailsEnabled" id="@cdktf/provider-gitlab.project.Project.resetEmailsEnabled"></a>

```java
public void resetEmailsEnabled()
```

##### `resetEnvironmentsAccessLevel` <a name="resetEnvironmentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetEnvironmentsAccessLevel"></a>

```java
public void resetEnvironmentsAccessLevel()
```

##### `resetExternalAuthorizationClassificationLabel` <a name="resetExternalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.Project.resetExternalAuthorizationClassificationLabel"></a>

```java
public void resetExternalAuthorizationClassificationLabel()
```

##### `resetFeatureFlagsAccessLevel` <a name="resetFeatureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetFeatureFlagsAccessLevel"></a>

```java
public void resetFeatureFlagsAccessLevel()
```

##### `resetForkedFromProjectId` <a name="resetForkedFromProjectId" id="@cdktf/provider-gitlab.project.Project.resetForkedFromProjectId"></a>

```java
public void resetForkedFromProjectId()
```

##### `resetForkingAccessLevel` <a name="resetForkingAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetForkingAccessLevel"></a>

```java
public void resetForkingAccessLevel()
```

##### `resetGroupRunnersEnabled` <a name="resetGroupRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.resetGroupRunnersEnabled"></a>

```java
public void resetGroupRunnersEnabled()
```

##### `resetGroupWithProjectTemplatesId` <a name="resetGroupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.Project.resetGroupWithProjectTemplatesId"></a>

```java
public void resetGroupWithProjectTemplatesId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.project.Project.resetId"></a>

```java
public void resetId()
```

##### `resetImportUrl` <a name="resetImportUrl" id="@cdktf/provider-gitlab.project.Project.resetImportUrl"></a>

```java
public void resetImportUrl()
```

##### `resetImportUrlPassword` <a name="resetImportUrlPassword" id="@cdktf/provider-gitlab.project.Project.resetImportUrlPassword"></a>

```java
public void resetImportUrlPassword()
```

##### `resetImportUrlUsername` <a name="resetImportUrlUsername" id="@cdktf/provider-gitlab.project.Project.resetImportUrlUsername"></a>

```java
public void resetImportUrlUsername()
```

##### `resetInfrastructureAccessLevel` <a name="resetInfrastructureAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetInfrastructureAccessLevel"></a>

```java
public void resetInfrastructureAccessLevel()
```

##### `resetInitializeWithReadme` <a name="resetInitializeWithReadme" id="@cdktf/provider-gitlab.project.Project.resetInitializeWithReadme"></a>

```java
public void resetInitializeWithReadme()
```

##### `resetIssuesAccessLevel` <a name="resetIssuesAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetIssuesAccessLevel"></a>

```java
public void resetIssuesAccessLevel()
```

##### `resetIssuesEnabled` <a name="resetIssuesEnabled" id="@cdktf/provider-gitlab.project.Project.resetIssuesEnabled"></a>

```java
public void resetIssuesEnabled()
```

##### `resetIssuesTemplate` <a name="resetIssuesTemplate" id="@cdktf/provider-gitlab.project.Project.resetIssuesTemplate"></a>

```java
public void resetIssuesTemplate()
```

##### `resetKeepLatestArtifact` <a name="resetKeepLatestArtifact" id="@cdktf/provider-gitlab.project.Project.resetKeepLatestArtifact"></a>

```java
public void resetKeepLatestArtifact()
```

##### `resetLfsEnabled` <a name="resetLfsEnabled" id="@cdktf/provider-gitlab.project.Project.resetLfsEnabled"></a>

```java
public void resetLfsEnabled()
```

##### `resetMergeCommitTemplate` <a name="resetMergeCommitTemplate" id="@cdktf/provider-gitlab.project.Project.resetMergeCommitTemplate"></a>

```java
public void resetMergeCommitTemplate()
```

##### `resetMergeMethod` <a name="resetMergeMethod" id="@cdktf/provider-gitlab.project.Project.resetMergeMethod"></a>

```java
public void resetMergeMethod()
```

##### `resetMergePipelinesEnabled` <a name="resetMergePipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.resetMergePipelinesEnabled"></a>

```java
public void resetMergePipelinesEnabled()
```

##### `resetMergeRequestsAccessLevel` <a name="resetMergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsAccessLevel"></a>

```java
public void resetMergeRequestsAccessLevel()
```

##### `resetMergeRequestsEnabled` <a name="resetMergeRequestsEnabled" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsEnabled"></a>

```java
public void resetMergeRequestsEnabled()
```

##### `resetMergeRequestsTemplate` <a name="resetMergeRequestsTemplate" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsTemplate"></a>

```java
public void resetMergeRequestsTemplate()
```

##### `resetMergeTrainsEnabled` <a name="resetMergeTrainsEnabled" id="@cdktf/provider-gitlab.project.Project.resetMergeTrainsEnabled"></a>

```java
public void resetMergeTrainsEnabled()
```

##### `resetMirror` <a name="resetMirror" id="@cdktf/provider-gitlab.project.Project.resetMirror"></a>

```java
public void resetMirror()
```

##### `resetMirrorOverwritesDivergedBranches` <a name="resetMirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.Project.resetMirrorOverwritesDivergedBranches"></a>

```java
public void resetMirrorOverwritesDivergedBranches()
```

##### `resetMirrorTriggerBuilds` <a name="resetMirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.Project.resetMirrorTriggerBuilds"></a>

```java
public void resetMirrorTriggerBuilds()
```

##### `resetModelExperimentsAccessLevel` <a name="resetModelExperimentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetModelExperimentsAccessLevel"></a>

```java
public void resetModelExperimentsAccessLevel()
```

##### `resetModelRegistryAccessLevel` <a name="resetModelRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetModelRegistryAccessLevel"></a>

```java
public void resetModelRegistryAccessLevel()
```

##### `resetMonitorAccessLevel` <a name="resetMonitorAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetMonitorAccessLevel"></a>

```java
public void resetMonitorAccessLevel()
```

##### `resetMrDefaultTargetSelf` <a name="resetMrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.Project.resetMrDefaultTargetSelf"></a>

```java
public void resetMrDefaultTargetSelf()
```

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktf/provider-gitlab.project.Project.resetNamespaceId"></a>

```java
public void resetNamespaceId()
```

##### `resetOnlyAllowMergeIfAllDiscussionsAreResolved` <a name="resetOnlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfAllDiscussionsAreResolved"></a>

```java
public void resetOnlyAllowMergeIfAllDiscussionsAreResolved()
```

##### `resetOnlyAllowMergeIfPipelineSucceeds` <a name="resetOnlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfPipelineSucceeds"></a>

```java
public void resetOnlyAllowMergeIfPipelineSucceeds()
```

##### `resetOnlyMirrorProtectedBranches` <a name="resetOnlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.Project.resetOnlyMirrorProtectedBranches"></a>

```java
public void resetOnlyMirrorProtectedBranches()
```

##### `resetPackagesEnabled` <a name="resetPackagesEnabled" id="@cdktf/provider-gitlab.project.Project.resetPackagesEnabled"></a>

```java
public void resetPackagesEnabled()
```

##### `resetPagesAccessLevel` <a name="resetPagesAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetPagesAccessLevel"></a>

```java
public void resetPagesAccessLevel()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-gitlab.project.Project.resetPath"></a>

```java
public void resetPath()
```

##### `resetPermanentlyDeleteOnDestroy` <a name="resetPermanentlyDeleteOnDestroy" id="@cdktf/provider-gitlab.project.Project.resetPermanentlyDeleteOnDestroy"></a>

```java
public void resetPermanentlyDeleteOnDestroy()
```

##### `resetPipelinesEnabled` <a name="resetPipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.resetPipelinesEnabled"></a>

```java
public void resetPipelinesEnabled()
```

##### `resetPreReceiveSecretDetectionEnabled` <a name="resetPreReceiveSecretDetectionEnabled" id="@cdktf/provider-gitlab.project.Project.resetPreReceiveSecretDetectionEnabled"></a>

```java
public void resetPreReceiveSecretDetectionEnabled()
```

##### `resetPreventMergeWithoutJiraIssue` <a name="resetPreventMergeWithoutJiraIssue" id="@cdktf/provider-gitlab.project.Project.resetPreventMergeWithoutJiraIssue"></a>

```java
public void resetPreventMergeWithoutJiraIssue()
```

##### `resetPrintingMergeRequestLinkEnabled` <a name="resetPrintingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.Project.resetPrintingMergeRequestLinkEnabled"></a>

```java
public void resetPrintingMergeRequestLinkEnabled()
```

##### `resetPublicBuilds` <a name="resetPublicBuilds" id="@cdktf/provider-gitlab.project.Project.resetPublicBuilds"></a>

```java
public void resetPublicBuilds()
```

##### `resetPublicJobs` <a name="resetPublicJobs" id="@cdktf/provider-gitlab.project.Project.resetPublicJobs"></a>

```java
public void resetPublicJobs()
```

##### `resetPushRules` <a name="resetPushRules" id="@cdktf/provider-gitlab.project.Project.resetPushRules"></a>

```java
public void resetPushRules()
```

##### `resetReleasesAccessLevel` <a name="resetReleasesAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetReleasesAccessLevel"></a>

```java
public void resetReleasesAccessLevel()
```

##### `resetRemoveSourceBranchAfterMerge` <a name="resetRemoveSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.Project.resetRemoveSourceBranchAfterMerge"></a>

```java
public void resetRemoveSourceBranchAfterMerge()
```

##### `resetRepositoryAccessLevel` <a name="resetRepositoryAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetRepositoryAccessLevel"></a>

```java
public void resetRepositoryAccessLevel()
```

##### `resetRepositoryStorage` <a name="resetRepositoryStorage" id="@cdktf/provider-gitlab.project.Project.resetRepositoryStorage"></a>

```java
public void resetRepositoryStorage()
```

##### `resetRequestAccessEnabled` <a name="resetRequestAccessEnabled" id="@cdktf/provider-gitlab.project.Project.resetRequestAccessEnabled"></a>

```java
public void resetRequestAccessEnabled()
```

##### `resetRequirementsAccessLevel` <a name="resetRequirementsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetRequirementsAccessLevel"></a>

```java
public void resetRequirementsAccessLevel()
```

##### `resetResolveOutdatedDiffDiscussions` <a name="resetResolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.Project.resetResolveOutdatedDiffDiscussions"></a>

```java
public void resetResolveOutdatedDiffDiscussions()
```

##### `resetResourceGroupDefaultProcessMode` <a name="resetResourceGroupDefaultProcessMode" id="@cdktf/provider-gitlab.project.Project.resetResourceGroupDefaultProcessMode"></a>

```java
public void resetResourceGroupDefaultProcessMode()
```

##### `resetRestrictUserDefinedVariables` <a name="resetRestrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.Project.resetRestrictUserDefinedVariables"></a>

```java
public void resetRestrictUserDefinedVariables()
```

##### `resetSecurityAndComplianceAccessLevel` <a name="resetSecurityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetSecurityAndComplianceAccessLevel"></a>

```java
public void resetSecurityAndComplianceAccessLevel()
```

##### `resetSharedRunnersEnabled` <a name="resetSharedRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.resetSharedRunnersEnabled"></a>

```java
public void resetSharedRunnersEnabled()
```

##### `resetSkipWaitForDefaultBranchProtection` <a name="resetSkipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.Project.resetSkipWaitForDefaultBranchProtection"></a>

```java
public void resetSkipWaitForDefaultBranchProtection()
```

##### `resetSnippetsAccessLevel` <a name="resetSnippetsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetSnippetsAccessLevel"></a>

```java
public void resetSnippetsAccessLevel()
```

##### `resetSnippetsEnabled` <a name="resetSnippetsEnabled" id="@cdktf/provider-gitlab.project.Project.resetSnippetsEnabled"></a>

```java
public void resetSnippetsEnabled()
```

##### `resetSquashCommitTemplate` <a name="resetSquashCommitTemplate" id="@cdktf/provider-gitlab.project.Project.resetSquashCommitTemplate"></a>

```java
public void resetSquashCommitTemplate()
```

##### `resetSquashOption` <a name="resetSquashOption" id="@cdktf/provider-gitlab.project.Project.resetSquashOption"></a>

```java
public void resetSquashOption()
```

##### `resetSuggestionCommitMessage` <a name="resetSuggestionCommitMessage" id="@cdktf/provider-gitlab.project.Project.resetSuggestionCommitMessage"></a>

```java
public void resetSuggestionCommitMessage()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-gitlab.project.Project.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktf/provider-gitlab.project.Project.resetTemplateName"></a>

```java
public void resetTemplateName()
```

##### `resetTemplateProjectId` <a name="resetTemplateProjectId" id="@cdktf/provider-gitlab.project.Project.resetTemplateProjectId"></a>

```java
public void resetTemplateProjectId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-gitlab.project.Project.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTopics` <a name="resetTopics" id="@cdktf/provider-gitlab.project.Project.resetTopics"></a>

```java
public void resetTopics()
```

##### `resetUseCustomTemplate` <a name="resetUseCustomTemplate" id="@cdktf/provider-gitlab.project.Project.resetUseCustomTemplate"></a>

```java
public void resetUseCustomTemplate()
```

##### `resetVisibilityLevel` <a name="resetVisibilityLevel" id="@cdktf/provider-gitlab.project.Project.resetVisibilityLevel"></a>

```java
public void resetVisibilityLevel()
```

##### `resetWikiAccessLevel` <a name="resetWikiAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetWikiAccessLevel"></a>

```java
public void resetWikiAccessLevel()
```

##### `resetWikiEnabled` <a name="resetWikiEnabled" id="@cdktf/provider-gitlab.project.Project.resetWikiEnabled"></a>

```java
public void resetWikiEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.project.Project.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project.Project;

Project.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.project.Project.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.project.Project.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project.Project;

Project.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.project.Project.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project.Project;

Project.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project.Project;

Project.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Project.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Project to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarUrl">avatarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicy">containerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference">ProjectContainerExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emptyRepo">emptyRepo</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.httpUrlToRepo">httpUrlToRepo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pathWithNamespace">pathWithNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pushRules">pushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference">ProjectPushRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.runnersToken">runnersToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sshUrlToRepo">sshUrlToRepo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference">ProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipelineInput">allowMergeOnSkippedPipelineInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowPipelineTriggerApproveDeploymentInput">allowPipelineTriggerApproveDeploymentInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevelInput">analyticsAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMergeInput">approvalsBeforeMergeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archivedInput">archivedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archiveOnDestroyInput">archiveOnDestroyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelinesInput">autoCancelPendingPipelinesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssuesInput">autocloseReferencedIssuesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategyInput">autoDevopsDeployStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabledInput">autoDevopsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDuoCodeReviewEnabledInput">autoDuoCodeReviewEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarHashInput">avatarHashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarInput">avatarInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.branchesInput">branchesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildGitStrategyInput">buildGitStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildsAccessLevelInput">buildsAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildTimeoutInput">buildTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciConfigPathInput">ciConfigPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepthInput">ciDefaultGitDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciDeletePipelinesInSecondsInput">ciDeletePipelinesInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabledInput">ciForwardDeploymentEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentRollbackAllowedInput">ciForwardDeploymentRollbackAllowedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciIdTokenSubClaimComponentsInput">ciIdTokenSubClaimComponentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciPipelineVariablesMinimumOverrideRoleInput">ciPipelineVariablesMinimumOverrideRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciPushRepositoryForJobTokenAllowedInput">ciPushRepositoryForJobTokenAllowedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRoleInput">ciRestrictPipelineCancellationRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciSeparatedCachesInput">ciSeparatedCachesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicyInput">containerExpirationPolicyInput</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevelInput">containerRegistryAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabledInput">containerRegistryEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.defaultBranchInput">defaultBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emailsEnabledInput">emailsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevelInput">environmentsAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabelInput">externalAuthorizationClassificationLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevelInput">featureFlagsAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkedFromProjectIdInput">forkedFromProjectIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkingAccessLevelInput">forkingAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabledInput">groupRunnersEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesIdInput">groupWithProjectTemplatesIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlInput">importUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlPasswordInput">importUrlPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlUsernameInput">importUrlUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevelInput">infrastructureAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.initializeWithReadmeInput">initializeWithReadmeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesAccessLevelInput">issuesAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesEnabledInput">issuesEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesTemplateInput">issuesTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.keepLatestArtifactInput">keepLatestArtifactInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lfsEnabledInput">lfsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplateInput">mergeCommitTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeMethodInput">mergeMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabledInput">mergePipelinesEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevelInput">mergeRequestsAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabledInput">mergeRequestsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplateInput">mergeRequestsTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabledInput">mergeTrainsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorInput">mirrorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranchesInput">mirrorOverwritesDivergedBranchesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuildsInput">mirrorTriggerBuildsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.modelExperimentsAccessLevelInput">modelExperimentsAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.modelRegistryAccessLevelInput">modelRegistryAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.monitorAccessLevelInput">monitorAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelfInput">mrDefaultTargetSelfInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.namespaceIdInput">namespaceIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolvedInput">onlyAllowMergeIfAllDiscussionsAreResolvedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceedsInput">onlyAllowMergeIfPipelineSucceedsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranchesInput">onlyMirrorProtectedBranchesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.packagesEnabledInput">packagesEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pagesAccessLevelInput">pagesAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.permanentlyDeleteOnDestroyInput">permanentlyDeleteOnDestroyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pipelinesEnabledInput">pipelinesEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.preReceiveSecretDetectionEnabledInput">preReceiveSecretDetectionEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.preventMergeWithoutJiraIssueInput">preventMergeWithoutJiraIssueInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabledInput">printingMergeRequestLinkEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicBuildsInput">publicBuildsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicJobsInput">publicJobsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pushRulesInput">pushRulesInput</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.releasesAccessLevelInput">releasesAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMergeInput">removeSourceBranchAfterMergeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevelInput">repositoryAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryStorageInput">repositoryStorageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requestAccessEnabledInput">requestAccessEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevelInput">requirementsAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussionsInput">resolveOutdatedDiffDiscussionsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.resourceGroupDefaultProcessModeInput">resourceGroupDefaultProcessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariablesInput">restrictUserDefinedVariablesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevelInput">securityAndComplianceAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabledInput">sharedRunnersEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtectionInput">skipWaitForDefaultBranchProtectionInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevelInput">snippetsAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsEnabledInput">snippetsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashCommitTemplateInput">squashCommitTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashOptionInput">squashOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessageInput">suggestionCommitMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateNameInput">templateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateProjectIdInput">templateProjectIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.topicsInput">topicsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.useCustomTemplateInput">useCustomTemplateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.visibilityLevelInput">visibilityLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiAccessLevelInput">wikiAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiEnabledInput">wikiEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipeline">allowMergeOnSkippedPipeline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowPipelineTriggerApproveDeployment">allowPipelineTriggerApproveDeployment</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevel">analyticsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMerge">approvalsBeforeMerge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archived">archived</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archiveOnDestroy">archiveOnDestroy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelines">autoCancelPendingPipelines</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssues">autocloseReferencedIssues</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategy">autoDevopsDeployStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDuoCodeReviewEnabled">autoDuoCodeReviewEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatar">avatar</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarHash">avatarHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.branches">branches</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildGitStrategy">buildGitStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildsAccessLevel">buildsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildTimeout">buildTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciConfigPath">ciConfigPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepth">ciDefaultGitDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciDeletePipelinesInSeconds">ciDeletePipelinesInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabled">ciForwardDeploymentEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentRollbackAllowed">ciForwardDeploymentRollbackAllowed</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciIdTokenSubClaimComponents">ciIdTokenSubClaimComponents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciPipelineVariablesMinimumOverrideRole">ciPipelineVariablesMinimumOverrideRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciPushRepositoryForJobTokenAllowed">ciPushRepositoryForJobTokenAllowed</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRole">ciRestrictPipelineCancellationRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciSeparatedCaches">ciSeparatedCaches</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevel">containerRegistryAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabled">containerRegistryEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emailsEnabled">emailsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevel">environmentsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabel">externalAuthorizationClassificationLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevel">featureFlagsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkedFromProjectId">forkedFromProjectId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkingAccessLevel">forkingAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabled">groupRunnersEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesId">groupWithProjectTemplatesId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrl">importUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlPassword">importUrlPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlUsername">importUrlUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevel">infrastructureAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.initializeWithReadme">initializeWithReadme</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesAccessLevel">issuesAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesEnabled">issuesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesTemplate">issuesTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.keepLatestArtifact">keepLatestArtifact</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lfsEnabled">lfsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplate">mergeCommitTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeMethod">mergeMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabled">mergePipelinesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevel">mergeRequestsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabled">mergeRequestsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplate">mergeRequestsTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabled">mergeTrainsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirror">mirror</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranches">mirrorOverwritesDivergedBranches</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuilds">mirrorTriggerBuilds</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.modelExperimentsAccessLevel">modelExperimentsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.modelRegistryAccessLevel">modelRegistryAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.monitorAccessLevel">monitorAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelf">mrDefaultTargetSelf</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.namespaceId">namespaceId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolved">onlyAllowMergeIfAllDiscussionsAreResolved</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceeds">onlyAllowMergeIfPipelineSucceeds</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranches">onlyMirrorProtectedBranches</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.packagesEnabled">packagesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pagesAccessLevel">pagesAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.permanentlyDeleteOnDestroy">permanentlyDeleteOnDestroy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pipelinesEnabled">pipelinesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.preReceiveSecretDetectionEnabled">preReceiveSecretDetectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.preventMergeWithoutJiraIssue">preventMergeWithoutJiraIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabled">printingMergeRequestLinkEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicBuilds">publicBuilds</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicJobs">publicJobs</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.releasesAccessLevel">releasesAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMerge">removeSourceBranchAfterMerge</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevel">repositoryAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryStorage">repositoryStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevel">requirementsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussions">resolveOutdatedDiffDiscussions</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.resourceGroupDefaultProcessMode">resourceGroupDefaultProcessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariables">restrictUserDefinedVariables</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevel">securityAndComplianceAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabled">sharedRunnersEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtection">skipWaitForDefaultBranchProtection</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevel">snippetsAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsEnabled">snippetsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashCommitTemplate">squashCommitTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashOption">squashOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessage">suggestionCommitMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateProjectId">templateProjectId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.useCustomTemplate">useCustomTemplate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.visibilityLevel">visibilityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiAccessLevel">wikiAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiEnabled">wikiEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.project.Project.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.project.Project.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.project.Project.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.project.Project.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.project.Project.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.project.Project.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.project.Project.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.project.Project.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.project.Project.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.project.Project.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.project.Project.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.project.Project.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.project.Project.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.project.Project.property.avatarUrl"></a>

```java
public java.lang.String getAvatarUrl();
```

- *Type:* java.lang.String

---

##### `containerExpirationPolicy`<sup>Required</sup> <a name="containerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicy"></a>

```java
public ProjectContainerExpirationPolicyOutputReference getContainerExpirationPolicy();
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference">ProjectContainerExpirationPolicyOutputReference</a>

---

##### `emptyRepo`<sup>Required</sup> <a name="emptyRepo" id="@cdktf/provider-gitlab.project.Project.property.emptyRepo"></a>

```java
public IResolvable getEmptyRepo();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `httpUrlToRepo`<sup>Required</sup> <a name="httpUrlToRepo" id="@cdktf/provider-gitlab.project.Project.property.httpUrlToRepo"></a>

```java
public java.lang.String getHttpUrlToRepo();
```

- *Type:* java.lang.String

---

##### `pathWithNamespace`<sup>Required</sup> <a name="pathWithNamespace" id="@cdktf/provider-gitlab.project.Project.property.pathWithNamespace"></a>

```java
public java.lang.String getPathWithNamespace();
```

- *Type:* java.lang.String

---

##### `pushRules`<sup>Required</sup> <a name="pushRules" id="@cdktf/provider-gitlab.project.Project.property.pushRules"></a>

```java
public ProjectPushRulesOutputReference getPushRules();
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference">ProjectPushRulesOutputReference</a>

---

##### `runnersToken`<sup>Required</sup> <a name="runnersToken" id="@cdktf/provider-gitlab.project.Project.property.runnersToken"></a>

```java
public java.lang.String getRunnersToken();
```

- *Type:* java.lang.String

---

##### `sshUrlToRepo`<sup>Required</sup> <a name="sshUrlToRepo" id="@cdktf/provider-gitlab.project.Project.property.sshUrlToRepo"></a>

```java
public java.lang.String getSshUrlToRepo();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-gitlab.project.Project.property.timeouts"></a>

```java
public ProjectTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference">ProjectTimeoutsOutputReference</a>

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.project.Project.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `allowMergeOnSkippedPipelineInput`<sup>Optional</sup> <a name="allowMergeOnSkippedPipelineInput" id="@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipelineInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowMergeOnSkippedPipelineInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `allowPipelineTriggerApproveDeploymentInput`<sup>Optional</sup> <a name="allowPipelineTriggerApproveDeploymentInput" id="@cdktf/provider-gitlab.project.Project.property.allowPipelineTriggerApproveDeploymentInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowPipelineTriggerApproveDeploymentInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `analyticsAccessLevelInput`<sup>Optional</sup> <a name="analyticsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevelInput"></a>

```java
public java.lang.String getAnalyticsAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `approvalsBeforeMergeInput`<sup>Optional</sup> <a name="approvalsBeforeMergeInput" id="@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMergeInput"></a>

```java
public java.lang.Number getApprovalsBeforeMergeInput();
```

- *Type:* java.lang.Number

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktf/provider-gitlab.project.Project.property.archivedInput"></a>

```java
public java.lang.Boolean|IResolvable getArchivedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `archiveOnDestroyInput`<sup>Optional</sup> <a name="archiveOnDestroyInput" id="@cdktf/provider-gitlab.project.Project.property.archiveOnDestroyInput"></a>

```java
public java.lang.Boolean|IResolvable getArchiveOnDestroyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `autoCancelPendingPipelinesInput`<sup>Optional</sup> <a name="autoCancelPendingPipelinesInput" id="@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelinesInput"></a>

```java
public java.lang.String getAutoCancelPendingPipelinesInput();
```

- *Type:* java.lang.String

---

##### `autocloseReferencedIssuesInput`<sup>Optional</sup> <a name="autocloseReferencedIssuesInput" id="@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssuesInput"></a>

```java
public java.lang.Boolean|IResolvable getAutocloseReferencedIssuesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `autoDevopsDeployStrategyInput`<sup>Optional</sup> <a name="autoDevopsDeployStrategyInput" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategyInput"></a>

```java
public java.lang.String getAutoDevopsDeployStrategyInput();
```

- *Type:* java.lang.String

---

##### `autoDevopsEnabledInput`<sup>Optional</sup> <a name="autoDevopsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoDevopsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `autoDuoCodeReviewEnabledInput`<sup>Optional</sup> <a name="autoDuoCodeReviewEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.autoDuoCodeReviewEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoDuoCodeReviewEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `avatarHashInput`<sup>Optional</sup> <a name="avatarHashInput" id="@cdktf/provider-gitlab.project.Project.property.avatarHashInput"></a>

```java
public java.lang.String getAvatarHashInput();
```

- *Type:* java.lang.String

---

##### `avatarInput`<sup>Optional</sup> <a name="avatarInput" id="@cdktf/provider-gitlab.project.Project.property.avatarInput"></a>

```java
public java.lang.String getAvatarInput();
```

- *Type:* java.lang.String

---

##### `branchesInput`<sup>Optional</sup> <a name="branchesInput" id="@cdktf/provider-gitlab.project.Project.property.branchesInput"></a>

```java
public java.lang.String getBranchesInput();
```

- *Type:* java.lang.String

---

##### `buildGitStrategyInput`<sup>Optional</sup> <a name="buildGitStrategyInput" id="@cdktf/provider-gitlab.project.Project.property.buildGitStrategyInput"></a>

```java
public java.lang.String getBuildGitStrategyInput();
```

- *Type:* java.lang.String

---

##### `buildsAccessLevelInput`<sup>Optional</sup> <a name="buildsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.buildsAccessLevelInput"></a>

```java
public java.lang.String getBuildsAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `buildTimeoutInput`<sup>Optional</sup> <a name="buildTimeoutInput" id="@cdktf/provider-gitlab.project.Project.property.buildTimeoutInput"></a>

```java
public java.lang.Number getBuildTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `ciConfigPathInput`<sup>Optional</sup> <a name="ciConfigPathInput" id="@cdktf/provider-gitlab.project.Project.property.ciConfigPathInput"></a>

```java
public java.lang.String getCiConfigPathInput();
```

- *Type:* java.lang.String

---

##### `ciDefaultGitDepthInput`<sup>Optional</sup> <a name="ciDefaultGitDepthInput" id="@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepthInput"></a>

```java
public java.lang.Number getCiDefaultGitDepthInput();
```

- *Type:* java.lang.Number

---

##### `ciDeletePipelinesInSecondsInput`<sup>Optional</sup> <a name="ciDeletePipelinesInSecondsInput" id="@cdktf/provider-gitlab.project.Project.property.ciDeletePipelinesInSecondsInput"></a>

```java
public java.lang.Number getCiDeletePipelinesInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `ciForwardDeploymentEnabledInput`<sup>Optional</sup> <a name="ciForwardDeploymentEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getCiForwardDeploymentEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ciForwardDeploymentRollbackAllowedInput`<sup>Optional</sup> <a name="ciForwardDeploymentRollbackAllowedInput" id="@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentRollbackAllowedInput"></a>

```java
public java.lang.Boolean|IResolvable getCiForwardDeploymentRollbackAllowedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ciIdTokenSubClaimComponentsInput`<sup>Optional</sup> <a name="ciIdTokenSubClaimComponentsInput" id="@cdktf/provider-gitlab.project.Project.property.ciIdTokenSubClaimComponentsInput"></a>

```java
public java.util.List<java.lang.String> getCiIdTokenSubClaimComponentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ciPipelineVariablesMinimumOverrideRoleInput`<sup>Optional</sup> <a name="ciPipelineVariablesMinimumOverrideRoleInput" id="@cdktf/provider-gitlab.project.Project.property.ciPipelineVariablesMinimumOverrideRoleInput"></a>

```java
public java.lang.String getCiPipelineVariablesMinimumOverrideRoleInput();
```

- *Type:* java.lang.String

---

##### `ciPushRepositoryForJobTokenAllowedInput`<sup>Optional</sup> <a name="ciPushRepositoryForJobTokenAllowedInput" id="@cdktf/provider-gitlab.project.Project.property.ciPushRepositoryForJobTokenAllowedInput"></a>

```java
public java.lang.Boolean|IResolvable getCiPushRepositoryForJobTokenAllowedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ciRestrictPipelineCancellationRoleInput`<sup>Optional</sup> <a name="ciRestrictPipelineCancellationRoleInput" id="@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRoleInput"></a>

```java
public java.lang.String getCiRestrictPipelineCancellationRoleInput();
```

- *Type:* java.lang.String

---

##### `ciSeparatedCachesInput`<sup>Optional</sup> <a name="ciSeparatedCachesInput" id="@cdktf/provider-gitlab.project.Project.property.ciSeparatedCachesInput"></a>

```java
public java.lang.Boolean|IResolvable getCiSeparatedCachesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `containerExpirationPolicyInput`<sup>Optional</sup> <a name="containerExpirationPolicyInput" id="@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicyInput"></a>

```java
public ProjectContainerExpirationPolicy getContainerExpirationPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---

##### `containerRegistryAccessLevelInput`<sup>Optional</sup> <a name="containerRegistryAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevelInput"></a>

```java
public java.lang.String getContainerRegistryAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `containerRegistryEnabledInput`<sup>Optional</sup> <a name="containerRegistryEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getContainerRegistryEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `defaultBranchInput`<sup>Optional</sup> <a name="defaultBranchInput" id="@cdktf/provider-gitlab.project.Project.property.defaultBranchInput"></a>

```java
public java.lang.String getDefaultBranchInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.project.Project.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `emailsEnabledInput`<sup>Optional</sup> <a name="emailsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.emailsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEmailsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `environmentsAccessLevelInput`<sup>Optional</sup> <a name="environmentsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevelInput"></a>

```java
public java.lang.String getEnvironmentsAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `externalAuthorizationClassificationLabelInput`<sup>Optional</sup> <a name="externalAuthorizationClassificationLabelInput" id="@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabelInput"></a>

```java
public java.lang.String getExternalAuthorizationClassificationLabelInput();
```

- *Type:* java.lang.String

---

##### `featureFlagsAccessLevelInput`<sup>Optional</sup> <a name="featureFlagsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevelInput"></a>

```java
public java.lang.String getFeatureFlagsAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `forkedFromProjectIdInput`<sup>Optional</sup> <a name="forkedFromProjectIdInput" id="@cdktf/provider-gitlab.project.Project.property.forkedFromProjectIdInput"></a>

```java
public java.lang.Number getForkedFromProjectIdInput();
```

- *Type:* java.lang.Number

---

##### `forkingAccessLevelInput`<sup>Optional</sup> <a name="forkingAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.forkingAccessLevelInput"></a>

```java
public java.lang.String getForkingAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `groupRunnersEnabledInput`<sup>Optional</sup> <a name="groupRunnersEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGroupRunnersEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `groupWithProjectTemplatesIdInput`<sup>Optional</sup> <a name="groupWithProjectTemplatesIdInput" id="@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesIdInput"></a>

```java
public java.lang.Number getGroupWithProjectTemplatesIdInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.project.Project.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importUrlInput`<sup>Optional</sup> <a name="importUrlInput" id="@cdktf/provider-gitlab.project.Project.property.importUrlInput"></a>

```java
public java.lang.String getImportUrlInput();
```

- *Type:* java.lang.String

---

##### `importUrlPasswordInput`<sup>Optional</sup> <a name="importUrlPasswordInput" id="@cdktf/provider-gitlab.project.Project.property.importUrlPasswordInput"></a>

```java
public java.lang.String getImportUrlPasswordInput();
```

- *Type:* java.lang.String

---

##### `importUrlUsernameInput`<sup>Optional</sup> <a name="importUrlUsernameInput" id="@cdktf/provider-gitlab.project.Project.property.importUrlUsernameInput"></a>

```java
public java.lang.String getImportUrlUsernameInput();
```

- *Type:* java.lang.String

---

##### `infrastructureAccessLevelInput`<sup>Optional</sup> <a name="infrastructureAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevelInput"></a>

```java
public java.lang.String getInfrastructureAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `initializeWithReadmeInput`<sup>Optional</sup> <a name="initializeWithReadmeInput" id="@cdktf/provider-gitlab.project.Project.property.initializeWithReadmeInput"></a>

```java
public java.lang.Boolean|IResolvable getInitializeWithReadmeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `issuesAccessLevelInput`<sup>Optional</sup> <a name="issuesAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.issuesAccessLevelInput"></a>

```java
public java.lang.String getIssuesAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `issuesEnabledInput`<sup>Optional</sup> <a name="issuesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.issuesEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIssuesEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `issuesTemplateInput`<sup>Optional</sup> <a name="issuesTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.issuesTemplateInput"></a>

```java
public java.lang.String getIssuesTemplateInput();
```

- *Type:* java.lang.String

---

##### `keepLatestArtifactInput`<sup>Optional</sup> <a name="keepLatestArtifactInput" id="@cdktf/provider-gitlab.project.Project.property.keepLatestArtifactInput"></a>

```java
public java.lang.Boolean|IResolvable getKeepLatestArtifactInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `lfsEnabledInput`<sup>Optional</sup> <a name="lfsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.lfsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getLfsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mergeCommitTemplateInput`<sup>Optional</sup> <a name="mergeCommitTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplateInput"></a>

```java
public java.lang.String getMergeCommitTemplateInput();
```

- *Type:* java.lang.String

---

##### `mergeMethodInput`<sup>Optional</sup> <a name="mergeMethodInput" id="@cdktf/provider-gitlab.project.Project.property.mergeMethodInput"></a>

```java
public java.lang.String getMergeMethodInput();
```

- *Type:* java.lang.String

---

##### `mergePipelinesEnabledInput`<sup>Optional</sup> <a name="mergePipelinesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMergePipelinesEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsAccessLevelInput`<sup>Optional</sup> <a name="mergeRequestsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevelInput"></a>

```java
public java.lang.String getMergeRequestsAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `mergeRequestsEnabledInput`<sup>Optional</sup> <a name="mergeRequestsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMergeRequestsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsTemplateInput`<sup>Optional</sup> <a name="mergeRequestsTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplateInput"></a>

```java
public java.lang.String getMergeRequestsTemplateInput();
```

- *Type:* java.lang.String

---

##### `mergeTrainsEnabledInput`<sup>Optional</sup> <a name="mergeTrainsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMergeTrainsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mirrorInput`<sup>Optional</sup> <a name="mirrorInput" id="@cdktf/provider-gitlab.project.Project.property.mirrorInput"></a>

```java
public java.lang.Boolean|IResolvable getMirrorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mirrorOverwritesDivergedBranchesInput`<sup>Optional</sup> <a name="mirrorOverwritesDivergedBranchesInput" id="@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranchesInput"></a>

```java
public java.lang.Boolean|IResolvable getMirrorOverwritesDivergedBranchesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mirrorTriggerBuildsInput`<sup>Optional</sup> <a name="mirrorTriggerBuildsInput" id="@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuildsInput"></a>

```java
public java.lang.Boolean|IResolvable getMirrorTriggerBuildsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `modelExperimentsAccessLevelInput`<sup>Optional</sup> <a name="modelExperimentsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.modelExperimentsAccessLevelInput"></a>

```java
public java.lang.String getModelExperimentsAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `modelRegistryAccessLevelInput`<sup>Optional</sup> <a name="modelRegistryAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.modelRegistryAccessLevelInput"></a>

```java
public java.lang.String getModelRegistryAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `monitorAccessLevelInput`<sup>Optional</sup> <a name="monitorAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.monitorAccessLevelInput"></a>

```java
public java.lang.String getMonitorAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `mrDefaultTargetSelfInput`<sup>Optional</sup> <a name="mrDefaultTargetSelfInput" id="@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelfInput"></a>

```java
public java.lang.Boolean|IResolvable getMrDefaultTargetSelfInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.project.Project.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-gitlab.project.Project.property.namespaceIdInput"></a>

```java
public java.lang.Number getNamespaceIdInput();
```

- *Type:* java.lang.Number

---

##### `onlyAllowMergeIfAllDiscussionsAreResolvedInput`<sup>Optional</sup> <a name="onlyAllowMergeIfAllDiscussionsAreResolvedInput" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolvedInput"></a>

```java
public java.lang.Boolean|IResolvable getOnlyAllowMergeIfAllDiscussionsAreResolvedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `onlyAllowMergeIfPipelineSucceedsInput`<sup>Optional</sup> <a name="onlyAllowMergeIfPipelineSucceedsInput" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceedsInput"></a>

```java
public java.lang.Boolean|IResolvable getOnlyAllowMergeIfPipelineSucceedsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `onlyMirrorProtectedBranchesInput`<sup>Optional</sup> <a name="onlyMirrorProtectedBranchesInput" id="@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranchesInput"></a>

```java
public java.lang.Boolean|IResolvable getOnlyMirrorProtectedBranchesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `packagesEnabledInput`<sup>Optional</sup> <a name="packagesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.packagesEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPackagesEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pagesAccessLevelInput`<sup>Optional</sup> <a name="pagesAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.pagesAccessLevelInput"></a>

```java
public java.lang.String getPagesAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-gitlab.project.Project.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `permanentlyDeleteOnDestroyInput`<sup>Optional</sup> <a name="permanentlyDeleteOnDestroyInput" id="@cdktf/provider-gitlab.project.Project.property.permanentlyDeleteOnDestroyInput"></a>

```java
public java.lang.Boolean|IResolvable getPermanentlyDeleteOnDestroyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pipelinesEnabledInput`<sup>Optional</sup> <a name="pipelinesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.pipelinesEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPipelinesEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preReceiveSecretDetectionEnabledInput`<sup>Optional</sup> <a name="preReceiveSecretDetectionEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.preReceiveSecretDetectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPreReceiveSecretDetectionEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preventMergeWithoutJiraIssueInput`<sup>Optional</sup> <a name="preventMergeWithoutJiraIssueInput" id="@cdktf/provider-gitlab.project.Project.property.preventMergeWithoutJiraIssueInput"></a>

```java
public java.lang.Boolean|IResolvable getPreventMergeWithoutJiraIssueInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `printingMergeRequestLinkEnabledInput`<sup>Optional</sup> <a name="printingMergeRequestLinkEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPrintingMergeRequestLinkEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `publicBuildsInput`<sup>Optional</sup> <a name="publicBuildsInput" id="@cdktf/provider-gitlab.project.Project.property.publicBuildsInput"></a>

```java
public java.lang.Boolean|IResolvable getPublicBuildsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `publicJobsInput`<sup>Optional</sup> <a name="publicJobsInput" id="@cdktf/provider-gitlab.project.Project.property.publicJobsInput"></a>

```java
public java.lang.Boolean|IResolvable getPublicJobsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pushRulesInput`<sup>Optional</sup> <a name="pushRulesInput" id="@cdktf/provider-gitlab.project.Project.property.pushRulesInput"></a>

```java
public ProjectPushRules getPushRulesInput();
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---

##### `releasesAccessLevelInput`<sup>Optional</sup> <a name="releasesAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.releasesAccessLevelInput"></a>

```java
public java.lang.String getReleasesAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `removeSourceBranchAfterMergeInput`<sup>Optional</sup> <a name="removeSourceBranchAfterMergeInput" id="@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMergeInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveSourceBranchAfterMergeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `repositoryAccessLevelInput`<sup>Optional</sup> <a name="repositoryAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevelInput"></a>

```java
public java.lang.String getRepositoryAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `repositoryStorageInput`<sup>Optional</sup> <a name="repositoryStorageInput" id="@cdktf/provider-gitlab.project.Project.property.repositoryStorageInput"></a>

```java
public java.lang.String getRepositoryStorageInput();
```

- *Type:* java.lang.String

---

##### `requestAccessEnabledInput`<sup>Optional</sup> <a name="requestAccessEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.requestAccessEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRequestAccessEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requirementsAccessLevelInput`<sup>Optional</sup> <a name="requirementsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevelInput"></a>

```java
public java.lang.String getRequirementsAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `resolveOutdatedDiffDiscussionsInput`<sup>Optional</sup> <a name="resolveOutdatedDiffDiscussionsInput" id="@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussionsInput"></a>

```java
public java.lang.Boolean|IResolvable getResolveOutdatedDiffDiscussionsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupDefaultProcessModeInput`<sup>Optional</sup> <a name="resourceGroupDefaultProcessModeInput" id="@cdktf/provider-gitlab.project.Project.property.resourceGroupDefaultProcessModeInput"></a>

```java
public java.lang.String getResourceGroupDefaultProcessModeInput();
```

- *Type:* java.lang.String

---

##### `restrictUserDefinedVariablesInput`<sup>Optional</sup> <a name="restrictUserDefinedVariablesInput" id="@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariablesInput"></a>

```java
public java.lang.Boolean|IResolvable getRestrictUserDefinedVariablesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `securityAndComplianceAccessLevelInput`<sup>Optional</sup> <a name="securityAndComplianceAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevelInput"></a>

```java
public java.lang.String getSecurityAndComplianceAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `sharedRunnersEnabledInput`<sup>Optional</sup> <a name="sharedRunnersEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSharedRunnersEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `skipWaitForDefaultBranchProtectionInput`<sup>Optional</sup> <a name="skipWaitForDefaultBranchProtectionInput" id="@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipWaitForDefaultBranchProtectionInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `snippetsAccessLevelInput`<sup>Optional</sup> <a name="snippetsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevelInput"></a>

```java
public java.lang.String getSnippetsAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `snippetsEnabledInput`<sup>Optional</sup> <a name="snippetsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.snippetsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSnippetsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `squashCommitTemplateInput`<sup>Optional</sup> <a name="squashCommitTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.squashCommitTemplateInput"></a>

```java
public java.lang.String getSquashCommitTemplateInput();
```

- *Type:* java.lang.String

---

##### `squashOptionInput`<sup>Optional</sup> <a name="squashOptionInput" id="@cdktf/provider-gitlab.project.Project.property.squashOptionInput"></a>

```java
public java.lang.String getSquashOptionInput();
```

- *Type:* java.lang.String

---

##### `suggestionCommitMessageInput`<sup>Optional</sup> <a name="suggestionCommitMessageInput" id="@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessageInput"></a>

```java
public java.lang.String getSuggestionCommitMessageInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-gitlab.project.Project.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktf/provider-gitlab.project.Project.property.templateNameInput"></a>

```java
public java.lang.String getTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `templateProjectIdInput`<sup>Optional</sup> <a name="templateProjectIdInput" id="@cdktf/provider-gitlab.project.Project.property.templateProjectIdInput"></a>

```java
public java.lang.Number getTemplateProjectIdInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-gitlab.project.Project.property.timeoutsInput"></a>

```java
public IResolvable|ProjectTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

---

##### `topicsInput`<sup>Optional</sup> <a name="topicsInput" id="@cdktf/provider-gitlab.project.Project.property.topicsInput"></a>

```java
public java.util.List<java.lang.String> getTopicsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useCustomTemplateInput`<sup>Optional</sup> <a name="useCustomTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.useCustomTemplateInput"></a>

```java
public java.lang.Boolean|IResolvable getUseCustomTemplateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `visibilityLevelInput`<sup>Optional</sup> <a name="visibilityLevelInput" id="@cdktf/provider-gitlab.project.Project.property.visibilityLevelInput"></a>

```java
public java.lang.String getVisibilityLevelInput();
```

- *Type:* java.lang.String

---

##### `wikiAccessLevelInput`<sup>Optional</sup> <a name="wikiAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.wikiAccessLevelInput"></a>

```java
public java.lang.String getWikiAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `wikiEnabledInput`<sup>Optional</sup> <a name="wikiEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.wikiEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getWikiEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `allowMergeOnSkippedPipeline`<sup>Required</sup> <a name="allowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipeline"></a>

```java
public java.lang.Boolean|IResolvable getAllowMergeOnSkippedPipeline();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `allowPipelineTriggerApproveDeployment`<sup>Required</sup> <a name="allowPipelineTriggerApproveDeployment" id="@cdktf/provider-gitlab.project.Project.property.allowPipelineTriggerApproveDeployment"></a>

```java
public java.lang.Boolean|IResolvable getAllowPipelineTriggerApproveDeployment();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `analyticsAccessLevel`<sup>Required</sup> <a name="analyticsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevel"></a>

```java
public java.lang.String getAnalyticsAccessLevel();
```

- *Type:* java.lang.String

---

##### `approvalsBeforeMerge`<sup>Required</sup> <a name="approvalsBeforeMerge" id="@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMerge"></a>

```java
public java.lang.Number getApprovalsBeforeMerge();
```

- *Type:* java.lang.Number

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-gitlab.project.Project.property.archived"></a>

```java
public java.lang.Boolean|IResolvable getArchived();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `archiveOnDestroy`<sup>Required</sup> <a name="archiveOnDestroy" id="@cdktf/provider-gitlab.project.Project.property.archiveOnDestroy"></a>

```java
public java.lang.Boolean|IResolvable getArchiveOnDestroy();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `autoCancelPendingPipelines`<sup>Required</sup> <a name="autoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelines"></a>

```java
public java.lang.String getAutoCancelPendingPipelines();
```

- *Type:* java.lang.String

---

##### `autocloseReferencedIssues`<sup>Required</sup> <a name="autocloseReferencedIssues" id="@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssues"></a>

```java
public java.lang.Boolean|IResolvable getAutocloseReferencedIssues();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `autoDevopsDeployStrategy`<sup>Required</sup> <a name="autoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategy"></a>

```java
public java.lang.String getAutoDevopsDeployStrategy();
```

- *Type:* java.lang.String

---

##### `autoDevopsEnabled`<sup>Required</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoDevopsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `autoDuoCodeReviewEnabled`<sup>Required</sup> <a name="autoDuoCodeReviewEnabled" id="@cdktf/provider-gitlab.project.Project.property.autoDuoCodeReviewEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoDuoCodeReviewEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `avatar`<sup>Required</sup> <a name="avatar" id="@cdktf/provider-gitlab.project.Project.property.avatar"></a>

```java
public java.lang.String getAvatar();
```

- *Type:* java.lang.String

---

##### `avatarHash`<sup>Required</sup> <a name="avatarHash" id="@cdktf/provider-gitlab.project.Project.property.avatarHash"></a>

```java
public java.lang.String getAvatarHash();
```

- *Type:* java.lang.String

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-gitlab.project.Project.property.branches"></a>

```java
public java.lang.String getBranches();
```

- *Type:* java.lang.String

---

##### `buildGitStrategy`<sup>Required</sup> <a name="buildGitStrategy" id="@cdktf/provider-gitlab.project.Project.property.buildGitStrategy"></a>

```java
public java.lang.String getBuildGitStrategy();
```

- *Type:* java.lang.String

---

##### `buildsAccessLevel`<sup>Required</sup> <a name="buildsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.buildsAccessLevel"></a>

```java
public java.lang.String getBuildsAccessLevel();
```

- *Type:* java.lang.String

---

##### `buildTimeout`<sup>Required</sup> <a name="buildTimeout" id="@cdktf/provider-gitlab.project.Project.property.buildTimeout"></a>

```java
public java.lang.Number getBuildTimeout();
```

- *Type:* java.lang.Number

---

##### `ciConfigPath`<sup>Required</sup> <a name="ciConfigPath" id="@cdktf/provider-gitlab.project.Project.property.ciConfigPath"></a>

```java
public java.lang.String getCiConfigPath();
```

- *Type:* java.lang.String

---

##### `ciDefaultGitDepth`<sup>Required</sup> <a name="ciDefaultGitDepth" id="@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepth"></a>

```java
public java.lang.Number getCiDefaultGitDepth();
```

- *Type:* java.lang.Number

---

##### `ciDeletePipelinesInSeconds`<sup>Required</sup> <a name="ciDeletePipelinesInSeconds" id="@cdktf/provider-gitlab.project.Project.property.ciDeletePipelinesInSeconds"></a>

```java
public java.lang.Number getCiDeletePipelinesInSeconds();
```

- *Type:* java.lang.Number

---

##### `ciForwardDeploymentEnabled`<sup>Required</sup> <a name="ciForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCiForwardDeploymentEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ciForwardDeploymentRollbackAllowed`<sup>Required</sup> <a name="ciForwardDeploymentRollbackAllowed" id="@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentRollbackAllowed"></a>

```java
public java.lang.Boolean|IResolvable getCiForwardDeploymentRollbackAllowed();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ciIdTokenSubClaimComponents`<sup>Required</sup> <a name="ciIdTokenSubClaimComponents" id="@cdktf/provider-gitlab.project.Project.property.ciIdTokenSubClaimComponents"></a>

```java
public java.util.List<java.lang.String> getCiIdTokenSubClaimComponents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ciPipelineVariablesMinimumOverrideRole`<sup>Required</sup> <a name="ciPipelineVariablesMinimumOverrideRole" id="@cdktf/provider-gitlab.project.Project.property.ciPipelineVariablesMinimumOverrideRole"></a>

```java
public java.lang.String getCiPipelineVariablesMinimumOverrideRole();
```

- *Type:* java.lang.String

---

##### `ciPushRepositoryForJobTokenAllowed`<sup>Required</sup> <a name="ciPushRepositoryForJobTokenAllowed" id="@cdktf/provider-gitlab.project.Project.property.ciPushRepositoryForJobTokenAllowed"></a>

```java
public java.lang.Boolean|IResolvable getCiPushRepositoryForJobTokenAllowed();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ciRestrictPipelineCancellationRole`<sup>Required</sup> <a name="ciRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRole"></a>

```java
public java.lang.String getCiRestrictPipelineCancellationRole();
```

- *Type:* java.lang.String

---

##### `ciSeparatedCaches`<sup>Required</sup> <a name="ciSeparatedCaches" id="@cdktf/provider-gitlab.project.Project.property.ciSeparatedCaches"></a>

```java
public java.lang.Boolean|IResolvable getCiSeparatedCaches();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `containerRegistryAccessLevel`<sup>Required</sup> <a name="containerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevel"></a>

```java
public java.lang.String getContainerRegistryAccessLevel();
```

- *Type:* java.lang.String

---

##### `containerRegistryEnabled`<sup>Required</sup> <a name="containerRegistryEnabled" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabled"></a>

```java
public java.lang.Boolean|IResolvable getContainerRegistryEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.project.Project.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.project.Project.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `emailsEnabled`<sup>Required</sup> <a name="emailsEnabled" id="@cdktf/provider-gitlab.project.Project.property.emailsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEmailsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `environmentsAccessLevel`<sup>Required</sup> <a name="environmentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevel"></a>

```java
public java.lang.String getEnvironmentsAccessLevel();
```

- *Type:* java.lang.String

---

##### `externalAuthorizationClassificationLabel`<sup>Required</sup> <a name="externalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabel"></a>

```java
public java.lang.String getExternalAuthorizationClassificationLabel();
```

- *Type:* java.lang.String

---

##### `featureFlagsAccessLevel`<sup>Required</sup> <a name="featureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevel"></a>

```java
public java.lang.String getFeatureFlagsAccessLevel();
```

- *Type:* java.lang.String

---

##### `forkedFromProjectId`<sup>Required</sup> <a name="forkedFromProjectId" id="@cdktf/provider-gitlab.project.Project.property.forkedFromProjectId"></a>

```java
public java.lang.Number getForkedFromProjectId();
```

- *Type:* java.lang.Number

---

##### `forkingAccessLevel`<sup>Required</sup> <a name="forkingAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.forkingAccessLevel"></a>

```java
public java.lang.String getForkingAccessLevel();
```

- *Type:* java.lang.String

---

##### `groupRunnersEnabled`<sup>Required</sup> <a name="groupRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGroupRunnersEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `groupWithProjectTemplatesId`<sup>Required</sup> <a name="groupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesId"></a>

```java
public java.lang.Number getGroupWithProjectTemplatesId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importUrl`<sup>Required</sup> <a name="importUrl" id="@cdktf/provider-gitlab.project.Project.property.importUrl"></a>

```java
public java.lang.String getImportUrl();
```

- *Type:* java.lang.String

---

##### `importUrlPassword`<sup>Required</sup> <a name="importUrlPassword" id="@cdktf/provider-gitlab.project.Project.property.importUrlPassword"></a>

```java
public java.lang.String getImportUrlPassword();
```

- *Type:* java.lang.String

---

##### `importUrlUsername`<sup>Required</sup> <a name="importUrlUsername" id="@cdktf/provider-gitlab.project.Project.property.importUrlUsername"></a>

```java
public java.lang.String getImportUrlUsername();
```

- *Type:* java.lang.String

---

##### `infrastructureAccessLevel`<sup>Required</sup> <a name="infrastructureAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevel"></a>

```java
public java.lang.String getInfrastructureAccessLevel();
```

- *Type:* java.lang.String

---

##### `initializeWithReadme`<sup>Required</sup> <a name="initializeWithReadme" id="@cdktf/provider-gitlab.project.Project.property.initializeWithReadme"></a>

```java
public java.lang.Boolean|IResolvable getInitializeWithReadme();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `issuesAccessLevel`<sup>Required</sup> <a name="issuesAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.issuesAccessLevel"></a>

```java
public java.lang.String getIssuesAccessLevel();
```

- *Type:* java.lang.String

---

##### `issuesEnabled`<sup>Required</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.project.Project.property.issuesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIssuesEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `issuesTemplate`<sup>Required</sup> <a name="issuesTemplate" id="@cdktf/provider-gitlab.project.Project.property.issuesTemplate"></a>

```java
public java.lang.String getIssuesTemplate();
```

- *Type:* java.lang.String

---

##### `keepLatestArtifact`<sup>Required</sup> <a name="keepLatestArtifact" id="@cdktf/provider-gitlab.project.Project.property.keepLatestArtifact"></a>

```java
public java.lang.Boolean|IResolvable getKeepLatestArtifact();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `lfsEnabled`<sup>Required</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.project.Project.property.lfsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getLfsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mergeCommitTemplate`<sup>Required</sup> <a name="mergeCommitTemplate" id="@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplate"></a>

```java
public java.lang.String getMergeCommitTemplate();
```

- *Type:* java.lang.String

---

##### `mergeMethod`<sup>Required</sup> <a name="mergeMethod" id="@cdktf/provider-gitlab.project.Project.property.mergeMethod"></a>

```java
public java.lang.String getMergeMethod();
```

- *Type:* java.lang.String

---

##### `mergePipelinesEnabled`<sup>Required</sup> <a name="mergePipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMergePipelinesEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsAccessLevel`<sup>Required</sup> <a name="mergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevel"></a>

```java
public java.lang.String getMergeRequestsAccessLevel();
```

- *Type:* java.lang.String

---

##### `mergeRequestsEnabled`<sup>Required</sup> <a name="mergeRequestsEnabled" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMergeRequestsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mergeRequestsTemplate`<sup>Required</sup> <a name="mergeRequestsTemplate" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplate"></a>

```java
public java.lang.String getMergeRequestsTemplate();
```

- *Type:* java.lang.String

---

##### `mergeTrainsEnabled`<sup>Required</sup> <a name="mergeTrainsEnabled" id="@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMergeTrainsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mirror`<sup>Required</sup> <a name="mirror" id="@cdktf/provider-gitlab.project.Project.property.mirror"></a>

```java
public java.lang.Boolean|IResolvable getMirror();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mirrorOverwritesDivergedBranches`<sup>Required</sup> <a name="mirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranches"></a>

```java
public java.lang.Boolean|IResolvable getMirrorOverwritesDivergedBranches();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mirrorTriggerBuilds`<sup>Required</sup> <a name="mirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuilds"></a>

```java
public java.lang.Boolean|IResolvable getMirrorTriggerBuilds();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `modelExperimentsAccessLevel`<sup>Required</sup> <a name="modelExperimentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.modelExperimentsAccessLevel"></a>

```java
public java.lang.String getModelExperimentsAccessLevel();
```

- *Type:* java.lang.String

---

##### `modelRegistryAccessLevel`<sup>Required</sup> <a name="modelRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.modelRegistryAccessLevel"></a>

```java
public java.lang.String getModelRegistryAccessLevel();
```

- *Type:* java.lang.String

---

##### `monitorAccessLevel`<sup>Required</sup> <a name="monitorAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.monitorAccessLevel"></a>

```java
public java.lang.String getMonitorAccessLevel();
```

- *Type:* java.lang.String

---

##### `mrDefaultTargetSelf`<sup>Required</sup> <a name="mrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelf"></a>

```java
public java.lang.Boolean|IResolvable getMrDefaultTargetSelf();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.project.Project.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-gitlab.project.Project.property.namespaceId"></a>

```java
public java.lang.Number getNamespaceId();
```

- *Type:* java.lang.Number

---

##### `onlyAllowMergeIfAllDiscussionsAreResolved`<sup>Required</sup> <a name="onlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```java
public java.lang.Boolean|IResolvable getOnlyAllowMergeIfAllDiscussionsAreResolved();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `onlyAllowMergeIfPipelineSucceeds`<sup>Required</sup> <a name="onlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceeds"></a>

```java
public java.lang.Boolean|IResolvable getOnlyAllowMergeIfPipelineSucceeds();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `onlyMirrorProtectedBranches`<sup>Required</sup> <a name="onlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranches"></a>

```java
public java.lang.Boolean|IResolvable getOnlyMirrorProtectedBranches();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `packagesEnabled`<sup>Required</sup> <a name="packagesEnabled" id="@cdktf/provider-gitlab.project.Project.property.packagesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPackagesEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pagesAccessLevel`<sup>Required</sup> <a name="pagesAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.pagesAccessLevel"></a>

```java
public java.lang.String getPagesAccessLevel();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.project.Project.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `permanentlyDeleteOnDestroy`<sup>Required</sup> <a name="permanentlyDeleteOnDestroy" id="@cdktf/provider-gitlab.project.Project.property.permanentlyDeleteOnDestroy"></a>

```java
public java.lang.Boolean|IResolvable getPermanentlyDeleteOnDestroy();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pipelinesEnabled`<sup>Required</sup> <a name="pipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.property.pipelinesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPipelinesEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preReceiveSecretDetectionEnabled`<sup>Required</sup> <a name="preReceiveSecretDetectionEnabled" id="@cdktf/provider-gitlab.project.Project.property.preReceiveSecretDetectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPreReceiveSecretDetectionEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preventMergeWithoutJiraIssue`<sup>Required</sup> <a name="preventMergeWithoutJiraIssue" id="@cdktf/provider-gitlab.project.Project.property.preventMergeWithoutJiraIssue"></a>

```java
public java.lang.Boolean|IResolvable getPreventMergeWithoutJiraIssue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `printingMergeRequestLinkEnabled`<sup>Required</sup> <a name="printingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPrintingMergeRequestLinkEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `publicBuilds`<sup>Required</sup> <a name="publicBuilds" id="@cdktf/provider-gitlab.project.Project.property.publicBuilds"></a>

```java
public java.lang.Boolean|IResolvable getPublicBuilds();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `publicJobs`<sup>Required</sup> <a name="publicJobs" id="@cdktf/provider-gitlab.project.Project.property.publicJobs"></a>

```java
public java.lang.Boolean|IResolvable getPublicJobs();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `releasesAccessLevel`<sup>Required</sup> <a name="releasesAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.releasesAccessLevel"></a>

```java
public java.lang.String getReleasesAccessLevel();
```

- *Type:* java.lang.String

---

##### `removeSourceBranchAfterMerge`<sup>Required</sup> <a name="removeSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMerge"></a>

```java
public java.lang.Boolean|IResolvable getRemoveSourceBranchAfterMerge();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `repositoryAccessLevel`<sup>Required</sup> <a name="repositoryAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevel"></a>

```java
public java.lang.String getRepositoryAccessLevel();
```

- *Type:* java.lang.String

---

##### `repositoryStorage`<sup>Required</sup> <a name="repositoryStorage" id="@cdktf/provider-gitlab.project.Project.property.repositoryStorage"></a>

```java
public java.lang.String getRepositoryStorage();
```

- *Type:* java.lang.String

---

##### `requestAccessEnabled`<sup>Required</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.project.Project.property.requestAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRequestAccessEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requirementsAccessLevel`<sup>Required</sup> <a name="requirementsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevel"></a>

```java
public java.lang.String getRequirementsAccessLevel();
```

- *Type:* java.lang.String

---

##### `resolveOutdatedDiffDiscussions`<sup>Required</sup> <a name="resolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussions"></a>

```java
public java.lang.Boolean|IResolvable getResolveOutdatedDiffDiscussions();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupDefaultProcessMode`<sup>Required</sup> <a name="resourceGroupDefaultProcessMode" id="@cdktf/provider-gitlab.project.Project.property.resourceGroupDefaultProcessMode"></a>

```java
public java.lang.String getResourceGroupDefaultProcessMode();
```

- *Type:* java.lang.String

---

##### `restrictUserDefinedVariables`<sup>Required</sup> <a name="restrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariables"></a>

```java
public java.lang.Boolean|IResolvable getRestrictUserDefinedVariables();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `securityAndComplianceAccessLevel`<sup>Required</sup> <a name="securityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevel"></a>

```java
public java.lang.String getSecurityAndComplianceAccessLevel();
```

- *Type:* java.lang.String

---

##### `sharedRunnersEnabled`<sup>Required</sup> <a name="sharedRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSharedRunnersEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `skipWaitForDefaultBranchProtection`<sup>Required</sup> <a name="skipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtection"></a>

```java
public java.lang.Boolean|IResolvable getSkipWaitForDefaultBranchProtection();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `snippetsAccessLevel`<sup>Required</sup> <a name="snippetsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevel"></a>

```java
public java.lang.String getSnippetsAccessLevel();
```

- *Type:* java.lang.String

---

##### `snippetsEnabled`<sup>Required</sup> <a name="snippetsEnabled" id="@cdktf/provider-gitlab.project.Project.property.snippetsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSnippetsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `squashCommitTemplate`<sup>Required</sup> <a name="squashCommitTemplate" id="@cdktf/provider-gitlab.project.Project.property.squashCommitTemplate"></a>

```java
public java.lang.String getSquashCommitTemplate();
```

- *Type:* java.lang.String

---

##### `squashOption`<sup>Required</sup> <a name="squashOption" id="@cdktf/provider-gitlab.project.Project.property.squashOption"></a>

```java
public java.lang.String getSquashOption();
```

- *Type:* java.lang.String

---

##### `suggestionCommitMessage`<sup>Required</sup> <a name="suggestionCommitMessage" id="@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessage"></a>

```java
public java.lang.String getSuggestionCommitMessage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-gitlab.project.Project.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-gitlab.project.Project.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

##### `templateProjectId`<sup>Required</sup> <a name="templateProjectId" id="@cdktf/provider-gitlab.project.Project.property.templateProjectId"></a>

```java
public java.lang.Number getTemplateProjectId();
```

- *Type:* java.lang.Number

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-gitlab.project.Project.property.topics"></a>

```java
public java.util.List<java.lang.String> getTopics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `useCustomTemplate`<sup>Required</sup> <a name="useCustomTemplate" id="@cdktf/provider-gitlab.project.Project.property.useCustomTemplate"></a>

```java
public java.lang.Boolean|IResolvable getUseCustomTemplate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `visibilityLevel`<sup>Required</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.project.Project.property.visibilityLevel"></a>

```java
public java.lang.String getVisibilityLevel();
```

- *Type:* java.lang.String

---

##### `wikiAccessLevel`<sup>Required</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.wikiAccessLevel"></a>

```java
public java.lang.String getWikiAccessLevel();
```

- *Type:* java.lang.String

---

##### `wikiEnabled`<sup>Required</sup> <a name="wikiEnabled" id="@cdktf/provider-gitlab.project.Project.property.wikiEnabled"></a>

```java
public java.lang.Boolean|IResolvable getWikiEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.project.Project.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-gitlab.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project.ProjectConfig;

ProjectConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowMergeOnSkippedPipeline(java.lang.Boolean|IResolvable)
//  .allowPipelineTriggerApproveDeployment(java.lang.Boolean|IResolvable)
//  .analyticsAccessLevel(java.lang.String)
//  .approvalsBeforeMerge(java.lang.Number)
//  .archived(java.lang.Boolean|IResolvable)
//  .archiveOnDestroy(java.lang.Boolean|IResolvable)
//  .autoCancelPendingPipelines(java.lang.String)
//  .autocloseReferencedIssues(java.lang.Boolean|IResolvable)
//  .autoDevopsDeployStrategy(java.lang.String)
//  .autoDevopsEnabled(java.lang.Boolean|IResolvable)
//  .autoDuoCodeReviewEnabled(java.lang.Boolean|IResolvable)
//  .avatar(java.lang.String)
//  .avatarHash(java.lang.String)
//  .branches(java.lang.String)
//  .buildGitStrategy(java.lang.String)
//  .buildsAccessLevel(java.lang.String)
//  .buildTimeout(java.lang.Number)
//  .ciConfigPath(java.lang.String)
//  .ciDefaultGitDepth(java.lang.Number)
//  .ciDeletePipelinesInSeconds(java.lang.Number)
//  .ciForwardDeploymentEnabled(java.lang.Boolean|IResolvable)
//  .ciForwardDeploymentRollbackAllowed(java.lang.Boolean|IResolvable)
//  .ciIdTokenSubClaimComponents(java.util.List<java.lang.String>)
//  .ciPipelineVariablesMinimumOverrideRole(java.lang.String)
//  .ciPushRepositoryForJobTokenAllowed(java.lang.Boolean|IResolvable)
//  .ciRestrictPipelineCancellationRole(java.lang.String)
//  .ciSeparatedCaches(java.lang.Boolean|IResolvable)
//  .containerExpirationPolicy(ProjectContainerExpirationPolicy)
//  .containerRegistryAccessLevel(java.lang.String)
//  .containerRegistryEnabled(java.lang.Boolean|IResolvable)
//  .defaultBranch(java.lang.String)
//  .description(java.lang.String)
//  .emailsEnabled(java.lang.Boolean|IResolvable)
//  .environmentsAccessLevel(java.lang.String)
//  .externalAuthorizationClassificationLabel(java.lang.String)
//  .featureFlagsAccessLevel(java.lang.String)
//  .forkedFromProjectId(java.lang.Number)
//  .forkingAccessLevel(java.lang.String)
//  .groupRunnersEnabled(java.lang.Boolean|IResolvable)
//  .groupWithProjectTemplatesId(java.lang.Number)
//  .id(java.lang.String)
//  .importUrl(java.lang.String)
//  .importUrlPassword(java.lang.String)
//  .importUrlUsername(java.lang.String)
//  .infrastructureAccessLevel(java.lang.String)
//  .initializeWithReadme(java.lang.Boolean|IResolvable)
//  .issuesAccessLevel(java.lang.String)
//  .issuesEnabled(java.lang.Boolean|IResolvable)
//  .issuesTemplate(java.lang.String)
//  .keepLatestArtifact(java.lang.Boolean|IResolvable)
//  .lfsEnabled(java.lang.Boolean|IResolvable)
//  .mergeCommitTemplate(java.lang.String)
//  .mergeMethod(java.lang.String)
//  .mergePipelinesEnabled(java.lang.Boolean|IResolvable)
//  .mergeRequestsAccessLevel(java.lang.String)
//  .mergeRequestsEnabled(java.lang.Boolean|IResolvable)
//  .mergeRequestsTemplate(java.lang.String)
//  .mergeTrainsEnabled(java.lang.Boolean|IResolvable)
//  .mirror(java.lang.Boolean|IResolvable)
//  .mirrorOverwritesDivergedBranches(java.lang.Boolean|IResolvable)
//  .mirrorTriggerBuilds(java.lang.Boolean|IResolvable)
//  .modelExperimentsAccessLevel(java.lang.String)
//  .modelRegistryAccessLevel(java.lang.String)
//  .monitorAccessLevel(java.lang.String)
//  .mrDefaultTargetSelf(java.lang.Boolean|IResolvable)
//  .namespaceId(java.lang.Number)
//  .onlyAllowMergeIfAllDiscussionsAreResolved(java.lang.Boolean|IResolvable)
//  .onlyAllowMergeIfPipelineSucceeds(java.lang.Boolean|IResolvable)
//  .onlyMirrorProtectedBranches(java.lang.Boolean|IResolvable)
//  .packagesEnabled(java.lang.Boolean|IResolvable)
//  .pagesAccessLevel(java.lang.String)
//  .path(java.lang.String)
//  .permanentlyDeleteOnDestroy(java.lang.Boolean|IResolvable)
//  .pipelinesEnabled(java.lang.Boolean|IResolvable)
//  .preReceiveSecretDetectionEnabled(java.lang.Boolean|IResolvable)
//  .preventMergeWithoutJiraIssue(java.lang.Boolean|IResolvable)
//  .printingMergeRequestLinkEnabled(java.lang.Boolean|IResolvable)
//  .publicBuilds(java.lang.Boolean|IResolvable)
//  .publicJobs(java.lang.Boolean|IResolvable)
//  .pushRules(ProjectPushRules)
//  .releasesAccessLevel(java.lang.String)
//  .removeSourceBranchAfterMerge(java.lang.Boolean|IResolvable)
//  .repositoryAccessLevel(java.lang.String)
//  .repositoryStorage(java.lang.String)
//  .requestAccessEnabled(java.lang.Boolean|IResolvable)
//  .requirementsAccessLevel(java.lang.String)
//  .resolveOutdatedDiffDiscussions(java.lang.Boolean|IResolvable)
//  .resourceGroupDefaultProcessMode(java.lang.String)
//  .restrictUserDefinedVariables(java.lang.Boolean|IResolvable)
//  .securityAndComplianceAccessLevel(java.lang.String)
//  .sharedRunnersEnabled(java.lang.Boolean|IResolvable)
//  .skipWaitForDefaultBranchProtection(java.lang.Boolean|IResolvable)
//  .snippetsAccessLevel(java.lang.String)
//  .snippetsEnabled(java.lang.Boolean|IResolvable)
//  .squashCommitTemplate(java.lang.String)
//  .squashOption(java.lang.String)
//  .suggestionCommitMessage(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .templateName(java.lang.String)
//  .templateProjectId(java.lang.Number)
//  .timeouts(ProjectTimeouts)
//  .topics(java.util.List<java.lang.String>)
//  .useCustomTemplate(java.lang.Boolean|IResolvable)
//  .visibilityLevel(java.lang.String)
//  .wikiAccessLevel(java.lang.String)
//  .wikiEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.allowMergeOnSkippedPipeline">allowMergeOnSkippedPipeline</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true if you want to treat skipped pipelines as if they finished with success. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.allowPipelineTriggerApproveDeployment">allowPipelineTriggerApproveDeployment</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set whether or not a pipeline triggerer is allowed to approve deployments. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.analyticsAccessLevel">analyticsAccessLevel</a></code> | <code>java.lang.String</code> | Set the analytics access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.approvalsBeforeMerge">approvalsBeforeMerge</a></code> | <code>java.lang.Number</code> | Number of merge request approvals required for merging. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.archived">archived</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.archiveOnDestroy">archiveOnDestroy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to `true` to archive the project instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoCancelPendingPipelines">autoCancelPendingPipelines</a></code> | <code>java.lang.String</code> | Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autocloseReferencedIssues">autocloseReferencedIssues</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set whether auto-closing referenced issues on default branch. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsDeployStrategy">autoDevopsDeployStrategy</a></code> | <code>java.lang.String</code> | Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable Auto DevOps for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoDuoCodeReviewEnabled">autoDuoCodeReviewEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable automatic reviews by GitLab Duo on merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.avatar">avatar</a></code> | <code>java.lang.String</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.avatarHash">avatarHash</a></code> | <code>java.lang.String</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.branches">branches</a></code> | <code>java.lang.String</code> | Branches to fork (empty for all branches). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildGitStrategy">buildGitStrategy</a></code> | <code>java.lang.String</code> | The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildsAccessLevel">buildsAccessLevel</a></code> | <code>java.lang.String</code> | Set the builds access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildTimeout">buildTimeout</a></code> | <code>java.lang.Number</code> | The maximum amount of time, in seconds, that a job can run. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciConfigPath">ciConfigPath</a></code> | <code>java.lang.String</code> | Custom Path to CI config file. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciDefaultGitDepth">ciDefaultGitDepth</a></code> | <code>java.lang.Number</code> | Default number of revisions for shallow cloning. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciDeletePipelinesInSeconds">ciDeletePipelinesInSeconds</a></code> | <code>java.lang.Number</code> | Pipelines older than the configured time are deleted. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciForwardDeploymentEnabled">ciForwardDeploymentEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When a new deployment job starts, skip older deployment jobs that are still pending. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciForwardDeploymentRollbackAllowed">ciForwardDeploymentRollbackAllowed</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow job retries even if the deployment job is outdated. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciIdTokenSubClaimComponents">ciIdTokenSubClaimComponents</a></code> | <code>java.util.List<java.lang.String></code> | Fields included in the sub claim of the ID Token. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciPipelineVariablesMinimumOverrideRole">ciPipelineVariablesMinimumOverrideRole</a></code> | <code>java.lang.String</code> | The minimum role required to set variables when running pipelines and jobs. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciPushRepositoryForJobTokenAllowed">ciPushRepositoryForJobTokenAllowed</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow Git push requests to your project repository that are authenticated with a CI/CD job token. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciRestrictPipelineCancellationRole">ciRestrictPipelineCancellationRole</a></code> | <code>java.lang.String</code> | The role required to cancel a pipeline or job. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciSeparatedCaches">ciSeparatedCaches</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use separate caches for protected branches. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerExpirationPolicy">containerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | container_expiration_policy block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryAccessLevel">containerRegistryAccessLevel</a></code> | <code>java.lang.String</code> | Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryEnabled">containerRegistryEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable container registry for the project. Use `container_registry_access_level` instead. To be removed in 19.0. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | The default branch for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.emailsEnabled">emailsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.environmentsAccessLevel">environmentsAccessLevel</a></code> | <code>java.lang.String</code> | Set the environments access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.externalAuthorizationClassificationLabel">externalAuthorizationClassificationLabel</a></code> | <code>java.lang.String</code> | The classification label for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.featureFlagsAccessLevel">featureFlagsAccessLevel</a></code> | <code>java.lang.String</code> | Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forkedFromProjectId">forkedFromProjectId</a></code> | <code>java.lang.Number</code> | The id of the project to fork. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forkingAccessLevel">forkingAccessLevel</a></code> | <code>java.lang.String</code> | Set the forking access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.groupRunnersEnabled">groupRunnersEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable group runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.groupWithProjectTemplatesId">groupWithProjectTemplatesId</a></code> | <code>java.lang.Number</code> | For group-level custom templates, specifies ID of group from which all the custom project templates are sourced. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#id Project#id}. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrl">importUrl</a></code> | <code>java.lang.String</code> | Git URL to a repository to be imported. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlPassword">importUrlPassword</a></code> | <code>java.lang.String</code> | The password for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlUsername">importUrlUsername</a></code> | <code>java.lang.String</code> | The username for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.infrastructureAccessLevel">infrastructureAccessLevel</a></code> | <code>java.lang.String</code> | Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.initializeWithReadme">initializeWithReadme</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Create main branch with first commit containing a README.md file. Must be set to `true` if importing an uninitialized project with a different `default_branch`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesAccessLevel">issuesAccessLevel</a></code> | <code>java.lang.String</code> | Set the issues access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesEnabled">issuesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable issue tracking for the project. Use `issues_access_level` instead. To be removed in 19.0. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesTemplate">issuesTemplate</a></code> | <code>java.lang.String</code> | Sets the template for new issues in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.keepLatestArtifact">keepLatestArtifact</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Disable or enable the ability to keep the latest artifact for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.lfsEnabled">lfsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable LFS for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeCommitTemplate">mergeCommitTemplate</a></code> | <code>java.lang.String</code> | Template used to create merge commit message in merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeMethod">mergeMethod</a></code> | <code>java.lang.String</code> | Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergePipelinesEnabled">mergePipelinesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable or disable merge pipelines. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsAccessLevel">mergeRequestsAccessLevel</a></code> | <code>java.lang.String</code> | Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsEnabled">mergeRequestsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable merge requests for the project. Use `merge_requests_access_level` instead. To be removed in 19.0. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsTemplate">mergeRequestsTemplate</a></code> | <code>java.lang.String</code> | Sets the template for new merge requests in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeTrainsEnabled">mergeTrainsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirror">mirror</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable project pull mirror. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorOverwritesDivergedBranches">mirrorOverwritesDivergedBranches</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable overwrite diverged branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorTriggerBuilds">mirrorTriggerBuilds</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable trigger builds on pushes for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.modelExperimentsAccessLevel">modelExperimentsAccessLevel</a></code> | <code>java.lang.String</code> | Set visibility of machine learning model experiments. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.modelRegistryAccessLevel">modelRegistryAccessLevel</a></code> | <code>java.lang.String</code> | Set visibility of machine learning model registry. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.monitorAccessLevel">monitorAccessLevel</a></code> | <code>java.lang.String</code> | Set the monitor access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mrDefaultTargetSelf">mrDefaultTargetSelf</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | For forked projects, target merge requests to this project. If false, the target will be the upstream project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.namespaceId">namespaceId</a></code> | <code>java.lang.Number</code> | The namespace (group or user) of the project. Defaults to your user. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfAllDiscussionsAreResolved">onlyAllowMergeIfAllDiscussionsAreResolved</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true if you want allow merges only if all discussions are resolved. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfPipelineSucceeds">onlyAllowMergeIfPipelineSucceeds</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true if you want allow merges only if a pipeline succeeds. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyMirrorProtectedBranches">onlyMirrorProtectedBranches</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable only mirror protected branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.packagesEnabled">packagesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable packages repository for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pagesAccessLevel">pagesAccessLevel</a></code> | <code>java.lang.String</code> | Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.path">path</a></code> | <code>java.lang.String</code> | The path of the repository. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.permanentlyDeleteOnDestroy">permanentlyDeleteOnDestroy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to `true` to immediately permanently delete the project instead of scheduling a delete for Premium and Ultimate tiers. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pipelinesEnabled">pipelinesEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable pipelines for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.preReceiveSecretDetectionEnabled">preReceiveSecretDetectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether Secret Push Detection is enabled. Requires GitLab Ultimate. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.preventMergeWithoutJiraIssue">preventMergeWithoutJiraIssue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set whether merge requests require an associated issue from Jira. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.printingMergeRequestLinkEnabled">printingMergeRequestLinkEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Show link to create/view merge request when pushing from the command line. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.publicBuilds">publicBuilds</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.publicJobs">publicJobs</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pushRules">pushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.releasesAccessLevel">releasesAccessLevel</a></code> | <code>java.lang.String</code> | Set the releases access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.removeSourceBranchAfterMerge">removeSourceBranchAfterMerge</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable `Delete source branch` option by default for all new merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryAccessLevel">repositoryAccessLevel</a></code> | <code>java.lang.String</code> | Set the repository access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryStorage">repositoryStorage</a></code> | <code>java.lang.String</code> | Which storage shard the repository is on. (administrator only). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.requirementsAccessLevel">requirementsAccessLevel</a></code> | <code>java.lang.String</code> | Set the requirements access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.resolveOutdatedDiffDiscussions">resolveOutdatedDiffDiscussions</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Automatically resolve merge request diffs discussions on lines changed with a push. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.resourceGroupDefaultProcessMode">resourceGroupDefaultProcessMode</a></code> | <code>java.lang.String</code> | The default resource group process mode for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.restrictUserDefinedVariables">restrictUserDefinedVariables</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.securityAndComplianceAccessLevel">securityAndComplianceAccessLevel</a></code> | <code>java.lang.String</code> | Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.sharedRunnersEnabled">sharedRunnersEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable shared runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.skipWaitForDefaultBranchProtection">skipWaitForDefaultBranchProtection</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If `true`, the default behavior to wait for the default branch protection to be created is skipped. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsAccessLevel">snippetsAccessLevel</a></code> | <code>java.lang.String</code> | Set the snippets access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsEnabled">snippetsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable snippets for the project. Use `snippets_access_level` instead. To be removed in 19.0. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.squashCommitTemplate">squashCommitTemplate</a></code> | <code>java.lang.String</code> | Template used to create squash commit message in merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.squashOption">squashOption</a></code> | <code>java.lang.String</code> | Squash commits when merge request is merged. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.suggestionCommitMessage">suggestionCommitMessage</a></code> | <code>java.lang.String</code> | The commit message used to apply merge request suggestions. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The list of tags for a project; |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.templateName">templateName</a></code> | <code>java.lang.String</code> | When used without use_custom_template, name of a built-in project template. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.templateProjectId">templateProjectId</a></code> | <code>java.lang.Number</code> | When used with use_custom_template, project ID of a custom project template. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.topics">topics</a></code> | <code>java.util.List<java.lang.String></code> | The list of topics for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.useCustomTemplate">useCustomTemplate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.visibilityLevel">visibilityLevel</a></code> | <code>java.lang.String</code> | Set to `public` to create a public project. Valid values are `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.wikiAccessLevel">wikiAccessLevel</a></code> | <code>java.lang.String</code> | Set the wiki access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.wikiEnabled">wikiEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable wiki for the project. Use `wiki_access_level` instead. To be removed in 19.0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.project.ProjectConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.project.ProjectConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.project.ProjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.project.ProjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.ProjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.project.ProjectConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.project.ProjectConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#name Project#name}

---

##### `allowMergeOnSkippedPipeline`<sup>Optional</sup> <a name="allowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.ProjectConfig.property.allowMergeOnSkippedPipeline"></a>

```java
public java.lang.Boolean|IResolvable getAllowMergeOnSkippedPipeline();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true if you want to treat skipped pipelines as if they finished with success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#allow_merge_on_skipped_pipeline Project#allow_merge_on_skipped_pipeline}

---

##### `allowPipelineTriggerApproveDeployment`<sup>Optional</sup> <a name="allowPipelineTriggerApproveDeployment" id="@cdktf/provider-gitlab.project.ProjectConfig.property.allowPipelineTriggerApproveDeployment"></a>

```java
public java.lang.Boolean|IResolvable getAllowPipelineTriggerApproveDeployment();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set whether or not a pipeline triggerer is allowed to approve deployments. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#allow_pipeline_trigger_approve_deployment Project#allow_pipeline_trigger_approve_deployment}

---

##### `analyticsAccessLevel`<sup>Optional</sup> <a name="analyticsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.analyticsAccessLevel"></a>

```java
public java.lang.String getAnalyticsAccessLevel();
```

- *Type:* java.lang.String

Set the analytics access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#analytics_access_level Project#analytics_access_level}

---

##### `approvalsBeforeMerge`<sup>Optional</sup> <a name="approvalsBeforeMerge" id="@cdktf/provider-gitlab.project.ProjectConfig.property.approvalsBeforeMerge"></a>

```java
public java.lang.Number getApprovalsBeforeMerge();
```

- *Type:* java.lang.Number

Number of merge request approvals required for merging.

Default is 0. This field **does not** work well in combination with the `gitlab_project_approval_rule` resource. We recommend you do not use this deprecated field and use `gitlab_project_approval_rule` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#approvals_before_merge Project#approvals_before_merge}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-gitlab.project.ProjectConfig.property.archived"></a>

```java
public java.lang.Boolean|IResolvable getArchived();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#archived Project#archived}

---

##### `archiveOnDestroy`<sup>Optional</sup> <a name="archiveOnDestroy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.archiveOnDestroy"></a>

```java
public java.lang.Boolean|IResolvable getArchiveOnDestroy();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to `true` to archive the project instead of deleting on destroy.

If set to `true` it will entire omit the `DELETE` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#archive_on_destroy Project#archive_on_destroy}

---

##### `autoCancelPendingPipelines`<sup>Optional</sup> <a name="autoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoCancelPendingPipelines"></a>

```java
public java.lang.String getAutoCancelPendingPipelines();
```

- *Type:* java.lang.String

Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#auto_cancel_pending_pipelines Project#auto_cancel_pending_pipelines}

---

##### `autocloseReferencedIssues`<sup>Optional</sup> <a name="autocloseReferencedIssues" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autocloseReferencedIssues"></a>

```java
public java.lang.Boolean|IResolvable getAutocloseReferencedIssues();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set whether auto-closing referenced issues on default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#autoclose_referenced_issues Project#autoclose_referenced_issues}

---

##### `autoDevopsDeployStrategy`<sup>Optional</sup> <a name="autoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsDeployStrategy"></a>

```java
public java.lang.String getAutoDevopsDeployStrategy();
```

- *Type:* java.lang.String

Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#auto_devops_deploy_strategy Project#auto_devops_deploy_strategy}

---

##### `autoDevopsEnabled`<sup>Optional</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoDevopsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable Auto DevOps for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#auto_devops_enabled Project#auto_devops_enabled}

---

##### `autoDuoCodeReviewEnabled`<sup>Optional</sup> <a name="autoDuoCodeReviewEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoDuoCodeReviewEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoDuoCodeReviewEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable automatic reviews by GitLab Duo on merge requests.

Ultimate only. Automatic reviews only work with the GitLab Duo Enterprise add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#auto_duo_code_review_enabled Project#auto_duo_code_review_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.project.ProjectConfig.property.avatar"></a>

```java
public java.lang.String getAvatar();
```

- *Type:* java.lang.String

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#avatar Project#avatar}

---

##### `avatarHash`<sup>Optional</sup> <a name="avatarHash" id="@cdktf/provider-gitlab.project.ProjectConfig.property.avatarHash"></a>

```java
public java.lang.String getAvatarHash();
```

- *Type:* java.lang.String

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#avatar_hash Project#avatar_hash}

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.branches"></a>

```java
public java.lang.String getBranches();
```

- *Type:* java.lang.String

Branches to fork (empty for all branches).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#branches Project#branches}

---

##### `buildGitStrategy`<sup>Optional</sup> <a name="buildGitStrategy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildGitStrategy"></a>

```java
public java.lang.String getBuildGitStrategy();
```

- *Type:* java.lang.String

The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#build_git_strategy Project#build_git_strategy}

---

##### `buildsAccessLevel`<sup>Optional</sup> <a name="buildsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildsAccessLevel"></a>

```java
public java.lang.String getBuildsAccessLevel();
```

- *Type:* java.lang.String

Set the builds access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#builds_access_level Project#builds_access_level}

---

##### `buildTimeout`<sup>Optional</sup> <a name="buildTimeout" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildTimeout"></a>

```java
public java.lang.Number getBuildTimeout();
```

- *Type:* java.lang.Number

The maximum amount of time, in seconds, that a job can run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#build_timeout Project#build_timeout}

---

##### `ciConfigPath`<sup>Optional</sup> <a name="ciConfigPath" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciConfigPath"></a>

```java
public java.lang.String getCiConfigPath();
```

- *Type:* java.lang.String

Custom Path to CI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_config_path Project#ci_config_path}

---

##### `ciDefaultGitDepth`<sup>Optional</sup> <a name="ciDefaultGitDepth" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciDefaultGitDepth"></a>

```java
public java.lang.Number getCiDefaultGitDepth();
```

- *Type:* java.lang.Number

Default number of revisions for shallow cloning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_default_git_depth Project#ci_default_git_depth}

---

##### `ciDeletePipelinesInSeconds`<sup>Optional</sup> <a name="ciDeletePipelinesInSeconds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciDeletePipelinesInSeconds"></a>

```java
public java.lang.Number getCiDeletePipelinesInSeconds();
```

- *Type:* java.lang.Number

Pipelines older than the configured time are deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_delete_pipelines_in_seconds Project#ci_delete_pipelines_in_seconds}

---

##### `ciForwardDeploymentEnabled`<sup>Optional</sup> <a name="ciForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciForwardDeploymentEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCiForwardDeploymentEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When a new deployment job starts, skip older deployment jobs that are still pending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_forward_deployment_enabled Project#ci_forward_deployment_enabled}

---

##### `ciForwardDeploymentRollbackAllowed`<sup>Optional</sup> <a name="ciForwardDeploymentRollbackAllowed" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciForwardDeploymentRollbackAllowed"></a>

```java
public java.lang.Boolean|IResolvable getCiForwardDeploymentRollbackAllowed();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow job retries even if the deployment job is outdated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_forward_deployment_rollback_allowed Project#ci_forward_deployment_rollback_allowed}

---

##### `ciIdTokenSubClaimComponents`<sup>Optional</sup> <a name="ciIdTokenSubClaimComponents" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciIdTokenSubClaimComponents"></a>

```java
public java.util.List<java.lang.String> getCiIdTokenSubClaimComponents();
```

- *Type:* java.util.List<java.lang.String>

Fields included in the sub claim of the ID Token.

Accepts an array starting with project_path. The array might also include ref_type and ref. Defaults to ["project_path", "ref_type", "ref"]. Introduced in GitLab 17.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_id_token_sub_claim_components Project#ci_id_token_sub_claim_components}

---

##### `ciPipelineVariablesMinimumOverrideRole`<sup>Optional</sup> <a name="ciPipelineVariablesMinimumOverrideRole" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciPipelineVariablesMinimumOverrideRole"></a>

```java
public java.lang.String getCiPipelineVariablesMinimumOverrideRole();
```

- *Type:* java.lang.String

The minimum role required to set variables when running pipelines and jobs.

Introduced in GitLab 17.1. Valid values are `developer`, `maintainer`, `owner`, `no_one_allowed`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_pipeline_variables_minimum_override_role Project#ci_pipeline_variables_minimum_override_role}

---

##### `ciPushRepositoryForJobTokenAllowed`<sup>Optional</sup> <a name="ciPushRepositoryForJobTokenAllowed" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciPushRepositoryForJobTokenAllowed"></a>

```java
public java.lang.Boolean|IResolvable getCiPushRepositoryForJobTokenAllowed();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow Git push requests to your project repository that are authenticated with a CI/CD job token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_push_repository_for_job_token_allowed Project#ci_push_repository_for_job_token_allowed}

---

##### `ciRestrictPipelineCancellationRole`<sup>Optional</sup> <a name="ciRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciRestrictPipelineCancellationRole"></a>

```java
public java.lang.String getCiRestrictPipelineCancellationRole();
```

- *Type:* java.lang.String

The role required to cancel a pipeline or job.

Premium and Ultimate only. Valid values are `developer`, `maintainer`, `no one`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_restrict_pipeline_cancellation_role Project#ci_restrict_pipeline_cancellation_role}

---

##### `ciSeparatedCaches`<sup>Optional</sup> <a name="ciSeparatedCaches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciSeparatedCaches"></a>

```java
public java.lang.Boolean|IResolvable getCiSeparatedCaches();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use separate caches for protected branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#ci_separated_caches Project#ci_separated_caches}

---

##### `containerExpirationPolicy`<sup>Optional</sup> <a name="containerExpirationPolicy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerExpirationPolicy"></a>

```java
public ProjectContainerExpirationPolicy getContainerExpirationPolicy();
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

container_expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#container_expiration_policy Project#container_expiration_policy}

---

##### `containerRegistryAccessLevel`<sup>Optional</sup> <a name="containerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryAccessLevel"></a>

```java
public java.lang.String getContainerRegistryAccessLevel();
```

- *Type:* java.lang.String

Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#container_registry_access_level Project#container_registry_access_level}

---

##### `containerRegistryEnabled`<sup>Optional</sup> <a name="containerRegistryEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryEnabled"></a>

```java
public java.lang.Boolean|IResolvable getContainerRegistryEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable container registry for the project. Use `container_registry_access_level` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#container_registry_enabled Project#container_registry_enabled}

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.project.ProjectConfig.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

The default branch for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#default_branch Project#default_branch}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.project.ProjectConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#description Project#description}

---

##### `emailsEnabled`<sup>Optional</sup> <a name="emailsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.emailsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEmailsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#emails_enabled Project#emails_enabled}

---

##### `environmentsAccessLevel`<sup>Optional</sup> <a name="environmentsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.environmentsAccessLevel"></a>

```java
public java.lang.String getEnvironmentsAccessLevel();
```

- *Type:* java.lang.String

Set the environments access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#environments_access_level Project#environments_access_level}

---

##### `externalAuthorizationClassificationLabel`<sup>Optional</sup> <a name="externalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.externalAuthorizationClassificationLabel"></a>

```java
public java.lang.String getExternalAuthorizationClassificationLabel();
```

- *Type:* java.lang.String

The classification label for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#external_authorization_classification_label Project#external_authorization_classification_label}

---

##### `featureFlagsAccessLevel`<sup>Optional</sup> <a name="featureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.featureFlagsAccessLevel"></a>

```java
public java.lang.String getFeatureFlagsAccessLevel();
```

- *Type:* java.lang.String

Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#feature_flags_access_level Project#feature_flags_access_level}

---

##### `forkedFromProjectId`<sup>Optional</sup> <a name="forkedFromProjectId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forkedFromProjectId"></a>

```java
public java.lang.Number getForkedFromProjectId();
```

- *Type:* java.lang.Number

The id of the project to fork.

During create the project is forked and during an update the fork relation is changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#forked_from_project_id Project#forked_from_project_id}

---

##### `forkingAccessLevel`<sup>Optional</sup> <a name="forkingAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forkingAccessLevel"></a>

```java
public java.lang.String getForkingAccessLevel();
```

- *Type:* java.lang.String

Set the forking access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#forking_access_level Project#forking_access_level}

---

##### `groupRunnersEnabled`<sup>Optional</sup> <a name="groupRunnersEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.groupRunnersEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGroupRunnersEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable group runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#group_runners_enabled Project#group_runners_enabled}

---

##### `groupWithProjectTemplatesId`<sup>Optional</sup> <a name="groupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.groupWithProjectTemplatesId"></a>

```java
public java.lang.Number getGroupWithProjectTemplatesId();
```

- *Type:* java.lang.Number

For group-level custom templates, specifies ID of group from which all the custom project templates are sourced.

Leave empty for instance-level templates. Requires use_custom_template to be true (enterprise edition).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#group_with_project_templates_id Project#group_with_project_templates_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.project.ProjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#id Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importUrl`<sup>Optional</sup> <a name="importUrl" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrl"></a>

```java
public java.lang.String getImportUrl();
```

- *Type:* java.lang.String

Git URL to a repository to be imported.

Together with `mirror = true` it will setup a Pull Mirror. This can also be used together with `forked_from_project_id` to setup a Pull Mirror for a fork. The fork takes precedence over the import. Make sure to provide the credentials in `import_url_username` and `import_url_password`. GitLab never returns the credentials, thus the provider cannot detect configuration drift in the credentials. They can also not be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#import_url Project#import_url}

---

##### `importUrlPassword`<sup>Optional</sup> <a name="importUrlPassword" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlPassword"></a>

```java
public java.lang.String getImportUrlPassword();
```

- *Type:* java.lang.String

The password for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#import_url_password Project#import_url_password}

---

##### `importUrlUsername`<sup>Optional</sup> <a name="importUrlUsername" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlUsername"></a>

```java
public java.lang.String getImportUrlUsername();
```

- *Type:* java.lang.String

The username for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`.  See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#import_url_username Project#import_url_username}

---

##### `infrastructureAccessLevel`<sup>Optional</sup> <a name="infrastructureAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.infrastructureAccessLevel"></a>

```java
public java.lang.String getInfrastructureAccessLevel();
```

- *Type:* java.lang.String

Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#infrastructure_access_level Project#infrastructure_access_level}

---

##### `initializeWithReadme`<sup>Optional</sup> <a name="initializeWithReadme" id="@cdktf/provider-gitlab.project.ProjectConfig.property.initializeWithReadme"></a>

```java
public java.lang.Boolean|IResolvable getInitializeWithReadme();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Create main branch with first commit containing a README.md file. Must be set to `true` if importing an uninitialized project with a different `default_branch`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#initialize_with_readme Project#initialize_with_readme}

---

##### `issuesAccessLevel`<sup>Optional</sup> <a name="issuesAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesAccessLevel"></a>

```java
public java.lang.String getIssuesAccessLevel();
```

- *Type:* java.lang.String

Set the issues access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#issues_access_level Project#issues_access_level}

---

##### `issuesEnabled`<sup>Optional</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIssuesEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable issue tracking for the project. Use `issues_access_level` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#issues_enabled Project#issues_enabled}

---

##### `issuesTemplate`<sup>Optional</sup> <a name="issuesTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesTemplate"></a>

```java
public java.lang.String getIssuesTemplate();
```

- *Type:* java.lang.String

Sets the template for new issues in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#issues_template Project#issues_template}

---

##### `keepLatestArtifact`<sup>Optional</sup> <a name="keepLatestArtifact" id="@cdktf/provider-gitlab.project.ProjectConfig.property.keepLatestArtifact"></a>

```java
public java.lang.Boolean|IResolvable getKeepLatestArtifact();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Disable or enable the ability to keep the latest artifact for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#keep_latest_artifact Project#keep_latest_artifact}

---

##### `lfsEnabled`<sup>Optional</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.lfsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getLfsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable LFS for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#lfs_enabled Project#lfs_enabled}

---

##### `mergeCommitTemplate`<sup>Optional</sup> <a name="mergeCommitTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeCommitTemplate"></a>

```java
public java.lang.String getMergeCommitTemplate();
```

- *Type:* java.lang.String

Template used to create merge commit message in merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_commit_template Project#merge_commit_template}

---

##### `mergeMethod`<sup>Optional</sup> <a name="mergeMethod" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeMethod"></a>

```java
public java.lang.String getMergeMethod();
```

- *Type:* java.lang.String

Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_method Project#merge_method}

---

##### `mergePipelinesEnabled`<sup>Optional</sup> <a name="mergePipelinesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergePipelinesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMergePipelinesEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable or disable merge pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_pipelines_enabled Project#merge_pipelines_enabled}

---

##### `mergeRequestsAccessLevel`<sup>Optional</sup> <a name="mergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsAccessLevel"></a>

```java
public java.lang.String getMergeRequestsAccessLevel();
```

- *Type:* java.lang.String

Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_requests_access_level Project#merge_requests_access_level}

---

##### `mergeRequestsEnabled`<sup>Optional</sup> <a name="mergeRequestsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMergeRequestsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable merge requests for the project. Use `merge_requests_access_level` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_requests_enabled Project#merge_requests_enabled}

---

##### `mergeRequestsTemplate`<sup>Optional</sup> <a name="mergeRequestsTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsTemplate"></a>

```java
public java.lang.String getMergeRequestsTemplate();
```

- *Type:* java.lang.String

Sets the template for new merge requests in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_requests_template Project#merge_requests_template}

---

##### `mergeTrainsEnabled`<sup>Optional</sup> <a name="mergeTrainsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeTrainsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMergeTrainsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#merge_trains_enabled Project#merge_trains_enabled}

---

##### `mirror`<sup>Optional</sup> <a name="mirror" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirror"></a>

```java
public java.lang.Boolean|IResolvable getMirror();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable project pull mirror.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#mirror Project#mirror}

---

##### `mirrorOverwritesDivergedBranches`<sup>Optional</sup> <a name="mirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorOverwritesDivergedBranches"></a>

```java
public java.lang.Boolean|IResolvable getMirrorOverwritesDivergedBranches();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable overwrite diverged branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#mirror_overwrites_diverged_branches Project#mirror_overwrites_diverged_branches}

---

##### `mirrorTriggerBuilds`<sup>Optional</sup> <a name="mirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorTriggerBuilds"></a>

```java
public java.lang.Boolean|IResolvable getMirrorTriggerBuilds();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable trigger builds on pushes for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#mirror_trigger_builds Project#mirror_trigger_builds}

---

##### `modelExperimentsAccessLevel`<sup>Optional</sup> <a name="modelExperimentsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.modelExperimentsAccessLevel"></a>

```java
public java.lang.String getModelExperimentsAccessLevel();
```

- *Type:* java.lang.String

Set visibility of machine learning model experiments. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#model_experiments_access_level Project#model_experiments_access_level}

---

##### `modelRegistryAccessLevel`<sup>Optional</sup> <a name="modelRegistryAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.modelRegistryAccessLevel"></a>

```java
public java.lang.String getModelRegistryAccessLevel();
```

- *Type:* java.lang.String

Set visibility of machine learning model registry. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#model_registry_access_level Project#model_registry_access_level}

---

##### `monitorAccessLevel`<sup>Optional</sup> <a name="monitorAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.monitorAccessLevel"></a>

```java
public java.lang.String getMonitorAccessLevel();
```

- *Type:* java.lang.String

Set the monitor access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#monitor_access_level Project#monitor_access_level}

---

##### `mrDefaultTargetSelf`<sup>Optional</sup> <a name="mrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mrDefaultTargetSelf"></a>

```java
public java.lang.Boolean|IResolvable getMrDefaultTargetSelf();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

For forked projects, target merge requests to this project. If false, the target will be the upstream project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#mr_default_target_self Project#mr_default_target_self}

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.namespaceId"></a>

```java
public java.lang.Number getNamespaceId();
```

- *Type:* java.lang.Number

The namespace (group or user) of the project. Defaults to your user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#namespace_id Project#namespace_id}

---

##### `onlyAllowMergeIfAllDiscussionsAreResolved`<sup>Optional</sup> <a name="onlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```java
public java.lang.Boolean|IResolvable getOnlyAllowMergeIfAllDiscussionsAreResolved();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true if you want allow merges only if all discussions are resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#only_allow_merge_if_all_discussions_are_resolved Project#only_allow_merge_if_all_discussions_are_resolved}

---

##### `onlyAllowMergeIfPipelineSucceeds`<sup>Optional</sup> <a name="onlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfPipelineSucceeds"></a>

```java
public java.lang.Boolean|IResolvable getOnlyAllowMergeIfPipelineSucceeds();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true if you want allow merges only if a pipeline succeeds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#only_allow_merge_if_pipeline_succeeds Project#only_allow_merge_if_pipeline_succeeds}

---

##### `onlyMirrorProtectedBranches`<sup>Optional</sup> <a name="onlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyMirrorProtectedBranches"></a>

```java
public java.lang.Boolean|IResolvable getOnlyMirrorProtectedBranches();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable only mirror protected branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#only_mirror_protected_branches Project#only_mirror_protected_branches}

---

##### `packagesEnabled`<sup>Optional</sup> <a name="packagesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.packagesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPackagesEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable packages repository for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#packages_enabled Project#packages_enabled}

---

##### `pagesAccessLevel`<sup>Optional</sup> <a name="pagesAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pagesAccessLevel"></a>

```java
public java.lang.String getPagesAccessLevel();
```

- *Type:* java.lang.String

Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#pages_access_level Project#pages_access_level}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-gitlab.project.ProjectConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#path Project#path}

---

##### `permanentlyDeleteOnDestroy`<sup>Optional</sup> <a name="permanentlyDeleteOnDestroy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.permanentlyDeleteOnDestroy"></a>

```java
public java.lang.Boolean|IResolvable getPermanentlyDeleteOnDestroy();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to `true` to immediately permanently delete the project instead of scheduling a delete for Premium and Ultimate tiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#permanently_delete_on_destroy Project#permanently_delete_on_destroy}

---

##### `pipelinesEnabled`<sup>Optional</sup> <a name="pipelinesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pipelinesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPipelinesEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable pipelines for the project.

The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls. Use `builds_access_level` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#pipelines_enabled Project#pipelines_enabled}

---

##### `preReceiveSecretDetectionEnabled`<sup>Optional</sup> <a name="preReceiveSecretDetectionEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.preReceiveSecretDetectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPreReceiveSecretDetectionEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether Secret Push Detection is enabled. Requires GitLab Ultimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#pre_receive_secret_detection_enabled Project#pre_receive_secret_detection_enabled}

---

##### `preventMergeWithoutJiraIssue`<sup>Optional</sup> <a name="preventMergeWithoutJiraIssue" id="@cdktf/provider-gitlab.project.ProjectConfig.property.preventMergeWithoutJiraIssue"></a>

```java
public java.lang.Boolean|IResolvable getPreventMergeWithoutJiraIssue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set whether merge requests require an associated issue from Jira. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#prevent_merge_without_jira_issue Project#prevent_merge_without_jira_issue}

---

##### `printingMergeRequestLinkEnabled`<sup>Optional</sup> <a name="printingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.printingMergeRequestLinkEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPrintingMergeRequestLinkEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Show link to create/view merge request when pushing from the command line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#printing_merge_request_link_enabled Project#printing_merge_request_link_enabled}

---

##### `publicBuilds`<sup>Optional</sup> <a name="publicBuilds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.publicBuilds"></a>

```java
public java.lang.Boolean|IResolvable getPublicBuilds();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#public_builds Project#public_builds}

---

##### `publicJobs`<sup>Optional</sup> <a name="publicJobs" id="@cdktf/provider-gitlab.project.ProjectConfig.property.publicJobs"></a>

```java
public java.lang.Boolean|IResolvable getPublicJobs();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#public_jobs Project#public_jobs}

---

##### `pushRules`<sup>Optional</sup> <a name="pushRules" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pushRules"></a>

```java
public ProjectPushRules getPushRules();
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#push_rules Project#push_rules}

---

##### `releasesAccessLevel`<sup>Optional</sup> <a name="releasesAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.releasesAccessLevel"></a>

```java
public java.lang.String getReleasesAccessLevel();
```

- *Type:* java.lang.String

Set the releases access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#releases_access_level Project#releases_access_level}

---

##### `removeSourceBranchAfterMerge`<sup>Optional</sup> <a name="removeSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.ProjectConfig.property.removeSourceBranchAfterMerge"></a>

```java
public java.lang.Boolean|IResolvable getRemoveSourceBranchAfterMerge();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable `Delete source branch` option by default for all new merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#remove_source_branch_after_merge Project#remove_source_branch_after_merge}

---

##### `repositoryAccessLevel`<sup>Optional</sup> <a name="repositoryAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryAccessLevel"></a>

```java
public java.lang.String getRepositoryAccessLevel();
```

- *Type:* java.lang.String

Set the repository access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#repository_access_level Project#repository_access_level}

---

##### `repositoryStorage`<sup>Optional</sup> <a name="repositoryStorage" id="@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryStorage"></a>

```java
public java.lang.String getRepositoryStorage();
```

- *Type:* java.lang.String

Which storage shard the repository is on. (administrator only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#repository_storage Project#repository_storage}

---

##### `requestAccessEnabled`<sup>Optional</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.requestAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRequestAccessEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#request_access_enabled Project#request_access_enabled}

---

##### `requirementsAccessLevel`<sup>Optional</sup> <a name="requirementsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.requirementsAccessLevel"></a>

```java
public java.lang.String getRequirementsAccessLevel();
```

- *Type:* java.lang.String

Set the requirements access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#requirements_access_level Project#requirements_access_level}

---

##### `resolveOutdatedDiffDiscussions`<sup>Optional</sup> <a name="resolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.ProjectConfig.property.resolveOutdatedDiffDiscussions"></a>

```java
public java.lang.Boolean|IResolvable getResolveOutdatedDiffDiscussions();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Automatically resolve merge request diffs discussions on lines changed with a push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#resolve_outdated_diff_discussions Project#resolve_outdated_diff_discussions}

---

##### `resourceGroupDefaultProcessMode`<sup>Optional</sup> <a name="resourceGroupDefaultProcessMode" id="@cdktf/provider-gitlab.project.ProjectConfig.property.resourceGroupDefaultProcessMode"></a>

```java
public java.lang.String getResourceGroupDefaultProcessMode();
```

- *Type:* java.lang.String

The default resource group process mode for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#resource_group_default_process_mode Project#resource_group_default_process_mode}

---

##### `restrictUserDefinedVariables`<sup>Optional</sup> <a name="restrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.ProjectConfig.property.restrictUserDefinedVariables"></a>

```java
public java.lang.Boolean|IResolvable getRestrictUserDefinedVariables();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline.

Use `ci_pipeline_variables_minimum_override_role` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#restrict_user_defined_variables Project#restrict_user_defined_variables}

---

##### `securityAndComplianceAccessLevel`<sup>Optional</sup> <a name="securityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.securityAndComplianceAccessLevel"></a>

```java
public java.lang.String getSecurityAndComplianceAccessLevel();
```

- *Type:* java.lang.String

Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#security_and_compliance_access_level Project#security_and_compliance_access_level}

---

##### `sharedRunnersEnabled`<sup>Optional</sup> <a name="sharedRunnersEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.sharedRunnersEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSharedRunnersEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable shared runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#shared_runners_enabled Project#shared_runners_enabled}

---

##### `skipWaitForDefaultBranchProtection`<sup>Optional</sup> <a name="skipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.ProjectConfig.property.skipWaitForDefaultBranchProtection"></a>

```java
public java.lang.Boolean|IResolvable getSkipWaitForDefaultBranchProtection();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If `true`, the default behavior to wait for the default branch protection to be created is skipped.

This is necessary if the current user is not an admin and the default branch protection is disabled on an instance-level.
There is currently no known way to determine if the default branch protection is disabled on an instance-level for non-admin users.
This attribute is only used during resource creation, thus changes are suppressed and the attribute cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#skip_wait_for_default_branch_protection Project#skip_wait_for_default_branch_protection}

---

##### `snippetsAccessLevel`<sup>Optional</sup> <a name="snippetsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsAccessLevel"></a>

```java
public java.lang.String getSnippetsAccessLevel();
```

- *Type:* java.lang.String

Set the snippets access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#snippets_access_level Project#snippets_access_level}

---

##### `snippetsEnabled`<sup>Optional</sup> <a name="snippetsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSnippetsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable snippets for the project. Use `snippets_access_level` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#snippets_enabled Project#snippets_enabled}

---

##### `squashCommitTemplate`<sup>Optional</sup> <a name="squashCommitTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.squashCommitTemplate"></a>

```java
public java.lang.String getSquashCommitTemplate();
```

- *Type:* java.lang.String

Template used to create squash commit message in merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#squash_commit_template Project#squash_commit_template}

---

##### `squashOption`<sup>Optional</sup> <a name="squashOption" id="@cdktf/provider-gitlab.project.ProjectConfig.property.squashOption"></a>

```java
public java.lang.String getSquashOption();
```

- *Type:* java.lang.String

Squash commits when merge request is merged.

Valid values are `never` (Do not allow), `always` (Require), `default_on` (Encourage), or `default_off` (Allow). The default value is `default_off` (Allow).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#squash_option Project#squash_option}

---

##### `suggestionCommitMessage`<sup>Optional</sup> <a name="suggestionCommitMessage" id="@cdktf/provider-gitlab.project.ProjectConfig.property.suggestionCommitMessage"></a>

```java
public java.lang.String getSuggestionCommitMessage();
```

- *Type:* java.lang.String

The commit message used to apply merge request suggestions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#suggestion_commit_message Project#suggestion_commit_message}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-gitlab.project.ProjectConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

The list of tags for a project;

put array of tags, that should be finally assigned to a project. Use `topics` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#tags Project#tags}

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktf/provider-gitlab.project.ProjectConfig.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

When used without use_custom_template, name of a built-in project template.

When used with use_custom_template, name of a custom project template. This option is mutually exclusive with `template_project_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#template_name Project#template_name}

---

##### `templateProjectId`<sup>Optional</sup> <a name="templateProjectId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.templateProjectId"></a>

```java
public java.lang.Number getTemplateProjectId();
```

- *Type:* java.lang.Number

When used with use_custom_template, project ID of a custom project template.

This is preferable to using template_name since template_name may be ambiguous (enterprise edition). This option is mutually exclusive with `template_name`. See `gitlab_group_project_file_template` to set a project as a template project. If a project has not been set as a template, using it here will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#template_project_id Project#template_project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-gitlab.project.ProjectConfig.property.timeouts"></a>

```java
public ProjectTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#timeouts Project#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-gitlab.project.ProjectConfig.property.topics"></a>

```java
public java.util.List<java.lang.String> getTopics();
```

- *Type:* java.util.List<java.lang.String>

The list of topics for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#topics Project#topics}

---

##### `useCustomTemplate`<sup>Optional</sup> <a name="useCustomTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.useCustomTemplate"></a>

```java
public java.lang.Boolean|IResolvable getUseCustomTemplate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition).

~> When using a custom template, [Group Tokens won't work](https://docs.gitlab.com/15.7/ee/user/project/settings/import_export_troubleshooting/#import-using-the-rest-api-fails-when-using-a-group-access-token). You must use a real user's Personal Access Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#use_custom_template Project#use_custom_template}

---

##### `visibilityLevel`<sup>Optional</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.visibilityLevel"></a>

```java
public java.lang.String getVisibilityLevel();
```

- *Type:* java.lang.String

Set to `public` to create a public project. Valid values are `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#visibility_level Project#visibility_level}

---

##### `wikiAccessLevel`<sup>Optional</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.wikiAccessLevel"></a>

```java
public java.lang.String getWikiAccessLevel();
```

- *Type:* java.lang.String

Set the wiki access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#wiki_access_level Project#wiki_access_level}

---

##### `wikiEnabled`<sup>Optional</sup> <a name="wikiEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.wikiEnabled"></a>

```java
public java.lang.Boolean|IResolvable getWikiEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable wiki for the project. Use `wiki_access_level` instead. To be removed in 19.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#wiki_enabled Project#wiki_enabled}

---

### ProjectContainerExpirationPolicy <a name="ProjectContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project.ProjectContainerExpirationPolicy;

ProjectContainerExpirationPolicy.builder()
//  .cadence(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .keepN(java.lang.Number)
//  .nameRegexDelete(java.lang.String)
//  .nameRegexKeep(java.lang.String)
//  .olderThan(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.cadence">cadence</a></code> | <code>java.lang.String</code> | The cadence of the policy. Valid values are: `1d`, `7d`, `14d`, `1month`, `3month`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, the policy is enabled. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.keepN">keepN</a></code> | <code>java.lang.Number</code> | The number of images to keep. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexDelete">nameRegexDelete</a></code> | <code>java.lang.String</code> | The regular expression to match image names to delete. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexKeep">nameRegexKeep</a></code> | <code>java.lang.String</code> | The regular expression to match image names to keep. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.olderThan">olderThan</a></code> | <code>java.lang.String</code> | The number of days to keep images. |

---

##### `cadence`<sup>Optional</sup> <a name="cadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.cadence"></a>

```java
public java.lang.String getCadence();
```

- *Type:* java.lang.String

The cadence of the policy. Valid values are: `1d`, `7d`, `14d`, `1month`, `3month`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#cadence Project#cadence}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, the policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#enabled Project#enabled}

---

##### `keepN`<sup>Optional</sup> <a name="keepN" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.keepN"></a>

```java
public java.lang.Number getKeepN();
```

- *Type:* java.lang.Number

The number of images to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#keep_n Project#keep_n}

---

##### `nameRegexDelete`<sup>Optional</sup> <a name="nameRegexDelete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexDelete"></a>

```java
public java.lang.String getNameRegexDelete();
```

- *Type:* java.lang.String

The regular expression to match image names to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#name_regex_delete Project#name_regex_delete}

---

##### `nameRegexKeep`<sup>Optional</sup> <a name="nameRegexKeep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexKeep"></a>

```java
public java.lang.String getNameRegexKeep();
```

- *Type:* java.lang.String

The regular expression to match image names to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#name_regex_keep Project#name_regex_keep}

---

##### `olderThan`<sup>Optional</sup> <a name="olderThan" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.olderThan"></a>

```java
public java.lang.String getOlderThan();
```

- *Type:* java.lang.String

The number of days to keep images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#older_than Project#older_than}

---

### ProjectPushRules <a name="ProjectPushRules" id="@cdktf/provider-gitlab.project.ProjectPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectPushRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project.ProjectPushRules;

ProjectPushRules.builder()
//  .authorEmailRegex(java.lang.String)
//  .branchNameRegex(java.lang.String)
//  .commitCommitterCheck(java.lang.Boolean|IResolvable)
//  .commitCommitterNameCheck(java.lang.Boolean|IResolvable)
//  .commitMessageNegativeRegex(java.lang.String)
//  .commitMessageRegex(java.lang.String)
//  .denyDeleteTag(java.lang.Boolean|IResolvable)
//  .fileNameRegex(java.lang.String)
//  .maxFileSize(java.lang.Number)
//  .memberCheck(java.lang.Boolean|IResolvable)
//  .preventSecrets(java.lang.Boolean|IResolvable)
//  .rejectNonDcoCommits(java.lang.Boolean|IResolvable)
//  .rejectUnsignedCommits(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.authorEmailRegex">authorEmailRegex</a></code> | <code>java.lang.String</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.branchNameRegex">branchNameRegex</a></code> | <code>java.lang.String</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterCheck">commitCommitterCheck</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Users can only push commits to this repository that were committed with one of their own verified emails. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterNameCheck">commitCommitterNameCheck</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageNegativeRegex">commitMessageNegativeRegex</a></code> | <code>java.lang.String</code> | No commit message is allowed to match this regex, e.g. `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageRegex">commitMessageRegex</a></code> | <code>java.lang.String</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.denyDeleteTag">denyDeleteTag</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.fileNameRegex">fileNameRegex</a></code> | <code>java.lang.String</code> | All committed filenames must not match this regex, e.g. `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Maximum file size (MB). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.memberCheck">memberCheck</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Restrict commits by author (email) to existing GitLab users. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.preventSecrets">preventSecrets</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectNonDcoCommits">rejectNonDcoCommits</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectUnsignedCommits">rejectUnsignedCommits</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Reject commit when it’s not signed through GPG. |

---

##### `authorEmailRegex`<sup>Optional</sup> <a name="authorEmailRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.authorEmailRegex"></a>

```java
public java.lang.String getAuthorEmailRegex();
```

- *Type:* java.lang.String

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#author_email_regex Project#author_email_regex}

---

##### `branchNameRegex`<sup>Optional</sup> <a name="branchNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.branchNameRegex"></a>

```java
public java.lang.String getBranchNameRegex();
```

- *Type:* java.lang.String

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#branch_name_regex Project#branch_name_regex}

---

##### `commitCommitterCheck`<sup>Optional</sup> <a name="commitCommitterCheck" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterCheck"></a>

```java
public java.lang.Boolean|IResolvable getCommitCommitterCheck();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Users can only push commits to this repository that were committed with one of their own verified emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#commit_committer_check Project#commit_committer_check}

---

##### `commitCommitterNameCheck`<sup>Optional</sup> <a name="commitCommitterNameCheck" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterNameCheck"></a>

```java
public java.lang.Boolean|IResolvable getCommitCommitterNameCheck();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#commit_committer_name_check Project#commit_committer_name_check}

---

##### `commitMessageNegativeRegex`<sup>Optional</sup> <a name="commitMessageNegativeRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageNegativeRegex"></a>

```java
public java.lang.String getCommitMessageNegativeRegex();
```

- *Type:* java.lang.String

No commit message is allowed to match this regex, e.g. `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#commit_message_negative_regex Project#commit_message_negative_regex}

---

##### `commitMessageRegex`<sup>Optional</sup> <a name="commitMessageRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageRegex"></a>

```java
public java.lang.String getCommitMessageRegex();
```

- *Type:* java.lang.String

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#commit_message_regex Project#commit_message_regex}

---

##### `denyDeleteTag`<sup>Optional</sup> <a name="denyDeleteTag" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.denyDeleteTag"></a>

```java
public java.lang.Boolean|IResolvable getDenyDeleteTag();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#deny_delete_tag Project#deny_delete_tag}

---

##### `fileNameRegex`<sup>Optional</sup> <a name="fileNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.fileNameRegex"></a>

```java
public java.lang.String getFileNameRegex();
```

- *Type:* java.lang.String

All committed filenames must not match this regex, e.g. `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#file_name_regex Project#file_name_regex}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

Maximum file size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#max_file_size Project#max_file_size}

---

##### `memberCheck`<sup>Optional</sup> <a name="memberCheck" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.memberCheck"></a>

```java
public java.lang.Boolean|IResolvable getMemberCheck();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Restrict commits by author (email) to existing GitLab users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#member_check Project#member_check}

---

##### `preventSecrets`<sup>Optional</sup> <a name="preventSecrets" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.preventSecrets"></a>

```java
public java.lang.Boolean|IResolvable getPreventSecrets();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#prevent_secrets Project#prevent_secrets}

---

##### `rejectNonDcoCommits`<sup>Optional</sup> <a name="rejectNonDcoCommits" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectNonDcoCommits"></a>

```java
public java.lang.Boolean|IResolvable getRejectNonDcoCommits();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#reject_non_dco_commits Project#reject_non_dco_commits}

---

##### `rejectUnsignedCommits`<sup>Optional</sup> <a name="rejectUnsignedCommits" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectUnsignedCommits"></a>

```java
public java.lang.Boolean|IResolvable getRejectUnsignedCommits();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Reject commit when it’s not signed through GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#reject_unsigned_commits Project#reject_unsigned_commits}

---

### ProjectTimeouts <a name="ProjectTimeouts" id="@cdktf/provider-gitlab.project.ProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project.ProjectTimeouts;

ProjectTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#create Project#create}. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#delete Project#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-gitlab.project.ProjectTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#create Project#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-gitlab.project.ProjectTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project#delete Project#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectContainerExpirationPolicyOutputReference <a name="ProjectContainerExpirationPolicyOutputReference" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project.ProjectContainerExpirationPolicyOutputReference;

new ProjectContainerExpirationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetCadence">resetCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetKeepN">resetKeepN</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexDelete">resetNameRegexDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexKeep">resetNameRegexKeep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetOlderThan">resetOlderThan</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCadence` <a name="resetCadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetCadence"></a>

```java
public void resetCadence()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetKeepN` <a name="resetKeepN" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetKeepN"></a>

```java
public void resetKeepN()
```

##### `resetNameRegexDelete` <a name="resetNameRegexDelete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexDelete"></a>

```java
public void resetNameRegexDelete()
```

##### `resetNameRegexKeep` <a name="resetNameRegexKeep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexKeep"></a>

```java
public void resetNameRegexKeep()
```

##### `resetOlderThan` <a name="resetOlderThan" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetOlderThan"></a>

```java
public void resetOlderThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nextRunAt">nextRunAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadenceInput">cadenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepNInput">keepNInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDeleteInput">nameRegexDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeepInput">nameRegexKeepInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThanInput">olderThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadence">cadence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepN">keepN</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete">nameRegexDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep">nameRegexKeep</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThan">olderThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nextRunAt`<sup>Required</sup> <a name="nextRunAt" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nextRunAt"></a>

```java
public java.lang.String getNextRunAt();
```

- *Type:* java.lang.String

---

##### `cadenceInput`<sup>Optional</sup> <a name="cadenceInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadenceInput"></a>

```java
public java.lang.String getCadenceInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `keepNInput`<sup>Optional</sup> <a name="keepNInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepNInput"></a>

```java
public java.lang.Number getKeepNInput();
```

- *Type:* java.lang.Number

---

##### `nameRegexDeleteInput`<sup>Optional</sup> <a name="nameRegexDeleteInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDeleteInput"></a>

```java
public java.lang.String getNameRegexDeleteInput();
```

- *Type:* java.lang.String

---

##### `nameRegexKeepInput`<sup>Optional</sup> <a name="nameRegexKeepInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeepInput"></a>

```java
public java.lang.String getNameRegexKeepInput();
```

- *Type:* java.lang.String

---

##### `olderThanInput`<sup>Optional</sup> <a name="olderThanInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThanInput"></a>

```java
public java.lang.String getOlderThanInput();
```

- *Type:* java.lang.String

---

##### `cadence`<sup>Required</sup> <a name="cadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadence"></a>

```java
public java.lang.String getCadence();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `keepN`<sup>Required</sup> <a name="keepN" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepN"></a>

```java
public java.lang.Number getKeepN();
```

- *Type:* java.lang.Number

---

##### `nameRegexDelete`<sup>Required</sup> <a name="nameRegexDelete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete"></a>

```java
public java.lang.String getNameRegexDelete();
```

- *Type:* java.lang.String

---

##### `nameRegexKeep`<sup>Required</sup> <a name="nameRegexKeep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep"></a>

```java
public java.lang.String getNameRegexKeep();
```

- *Type:* java.lang.String

---

##### `olderThan`<sup>Required</sup> <a name="olderThan" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThan"></a>

```java
public java.lang.String getOlderThan();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.internalValue"></a>

```java
public ProjectContainerExpirationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---


### ProjectPushRulesOutputReference <a name="ProjectPushRulesOutputReference" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project.ProjectPushRulesOutputReference;

new ProjectPushRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetAuthorEmailRegex">resetAuthorEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetBranchNameRegex">resetBranchNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterCheck">resetCommitCommitterCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterNameCheck">resetCommitCommitterNameCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageNegativeRegex">resetCommitMessageNegativeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageRegex">resetCommitMessageRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetDenyDeleteTag">resetDenyDeleteTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetFileNameRegex">resetFileNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMemberCheck">resetMemberCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetPreventSecrets">resetPreventSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectNonDcoCommits">resetRejectNonDcoCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectUnsignedCommits">resetRejectUnsignedCommits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorEmailRegex` <a name="resetAuthorEmailRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetAuthorEmailRegex"></a>

```java
public void resetAuthorEmailRegex()
```

##### `resetBranchNameRegex` <a name="resetBranchNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetBranchNameRegex"></a>

```java
public void resetBranchNameRegex()
```

##### `resetCommitCommitterCheck` <a name="resetCommitCommitterCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterCheck"></a>

```java
public void resetCommitCommitterCheck()
```

##### `resetCommitCommitterNameCheck` <a name="resetCommitCommitterNameCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterNameCheck"></a>

```java
public void resetCommitCommitterNameCheck()
```

##### `resetCommitMessageNegativeRegex` <a name="resetCommitMessageNegativeRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageNegativeRegex"></a>

```java
public void resetCommitMessageNegativeRegex()
```

##### `resetCommitMessageRegex` <a name="resetCommitMessageRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageRegex"></a>

```java
public void resetCommitMessageRegex()
```

##### `resetDenyDeleteTag` <a name="resetDenyDeleteTag" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetDenyDeleteTag"></a>

```java
public void resetDenyDeleteTag()
```

##### `resetFileNameRegex` <a name="resetFileNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetFileNameRegex"></a>

```java
public void resetFileNameRegex()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetMemberCheck` <a name="resetMemberCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMemberCheck"></a>

```java
public void resetMemberCheck()
```

##### `resetPreventSecrets` <a name="resetPreventSecrets" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetPreventSecrets"></a>

```java
public void resetPreventSecrets()
```

##### `resetRejectNonDcoCommits` <a name="resetRejectNonDcoCommits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectNonDcoCommits"></a>

```java
public void resetRejectNonDcoCommits()
```

##### `resetRejectUnsignedCommits` <a name="resetRejectUnsignedCommits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectUnsignedCommits"></a>

```java
public void resetRejectUnsignedCommits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegexInput">authorEmailRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegexInput">branchNameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheckInput">commitCommitterCheckInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheckInput">commitCommitterNameCheckInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegexInput">commitMessageNegativeRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegexInput">commitMessageRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTagInput">denyDeleteTagInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegexInput">fileNameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheckInput">memberCheckInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecretsInput">preventSecretsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectNonDcoCommitsInput">rejectNonDcoCommitsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommitsInput">rejectUnsignedCommitsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegex">authorEmailRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegex">branchNameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheck">commitCommitterCheck</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheck">commitCommitterNameCheck</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegex">commitMessageNegativeRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegex">commitMessageRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTag">denyDeleteTag</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegex">fileNameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheck">memberCheck</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecrets">preventSecrets</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectNonDcoCommits">rejectNonDcoCommits</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommits">rejectUnsignedCommits</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorEmailRegexInput`<sup>Optional</sup> <a name="authorEmailRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegexInput"></a>

```java
public java.lang.String getAuthorEmailRegexInput();
```

- *Type:* java.lang.String

---

##### `branchNameRegexInput`<sup>Optional</sup> <a name="branchNameRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegexInput"></a>

```java
public java.lang.String getBranchNameRegexInput();
```

- *Type:* java.lang.String

---

##### `commitCommitterCheckInput`<sup>Optional</sup> <a name="commitCommitterCheckInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getCommitCommitterCheckInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `commitCommitterNameCheckInput`<sup>Optional</sup> <a name="commitCommitterNameCheckInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getCommitCommitterNameCheckInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `commitMessageNegativeRegexInput`<sup>Optional</sup> <a name="commitMessageNegativeRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegexInput"></a>

```java
public java.lang.String getCommitMessageNegativeRegexInput();
```

- *Type:* java.lang.String

---

##### `commitMessageRegexInput`<sup>Optional</sup> <a name="commitMessageRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegexInput"></a>

```java
public java.lang.String getCommitMessageRegexInput();
```

- *Type:* java.lang.String

---

##### `denyDeleteTagInput`<sup>Optional</sup> <a name="denyDeleteTagInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTagInput"></a>

```java
public java.lang.Boolean|IResolvable getDenyDeleteTagInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fileNameRegexInput`<sup>Optional</sup> <a name="fileNameRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegexInput"></a>

```java
public java.lang.String getFileNameRegexInput();
```

- *Type:* java.lang.String

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `memberCheckInput`<sup>Optional</sup> <a name="memberCheckInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getMemberCheckInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preventSecretsInput`<sup>Optional</sup> <a name="preventSecretsInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecretsInput"></a>

```java
public java.lang.Boolean|IResolvable getPreventSecretsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rejectNonDcoCommitsInput`<sup>Optional</sup> <a name="rejectNonDcoCommitsInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectNonDcoCommitsInput"></a>

```java
public java.lang.Boolean|IResolvable getRejectNonDcoCommitsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rejectUnsignedCommitsInput`<sup>Optional</sup> <a name="rejectUnsignedCommitsInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommitsInput"></a>

```java
public java.lang.Boolean|IResolvable getRejectUnsignedCommitsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `authorEmailRegex`<sup>Required</sup> <a name="authorEmailRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegex"></a>

```java
public java.lang.String getAuthorEmailRegex();
```

- *Type:* java.lang.String

---

##### `branchNameRegex`<sup>Required</sup> <a name="branchNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegex"></a>

```java
public java.lang.String getBranchNameRegex();
```

- *Type:* java.lang.String

---

##### `commitCommitterCheck`<sup>Required</sup> <a name="commitCommitterCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheck"></a>

```java
public java.lang.Boolean|IResolvable getCommitCommitterCheck();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `commitCommitterNameCheck`<sup>Required</sup> <a name="commitCommitterNameCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheck"></a>

```java
public java.lang.Boolean|IResolvable getCommitCommitterNameCheck();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `commitMessageNegativeRegex`<sup>Required</sup> <a name="commitMessageNegativeRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```java
public java.lang.String getCommitMessageNegativeRegex();
```

- *Type:* java.lang.String

---

##### `commitMessageRegex`<sup>Required</sup> <a name="commitMessageRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegex"></a>

```java
public java.lang.String getCommitMessageRegex();
```

- *Type:* java.lang.String

---

##### `denyDeleteTag`<sup>Required</sup> <a name="denyDeleteTag" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTag"></a>

```java
public java.lang.Boolean|IResolvable getDenyDeleteTag();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fileNameRegex`<sup>Required</sup> <a name="fileNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegex"></a>

```java
public java.lang.String getFileNameRegex();
```

- *Type:* java.lang.String

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `memberCheck`<sup>Required</sup> <a name="memberCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheck"></a>

```java
public java.lang.Boolean|IResolvable getMemberCheck();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preventSecrets`<sup>Required</sup> <a name="preventSecrets" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecrets"></a>

```java
public java.lang.Boolean|IResolvable getPreventSecrets();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rejectNonDcoCommits`<sup>Required</sup> <a name="rejectNonDcoCommits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectNonDcoCommits"></a>

```java
public java.lang.Boolean|IResolvable getRejectNonDcoCommits();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rejectUnsignedCommits`<sup>Required</sup> <a name="rejectUnsignedCommits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```java
public java.lang.Boolean|IResolvable getRejectUnsignedCommits();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.internalValue"></a>

```java
public ProjectPushRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---


### ProjectTimeoutsOutputReference <a name="ProjectTimeoutsOutputReference" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project.ProjectTimeoutsOutputReference;

new ProjectTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ProjectTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

---



