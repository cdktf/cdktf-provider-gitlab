# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-gitlab.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-gitlab.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project gitlab_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.Project.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project

project.Project(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  allow_merge_on_skipped_pipeline: typing.Union[bool, IResolvable] = None,
  allow_pipeline_trigger_approve_deployment: typing.Union[bool, IResolvable] = None,
  analytics_access_level: str = None,
  approvals_before_merge: typing.Union[int, float] = None,
  archived: typing.Union[bool, IResolvable] = None,
  archive_on_destroy: typing.Union[bool, IResolvable] = None,
  auto_cancel_pending_pipelines: str = None,
  autoclose_referenced_issues: typing.Union[bool, IResolvable] = None,
  auto_devops_deploy_strategy: str = None,
  auto_devops_enabled: typing.Union[bool, IResolvable] = None,
  avatar: str = None,
  avatar_hash: str = None,
  build_coverage_regex: str = None,
  build_git_strategy: str = None,
  builds_access_level: str = None,
  build_timeout: typing.Union[int, float] = None,
  ci_config_path: str = None,
  ci_default_git_depth: typing.Union[int, float] = None,
  ci_forward_deployment_enabled: typing.Union[bool, IResolvable] = None,
  ci_pipeline_variables_minimum_override_role: str = None,
  ci_restrict_pipeline_cancellation_role: str = None,
  ci_separated_caches: typing.Union[bool, IResolvable] = None,
  container_expiration_policy: ProjectContainerExpirationPolicy = None,
  container_registry_access_level: str = None,
  container_registry_enabled: typing.Union[bool, IResolvable] = None,
  default_branch: str = None,
  description: str = None,
  emails_enabled: typing.Union[bool, IResolvable] = None,
  environments_access_level: str = None,
  external_authorization_classification_label: str = None,
  feature_flags_access_level: str = None,
  forked_from_project_id: typing.Union[int, float] = None,
  forking_access_level: str = None,
  group_runners_enabled: typing.Union[bool, IResolvable] = None,
  group_with_project_templates_id: typing.Union[int, float] = None,
  id: str = None,
  import_url: str = None,
  import_url_password: str = None,
  import_url_username: str = None,
  infrastructure_access_level: str = None,
  initialize_with_readme: typing.Union[bool, IResolvable] = None,
  issues_access_level: str = None,
  issues_enabled: typing.Union[bool, IResolvable] = None,
  issues_template: str = None,
  keep_latest_artifact: typing.Union[bool, IResolvable] = None,
  lfs_enabled: typing.Union[bool, IResolvable] = None,
  merge_commit_template: str = None,
  merge_method: str = None,
  merge_pipelines_enabled: typing.Union[bool, IResolvable] = None,
  merge_requests_access_level: str = None,
  merge_requests_enabled: typing.Union[bool, IResolvable] = None,
  merge_requests_template: str = None,
  merge_trains_enabled: typing.Union[bool, IResolvable] = None,
  mirror: typing.Union[bool, IResolvable] = None,
  mirror_overwrites_diverged_branches: typing.Union[bool, IResolvable] = None,
  mirror_trigger_builds: typing.Union[bool, IResolvable] = None,
  model_experiments_access_level: str = None,
  model_registry_access_level: str = None,
  monitor_access_level: str = None,
  mr_default_target_self: typing.Union[bool, IResolvable] = None,
  namespace_id: typing.Union[int, float] = None,
  only_allow_merge_if_all_discussions_are_resolved: typing.Union[bool, IResolvable] = None,
  only_allow_merge_if_pipeline_succeeds: typing.Union[bool, IResolvable] = None,
  only_mirror_protected_branches: typing.Union[bool, IResolvable] = None,
  packages_enabled: typing.Union[bool, IResolvable] = None,
  pages_access_level: str = None,
  path: str = None,
  pipelines_enabled: typing.Union[bool, IResolvable] = None,
  pre_receive_secret_detection_enabled: typing.Union[bool, IResolvable] = None,
  printing_merge_request_link_enabled: typing.Union[bool, IResolvable] = None,
  public_builds: typing.Union[bool, IResolvable] = None,
  public_jobs: typing.Union[bool, IResolvable] = None,
  push_rules: ProjectPushRules = None,
  releases_access_level: str = None,
  remove_source_branch_after_merge: typing.Union[bool, IResolvable] = None,
  repository_access_level: str = None,
  repository_storage: str = None,
  request_access_enabled: typing.Union[bool, IResolvable] = None,
  requirements_access_level: str = None,
  resolve_outdated_diff_discussions: typing.Union[bool, IResolvable] = None,
  restrict_user_defined_variables: typing.Union[bool, IResolvable] = None,
  security_and_compliance_access_level: str = None,
  shared_runners_enabled: typing.Union[bool, IResolvable] = None,
  skip_wait_for_default_branch_protection: typing.Union[bool, IResolvable] = None,
  snippets_access_level: str = None,
  snippets_enabled: typing.Union[bool, IResolvable] = None,
  squash_commit_template: str = None,
  squash_option: str = None,
  suggestion_commit_message: str = None,
  tags: typing.List[str] = None,
  template_name: str = None,
  template_project_id: typing.Union[int, float] = None,
  timeouts: ProjectTimeouts = None,
  topics: typing.List[str] = None,
  use_custom_template: typing.Union[bool, IResolvable] = None,
  visibility_level: str = None,
  wiki_access_level: str = None,
  wiki_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.allowMergeOnSkippedPipeline">allow_merge_on_skipped_pipeline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true if you want to treat skipped pipelines as if they finished with success. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.allowPipelineTriggerApproveDeployment">allow_pipeline_trigger_approve_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set whether or not a pipeline triggerer is allowed to approve deployments. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.analyticsAccessLevel">analytics_access_level</a></code> | <code>str</code> | Set the analytics access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.approvalsBeforeMerge">approvals_before_merge</a></code> | <code>typing.Union[int, float]</code> | Number of merge request approvals required for merging. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.archiveOnDestroy">archive_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` to archive the project instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoCancelPendingPipelines">auto_cancel_pending_pipelines</a></code> | <code>str</code> | Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.autocloseReferencedIssues">autoclose_referenced_issues</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set whether auto-closing referenced issues on default branch. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoDevopsDeployStrategy">auto_devops_deploy_strategy</a></code> | <code>str</code> | Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Auto DevOps for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.avatar">avatar</a></code> | <code>str</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.avatarHash">avatar_hash</a></code> | <code>str</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildCoverageRegex">build_coverage_regex</a></code> | <code>str</code> | Test coverage parsing for the project. This is deprecated feature in GitLab 15.0. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildGitStrategy">build_git_strategy</a></code> | <code>str</code> | The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildsAccessLevel">builds_access_level</a></code> | <code>str</code> | Set the builds access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildTimeout">build_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time, in seconds, that a job can run. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciConfigPath">ci_config_path</a></code> | <code>str</code> | Custom Path to CI config file. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciDefaultGitDepth">ci_default_git_depth</a></code> | <code>typing.Union[int, float]</code> | Default number of revisions for shallow cloning. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciForwardDeploymentEnabled">ci_forward_deployment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When a new deployment job starts, skip older deployment jobs that are still pending. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciPipelineVariablesMinimumOverrideRole">ci_pipeline_variables_minimum_override_role</a></code> | <code>str</code> | The minimum role required to set variables when running pipelines and jobs. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciRestrictPipelineCancellationRole">ci_restrict_pipeline_cancellation_role</a></code> | <code>str</code> | The role required to cancel a pipeline or job. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciSeparatedCaches">ci_separated_caches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use separate caches for protected branches. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.containerExpirationPolicy">container_expiration_policy</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | container_expiration_policy block. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.containerRegistryAccessLevel">container_registry_access_level</a></code> | <code>str</code> | Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.containerRegistryEnabled">container_registry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable container registry for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.defaultBranch">default_branch</a></code> | <code>str</code> | The default branch for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.emailsEnabled">emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.environmentsAccessLevel">environments_access_level</a></code> | <code>str</code> | Set the environments access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.externalAuthorizationClassificationLabel">external_authorization_classification_label</a></code> | <code>str</code> | The classification label for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.featureFlagsAccessLevel">feature_flags_access_level</a></code> | <code>str</code> | Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.forkedFromProjectId">forked_from_project_id</a></code> | <code>typing.Union[int, float]</code> | The id of the project to fork. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.forkingAccessLevel">forking_access_level</a></code> | <code>str</code> | Set the forking access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.groupRunnersEnabled">group_runners_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable group runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.groupWithProjectTemplatesId">group_with_project_templates_id</a></code> | <code>typing.Union[int, float]</code> | For group-level custom templates, specifies ID of group from which all the custom project templates are sourced. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#id Project#id}. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.importUrl">import_url</a></code> | <code>str</code> | Git URL to a repository to be imported. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.importUrlPassword">import_url_password</a></code> | <code>str</code> | The password for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.importUrlUsername">import_url_username</a></code> | <code>str</code> | The username for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.infrastructureAccessLevel">infrastructure_access_level</a></code> | <code>str</code> | Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.initializeWithReadme">initialize_with_readme</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create main branch with first commit containing a README.md file. Must be set to `true` if importing an uninitialized project with a different `default_branch`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.issuesAccessLevel">issues_access_level</a></code> | <code>str</code> | Set the issues access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.issuesEnabled">issues_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable issue tracking for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.issuesTemplate">issues_template</a></code> | <code>str</code> | Sets the template for new issues in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.keepLatestArtifact">keep_latest_artifact</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable or enable the ability to keep the latest artifact for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.lfsEnabled">lfs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable LFS for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeCommitTemplate">merge_commit_template</a></code> | <code>str</code> | Template used to create merge commit message in merge requests. (Introduced in GitLab 14.5.). |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeMethod">merge_method</a></code> | <code>str</code> | Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergePipelinesEnabled">merge_pipelines_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable merge pipelines. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeRequestsAccessLevel">merge_requests_access_level</a></code> | <code>str</code> | Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeRequestsEnabled">merge_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable merge requests for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeRequestsTemplate">merge_requests_template</a></code> | <code>str</code> | Sets the template for new merge requests in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeTrainsEnabled">merge_trains_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mirror">mirror</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable project pull mirror. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mirrorOverwritesDivergedBranches">mirror_overwrites_diverged_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable overwrite diverged branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mirrorTriggerBuilds">mirror_trigger_builds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable trigger builds on pushes for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.modelExperimentsAccessLevel">model_experiments_access_level</a></code> | <code>str</code> | Set visibility of machine learning model experiments. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.modelRegistryAccessLevel">model_registry_access_level</a></code> | <code>str</code> | Set visibility of machine learning model registry. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.monitorAccessLevel">monitor_access_level</a></code> | <code>str</code> | Set the monitor access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.mrDefaultTargetSelf">mr_default_target_self</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | For forked projects, target merge requests to this project. If false, the target will be the upstream project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>typing.Union[int, float]</code> | The namespace (group or user) of the project. Defaults to your user. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.onlyAllowMergeIfAllDiscussionsAreResolved">only_allow_merge_if_all_discussions_are_resolved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true if you want allow merges only if all discussions are resolved. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.onlyAllowMergeIfPipelineSucceeds">only_allow_merge_if_pipeline_succeeds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true if you want allow merges only if a pipeline succeeds. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.onlyMirrorProtectedBranches">only_mirror_protected_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable only mirror protected branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.packagesEnabled">packages_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable packages repository for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.pagesAccessLevel">pages_access_level</a></code> | <code>str</code> | Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.path">path</a></code> | <code>str</code> | The path of the repository. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.pipelinesEnabled">pipelines_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable pipelines for the project. The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.preReceiveSecretDetectionEnabled">pre_receive_secret_detection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Secret Push Detection is enabled. Requires GitLab Ultimate and at least GitLab 17.3. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.printingMergeRequestLinkEnabled">printing_merge_request_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Show link to create/view merge request when pushing from the command line. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.publicBuilds">public_builds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.publicJobs">public_jobs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.pushRules">push_rules</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.releasesAccessLevel">releases_access_level</a></code> | <code>str</code> | Set the releases access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.removeSourceBranchAfterMerge">remove_source_branch_after_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable `Delete source branch` option by default for all new merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.repositoryAccessLevel">repository_access_level</a></code> | <code>str</code> | Set the repository access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.repositoryStorage">repository_storage</a></code> | <code>str</code> | Which storage shard the repository is on. (administrator only). |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.requestAccessEnabled">request_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.requirementsAccessLevel">requirements_access_level</a></code> | <code>str</code> | Set the requirements access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.resolveOutdatedDiffDiscussions">resolve_outdated_diff_discussions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Automatically resolve merge request diffs discussions on lines changed with a push. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.restrictUserDefinedVariables">restrict_user_defined_variables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.securityAndComplianceAccessLevel">security_and_compliance_access_level</a></code> | <code>str</code> | Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.sharedRunnersEnabled">shared_runners_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable shared runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.skipWaitForDefaultBranchProtection">skip_wait_for_default_branch_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, the default behavior to wait for the default branch protection to be created is skipped. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.snippetsAccessLevel">snippets_access_level</a></code> | <code>str</code> | Set the snippets access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.snippetsEnabled">snippets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable snippets for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.squashCommitTemplate">squash_commit_template</a></code> | <code>str</code> | Template used to create squash commit message in merge requests. (Introduced in GitLab 14.6.). |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.squashOption">squash_option</a></code> | <code>str</code> | Squash commits when merge request. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.suggestionCommitMessage">suggestion_commit_message</a></code> | <code>str</code> | The commit message used to apply merge request suggestions. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | The list of tags for a project; |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.templateName">template_name</a></code> | <code>str</code> | When used without use_custom_template, name of a built-in project template. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.templateProjectId">template_project_id</a></code> | <code>typing.Union[int, float]</code> | When used with use_custom_template, project ID of a custom project template. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.topics">topics</a></code> | <code>typing.List[str]</code> | The list of topics for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.useCustomTemplate">use_custom_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition). |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.visibilityLevel">visibility_level</a></code> | <code>str</code> | Set to `public` to create a public project. Valid values are `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.wikiAccessLevel">wiki_access_level</a></code> | <code>str</code> | Set the wiki access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.wikiEnabled">wiki_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable wiki for the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.name"></a>

- *Type:* str

The name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#name Project#name}

---

##### `allow_merge_on_skipped_pipeline`<sup>Optional</sup> <a name="allow_merge_on_skipped_pipeline" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.allowMergeOnSkippedPipeline"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true if you want to treat skipped pipelines as if they finished with success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#allow_merge_on_skipped_pipeline Project#allow_merge_on_skipped_pipeline}

---

##### `allow_pipeline_trigger_approve_deployment`<sup>Optional</sup> <a name="allow_pipeline_trigger_approve_deployment" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.allowPipelineTriggerApproveDeployment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set whether or not a pipeline triggerer is allowed to approve deployments. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#allow_pipeline_trigger_approve_deployment Project#allow_pipeline_trigger_approve_deployment}

---

##### `analytics_access_level`<sup>Optional</sup> <a name="analytics_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.analyticsAccessLevel"></a>

- *Type:* str

Set the analytics access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#analytics_access_level Project#analytics_access_level}

---

##### `approvals_before_merge`<sup>Optional</sup> <a name="approvals_before_merge" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.approvalsBeforeMerge"></a>

- *Type:* typing.Union[int, float]

Number of merge request approvals required for merging.

Default is 0.
This field **does not** work well in combination with the `gitlab_project_approval_rule` resource
and is most likely gonna be deprecated in a future GitLab version (see [this upstream epic](https://gitlab.com/groups/gitlab-org/-/epics/7572)).
In the meantime we recommend against using this attribute and use `gitlab_project_approval_rule` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#approvals_before_merge Project#approvals_before_merge}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.archived"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#archived Project#archived}

---

##### `archive_on_destroy`<sup>Optional</sup> <a name="archive_on_destroy" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.archiveOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` to archive the project instead of deleting on destroy.

If set to `true` it will entire omit the `DELETE` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#archive_on_destroy Project#archive_on_destroy}

---

##### `auto_cancel_pending_pipelines`<sup>Optional</sup> <a name="auto_cancel_pending_pipelines" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoCancelPendingPipelines"></a>

- *Type:* str

Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#auto_cancel_pending_pipelines Project#auto_cancel_pending_pipelines}

---

##### `autoclose_referenced_issues`<sup>Optional</sup> <a name="autoclose_referenced_issues" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.autocloseReferencedIssues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set whether auto-closing referenced issues on default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#autoclose_referenced_issues Project#autoclose_referenced_issues}

---

##### `auto_devops_deploy_strategy`<sup>Optional</sup> <a name="auto_devops_deploy_strategy" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoDevopsDeployStrategy"></a>

- *Type:* str

Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#auto_devops_deploy_strategy Project#auto_devops_deploy_strategy}

---

##### `auto_devops_enabled`<sup>Optional</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.autoDevopsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Auto DevOps for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#auto_devops_enabled Project#auto_devops_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.avatar"></a>

- *Type:* str

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#avatar Project#avatar}

---

##### `avatar_hash`<sup>Optional</sup> <a name="avatar_hash" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.avatarHash"></a>

- *Type:* str

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#avatar_hash Project#avatar_hash}

---

##### `build_coverage_regex`<sup>Optional</sup> <a name="build_coverage_regex" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildCoverageRegex"></a>

- *Type:* str

Test coverage parsing for the project. This is deprecated feature in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#build_coverage_regex Project#build_coverage_regex}

---

##### `build_git_strategy`<sup>Optional</sup> <a name="build_git_strategy" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildGitStrategy"></a>

- *Type:* str

The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#build_git_strategy Project#build_git_strategy}

---

##### `builds_access_level`<sup>Optional</sup> <a name="builds_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildsAccessLevel"></a>

- *Type:* str

Set the builds access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#builds_access_level Project#builds_access_level}

---

##### `build_timeout`<sup>Optional</sup> <a name="build_timeout" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.buildTimeout"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time, in seconds, that a job can run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#build_timeout Project#build_timeout}

---

##### `ci_config_path`<sup>Optional</sup> <a name="ci_config_path" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciConfigPath"></a>

- *Type:* str

Custom Path to CI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#ci_config_path Project#ci_config_path}

---

##### `ci_default_git_depth`<sup>Optional</sup> <a name="ci_default_git_depth" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciDefaultGitDepth"></a>

- *Type:* typing.Union[int, float]

Default number of revisions for shallow cloning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#ci_default_git_depth Project#ci_default_git_depth}

---

##### `ci_forward_deployment_enabled`<sup>Optional</sup> <a name="ci_forward_deployment_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciForwardDeploymentEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When a new deployment job starts, skip older deployment jobs that are still pending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#ci_forward_deployment_enabled Project#ci_forward_deployment_enabled}

---

##### `ci_pipeline_variables_minimum_override_role`<sup>Optional</sup> <a name="ci_pipeline_variables_minimum_override_role" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciPipelineVariablesMinimumOverrideRole"></a>

- *Type:* str

The minimum role required to set variables when running pipelines and jobs.

Introduced in GitLab 17.1. Valid values are `developer`, `maintainer`, `owner`, `no_one_allowed`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#ci_pipeline_variables_minimum_override_role Project#ci_pipeline_variables_minimum_override_role}

---

##### `ci_restrict_pipeline_cancellation_role`<sup>Optional</sup> <a name="ci_restrict_pipeline_cancellation_role" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciRestrictPipelineCancellationRole"></a>

- *Type:* str

The role required to cancel a pipeline or job.

Introduced in GitLab 16.8. Premium and Ultimate only. Valid values are `developer`, `maintainer`, `no one`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#ci_restrict_pipeline_cancellation_role Project#ci_restrict_pipeline_cancellation_role}

---

##### `ci_separated_caches`<sup>Optional</sup> <a name="ci_separated_caches" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.ciSeparatedCaches"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use separate caches for protected branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#ci_separated_caches Project#ci_separated_caches}

---

##### `container_expiration_policy`<sup>Optional</sup> <a name="container_expiration_policy" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.containerExpirationPolicy"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

container_expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#container_expiration_policy Project#container_expiration_policy}

---

##### `container_registry_access_level`<sup>Optional</sup> <a name="container_registry_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.containerRegistryAccessLevel"></a>

- *Type:* str

Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#container_registry_access_level Project#container_registry_access_level}

---

##### `container_registry_enabled`<sup>Optional</sup> <a name="container_registry_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.containerRegistryEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable container registry for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#container_registry_enabled Project#container_registry_enabled}

---

##### `default_branch`<sup>Optional</sup> <a name="default_branch" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.defaultBranch"></a>

- *Type:* str

The default branch for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#default_branch Project#default_branch}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.description"></a>

- *Type:* str

A description of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#description Project#description}

---

##### `emails_enabled`<sup>Optional</sup> <a name="emails_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.emailsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#emails_enabled Project#emails_enabled}

---

##### `environments_access_level`<sup>Optional</sup> <a name="environments_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.environmentsAccessLevel"></a>

- *Type:* str

Set the environments access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#environments_access_level Project#environments_access_level}

---

##### `external_authorization_classification_label`<sup>Optional</sup> <a name="external_authorization_classification_label" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.externalAuthorizationClassificationLabel"></a>

- *Type:* str

The classification label for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#external_authorization_classification_label Project#external_authorization_classification_label}

---

##### `feature_flags_access_level`<sup>Optional</sup> <a name="feature_flags_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.featureFlagsAccessLevel"></a>

- *Type:* str

Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#feature_flags_access_level Project#feature_flags_access_level}

---

##### `forked_from_project_id`<sup>Optional</sup> <a name="forked_from_project_id" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.forkedFromProjectId"></a>

- *Type:* typing.Union[int, float]

The id of the project to fork.

During create the project is forked and during an update the fork relation is changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#forked_from_project_id Project#forked_from_project_id}

---

##### `forking_access_level`<sup>Optional</sup> <a name="forking_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.forkingAccessLevel"></a>

- *Type:* str

Set the forking access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#forking_access_level Project#forking_access_level}

---

##### `group_runners_enabled`<sup>Optional</sup> <a name="group_runners_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.groupRunnersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable group runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#group_runners_enabled Project#group_runners_enabled}

---

##### `group_with_project_templates_id`<sup>Optional</sup> <a name="group_with_project_templates_id" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.groupWithProjectTemplatesId"></a>

- *Type:* typing.Union[int, float]

For group-level custom templates, specifies ID of group from which all the custom project templates are sourced.

Leave empty for instance-level templates. Requires use_custom_template to be true (enterprise edition).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#group_with_project_templates_id Project#group_with_project_templates_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#id Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_url`<sup>Optional</sup> <a name="import_url" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.importUrl"></a>

- *Type:* str

Git URL to a repository to be imported.

Together with `mirror = true` it will setup a Pull Mirror. This can also be used together with `forked_from_project_id` to setup a Pull Mirror for a fork. The fork takes precedence over the import. Make sure to provide the credentials in `import_url_username` and `import_url_password`. GitLab never returns the credentials, thus the provider cannot detect configuration drift in the credentials. They can also not be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#import_url Project#import_url}

---

##### `import_url_password`<sup>Optional</sup> <a name="import_url_password" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.importUrlPassword"></a>

- *Type:* str

The password for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#import_url_password Project#import_url_password}

---

##### `import_url_username`<sup>Optional</sup> <a name="import_url_username" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.importUrlUsername"></a>

- *Type:* str

The username for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`.  See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#import_url_username Project#import_url_username}

---

##### `infrastructure_access_level`<sup>Optional</sup> <a name="infrastructure_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.infrastructureAccessLevel"></a>

- *Type:* str

Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#infrastructure_access_level Project#infrastructure_access_level}

---

##### `initialize_with_readme`<sup>Optional</sup> <a name="initialize_with_readme" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.initializeWithReadme"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create main branch with first commit containing a README.md file. Must be set to `true` if importing an uninitialized project with a different `default_branch`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#initialize_with_readme Project#initialize_with_readme}

---

##### `issues_access_level`<sup>Optional</sup> <a name="issues_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.issuesAccessLevel"></a>

- *Type:* str

Set the issues access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#issues_access_level Project#issues_access_level}

---

##### `issues_enabled`<sup>Optional</sup> <a name="issues_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.issuesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable issue tracking for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#issues_enabled Project#issues_enabled}

---

##### `issues_template`<sup>Optional</sup> <a name="issues_template" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.issuesTemplate"></a>

- *Type:* str

Sets the template for new issues in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#issues_template Project#issues_template}

---

##### `keep_latest_artifact`<sup>Optional</sup> <a name="keep_latest_artifact" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.keepLatestArtifact"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable or enable the ability to keep the latest artifact for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#keep_latest_artifact Project#keep_latest_artifact}

---

##### `lfs_enabled`<sup>Optional</sup> <a name="lfs_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.lfsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable LFS for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#lfs_enabled Project#lfs_enabled}

---

##### `merge_commit_template`<sup>Optional</sup> <a name="merge_commit_template" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeCommitTemplate"></a>

- *Type:* str

Template used to create merge commit message in merge requests. (Introduced in GitLab 14.5.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_commit_template Project#merge_commit_template}

---

##### `merge_method`<sup>Optional</sup> <a name="merge_method" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeMethod"></a>

- *Type:* str

Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_method Project#merge_method}

---

##### `merge_pipelines_enabled`<sup>Optional</sup> <a name="merge_pipelines_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergePipelinesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable merge pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_pipelines_enabled Project#merge_pipelines_enabled}

---

##### `merge_requests_access_level`<sup>Optional</sup> <a name="merge_requests_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeRequestsAccessLevel"></a>

- *Type:* str

Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_requests_access_level Project#merge_requests_access_level}

---

##### `merge_requests_enabled`<sup>Optional</sup> <a name="merge_requests_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeRequestsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable merge requests for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_requests_enabled Project#merge_requests_enabled}

---

##### `merge_requests_template`<sup>Optional</sup> <a name="merge_requests_template" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeRequestsTemplate"></a>

- *Type:* str

Sets the template for new merge requests in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_requests_template Project#merge_requests_template}

---

##### `merge_trains_enabled`<sup>Optional</sup> <a name="merge_trains_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mergeTrainsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_trains_enabled Project#merge_trains_enabled}

---

##### `mirror`<sup>Optional</sup> <a name="mirror" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mirror"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable project pull mirror.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#mirror Project#mirror}

---

##### `mirror_overwrites_diverged_branches`<sup>Optional</sup> <a name="mirror_overwrites_diverged_branches" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mirrorOverwritesDivergedBranches"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable overwrite diverged branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#mirror_overwrites_diverged_branches Project#mirror_overwrites_diverged_branches}

---

##### `mirror_trigger_builds`<sup>Optional</sup> <a name="mirror_trigger_builds" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mirrorTriggerBuilds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable trigger builds on pushes for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#mirror_trigger_builds Project#mirror_trigger_builds}

---

##### `model_experiments_access_level`<sup>Optional</sup> <a name="model_experiments_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.modelExperimentsAccessLevel"></a>

- *Type:* str

Set visibility of machine learning model experiments. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#model_experiments_access_level Project#model_experiments_access_level}

---

##### `model_registry_access_level`<sup>Optional</sup> <a name="model_registry_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.modelRegistryAccessLevel"></a>

- *Type:* str

Set visibility of machine learning model registry. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#model_registry_access_level Project#model_registry_access_level}

---

##### `monitor_access_level`<sup>Optional</sup> <a name="monitor_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.monitorAccessLevel"></a>

- *Type:* str

Set the monitor access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#monitor_access_level Project#monitor_access_level}

---

##### `mr_default_target_self`<sup>Optional</sup> <a name="mr_default_target_self" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.mrDefaultTargetSelf"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

For forked projects, target merge requests to this project. If false, the target will be the upstream project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#mr_default_target_self Project#mr_default_target_self}

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.namespaceId"></a>

- *Type:* typing.Union[int, float]

The namespace (group or user) of the project. Defaults to your user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#namespace_id Project#namespace_id}

---

##### `only_allow_merge_if_all_discussions_are_resolved`<sup>Optional</sup> <a name="only_allow_merge_if_all_discussions_are_resolved" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true if you want allow merges only if all discussions are resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#only_allow_merge_if_all_discussions_are_resolved Project#only_allow_merge_if_all_discussions_are_resolved}

---

##### `only_allow_merge_if_pipeline_succeeds`<sup>Optional</sup> <a name="only_allow_merge_if_pipeline_succeeds" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.onlyAllowMergeIfPipelineSucceeds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true if you want allow merges only if a pipeline succeeds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#only_allow_merge_if_pipeline_succeeds Project#only_allow_merge_if_pipeline_succeeds}

---

##### `only_mirror_protected_branches`<sup>Optional</sup> <a name="only_mirror_protected_branches" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.onlyMirrorProtectedBranches"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable only mirror protected branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#only_mirror_protected_branches Project#only_mirror_protected_branches}

---

##### `packages_enabled`<sup>Optional</sup> <a name="packages_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.packagesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable packages repository for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#packages_enabled Project#packages_enabled}

---

##### `pages_access_level`<sup>Optional</sup> <a name="pages_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.pagesAccessLevel"></a>

- *Type:* str

Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#pages_access_level Project#pages_access_level}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.path"></a>

- *Type:* str

The path of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#path Project#path}

---

##### `pipelines_enabled`<sup>Optional</sup> <a name="pipelines_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.pipelinesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable pipelines for the project. The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#pipelines_enabled Project#pipelines_enabled}

---

##### `pre_receive_secret_detection_enabled`<sup>Optional</sup> <a name="pre_receive_secret_detection_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.preReceiveSecretDetectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Secret Push Detection is enabled. Requires GitLab Ultimate and at least GitLab 17.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#pre_receive_secret_detection_enabled Project#pre_receive_secret_detection_enabled}

---

##### `printing_merge_request_link_enabled`<sup>Optional</sup> <a name="printing_merge_request_link_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.printingMergeRequestLinkEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Show link to create/view merge request when pushing from the command line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#printing_merge_request_link_enabled Project#printing_merge_request_link_enabled}

---

##### `public_builds`<sup>Optional</sup> <a name="public_builds" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.publicBuilds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#public_builds Project#public_builds}

---

##### `public_jobs`<sup>Optional</sup> <a name="public_jobs" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.publicJobs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#public_jobs Project#public_jobs}

---

##### `push_rules`<sup>Optional</sup> <a name="push_rules" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.pushRules"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#push_rules Project#push_rules}

---

##### `releases_access_level`<sup>Optional</sup> <a name="releases_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.releasesAccessLevel"></a>

- *Type:* str

Set the releases access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#releases_access_level Project#releases_access_level}

---

##### `remove_source_branch_after_merge`<sup>Optional</sup> <a name="remove_source_branch_after_merge" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.removeSourceBranchAfterMerge"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable `Delete source branch` option by default for all new merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#remove_source_branch_after_merge Project#remove_source_branch_after_merge}

---

##### `repository_access_level`<sup>Optional</sup> <a name="repository_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.repositoryAccessLevel"></a>

- *Type:* str

Set the repository access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#repository_access_level Project#repository_access_level}

---

##### `repository_storage`<sup>Optional</sup> <a name="repository_storage" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.repositoryStorage"></a>

- *Type:* str

Which storage shard the repository is on. (administrator only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#repository_storage Project#repository_storage}

---

##### `request_access_enabled`<sup>Optional</sup> <a name="request_access_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.requestAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#request_access_enabled Project#request_access_enabled}

---

##### `requirements_access_level`<sup>Optional</sup> <a name="requirements_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.requirementsAccessLevel"></a>

- *Type:* str

Set the requirements access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#requirements_access_level Project#requirements_access_level}

---

##### `resolve_outdated_diff_discussions`<sup>Optional</sup> <a name="resolve_outdated_diff_discussions" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.resolveOutdatedDiffDiscussions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Automatically resolve merge request diffs discussions on lines changed with a push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#resolve_outdated_diff_discussions Project#resolve_outdated_diff_discussions}

---

##### `restrict_user_defined_variables`<sup>Optional</sup> <a name="restrict_user_defined_variables" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.restrictUserDefinedVariables"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#restrict_user_defined_variables Project#restrict_user_defined_variables}

---

##### `security_and_compliance_access_level`<sup>Optional</sup> <a name="security_and_compliance_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.securityAndComplianceAccessLevel"></a>

- *Type:* str

Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#security_and_compliance_access_level Project#security_and_compliance_access_level}

---

##### `shared_runners_enabled`<sup>Optional</sup> <a name="shared_runners_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.sharedRunnersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable shared runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#shared_runners_enabled Project#shared_runners_enabled}

---

##### `skip_wait_for_default_branch_protection`<sup>Optional</sup> <a name="skip_wait_for_default_branch_protection" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.skipWaitForDefaultBranchProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, the default behavior to wait for the default branch protection to be created is skipped.

This is necessary if the current user is not an admin and the default branch protection is disabled on an instance-level.
There is currently no known way to determine if the default branch protection is disabled on an instance-level for non-admin users.
This attribute is only used during resource creation, thus changes are suppressed and the attribute cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#skip_wait_for_default_branch_protection Project#skip_wait_for_default_branch_protection}

---

##### `snippets_access_level`<sup>Optional</sup> <a name="snippets_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.snippetsAccessLevel"></a>

- *Type:* str

Set the snippets access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#snippets_access_level Project#snippets_access_level}

---

##### `snippets_enabled`<sup>Optional</sup> <a name="snippets_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.snippetsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable snippets for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#snippets_enabled Project#snippets_enabled}

---

##### `squash_commit_template`<sup>Optional</sup> <a name="squash_commit_template" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.squashCommitTemplate"></a>

- *Type:* str

Template used to create squash commit message in merge requests. (Introduced in GitLab 14.6.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#squash_commit_template Project#squash_commit_template}

---

##### `squash_option`<sup>Optional</sup> <a name="squash_option" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.squashOption"></a>

- *Type:* str

Squash commits when merge request.

Valid values are `never`, `always`, `default_on`, or `default_off`. The default value is `default_off`. [GitLab >= 14.1]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#squash_option Project#squash_option}

---

##### `suggestion_commit_message`<sup>Optional</sup> <a name="suggestion_commit_message" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.suggestionCommitMessage"></a>

- *Type:* str

The commit message used to apply merge request suggestions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#suggestion_commit_message Project#suggestion_commit_message}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

The list of tags for a project;

put array of tags, that should be finally assigned to a project. Use topics instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#tags Project#tags}

---

##### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.templateName"></a>

- *Type:* str

When used without use_custom_template, name of a built-in project template.

When used with use_custom_template, name of a custom project template. This option is mutually exclusive with `template_project_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#template_name Project#template_name}

---

##### `template_project_id`<sup>Optional</sup> <a name="template_project_id" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.templateProjectId"></a>

- *Type:* typing.Union[int, float]

When used with use_custom_template, project ID of a custom project template.

This is preferable to using template_name since template_name may be ambiguous (enterprise edition). This option is mutually exclusive with `template_name`. See `gitlab_group_project_file_template` to set a project as a template project. If a project has not been set as a template, using it here will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#template_project_id Project#template_project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#timeouts Project#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.topics"></a>

- *Type:* typing.List[str]

The list of topics for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#topics Project#topics}

---

##### `use_custom_template`<sup>Optional</sup> <a name="use_custom_template" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.useCustomTemplate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition).

~> When using a custom template, [Group Tokens won't work](https://docs.gitlab.com/15.7/ee/user/project/settings/import_export_troubleshooting.html#import-using-the-rest-api-fails-when-using-a-group-access-token). You must use a real user's Personal Access Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#use_custom_template Project#use_custom_template}

---

##### `visibility_level`<sup>Optional</sup> <a name="visibility_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.visibilityLevel"></a>

- *Type:* str

Set to `public` to create a public project. Valid values are `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#visibility_level Project#visibility_level}

---

##### `wiki_access_level`<sup>Optional</sup> <a name="wiki_access_level" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.wikiAccessLevel"></a>

- *Type:* str

Set the wiki access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#wiki_access_level Project#wiki_access_level}

---

##### `wiki_enabled`<sup>Optional</sup> <a name="wiki_enabled" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.wikiEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable wiki for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#wiki_enabled Project#wiki_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy">put_container_expiration_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putPushRules">put_push_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAllowMergeOnSkippedPipeline">reset_allow_merge_on_skipped_pipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAllowPipelineTriggerApproveDeployment">reset_allow_pipeline_trigger_approve_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAnalyticsAccessLevel">reset_analytics_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetApprovalsBeforeMerge">reset_approvals_before_merge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetArchived">reset_archived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetArchiveOnDestroy">reset_archive_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoCancelPendingPipelines">reset_auto_cancel_pending_pipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutocloseReferencedIssues">reset_autoclose_referenced_issues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoDevopsDeployStrategy">reset_auto_devops_deploy_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoDevopsEnabled">reset_auto_devops_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAvatar">reset_avatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAvatarHash">reset_avatar_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildCoverageRegex">reset_build_coverage_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildGitStrategy">reset_build_git_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildsAccessLevel">reset_builds_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildTimeout">reset_build_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiConfigPath">reset_ci_config_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiDefaultGitDepth">reset_ci_default_git_depth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiForwardDeploymentEnabled">reset_ci_forward_deployment_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiPipelineVariablesMinimumOverrideRole">reset_ci_pipeline_variables_minimum_override_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiRestrictPipelineCancellationRole">reset_ci_restrict_pipeline_cancellation_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiSeparatedCaches">reset_ci_separated_caches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerExpirationPolicy">reset_container_expiration_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerRegistryAccessLevel">reset_container_registry_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerRegistryEnabled">reset_container_registry_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetDefaultBranch">reset_default_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetEmailsEnabled">reset_emails_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetEnvironmentsAccessLevel">reset_environments_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetExternalAuthorizationClassificationLabel">reset_external_authorization_classification_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetFeatureFlagsAccessLevel">reset_feature_flags_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetForkedFromProjectId">reset_forked_from_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetForkingAccessLevel">reset_forking_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetGroupRunnersEnabled">reset_group_runners_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetGroupWithProjectTemplatesId">reset_group_with_project_templates_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetImportUrl">reset_import_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetImportUrlPassword">reset_import_url_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetImportUrlUsername">reset_import_url_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetInfrastructureAccessLevel">reset_infrastructure_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetInitializeWithReadme">reset_initialize_with_readme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetIssuesAccessLevel">reset_issues_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetIssuesEnabled">reset_issues_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetIssuesTemplate">reset_issues_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetKeepLatestArtifact">reset_keep_latest_artifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetLfsEnabled">reset_lfs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeCommitTemplate">reset_merge_commit_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeMethod">reset_merge_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergePipelinesEnabled">reset_merge_pipelines_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeRequestsAccessLevel">reset_merge_requests_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeRequestsEnabled">reset_merge_requests_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeRequestsTemplate">reset_merge_requests_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeTrainsEnabled">reset_merge_trains_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMirror">reset_mirror</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMirrorOverwritesDivergedBranches">reset_mirror_overwrites_diverged_branches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMirrorTriggerBuilds">reset_mirror_trigger_builds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetModelExperimentsAccessLevel">reset_model_experiments_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetModelRegistryAccessLevel">reset_model_registry_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMonitorAccessLevel">reset_monitor_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMrDefaultTargetSelf">reset_mr_default_target_self</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetNamespaceId">reset_namespace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfAllDiscussionsAreResolved">reset_only_allow_merge_if_all_discussions_are_resolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfPipelineSucceeds">reset_only_allow_merge_if_pipeline_succeeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOnlyMirrorProtectedBranches">reset_only_mirror_protected_branches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPackagesEnabled">reset_packages_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPagesAccessLevel">reset_pages_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPipelinesEnabled">reset_pipelines_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPreReceiveSecretDetectionEnabled">reset_pre_receive_secret_detection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPrintingMergeRequestLinkEnabled">reset_printing_merge_request_link_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPublicBuilds">reset_public_builds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPublicJobs">reset_public_jobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPushRules">reset_push_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetReleasesAccessLevel">reset_releases_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRemoveSourceBranchAfterMerge">reset_remove_source_branch_after_merge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRepositoryAccessLevel">reset_repository_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRepositoryStorage">reset_repository_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRequestAccessEnabled">reset_request_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRequirementsAccessLevel">reset_requirements_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetResolveOutdatedDiffDiscussions">reset_resolve_outdated_diff_discussions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRestrictUserDefinedVariables">reset_restrict_user_defined_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSecurityAndComplianceAccessLevel">reset_security_and_compliance_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSharedRunnersEnabled">reset_shared_runners_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSkipWaitForDefaultBranchProtection">reset_skip_wait_for_default_branch_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSnippetsAccessLevel">reset_snippets_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSnippetsEnabled">reset_snippets_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSquashCommitTemplate">reset_squash_commit_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSquashOption">reset_squash_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSuggestionCommitMessage">reset_suggestion_commit_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTemplateName">reset_template_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTemplateProjectId">reset_template_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTopics">reset_topics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetUseCustomTemplate">reset_use_custom_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetVisibilityLevel">reset_visibility_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetWikiAccessLevel">reset_wiki_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetWikiEnabled">reset_wiki_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.project.Project.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.project.Project.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.project.Project.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.project.Project.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.project.Project.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.project.Project.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.project.Project.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.project.Project.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.project.Project.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.project.Project.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.project.Project.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.project.Project.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.project.Project.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.project.Project.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.project.Project.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.project.Project.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.project.Project.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.project.Project.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.project.Project.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.project.Project.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.project.Project.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.project.Project.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.project.Project.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.project.Project.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_container_expiration_policy` <a name="put_container_expiration_policy" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy"></a>

```python
def put_container_expiration_policy(
  cadence: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  keep_n: typing.Union[int, float] = None,
  name_regex: str = None,
  name_regex_delete: str = None,
  name_regex_keep: str = None,
  older_than: str = None
) -> None
```

###### `cadence`<sup>Optional</sup> <a name="cadence" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy.parameter.cadence"></a>

- *Type:* str

The cadence of the policy. Valid values are: `1d`, `7d`, `14d`, `1month`, `3month`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#cadence Project#cadence}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#enabled Project#enabled}

---

###### `keep_n`<sup>Optional</sup> <a name="keep_n" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy.parameter.keepN"></a>

- *Type:* typing.Union[int, float]

The number of images to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#keep_n Project#keep_n}

---

###### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy.parameter.nameRegex"></a>

- *Type:* str

The regular expression to match image names to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#name_regex Project#name_regex}

---

###### `name_regex_delete`<sup>Optional</sup> <a name="name_regex_delete" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy.parameter.nameRegexDelete"></a>

- *Type:* str

The regular expression to match image names to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#name_regex_delete Project#name_regex_delete}

---

###### `name_regex_keep`<sup>Optional</sup> <a name="name_regex_keep" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy.parameter.nameRegexKeep"></a>

- *Type:* str

The regular expression to match image names to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#name_regex_keep Project#name_regex_keep}

---

###### `older_than`<sup>Optional</sup> <a name="older_than" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy.parameter.olderThan"></a>

- *Type:* str

The number of days to keep images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#older_than Project#older_than}

---

##### `put_push_rules` <a name="put_push_rules" id="@cdktf/provider-gitlab.project.Project.putPushRules"></a>

```python
def put_push_rules(
  author_email_regex: str = None,
  branch_name_regex: str = None,
  commit_committer_check: typing.Union[bool, IResolvable] = None,
  commit_committer_name_check: typing.Union[bool, IResolvable] = None,
  commit_message_negative_regex: str = None,
  commit_message_regex: str = None,
  deny_delete_tag: typing.Union[bool, IResolvable] = None,
  file_name_regex: str = None,
  max_file_size: typing.Union[int, float] = None,
  member_check: typing.Union[bool, IResolvable] = None,
  prevent_secrets: typing.Union[bool, IResolvable] = None,
  reject_non_dco_commits: typing.Union[bool, IResolvable] = None,
  reject_unsigned_commits: typing.Union[bool, IResolvable] = None
) -> None
```

###### `author_email_regex`<sup>Optional</sup> <a name="author_email_regex" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.authorEmailRegex"></a>

- *Type:* str

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#author_email_regex Project#author_email_regex}

---

###### `branch_name_regex`<sup>Optional</sup> <a name="branch_name_regex" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.branchNameRegex"></a>

- *Type:* str

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#branch_name_regex Project#branch_name_regex}

---

###### `commit_committer_check`<sup>Optional</sup> <a name="commit_committer_check" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.commitCommitterCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users can only push commits to this repository that were committed with one of their own verified emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#commit_committer_check Project#commit_committer_check}

---

###### `commit_committer_name_check`<sup>Optional</sup> <a name="commit_committer_name_check" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.commitCommitterNameCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#commit_committer_name_check Project#commit_committer_name_check}

---

###### `commit_message_negative_regex`<sup>Optional</sup> <a name="commit_message_negative_regex" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.commitMessageNegativeRegex"></a>

- *Type:* str

No commit message is allowed to match this regex, e.g. `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#commit_message_negative_regex Project#commit_message_negative_regex}

---

###### `commit_message_regex`<sup>Optional</sup> <a name="commit_message_regex" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.commitMessageRegex"></a>

- *Type:* str

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#commit_message_regex Project#commit_message_regex}

---

###### `deny_delete_tag`<sup>Optional</sup> <a name="deny_delete_tag" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.denyDeleteTag"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#deny_delete_tag Project#deny_delete_tag}

---

###### `file_name_regex`<sup>Optional</sup> <a name="file_name_regex" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.fileNameRegex"></a>

- *Type:* str

All committed filenames must not match this regex, e.g. `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#file_name_regex Project#file_name_regex}

---

###### `max_file_size`<sup>Optional</sup> <a name="max_file_size" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.maxFileSize"></a>

- *Type:* typing.Union[int, float]

Maximum file size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#max_file_size Project#max_file_size}

---

###### `member_check`<sup>Optional</sup> <a name="member_check" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.memberCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Restrict commits by author (email) to existing GitLab users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#member_check Project#member_check}

---

###### `prevent_secrets`<sup>Optional</sup> <a name="prevent_secrets" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.preventSecrets"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#prevent_secrets Project#prevent_secrets}

---

###### `reject_non_dco_commits`<sup>Optional</sup> <a name="reject_non_dco_commits" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.rejectNonDcoCommits"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#reject_non_dco_commits Project#reject_non_dco_commits}

---

###### `reject_unsigned_commits`<sup>Optional</sup> <a name="reject_unsigned_commits" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.rejectUnsignedCommits"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Reject commit when it’s not signed through GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#reject_unsigned_commits Project#reject_unsigned_commits}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-gitlab.project.Project.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-gitlab.project.Project.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#create Project#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-gitlab.project.Project.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#delete Project#delete}.

---

##### `reset_allow_merge_on_skipped_pipeline` <a name="reset_allow_merge_on_skipped_pipeline" id="@cdktf/provider-gitlab.project.Project.resetAllowMergeOnSkippedPipeline"></a>

```python
def reset_allow_merge_on_skipped_pipeline() -> None
```

##### `reset_allow_pipeline_trigger_approve_deployment` <a name="reset_allow_pipeline_trigger_approve_deployment" id="@cdktf/provider-gitlab.project.Project.resetAllowPipelineTriggerApproveDeployment"></a>

```python
def reset_allow_pipeline_trigger_approve_deployment() -> None
```

##### `reset_analytics_access_level` <a name="reset_analytics_access_level" id="@cdktf/provider-gitlab.project.Project.resetAnalyticsAccessLevel"></a>

```python
def reset_analytics_access_level() -> None
```

##### `reset_approvals_before_merge` <a name="reset_approvals_before_merge" id="@cdktf/provider-gitlab.project.Project.resetApprovalsBeforeMerge"></a>

```python
def reset_approvals_before_merge() -> None
```

##### `reset_archived` <a name="reset_archived" id="@cdktf/provider-gitlab.project.Project.resetArchived"></a>

```python
def reset_archived() -> None
```

##### `reset_archive_on_destroy` <a name="reset_archive_on_destroy" id="@cdktf/provider-gitlab.project.Project.resetArchiveOnDestroy"></a>

```python
def reset_archive_on_destroy() -> None
```

##### `reset_auto_cancel_pending_pipelines` <a name="reset_auto_cancel_pending_pipelines" id="@cdktf/provider-gitlab.project.Project.resetAutoCancelPendingPipelines"></a>

```python
def reset_auto_cancel_pending_pipelines() -> None
```

##### `reset_autoclose_referenced_issues` <a name="reset_autoclose_referenced_issues" id="@cdktf/provider-gitlab.project.Project.resetAutocloseReferencedIssues"></a>

```python
def reset_autoclose_referenced_issues() -> None
```

##### `reset_auto_devops_deploy_strategy` <a name="reset_auto_devops_deploy_strategy" id="@cdktf/provider-gitlab.project.Project.resetAutoDevopsDeployStrategy"></a>

```python
def reset_auto_devops_deploy_strategy() -> None
```

##### `reset_auto_devops_enabled` <a name="reset_auto_devops_enabled" id="@cdktf/provider-gitlab.project.Project.resetAutoDevopsEnabled"></a>

```python
def reset_auto_devops_enabled() -> None
```

##### `reset_avatar` <a name="reset_avatar" id="@cdktf/provider-gitlab.project.Project.resetAvatar"></a>

```python
def reset_avatar() -> None
```

##### `reset_avatar_hash` <a name="reset_avatar_hash" id="@cdktf/provider-gitlab.project.Project.resetAvatarHash"></a>

```python
def reset_avatar_hash() -> None
```

##### `reset_build_coverage_regex` <a name="reset_build_coverage_regex" id="@cdktf/provider-gitlab.project.Project.resetBuildCoverageRegex"></a>

```python
def reset_build_coverage_regex() -> None
```

##### `reset_build_git_strategy` <a name="reset_build_git_strategy" id="@cdktf/provider-gitlab.project.Project.resetBuildGitStrategy"></a>

```python
def reset_build_git_strategy() -> None
```

##### `reset_builds_access_level` <a name="reset_builds_access_level" id="@cdktf/provider-gitlab.project.Project.resetBuildsAccessLevel"></a>

```python
def reset_builds_access_level() -> None
```

##### `reset_build_timeout` <a name="reset_build_timeout" id="@cdktf/provider-gitlab.project.Project.resetBuildTimeout"></a>

```python
def reset_build_timeout() -> None
```

##### `reset_ci_config_path` <a name="reset_ci_config_path" id="@cdktf/provider-gitlab.project.Project.resetCiConfigPath"></a>

```python
def reset_ci_config_path() -> None
```

##### `reset_ci_default_git_depth` <a name="reset_ci_default_git_depth" id="@cdktf/provider-gitlab.project.Project.resetCiDefaultGitDepth"></a>

```python
def reset_ci_default_git_depth() -> None
```

##### `reset_ci_forward_deployment_enabled` <a name="reset_ci_forward_deployment_enabled" id="@cdktf/provider-gitlab.project.Project.resetCiForwardDeploymentEnabled"></a>

```python
def reset_ci_forward_deployment_enabled() -> None
```

##### `reset_ci_pipeline_variables_minimum_override_role` <a name="reset_ci_pipeline_variables_minimum_override_role" id="@cdktf/provider-gitlab.project.Project.resetCiPipelineVariablesMinimumOverrideRole"></a>

```python
def reset_ci_pipeline_variables_minimum_override_role() -> None
```

##### `reset_ci_restrict_pipeline_cancellation_role` <a name="reset_ci_restrict_pipeline_cancellation_role" id="@cdktf/provider-gitlab.project.Project.resetCiRestrictPipelineCancellationRole"></a>

```python
def reset_ci_restrict_pipeline_cancellation_role() -> None
```

##### `reset_ci_separated_caches` <a name="reset_ci_separated_caches" id="@cdktf/provider-gitlab.project.Project.resetCiSeparatedCaches"></a>

```python
def reset_ci_separated_caches() -> None
```

##### `reset_container_expiration_policy` <a name="reset_container_expiration_policy" id="@cdktf/provider-gitlab.project.Project.resetContainerExpirationPolicy"></a>

```python
def reset_container_expiration_policy() -> None
```

##### `reset_container_registry_access_level` <a name="reset_container_registry_access_level" id="@cdktf/provider-gitlab.project.Project.resetContainerRegistryAccessLevel"></a>

```python
def reset_container_registry_access_level() -> None
```

##### `reset_container_registry_enabled` <a name="reset_container_registry_enabled" id="@cdktf/provider-gitlab.project.Project.resetContainerRegistryEnabled"></a>

```python
def reset_container_registry_enabled() -> None
```

##### `reset_default_branch` <a name="reset_default_branch" id="@cdktf/provider-gitlab.project.Project.resetDefaultBranch"></a>

```python
def reset_default_branch() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-gitlab.project.Project.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_emails_enabled` <a name="reset_emails_enabled" id="@cdktf/provider-gitlab.project.Project.resetEmailsEnabled"></a>

```python
def reset_emails_enabled() -> None
```

##### `reset_environments_access_level` <a name="reset_environments_access_level" id="@cdktf/provider-gitlab.project.Project.resetEnvironmentsAccessLevel"></a>

```python
def reset_environments_access_level() -> None
```

##### `reset_external_authorization_classification_label` <a name="reset_external_authorization_classification_label" id="@cdktf/provider-gitlab.project.Project.resetExternalAuthorizationClassificationLabel"></a>

```python
def reset_external_authorization_classification_label() -> None
```

##### `reset_feature_flags_access_level` <a name="reset_feature_flags_access_level" id="@cdktf/provider-gitlab.project.Project.resetFeatureFlagsAccessLevel"></a>

```python
def reset_feature_flags_access_level() -> None
```

##### `reset_forked_from_project_id` <a name="reset_forked_from_project_id" id="@cdktf/provider-gitlab.project.Project.resetForkedFromProjectId"></a>

```python
def reset_forked_from_project_id() -> None
```

##### `reset_forking_access_level` <a name="reset_forking_access_level" id="@cdktf/provider-gitlab.project.Project.resetForkingAccessLevel"></a>

```python
def reset_forking_access_level() -> None
```

##### `reset_group_runners_enabled` <a name="reset_group_runners_enabled" id="@cdktf/provider-gitlab.project.Project.resetGroupRunnersEnabled"></a>

```python
def reset_group_runners_enabled() -> None
```

##### `reset_group_with_project_templates_id` <a name="reset_group_with_project_templates_id" id="@cdktf/provider-gitlab.project.Project.resetGroupWithProjectTemplatesId"></a>

```python
def reset_group_with_project_templates_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.project.Project.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import_url` <a name="reset_import_url" id="@cdktf/provider-gitlab.project.Project.resetImportUrl"></a>

```python
def reset_import_url() -> None
```

##### `reset_import_url_password` <a name="reset_import_url_password" id="@cdktf/provider-gitlab.project.Project.resetImportUrlPassword"></a>

```python
def reset_import_url_password() -> None
```

##### `reset_import_url_username` <a name="reset_import_url_username" id="@cdktf/provider-gitlab.project.Project.resetImportUrlUsername"></a>

```python
def reset_import_url_username() -> None
```

##### `reset_infrastructure_access_level` <a name="reset_infrastructure_access_level" id="@cdktf/provider-gitlab.project.Project.resetInfrastructureAccessLevel"></a>

```python
def reset_infrastructure_access_level() -> None
```

##### `reset_initialize_with_readme` <a name="reset_initialize_with_readme" id="@cdktf/provider-gitlab.project.Project.resetInitializeWithReadme"></a>

```python
def reset_initialize_with_readme() -> None
```

##### `reset_issues_access_level` <a name="reset_issues_access_level" id="@cdktf/provider-gitlab.project.Project.resetIssuesAccessLevel"></a>

```python
def reset_issues_access_level() -> None
```

##### `reset_issues_enabled` <a name="reset_issues_enabled" id="@cdktf/provider-gitlab.project.Project.resetIssuesEnabled"></a>

```python
def reset_issues_enabled() -> None
```

##### `reset_issues_template` <a name="reset_issues_template" id="@cdktf/provider-gitlab.project.Project.resetIssuesTemplate"></a>

```python
def reset_issues_template() -> None
```

##### `reset_keep_latest_artifact` <a name="reset_keep_latest_artifact" id="@cdktf/provider-gitlab.project.Project.resetKeepLatestArtifact"></a>

```python
def reset_keep_latest_artifact() -> None
```

##### `reset_lfs_enabled` <a name="reset_lfs_enabled" id="@cdktf/provider-gitlab.project.Project.resetLfsEnabled"></a>

```python
def reset_lfs_enabled() -> None
```

##### `reset_merge_commit_template` <a name="reset_merge_commit_template" id="@cdktf/provider-gitlab.project.Project.resetMergeCommitTemplate"></a>

```python
def reset_merge_commit_template() -> None
```

##### `reset_merge_method` <a name="reset_merge_method" id="@cdktf/provider-gitlab.project.Project.resetMergeMethod"></a>

```python
def reset_merge_method() -> None
```

##### `reset_merge_pipelines_enabled` <a name="reset_merge_pipelines_enabled" id="@cdktf/provider-gitlab.project.Project.resetMergePipelinesEnabled"></a>

```python
def reset_merge_pipelines_enabled() -> None
```

##### `reset_merge_requests_access_level` <a name="reset_merge_requests_access_level" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsAccessLevel"></a>

```python
def reset_merge_requests_access_level() -> None
```

##### `reset_merge_requests_enabled` <a name="reset_merge_requests_enabled" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsEnabled"></a>

```python
def reset_merge_requests_enabled() -> None
```

##### `reset_merge_requests_template` <a name="reset_merge_requests_template" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsTemplate"></a>

```python
def reset_merge_requests_template() -> None
```

##### `reset_merge_trains_enabled` <a name="reset_merge_trains_enabled" id="@cdktf/provider-gitlab.project.Project.resetMergeTrainsEnabled"></a>

```python
def reset_merge_trains_enabled() -> None
```

##### `reset_mirror` <a name="reset_mirror" id="@cdktf/provider-gitlab.project.Project.resetMirror"></a>

```python
def reset_mirror() -> None
```

##### `reset_mirror_overwrites_diverged_branches` <a name="reset_mirror_overwrites_diverged_branches" id="@cdktf/provider-gitlab.project.Project.resetMirrorOverwritesDivergedBranches"></a>

```python
def reset_mirror_overwrites_diverged_branches() -> None
```

##### `reset_mirror_trigger_builds` <a name="reset_mirror_trigger_builds" id="@cdktf/provider-gitlab.project.Project.resetMirrorTriggerBuilds"></a>

```python
def reset_mirror_trigger_builds() -> None
```

##### `reset_model_experiments_access_level` <a name="reset_model_experiments_access_level" id="@cdktf/provider-gitlab.project.Project.resetModelExperimentsAccessLevel"></a>

```python
def reset_model_experiments_access_level() -> None
```

##### `reset_model_registry_access_level` <a name="reset_model_registry_access_level" id="@cdktf/provider-gitlab.project.Project.resetModelRegistryAccessLevel"></a>

```python
def reset_model_registry_access_level() -> None
```

##### `reset_monitor_access_level` <a name="reset_monitor_access_level" id="@cdktf/provider-gitlab.project.Project.resetMonitorAccessLevel"></a>

```python
def reset_monitor_access_level() -> None
```

##### `reset_mr_default_target_self` <a name="reset_mr_default_target_self" id="@cdktf/provider-gitlab.project.Project.resetMrDefaultTargetSelf"></a>

```python
def reset_mr_default_target_self() -> None
```

##### `reset_namespace_id` <a name="reset_namespace_id" id="@cdktf/provider-gitlab.project.Project.resetNamespaceId"></a>

```python
def reset_namespace_id() -> None
```

##### `reset_only_allow_merge_if_all_discussions_are_resolved` <a name="reset_only_allow_merge_if_all_discussions_are_resolved" id="@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfAllDiscussionsAreResolved"></a>

```python
def reset_only_allow_merge_if_all_discussions_are_resolved() -> None
```

##### `reset_only_allow_merge_if_pipeline_succeeds` <a name="reset_only_allow_merge_if_pipeline_succeeds" id="@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfPipelineSucceeds"></a>

```python
def reset_only_allow_merge_if_pipeline_succeeds() -> None
```

##### `reset_only_mirror_protected_branches` <a name="reset_only_mirror_protected_branches" id="@cdktf/provider-gitlab.project.Project.resetOnlyMirrorProtectedBranches"></a>

```python
def reset_only_mirror_protected_branches() -> None
```

##### `reset_packages_enabled` <a name="reset_packages_enabled" id="@cdktf/provider-gitlab.project.Project.resetPackagesEnabled"></a>

```python
def reset_packages_enabled() -> None
```

##### `reset_pages_access_level` <a name="reset_pages_access_level" id="@cdktf/provider-gitlab.project.Project.resetPagesAccessLevel"></a>

```python
def reset_pages_access_level() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-gitlab.project.Project.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_pipelines_enabled` <a name="reset_pipelines_enabled" id="@cdktf/provider-gitlab.project.Project.resetPipelinesEnabled"></a>

```python
def reset_pipelines_enabled() -> None
```

##### `reset_pre_receive_secret_detection_enabled` <a name="reset_pre_receive_secret_detection_enabled" id="@cdktf/provider-gitlab.project.Project.resetPreReceiveSecretDetectionEnabled"></a>

```python
def reset_pre_receive_secret_detection_enabled() -> None
```

##### `reset_printing_merge_request_link_enabled` <a name="reset_printing_merge_request_link_enabled" id="@cdktf/provider-gitlab.project.Project.resetPrintingMergeRequestLinkEnabled"></a>

```python
def reset_printing_merge_request_link_enabled() -> None
```

##### `reset_public_builds` <a name="reset_public_builds" id="@cdktf/provider-gitlab.project.Project.resetPublicBuilds"></a>

```python
def reset_public_builds() -> None
```

##### `reset_public_jobs` <a name="reset_public_jobs" id="@cdktf/provider-gitlab.project.Project.resetPublicJobs"></a>

```python
def reset_public_jobs() -> None
```

##### `reset_push_rules` <a name="reset_push_rules" id="@cdktf/provider-gitlab.project.Project.resetPushRules"></a>

```python
def reset_push_rules() -> None
```

##### `reset_releases_access_level` <a name="reset_releases_access_level" id="@cdktf/provider-gitlab.project.Project.resetReleasesAccessLevel"></a>

```python
def reset_releases_access_level() -> None
```

##### `reset_remove_source_branch_after_merge` <a name="reset_remove_source_branch_after_merge" id="@cdktf/provider-gitlab.project.Project.resetRemoveSourceBranchAfterMerge"></a>

```python
def reset_remove_source_branch_after_merge() -> None
```

##### `reset_repository_access_level` <a name="reset_repository_access_level" id="@cdktf/provider-gitlab.project.Project.resetRepositoryAccessLevel"></a>

```python
def reset_repository_access_level() -> None
```

##### `reset_repository_storage` <a name="reset_repository_storage" id="@cdktf/provider-gitlab.project.Project.resetRepositoryStorage"></a>

```python
def reset_repository_storage() -> None
```

##### `reset_request_access_enabled` <a name="reset_request_access_enabled" id="@cdktf/provider-gitlab.project.Project.resetRequestAccessEnabled"></a>

```python
def reset_request_access_enabled() -> None
```

##### `reset_requirements_access_level` <a name="reset_requirements_access_level" id="@cdktf/provider-gitlab.project.Project.resetRequirementsAccessLevel"></a>

```python
def reset_requirements_access_level() -> None
```

##### `reset_resolve_outdated_diff_discussions` <a name="reset_resolve_outdated_diff_discussions" id="@cdktf/provider-gitlab.project.Project.resetResolveOutdatedDiffDiscussions"></a>

```python
def reset_resolve_outdated_diff_discussions() -> None
```

##### `reset_restrict_user_defined_variables` <a name="reset_restrict_user_defined_variables" id="@cdktf/provider-gitlab.project.Project.resetRestrictUserDefinedVariables"></a>

```python
def reset_restrict_user_defined_variables() -> None
```

##### `reset_security_and_compliance_access_level` <a name="reset_security_and_compliance_access_level" id="@cdktf/provider-gitlab.project.Project.resetSecurityAndComplianceAccessLevel"></a>

```python
def reset_security_and_compliance_access_level() -> None
```

##### `reset_shared_runners_enabled` <a name="reset_shared_runners_enabled" id="@cdktf/provider-gitlab.project.Project.resetSharedRunnersEnabled"></a>

```python
def reset_shared_runners_enabled() -> None
```

##### `reset_skip_wait_for_default_branch_protection` <a name="reset_skip_wait_for_default_branch_protection" id="@cdktf/provider-gitlab.project.Project.resetSkipWaitForDefaultBranchProtection"></a>

```python
def reset_skip_wait_for_default_branch_protection() -> None
```

##### `reset_snippets_access_level` <a name="reset_snippets_access_level" id="@cdktf/provider-gitlab.project.Project.resetSnippetsAccessLevel"></a>

```python
def reset_snippets_access_level() -> None
```

##### `reset_snippets_enabled` <a name="reset_snippets_enabled" id="@cdktf/provider-gitlab.project.Project.resetSnippetsEnabled"></a>

```python
def reset_snippets_enabled() -> None
```

##### `reset_squash_commit_template` <a name="reset_squash_commit_template" id="@cdktf/provider-gitlab.project.Project.resetSquashCommitTemplate"></a>

```python
def reset_squash_commit_template() -> None
```

##### `reset_squash_option` <a name="reset_squash_option" id="@cdktf/provider-gitlab.project.Project.resetSquashOption"></a>

```python
def reset_squash_option() -> None
```

##### `reset_suggestion_commit_message` <a name="reset_suggestion_commit_message" id="@cdktf/provider-gitlab.project.Project.resetSuggestionCommitMessage"></a>

```python
def reset_suggestion_commit_message() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-gitlab.project.Project.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_name` <a name="reset_template_name" id="@cdktf/provider-gitlab.project.Project.resetTemplateName"></a>

```python
def reset_template_name() -> None
```

##### `reset_template_project_id` <a name="reset_template_project_id" id="@cdktf/provider-gitlab.project.Project.resetTemplateProjectId"></a>

```python
def reset_template_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-gitlab.project.Project.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_topics` <a name="reset_topics" id="@cdktf/provider-gitlab.project.Project.resetTopics"></a>

```python
def reset_topics() -> None
```

##### `reset_use_custom_template` <a name="reset_use_custom_template" id="@cdktf/provider-gitlab.project.Project.resetUseCustomTemplate"></a>

```python
def reset_use_custom_template() -> None
```

##### `reset_visibility_level` <a name="reset_visibility_level" id="@cdktf/provider-gitlab.project.Project.resetVisibilityLevel"></a>

```python
def reset_visibility_level() -> None
```

##### `reset_wiki_access_level` <a name="reset_wiki_access_level" id="@cdktf/provider-gitlab.project.Project.resetWikiAccessLevel"></a>

```python
def reset_wiki_access_level() -> None
```

##### `reset_wiki_enabled` <a name="reset_wiki_enabled" id="@cdktf/provider-gitlab.project.Project.resetWikiEnabled"></a>

```python
def reset_wiki_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.project.Project.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project

project.Project.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.project.Project.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project

project.Project.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.project.Project.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project

project.Project.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project

project.Project.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Project to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarUrl">avatar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicy">container_expiration_policy</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference">ProjectContainerExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emptyRepo">empty_repo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.httpUrlToRepo">http_url_to_repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pathWithNamespace">path_with_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pushRules">push_rules</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference">ProjectPushRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.runnersToken">runners_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sshUrlToRepo">ssh_url_to_repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference">ProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipelineInput">allow_merge_on_skipped_pipeline_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowPipelineTriggerApproveDeploymentInput">allow_pipeline_trigger_approve_deployment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevelInput">analytics_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMergeInput">approvals_before_merge_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archivedInput">archived_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archiveOnDestroyInput">archive_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelinesInput">auto_cancel_pending_pipelines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssuesInput">autoclose_referenced_issues_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategyInput">auto_devops_deploy_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabledInput">auto_devops_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarHashInput">avatar_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarInput">avatar_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildCoverageRegexInput">build_coverage_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildGitStrategyInput">build_git_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildsAccessLevelInput">builds_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildTimeoutInput">build_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciConfigPathInput">ci_config_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepthInput">ci_default_git_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabledInput">ci_forward_deployment_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciPipelineVariablesMinimumOverrideRoleInput">ci_pipeline_variables_minimum_override_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRoleInput">ci_restrict_pipeline_cancellation_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciSeparatedCachesInput">ci_separated_caches_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicyInput">container_expiration_policy_input</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevelInput">container_registry_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabledInput">container_registry_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.defaultBranchInput">default_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emailsEnabledInput">emails_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevelInput">environments_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabelInput">external_authorization_classification_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevelInput">feature_flags_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkedFromProjectIdInput">forked_from_project_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkingAccessLevelInput">forking_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabledInput">group_runners_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesIdInput">group_with_project_templates_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlInput">import_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlPasswordInput">import_url_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlUsernameInput">import_url_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevelInput">infrastructure_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.initializeWithReadmeInput">initialize_with_readme_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesAccessLevelInput">issues_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesEnabledInput">issues_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesTemplateInput">issues_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.keepLatestArtifactInput">keep_latest_artifact_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lfsEnabledInput">lfs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplateInput">merge_commit_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeMethodInput">merge_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabledInput">merge_pipelines_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevelInput">merge_requests_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabledInput">merge_requests_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplateInput">merge_requests_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabledInput">merge_trains_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorInput">mirror_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranchesInput">mirror_overwrites_diverged_branches_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuildsInput">mirror_trigger_builds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.modelExperimentsAccessLevelInput">model_experiments_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.modelRegistryAccessLevelInput">model_registry_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.monitorAccessLevelInput">monitor_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelfInput">mr_default_target_self_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.namespaceIdInput">namespace_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolvedInput">only_allow_merge_if_all_discussions_are_resolved_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceedsInput">only_allow_merge_if_pipeline_succeeds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranchesInput">only_mirror_protected_branches_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.packagesEnabledInput">packages_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pagesAccessLevelInput">pages_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pipelinesEnabledInput">pipelines_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.preReceiveSecretDetectionEnabledInput">pre_receive_secret_detection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabledInput">printing_merge_request_link_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicBuildsInput">public_builds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicJobsInput">public_jobs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pushRulesInput">push_rules_input</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.releasesAccessLevelInput">releases_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMergeInput">remove_source_branch_after_merge_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevelInput">repository_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryStorageInput">repository_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requestAccessEnabledInput">request_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevelInput">requirements_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussionsInput">resolve_outdated_diff_discussions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariablesInput">restrict_user_defined_variables_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevelInput">security_and_compliance_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabledInput">shared_runners_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtectionInput">skip_wait_for_default_branch_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevelInput">snippets_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsEnabledInput">snippets_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashCommitTemplateInput">squash_commit_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashOptionInput">squash_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessageInput">suggestion_commit_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateProjectIdInput">template_project_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.topicsInput">topics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.useCustomTemplateInput">use_custom_template_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.visibilityLevelInput">visibility_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiAccessLevelInput">wiki_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiEnabledInput">wiki_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipeline">allow_merge_on_skipped_pipeline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowPipelineTriggerApproveDeployment">allow_pipeline_trigger_approve_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevel">analytics_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMerge">approvals_before_merge</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archiveOnDestroy">archive_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelines">auto_cancel_pending_pipelines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssues">autoclose_referenced_issues</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategy">auto_devops_deploy_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatar">avatar</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarHash">avatar_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildCoverageRegex">build_coverage_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildGitStrategy">build_git_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildsAccessLevel">builds_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildTimeout">build_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciConfigPath">ci_config_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepth">ci_default_git_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabled">ci_forward_deployment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciPipelineVariablesMinimumOverrideRole">ci_pipeline_variables_minimum_override_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRole">ci_restrict_pipeline_cancellation_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciSeparatedCaches">ci_separated_caches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevel">container_registry_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabled">container_registry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.defaultBranch">default_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emailsEnabled">emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevel">environments_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabel">external_authorization_classification_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevel">feature_flags_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkedFromProjectId">forked_from_project_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkingAccessLevel">forking_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabled">group_runners_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesId">group_with_project_templates_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrl">import_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlPassword">import_url_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlUsername">import_url_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevel">infrastructure_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.initializeWithReadme">initialize_with_readme</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesAccessLevel">issues_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesEnabled">issues_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesTemplate">issues_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.keepLatestArtifact">keep_latest_artifact</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lfsEnabled">lfs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplate">merge_commit_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeMethod">merge_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabled">merge_pipelines_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevel">merge_requests_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabled">merge_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplate">merge_requests_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabled">merge_trains_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirror">mirror</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranches">mirror_overwrites_diverged_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuilds">mirror_trigger_builds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.modelExperimentsAccessLevel">model_experiments_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.modelRegistryAccessLevel">model_registry_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.monitorAccessLevel">monitor_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelf">mr_default_target_self</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.namespaceId">namespace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolved">only_allow_merge_if_all_discussions_are_resolved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceeds">only_allow_merge_if_pipeline_succeeds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranches">only_mirror_protected_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.packagesEnabled">packages_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pagesAccessLevel">pages_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pipelinesEnabled">pipelines_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.preReceiveSecretDetectionEnabled">pre_receive_secret_detection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabled">printing_merge_request_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicBuilds">public_builds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicJobs">public_jobs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.releasesAccessLevel">releases_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMerge">remove_source_branch_after_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevel">repository_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryStorage">repository_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requestAccessEnabled">request_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevel">requirements_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussions">resolve_outdated_diff_discussions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariables">restrict_user_defined_variables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevel">security_and_compliance_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabled">shared_runners_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtection">skip_wait_for_default_branch_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevel">snippets_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsEnabled">snippets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashCommitTemplate">squash_commit_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashOption">squash_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessage">suggestion_commit_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateProjectId">template_project_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.topics">topics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.useCustomTemplate">use_custom_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.visibilityLevel">visibility_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiAccessLevel">wiki_access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiEnabled">wiki_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.project.Project.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.project.Project.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.project.Project.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.project.Project.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.project.Project.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.project.Project.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.project.Project.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.project.Project.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.project.Project.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.project.Project.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.project.Project.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.project.Project.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.project.Project.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `avatar_url`<sup>Required</sup> <a name="avatar_url" id="@cdktf/provider-gitlab.project.Project.property.avatarUrl"></a>

```python
avatar_url: str
```

- *Type:* str

---

##### `container_expiration_policy`<sup>Required</sup> <a name="container_expiration_policy" id="@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicy"></a>

```python
container_expiration_policy: ProjectContainerExpirationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference">ProjectContainerExpirationPolicyOutputReference</a>

---

##### `empty_repo`<sup>Required</sup> <a name="empty_repo" id="@cdktf/provider-gitlab.project.Project.property.emptyRepo"></a>

```python
empty_repo: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `http_url_to_repo`<sup>Required</sup> <a name="http_url_to_repo" id="@cdktf/provider-gitlab.project.Project.property.httpUrlToRepo"></a>

```python
http_url_to_repo: str
```

- *Type:* str

---

##### `path_with_namespace`<sup>Required</sup> <a name="path_with_namespace" id="@cdktf/provider-gitlab.project.Project.property.pathWithNamespace"></a>

```python
path_with_namespace: str
```

- *Type:* str

---

##### `push_rules`<sup>Required</sup> <a name="push_rules" id="@cdktf/provider-gitlab.project.Project.property.pushRules"></a>

```python
push_rules: ProjectPushRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference">ProjectPushRulesOutputReference</a>

---

##### `runners_token`<sup>Required</sup> <a name="runners_token" id="@cdktf/provider-gitlab.project.Project.property.runnersToken"></a>

```python
runners_token: str
```

- *Type:* str

---

##### `ssh_url_to_repo`<sup>Required</sup> <a name="ssh_url_to_repo" id="@cdktf/provider-gitlab.project.Project.property.sshUrlToRepo"></a>

```python
ssh_url_to_repo: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-gitlab.project.Project.property.timeouts"></a>

```python
timeouts: ProjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference">ProjectTimeoutsOutputReference</a>

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-gitlab.project.Project.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `allow_merge_on_skipped_pipeline_input`<sup>Optional</sup> <a name="allow_merge_on_skipped_pipeline_input" id="@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipelineInput"></a>

```python
allow_merge_on_skipped_pipeline_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_pipeline_trigger_approve_deployment_input`<sup>Optional</sup> <a name="allow_pipeline_trigger_approve_deployment_input" id="@cdktf/provider-gitlab.project.Project.property.allowPipelineTriggerApproveDeploymentInput"></a>

```python
allow_pipeline_trigger_approve_deployment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `analytics_access_level_input`<sup>Optional</sup> <a name="analytics_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevelInput"></a>

```python
analytics_access_level_input: str
```

- *Type:* str

---

##### `approvals_before_merge_input`<sup>Optional</sup> <a name="approvals_before_merge_input" id="@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMergeInput"></a>

```python
approvals_before_merge_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `archived_input`<sup>Optional</sup> <a name="archived_input" id="@cdktf/provider-gitlab.project.Project.property.archivedInput"></a>

```python
archived_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archive_on_destroy_input`<sup>Optional</sup> <a name="archive_on_destroy_input" id="@cdktf/provider-gitlab.project.Project.property.archiveOnDestroyInput"></a>

```python
archive_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_cancel_pending_pipelines_input`<sup>Optional</sup> <a name="auto_cancel_pending_pipelines_input" id="@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelinesInput"></a>

```python
auto_cancel_pending_pipelines_input: str
```

- *Type:* str

---

##### `autoclose_referenced_issues_input`<sup>Optional</sup> <a name="autoclose_referenced_issues_input" id="@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssuesInput"></a>

```python
autoclose_referenced_issues_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_devops_deploy_strategy_input`<sup>Optional</sup> <a name="auto_devops_deploy_strategy_input" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategyInput"></a>

```python
auto_devops_deploy_strategy_input: str
```

- *Type:* str

---

##### `auto_devops_enabled_input`<sup>Optional</sup> <a name="auto_devops_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabledInput"></a>

```python
auto_devops_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `avatar_hash_input`<sup>Optional</sup> <a name="avatar_hash_input" id="@cdktf/provider-gitlab.project.Project.property.avatarHashInput"></a>

```python
avatar_hash_input: str
```

- *Type:* str

---

##### `avatar_input`<sup>Optional</sup> <a name="avatar_input" id="@cdktf/provider-gitlab.project.Project.property.avatarInput"></a>

```python
avatar_input: str
```

- *Type:* str

---

##### `build_coverage_regex_input`<sup>Optional</sup> <a name="build_coverage_regex_input" id="@cdktf/provider-gitlab.project.Project.property.buildCoverageRegexInput"></a>

```python
build_coverage_regex_input: str
```

- *Type:* str

---

##### `build_git_strategy_input`<sup>Optional</sup> <a name="build_git_strategy_input" id="@cdktf/provider-gitlab.project.Project.property.buildGitStrategyInput"></a>

```python
build_git_strategy_input: str
```

- *Type:* str

---

##### `builds_access_level_input`<sup>Optional</sup> <a name="builds_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.buildsAccessLevelInput"></a>

```python
builds_access_level_input: str
```

- *Type:* str

---

##### `build_timeout_input`<sup>Optional</sup> <a name="build_timeout_input" id="@cdktf/provider-gitlab.project.Project.property.buildTimeoutInput"></a>

```python
build_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ci_config_path_input`<sup>Optional</sup> <a name="ci_config_path_input" id="@cdktf/provider-gitlab.project.Project.property.ciConfigPathInput"></a>

```python
ci_config_path_input: str
```

- *Type:* str

---

##### `ci_default_git_depth_input`<sup>Optional</sup> <a name="ci_default_git_depth_input" id="@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepthInput"></a>

```python
ci_default_git_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ci_forward_deployment_enabled_input`<sup>Optional</sup> <a name="ci_forward_deployment_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabledInput"></a>

```python
ci_forward_deployment_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ci_pipeline_variables_minimum_override_role_input`<sup>Optional</sup> <a name="ci_pipeline_variables_minimum_override_role_input" id="@cdktf/provider-gitlab.project.Project.property.ciPipelineVariablesMinimumOverrideRoleInput"></a>

```python
ci_pipeline_variables_minimum_override_role_input: str
```

- *Type:* str

---

##### `ci_restrict_pipeline_cancellation_role_input`<sup>Optional</sup> <a name="ci_restrict_pipeline_cancellation_role_input" id="@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRoleInput"></a>

```python
ci_restrict_pipeline_cancellation_role_input: str
```

- *Type:* str

---

##### `ci_separated_caches_input`<sup>Optional</sup> <a name="ci_separated_caches_input" id="@cdktf/provider-gitlab.project.Project.property.ciSeparatedCachesInput"></a>

```python
ci_separated_caches_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `container_expiration_policy_input`<sup>Optional</sup> <a name="container_expiration_policy_input" id="@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicyInput"></a>

```python
container_expiration_policy_input: ProjectContainerExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---

##### `container_registry_access_level_input`<sup>Optional</sup> <a name="container_registry_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevelInput"></a>

```python
container_registry_access_level_input: str
```

- *Type:* str

---

##### `container_registry_enabled_input`<sup>Optional</sup> <a name="container_registry_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabledInput"></a>

```python
container_registry_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_branch_input`<sup>Optional</sup> <a name="default_branch_input" id="@cdktf/provider-gitlab.project.Project.property.defaultBranchInput"></a>

```python
default_branch_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.project.Project.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `emails_enabled_input`<sup>Optional</sup> <a name="emails_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.emailsEnabledInput"></a>

```python
emails_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environments_access_level_input`<sup>Optional</sup> <a name="environments_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevelInput"></a>

```python
environments_access_level_input: str
```

- *Type:* str

---

##### `external_authorization_classification_label_input`<sup>Optional</sup> <a name="external_authorization_classification_label_input" id="@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabelInput"></a>

```python
external_authorization_classification_label_input: str
```

- *Type:* str

---

##### `feature_flags_access_level_input`<sup>Optional</sup> <a name="feature_flags_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevelInput"></a>

```python
feature_flags_access_level_input: str
```

- *Type:* str

---

##### `forked_from_project_id_input`<sup>Optional</sup> <a name="forked_from_project_id_input" id="@cdktf/provider-gitlab.project.Project.property.forkedFromProjectIdInput"></a>

```python
forked_from_project_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `forking_access_level_input`<sup>Optional</sup> <a name="forking_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.forkingAccessLevelInput"></a>

```python
forking_access_level_input: str
```

- *Type:* str

---

##### `group_runners_enabled_input`<sup>Optional</sup> <a name="group_runners_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabledInput"></a>

```python
group_runners_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_with_project_templates_id_input`<sup>Optional</sup> <a name="group_with_project_templates_id_input" id="@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesIdInput"></a>

```python
group_with_project_templates_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.project.Project.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_url_input`<sup>Optional</sup> <a name="import_url_input" id="@cdktf/provider-gitlab.project.Project.property.importUrlInput"></a>

```python
import_url_input: str
```

- *Type:* str

---

##### `import_url_password_input`<sup>Optional</sup> <a name="import_url_password_input" id="@cdktf/provider-gitlab.project.Project.property.importUrlPasswordInput"></a>

```python
import_url_password_input: str
```

- *Type:* str

---

##### `import_url_username_input`<sup>Optional</sup> <a name="import_url_username_input" id="@cdktf/provider-gitlab.project.Project.property.importUrlUsernameInput"></a>

```python
import_url_username_input: str
```

- *Type:* str

---

##### `infrastructure_access_level_input`<sup>Optional</sup> <a name="infrastructure_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevelInput"></a>

```python
infrastructure_access_level_input: str
```

- *Type:* str

---

##### `initialize_with_readme_input`<sup>Optional</sup> <a name="initialize_with_readme_input" id="@cdktf/provider-gitlab.project.Project.property.initializeWithReadmeInput"></a>

```python
initialize_with_readme_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issues_access_level_input`<sup>Optional</sup> <a name="issues_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.issuesAccessLevelInput"></a>

```python
issues_access_level_input: str
```

- *Type:* str

---

##### `issues_enabled_input`<sup>Optional</sup> <a name="issues_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.issuesEnabledInput"></a>

```python
issues_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issues_template_input`<sup>Optional</sup> <a name="issues_template_input" id="@cdktf/provider-gitlab.project.Project.property.issuesTemplateInput"></a>

```python
issues_template_input: str
```

- *Type:* str

---

##### `keep_latest_artifact_input`<sup>Optional</sup> <a name="keep_latest_artifact_input" id="@cdktf/provider-gitlab.project.Project.property.keepLatestArtifactInput"></a>

```python
keep_latest_artifact_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lfs_enabled_input`<sup>Optional</sup> <a name="lfs_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.lfsEnabledInput"></a>

```python
lfs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_commit_template_input`<sup>Optional</sup> <a name="merge_commit_template_input" id="@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplateInput"></a>

```python
merge_commit_template_input: str
```

- *Type:* str

---

##### `merge_method_input`<sup>Optional</sup> <a name="merge_method_input" id="@cdktf/provider-gitlab.project.Project.property.mergeMethodInput"></a>

```python
merge_method_input: str
```

- *Type:* str

---

##### `merge_pipelines_enabled_input`<sup>Optional</sup> <a name="merge_pipelines_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabledInput"></a>

```python
merge_pipelines_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_access_level_input`<sup>Optional</sup> <a name="merge_requests_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevelInput"></a>

```python
merge_requests_access_level_input: str
```

- *Type:* str

---

##### `merge_requests_enabled_input`<sup>Optional</sup> <a name="merge_requests_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabledInput"></a>

```python
merge_requests_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_template_input`<sup>Optional</sup> <a name="merge_requests_template_input" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplateInput"></a>

```python
merge_requests_template_input: str
```

- *Type:* str

---

##### `merge_trains_enabled_input`<sup>Optional</sup> <a name="merge_trains_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabledInput"></a>

```python
merge_trains_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mirror_input`<sup>Optional</sup> <a name="mirror_input" id="@cdktf/provider-gitlab.project.Project.property.mirrorInput"></a>

```python
mirror_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mirror_overwrites_diverged_branches_input`<sup>Optional</sup> <a name="mirror_overwrites_diverged_branches_input" id="@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranchesInput"></a>

```python
mirror_overwrites_diverged_branches_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mirror_trigger_builds_input`<sup>Optional</sup> <a name="mirror_trigger_builds_input" id="@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuildsInput"></a>

```python
mirror_trigger_builds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `model_experiments_access_level_input`<sup>Optional</sup> <a name="model_experiments_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.modelExperimentsAccessLevelInput"></a>

```python
model_experiments_access_level_input: str
```

- *Type:* str

---

##### `model_registry_access_level_input`<sup>Optional</sup> <a name="model_registry_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.modelRegistryAccessLevelInput"></a>

```python
model_registry_access_level_input: str
```

- *Type:* str

---

##### `monitor_access_level_input`<sup>Optional</sup> <a name="monitor_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.monitorAccessLevelInput"></a>

```python
monitor_access_level_input: str
```

- *Type:* str

---

##### `mr_default_target_self_input`<sup>Optional</sup> <a name="mr_default_target_self_input" id="@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelfInput"></a>

```python
mr_default_target_self_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.project.Project.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-gitlab.project.Project.property.namespaceIdInput"></a>

```python
namespace_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `only_allow_merge_if_all_discussions_are_resolved_input`<sup>Optional</sup> <a name="only_allow_merge_if_all_discussions_are_resolved_input" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolvedInput"></a>

```python
only_allow_merge_if_all_discussions_are_resolved_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `only_allow_merge_if_pipeline_succeeds_input`<sup>Optional</sup> <a name="only_allow_merge_if_pipeline_succeeds_input" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceedsInput"></a>

```python
only_allow_merge_if_pipeline_succeeds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `only_mirror_protected_branches_input`<sup>Optional</sup> <a name="only_mirror_protected_branches_input" id="@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranchesInput"></a>

```python
only_mirror_protected_branches_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `packages_enabled_input`<sup>Optional</sup> <a name="packages_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.packagesEnabledInput"></a>

```python
packages_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pages_access_level_input`<sup>Optional</sup> <a name="pages_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.pagesAccessLevelInput"></a>

```python
pages_access_level_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-gitlab.project.Project.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `pipelines_enabled_input`<sup>Optional</sup> <a name="pipelines_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.pipelinesEnabledInput"></a>

```python
pipelines_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pre_receive_secret_detection_enabled_input`<sup>Optional</sup> <a name="pre_receive_secret_detection_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.preReceiveSecretDetectionEnabledInput"></a>

```python
pre_receive_secret_detection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `printing_merge_request_link_enabled_input`<sup>Optional</sup> <a name="printing_merge_request_link_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabledInput"></a>

```python
printing_merge_request_link_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_builds_input`<sup>Optional</sup> <a name="public_builds_input" id="@cdktf/provider-gitlab.project.Project.property.publicBuildsInput"></a>

```python
public_builds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_jobs_input`<sup>Optional</sup> <a name="public_jobs_input" id="@cdktf/provider-gitlab.project.Project.property.publicJobsInput"></a>

```python
public_jobs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `push_rules_input`<sup>Optional</sup> <a name="push_rules_input" id="@cdktf/provider-gitlab.project.Project.property.pushRulesInput"></a>

```python
push_rules_input: ProjectPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---

##### `releases_access_level_input`<sup>Optional</sup> <a name="releases_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.releasesAccessLevelInput"></a>

```python
releases_access_level_input: str
```

- *Type:* str

---

##### `remove_source_branch_after_merge_input`<sup>Optional</sup> <a name="remove_source_branch_after_merge_input" id="@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMergeInput"></a>

```python
remove_source_branch_after_merge_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_access_level_input`<sup>Optional</sup> <a name="repository_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevelInput"></a>

```python
repository_access_level_input: str
```

- *Type:* str

---

##### `repository_storage_input`<sup>Optional</sup> <a name="repository_storage_input" id="@cdktf/provider-gitlab.project.Project.property.repositoryStorageInput"></a>

```python
repository_storage_input: str
```

- *Type:* str

---

##### `request_access_enabled_input`<sup>Optional</sup> <a name="request_access_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.requestAccessEnabledInput"></a>

```python
request_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `requirements_access_level_input`<sup>Optional</sup> <a name="requirements_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevelInput"></a>

```python
requirements_access_level_input: str
```

- *Type:* str

---

##### `resolve_outdated_diff_discussions_input`<sup>Optional</sup> <a name="resolve_outdated_diff_discussions_input" id="@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussionsInput"></a>

```python
resolve_outdated_diff_discussions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restrict_user_defined_variables_input`<sup>Optional</sup> <a name="restrict_user_defined_variables_input" id="@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariablesInput"></a>

```python
restrict_user_defined_variables_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_and_compliance_access_level_input`<sup>Optional</sup> <a name="security_and_compliance_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevelInput"></a>

```python
security_and_compliance_access_level_input: str
```

- *Type:* str

---

##### `shared_runners_enabled_input`<sup>Optional</sup> <a name="shared_runners_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabledInput"></a>

```python
shared_runners_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_wait_for_default_branch_protection_input`<sup>Optional</sup> <a name="skip_wait_for_default_branch_protection_input" id="@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtectionInput"></a>

```python
skip_wait_for_default_branch_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snippets_access_level_input`<sup>Optional</sup> <a name="snippets_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevelInput"></a>

```python
snippets_access_level_input: str
```

- *Type:* str

---

##### `snippets_enabled_input`<sup>Optional</sup> <a name="snippets_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.snippetsEnabledInput"></a>

```python
snippets_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `squash_commit_template_input`<sup>Optional</sup> <a name="squash_commit_template_input" id="@cdktf/provider-gitlab.project.Project.property.squashCommitTemplateInput"></a>

```python
squash_commit_template_input: str
```

- *Type:* str

---

##### `squash_option_input`<sup>Optional</sup> <a name="squash_option_input" id="@cdktf/provider-gitlab.project.Project.property.squashOptionInput"></a>

```python
squash_option_input: str
```

- *Type:* str

---

##### `suggestion_commit_message_input`<sup>Optional</sup> <a name="suggestion_commit_message_input" id="@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessageInput"></a>

```python
suggestion_commit_message_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-gitlab.project.Project.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktf/provider-gitlab.project.Project.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `template_project_id_input`<sup>Optional</sup> <a name="template_project_id_input" id="@cdktf/provider-gitlab.project.Project.property.templateProjectIdInput"></a>

```python
template_project_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-gitlab.project.Project.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ProjectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>]

---

##### `topics_input`<sup>Optional</sup> <a name="topics_input" id="@cdktf/provider-gitlab.project.Project.property.topicsInput"></a>

```python
topics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_custom_template_input`<sup>Optional</sup> <a name="use_custom_template_input" id="@cdktf/provider-gitlab.project.Project.property.useCustomTemplateInput"></a>

```python
use_custom_template_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `visibility_level_input`<sup>Optional</sup> <a name="visibility_level_input" id="@cdktf/provider-gitlab.project.Project.property.visibilityLevelInput"></a>

```python
visibility_level_input: str
```

- *Type:* str

---

##### `wiki_access_level_input`<sup>Optional</sup> <a name="wiki_access_level_input" id="@cdktf/provider-gitlab.project.Project.property.wikiAccessLevelInput"></a>

```python
wiki_access_level_input: str
```

- *Type:* str

---

##### `wiki_enabled_input`<sup>Optional</sup> <a name="wiki_enabled_input" id="@cdktf/provider-gitlab.project.Project.property.wikiEnabledInput"></a>

```python
wiki_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_merge_on_skipped_pipeline`<sup>Required</sup> <a name="allow_merge_on_skipped_pipeline" id="@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipeline"></a>

```python
allow_merge_on_skipped_pipeline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_pipeline_trigger_approve_deployment`<sup>Required</sup> <a name="allow_pipeline_trigger_approve_deployment" id="@cdktf/provider-gitlab.project.Project.property.allowPipelineTriggerApproveDeployment"></a>

```python
allow_pipeline_trigger_approve_deployment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `analytics_access_level`<sup>Required</sup> <a name="analytics_access_level" id="@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevel"></a>

```python
analytics_access_level: str
```

- *Type:* str

---

##### `approvals_before_merge`<sup>Required</sup> <a name="approvals_before_merge" id="@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMerge"></a>

```python
approvals_before_merge: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-gitlab.project.Project.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `archive_on_destroy`<sup>Required</sup> <a name="archive_on_destroy" id="@cdktf/provider-gitlab.project.Project.property.archiveOnDestroy"></a>

```python
archive_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_cancel_pending_pipelines`<sup>Required</sup> <a name="auto_cancel_pending_pipelines" id="@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelines"></a>

```python
auto_cancel_pending_pipelines: str
```

- *Type:* str

---

##### `autoclose_referenced_issues`<sup>Required</sup> <a name="autoclose_referenced_issues" id="@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssues"></a>

```python
autoclose_referenced_issues: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_devops_deploy_strategy`<sup>Required</sup> <a name="auto_devops_deploy_strategy" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategy"></a>

```python
auto_devops_deploy_strategy: str
```

- *Type:* str

---

##### `auto_devops_enabled`<sup>Required</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabled"></a>

```python
auto_devops_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `avatar`<sup>Required</sup> <a name="avatar" id="@cdktf/provider-gitlab.project.Project.property.avatar"></a>

```python
avatar: str
```

- *Type:* str

---

##### `avatar_hash`<sup>Required</sup> <a name="avatar_hash" id="@cdktf/provider-gitlab.project.Project.property.avatarHash"></a>

```python
avatar_hash: str
```

- *Type:* str

---

##### `build_coverage_regex`<sup>Required</sup> <a name="build_coverage_regex" id="@cdktf/provider-gitlab.project.Project.property.buildCoverageRegex"></a>

```python
build_coverage_regex: str
```

- *Type:* str

---

##### `build_git_strategy`<sup>Required</sup> <a name="build_git_strategy" id="@cdktf/provider-gitlab.project.Project.property.buildGitStrategy"></a>

```python
build_git_strategy: str
```

- *Type:* str

---

##### `builds_access_level`<sup>Required</sup> <a name="builds_access_level" id="@cdktf/provider-gitlab.project.Project.property.buildsAccessLevel"></a>

```python
builds_access_level: str
```

- *Type:* str

---

##### `build_timeout`<sup>Required</sup> <a name="build_timeout" id="@cdktf/provider-gitlab.project.Project.property.buildTimeout"></a>

```python
build_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ci_config_path`<sup>Required</sup> <a name="ci_config_path" id="@cdktf/provider-gitlab.project.Project.property.ciConfigPath"></a>

```python
ci_config_path: str
```

- *Type:* str

---

##### `ci_default_git_depth`<sup>Required</sup> <a name="ci_default_git_depth" id="@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepth"></a>

```python
ci_default_git_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ci_forward_deployment_enabled`<sup>Required</sup> <a name="ci_forward_deployment_enabled" id="@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabled"></a>

```python
ci_forward_deployment_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ci_pipeline_variables_minimum_override_role`<sup>Required</sup> <a name="ci_pipeline_variables_minimum_override_role" id="@cdktf/provider-gitlab.project.Project.property.ciPipelineVariablesMinimumOverrideRole"></a>

```python
ci_pipeline_variables_minimum_override_role: str
```

- *Type:* str

---

##### `ci_restrict_pipeline_cancellation_role`<sup>Required</sup> <a name="ci_restrict_pipeline_cancellation_role" id="@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRole"></a>

```python
ci_restrict_pipeline_cancellation_role: str
```

- *Type:* str

---

##### `ci_separated_caches`<sup>Required</sup> <a name="ci_separated_caches" id="@cdktf/provider-gitlab.project.Project.property.ciSeparatedCaches"></a>

```python
ci_separated_caches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `container_registry_access_level`<sup>Required</sup> <a name="container_registry_access_level" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevel"></a>

```python
container_registry_access_level: str
```

- *Type:* str

---

##### `container_registry_enabled`<sup>Required</sup> <a name="container_registry_enabled" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabled"></a>

```python
container_registry_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_branch`<sup>Required</sup> <a name="default_branch" id="@cdktf/provider-gitlab.project.Project.property.defaultBranch"></a>

```python
default_branch: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.project.Project.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `emails_enabled`<sup>Required</sup> <a name="emails_enabled" id="@cdktf/provider-gitlab.project.Project.property.emailsEnabled"></a>

```python
emails_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environments_access_level`<sup>Required</sup> <a name="environments_access_level" id="@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevel"></a>

```python
environments_access_level: str
```

- *Type:* str

---

##### `external_authorization_classification_label`<sup>Required</sup> <a name="external_authorization_classification_label" id="@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabel"></a>

```python
external_authorization_classification_label: str
```

- *Type:* str

---

##### `feature_flags_access_level`<sup>Required</sup> <a name="feature_flags_access_level" id="@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevel"></a>

```python
feature_flags_access_level: str
```

- *Type:* str

---

##### `forked_from_project_id`<sup>Required</sup> <a name="forked_from_project_id" id="@cdktf/provider-gitlab.project.Project.property.forkedFromProjectId"></a>

```python
forked_from_project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `forking_access_level`<sup>Required</sup> <a name="forking_access_level" id="@cdktf/provider-gitlab.project.Project.property.forkingAccessLevel"></a>

```python
forking_access_level: str
```

- *Type:* str

---

##### `group_runners_enabled`<sup>Required</sup> <a name="group_runners_enabled" id="@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabled"></a>

```python
group_runners_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_with_project_templates_id`<sup>Required</sup> <a name="group_with_project_templates_id" id="@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesId"></a>

```python
group_with_project_templates_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_url`<sup>Required</sup> <a name="import_url" id="@cdktf/provider-gitlab.project.Project.property.importUrl"></a>

```python
import_url: str
```

- *Type:* str

---

##### `import_url_password`<sup>Required</sup> <a name="import_url_password" id="@cdktf/provider-gitlab.project.Project.property.importUrlPassword"></a>

```python
import_url_password: str
```

- *Type:* str

---

##### `import_url_username`<sup>Required</sup> <a name="import_url_username" id="@cdktf/provider-gitlab.project.Project.property.importUrlUsername"></a>

```python
import_url_username: str
```

- *Type:* str

---

##### `infrastructure_access_level`<sup>Required</sup> <a name="infrastructure_access_level" id="@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevel"></a>

```python
infrastructure_access_level: str
```

- *Type:* str

---

##### `initialize_with_readme`<sup>Required</sup> <a name="initialize_with_readme" id="@cdktf/provider-gitlab.project.Project.property.initializeWithReadme"></a>

```python
initialize_with_readme: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issues_access_level`<sup>Required</sup> <a name="issues_access_level" id="@cdktf/provider-gitlab.project.Project.property.issuesAccessLevel"></a>

```python
issues_access_level: str
```

- *Type:* str

---

##### `issues_enabled`<sup>Required</sup> <a name="issues_enabled" id="@cdktf/provider-gitlab.project.Project.property.issuesEnabled"></a>

```python
issues_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issues_template`<sup>Required</sup> <a name="issues_template" id="@cdktf/provider-gitlab.project.Project.property.issuesTemplate"></a>

```python
issues_template: str
```

- *Type:* str

---

##### `keep_latest_artifact`<sup>Required</sup> <a name="keep_latest_artifact" id="@cdktf/provider-gitlab.project.Project.property.keepLatestArtifact"></a>

```python
keep_latest_artifact: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lfs_enabled`<sup>Required</sup> <a name="lfs_enabled" id="@cdktf/provider-gitlab.project.Project.property.lfsEnabled"></a>

```python
lfs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_commit_template`<sup>Required</sup> <a name="merge_commit_template" id="@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplate"></a>

```python
merge_commit_template: str
```

- *Type:* str

---

##### `merge_method`<sup>Required</sup> <a name="merge_method" id="@cdktf/provider-gitlab.project.Project.property.mergeMethod"></a>

```python
merge_method: str
```

- *Type:* str

---

##### `merge_pipelines_enabled`<sup>Required</sup> <a name="merge_pipelines_enabled" id="@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabled"></a>

```python
merge_pipelines_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_access_level`<sup>Required</sup> <a name="merge_requests_access_level" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevel"></a>

```python
merge_requests_access_level: str
```

- *Type:* str

---

##### `merge_requests_enabled`<sup>Required</sup> <a name="merge_requests_enabled" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabled"></a>

```python
merge_requests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `merge_requests_template`<sup>Required</sup> <a name="merge_requests_template" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplate"></a>

```python
merge_requests_template: str
```

- *Type:* str

---

##### `merge_trains_enabled`<sup>Required</sup> <a name="merge_trains_enabled" id="@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabled"></a>

```python
merge_trains_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mirror`<sup>Required</sup> <a name="mirror" id="@cdktf/provider-gitlab.project.Project.property.mirror"></a>

```python
mirror: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mirror_overwrites_diverged_branches`<sup>Required</sup> <a name="mirror_overwrites_diverged_branches" id="@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranches"></a>

```python
mirror_overwrites_diverged_branches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mirror_trigger_builds`<sup>Required</sup> <a name="mirror_trigger_builds" id="@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuilds"></a>

```python
mirror_trigger_builds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `model_experiments_access_level`<sup>Required</sup> <a name="model_experiments_access_level" id="@cdktf/provider-gitlab.project.Project.property.modelExperimentsAccessLevel"></a>

```python
model_experiments_access_level: str
```

- *Type:* str

---

##### `model_registry_access_level`<sup>Required</sup> <a name="model_registry_access_level" id="@cdktf/provider-gitlab.project.Project.property.modelRegistryAccessLevel"></a>

```python
model_registry_access_level: str
```

- *Type:* str

---

##### `monitor_access_level`<sup>Required</sup> <a name="monitor_access_level" id="@cdktf/provider-gitlab.project.Project.property.monitorAccessLevel"></a>

```python
monitor_access_level: str
```

- *Type:* str

---

##### `mr_default_target_self`<sup>Required</sup> <a name="mr_default_target_self" id="@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelf"></a>

```python
mr_default_target_self: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.project.Project.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-gitlab.project.Project.property.namespaceId"></a>

```python
namespace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `only_allow_merge_if_all_discussions_are_resolved`<sup>Required</sup> <a name="only_allow_merge_if_all_discussions_are_resolved" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```python
only_allow_merge_if_all_discussions_are_resolved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `only_allow_merge_if_pipeline_succeeds`<sup>Required</sup> <a name="only_allow_merge_if_pipeline_succeeds" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceeds"></a>

```python
only_allow_merge_if_pipeline_succeeds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `only_mirror_protected_branches`<sup>Required</sup> <a name="only_mirror_protected_branches" id="@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranches"></a>

```python
only_mirror_protected_branches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `packages_enabled`<sup>Required</sup> <a name="packages_enabled" id="@cdktf/provider-gitlab.project.Project.property.packagesEnabled"></a>

```python
packages_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pages_access_level`<sup>Required</sup> <a name="pages_access_level" id="@cdktf/provider-gitlab.project.Project.property.pagesAccessLevel"></a>

```python
pages_access_level: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.project.Project.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `pipelines_enabled`<sup>Required</sup> <a name="pipelines_enabled" id="@cdktf/provider-gitlab.project.Project.property.pipelinesEnabled"></a>

```python
pipelines_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pre_receive_secret_detection_enabled`<sup>Required</sup> <a name="pre_receive_secret_detection_enabled" id="@cdktf/provider-gitlab.project.Project.property.preReceiveSecretDetectionEnabled"></a>

```python
pre_receive_secret_detection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `printing_merge_request_link_enabled`<sup>Required</sup> <a name="printing_merge_request_link_enabled" id="@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabled"></a>

```python
printing_merge_request_link_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_builds`<sup>Required</sup> <a name="public_builds" id="@cdktf/provider-gitlab.project.Project.property.publicBuilds"></a>

```python
public_builds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_jobs`<sup>Required</sup> <a name="public_jobs" id="@cdktf/provider-gitlab.project.Project.property.publicJobs"></a>

```python
public_jobs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `releases_access_level`<sup>Required</sup> <a name="releases_access_level" id="@cdktf/provider-gitlab.project.Project.property.releasesAccessLevel"></a>

```python
releases_access_level: str
```

- *Type:* str

---

##### `remove_source_branch_after_merge`<sup>Required</sup> <a name="remove_source_branch_after_merge" id="@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMerge"></a>

```python
remove_source_branch_after_merge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_access_level`<sup>Required</sup> <a name="repository_access_level" id="@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevel"></a>

```python
repository_access_level: str
```

- *Type:* str

---

##### `repository_storage`<sup>Required</sup> <a name="repository_storage" id="@cdktf/provider-gitlab.project.Project.property.repositoryStorage"></a>

```python
repository_storage: str
```

- *Type:* str

---

##### `request_access_enabled`<sup>Required</sup> <a name="request_access_enabled" id="@cdktf/provider-gitlab.project.Project.property.requestAccessEnabled"></a>

```python
request_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `requirements_access_level`<sup>Required</sup> <a name="requirements_access_level" id="@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevel"></a>

```python
requirements_access_level: str
```

- *Type:* str

---

##### `resolve_outdated_diff_discussions`<sup>Required</sup> <a name="resolve_outdated_diff_discussions" id="@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussions"></a>

```python
resolve_outdated_diff_discussions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restrict_user_defined_variables`<sup>Required</sup> <a name="restrict_user_defined_variables" id="@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariables"></a>

```python
restrict_user_defined_variables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_and_compliance_access_level`<sup>Required</sup> <a name="security_and_compliance_access_level" id="@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevel"></a>

```python
security_and_compliance_access_level: str
```

- *Type:* str

---

##### `shared_runners_enabled`<sup>Required</sup> <a name="shared_runners_enabled" id="@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabled"></a>

```python
shared_runners_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_wait_for_default_branch_protection`<sup>Required</sup> <a name="skip_wait_for_default_branch_protection" id="@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtection"></a>

```python
skip_wait_for_default_branch_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snippets_access_level`<sup>Required</sup> <a name="snippets_access_level" id="@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevel"></a>

```python
snippets_access_level: str
```

- *Type:* str

---

##### `snippets_enabled`<sup>Required</sup> <a name="snippets_enabled" id="@cdktf/provider-gitlab.project.Project.property.snippetsEnabled"></a>

```python
snippets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `squash_commit_template`<sup>Required</sup> <a name="squash_commit_template" id="@cdktf/provider-gitlab.project.Project.property.squashCommitTemplate"></a>

```python
squash_commit_template: str
```

- *Type:* str

---

##### `squash_option`<sup>Required</sup> <a name="squash_option" id="@cdktf/provider-gitlab.project.Project.property.squashOption"></a>

```python
squash_option: str
```

- *Type:* str

---

##### `suggestion_commit_message`<sup>Required</sup> <a name="suggestion_commit_message" id="@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessage"></a>

```python
suggestion_commit_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-gitlab.project.Project.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktf/provider-gitlab.project.Project.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `template_project_id`<sup>Required</sup> <a name="template_project_id" id="@cdktf/provider-gitlab.project.Project.property.templateProjectId"></a>

```python
template_project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-gitlab.project.Project.property.topics"></a>

```python
topics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_custom_template`<sup>Required</sup> <a name="use_custom_template" id="@cdktf/provider-gitlab.project.Project.property.useCustomTemplate"></a>

```python
use_custom_template: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `visibility_level`<sup>Required</sup> <a name="visibility_level" id="@cdktf/provider-gitlab.project.Project.property.visibilityLevel"></a>

```python
visibility_level: str
```

- *Type:* str

---

##### `wiki_access_level`<sup>Required</sup> <a name="wiki_access_level" id="@cdktf/provider-gitlab.project.Project.property.wikiAccessLevel"></a>

```python
wiki_access_level: str
```

- *Type:* str

---

##### `wiki_enabled`<sup>Required</sup> <a name="wiki_enabled" id="@cdktf/provider-gitlab.project.Project.property.wikiEnabled"></a>

```python
wiki_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.project.Project.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-gitlab.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project

project.ProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  allow_merge_on_skipped_pipeline: typing.Union[bool, IResolvable] = None,
  allow_pipeline_trigger_approve_deployment: typing.Union[bool, IResolvable] = None,
  analytics_access_level: str = None,
  approvals_before_merge: typing.Union[int, float] = None,
  archived: typing.Union[bool, IResolvable] = None,
  archive_on_destroy: typing.Union[bool, IResolvable] = None,
  auto_cancel_pending_pipelines: str = None,
  autoclose_referenced_issues: typing.Union[bool, IResolvable] = None,
  auto_devops_deploy_strategy: str = None,
  auto_devops_enabled: typing.Union[bool, IResolvable] = None,
  avatar: str = None,
  avatar_hash: str = None,
  build_coverage_regex: str = None,
  build_git_strategy: str = None,
  builds_access_level: str = None,
  build_timeout: typing.Union[int, float] = None,
  ci_config_path: str = None,
  ci_default_git_depth: typing.Union[int, float] = None,
  ci_forward_deployment_enabled: typing.Union[bool, IResolvable] = None,
  ci_pipeline_variables_minimum_override_role: str = None,
  ci_restrict_pipeline_cancellation_role: str = None,
  ci_separated_caches: typing.Union[bool, IResolvable] = None,
  container_expiration_policy: ProjectContainerExpirationPolicy = None,
  container_registry_access_level: str = None,
  container_registry_enabled: typing.Union[bool, IResolvable] = None,
  default_branch: str = None,
  description: str = None,
  emails_enabled: typing.Union[bool, IResolvable] = None,
  environments_access_level: str = None,
  external_authorization_classification_label: str = None,
  feature_flags_access_level: str = None,
  forked_from_project_id: typing.Union[int, float] = None,
  forking_access_level: str = None,
  group_runners_enabled: typing.Union[bool, IResolvable] = None,
  group_with_project_templates_id: typing.Union[int, float] = None,
  id: str = None,
  import_url: str = None,
  import_url_password: str = None,
  import_url_username: str = None,
  infrastructure_access_level: str = None,
  initialize_with_readme: typing.Union[bool, IResolvable] = None,
  issues_access_level: str = None,
  issues_enabled: typing.Union[bool, IResolvable] = None,
  issues_template: str = None,
  keep_latest_artifact: typing.Union[bool, IResolvable] = None,
  lfs_enabled: typing.Union[bool, IResolvable] = None,
  merge_commit_template: str = None,
  merge_method: str = None,
  merge_pipelines_enabled: typing.Union[bool, IResolvable] = None,
  merge_requests_access_level: str = None,
  merge_requests_enabled: typing.Union[bool, IResolvable] = None,
  merge_requests_template: str = None,
  merge_trains_enabled: typing.Union[bool, IResolvable] = None,
  mirror: typing.Union[bool, IResolvable] = None,
  mirror_overwrites_diverged_branches: typing.Union[bool, IResolvable] = None,
  mirror_trigger_builds: typing.Union[bool, IResolvable] = None,
  model_experiments_access_level: str = None,
  model_registry_access_level: str = None,
  monitor_access_level: str = None,
  mr_default_target_self: typing.Union[bool, IResolvable] = None,
  namespace_id: typing.Union[int, float] = None,
  only_allow_merge_if_all_discussions_are_resolved: typing.Union[bool, IResolvable] = None,
  only_allow_merge_if_pipeline_succeeds: typing.Union[bool, IResolvable] = None,
  only_mirror_protected_branches: typing.Union[bool, IResolvable] = None,
  packages_enabled: typing.Union[bool, IResolvable] = None,
  pages_access_level: str = None,
  path: str = None,
  pipelines_enabled: typing.Union[bool, IResolvable] = None,
  pre_receive_secret_detection_enabled: typing.Union[bool, IResolvable] = None,
  printing_merge_request_link_enabled: typing.Union[bool, IResolvable] = None,
  public_builds: typing.Union[bool, IResolvable] = None,
  public_jobs: typing.Union[bool, IResolvable] = None,
  push_rules: ProjectPushRules = None,
  releases_access_level: str = None,
  remove_source_branch_after_merge: typing.Union[bool, IResolvable] = None,
  repository_access_level: str = None,
  repository_storage: str = None,
  request_access_enabled: typing.Union[bool, IResolvable] = None,
  requirements_access_level: str = None,
  resolve_outdated_diff_discussions: typing.Union[bool, IResolvable] = None,
  restrict_user_defined_variables: typing.Union[bool, IResolvable] = None,
  security_and_compliance_access_level: str = None,
  shared_runners_enabled: typing.Union[bool, IResolvable] = None,
  skip_wait_for_default_branch_protection: typing.Union[bool, IResolvable] = None,
  snippets_access_level: str = None,
  snippets_enabled: typing.Union[bool, IResolvable] = None,
  squash_commit_template: str = None,
  squash_option: str = None,
  suggestion_commit_message: str = None,
  tags: typing.List[str] = None,
  template_name: str = None,
  template_project_id: typing.Union[int, float] = None,
  timeouts: ProjectTimeouts = None,
  topics: typing.List[str] = None,
  use_custom_template: typing.Union[bool, IResolvable] = None,
  visibility_level: str = None,
  wiki_access_level: str = None,
  wiki_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.name">name</a></code> | <code>str</code> | The name of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.allowMergeOnSkippedPipeline">allow_merge_on_skipped_pipeline</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true if you want to treat skipped pipelines as if they finished with success. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.allowPipelineTriggerApproveDeployment">allow_pipeline_trigger_approve_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set whether or not a pipeline triggerer is allowed to approve deployments. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.analyticsAccessLevel">analytics_access_level</a></code> | <code>str</code> | Set the analytics access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.approvalsBeforeMerge">approvals_before_merge</a></code> | <code>typing.Union[int, float]</code> | Number of merge request approvals required for merging. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.archived">archived</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.archiveOnDestroy">archive_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to `true` to archive the project instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoCancelPendingPipelines">auto_cancel_pending_pipelines</a></code> | <code>str</code> | Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autocloseReferencedIssues">autoclose_referenced_issues</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set whether auto-closing referenced issues on default branch. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsDeployStrategy">auto_devops_deploy_strategy</a></code> | <code>str</code> | Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Auto DevOps for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.avatar">avatar</a></code> | <code>str</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.avatarHash">avatar_hash</a></code> | <code>str</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildCoverageRegex">build_coverage_regex</a></code> | <code>str</code> | Test coverage parsing for the project. This is deprecated feature in GitLab 15.0. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildGitStrategy">build_git_strategy</a></code> | <code>str</code> | The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildsAccessLevel">builds_access_level</a></code> | <code>str</code> | Set the builds access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildTimeout">build_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time, in seconds, that a job can run. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciConfigPath">ci_config_path</a></code> | <code>str</code> | Custom Path to CI config file. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciDefaultGitDepth">ci_default_git_depth</a></code> | <code>typing.Union[int, float]</code> | Default number of revisions for shallow cloning. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciForwardDeploymentEnabled">ci_forward_deployment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When a new deployment job starts, skip older deployment jobs that are still pending. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciPipelineVariablesMinimumOverrideRole">ci_pipeline_variables_minimum_override_role</a></code> | <code>str</code> | The minimum role required to set variables when running pipelines and jobs. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciRestrictPipelineCancellationRole">ci_restrict_pipeline_cancellation_role</a></code> | <code>str</code> | The role required to cancel a pipeline or job. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciSeparatedCaches">ci_separated_caches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use separate caches for protected branches. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerExpirationPolicy">container_expiration_policy</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | container_expiration_policy block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryAccessLevel">container_registry_access_level</a></code> | <code>str</code> | Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryEnabled">container_registry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable container registry for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.defaultBranch">default_branch</a></code> | <code>str</code> | The default branch for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.description">description</a></code> | <code>str</code> | A description of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.emailsEnabled">emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.environmentsAccessLevel">environments_access_level</a></code> | <code>str</code> | Set the environments access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.externalAuthorizationClassificationLabel">external_authorization_classification_label</a></code> | <code>str</code> | The classification label for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.featureFlagsAccessLevel">feature_flags_access_level</a></code> | <code>str</code> | Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forkedFromProjectId">forked_from_project_id</a></code> | <code>typing.Union[int, float]</code> | The id of the project to fork. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forkingAccessLevel">forking_access_level</a></code> | <code>str</code> | Set the forking access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.groupRunnersEnabled">group_runners_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable group runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.groupWithProjectTemplatesId">group_with_project_templates_id</a></code> | <code>typing.Union[int, float]</code> | For group-level custom templates, specifies ID of group from which all the custom project templates are sourced. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#id Project#id}. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrl">import_url</a></code> | <code>str</code> | Git URL to a repository to be imported. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlPassword">import_url_password</a></code> | <code>str</code> | The password for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlUsername">import_url_username</a></code> | <code>str</code> | The username for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.infrastructureAccessLevel">infrastructure_access_level</a></code> | <code>str</code> | Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.initializeWithReadme">initialize_with_readme</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create main branch with first commit containing a README.md file. Must be set to `true` if importing an uninitialized project with a different `default_branch`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesAccessLevel">issues_access_level</a></code> | <code>str</code> | Set the issues access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesEnabled">issues_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable issue tracking for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesTemplate">issues_template</a></code> | <code>str</code> | Sets the template for new issues in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.keepLatestArtifact">keep_latest_artifact</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable or enable the ability to keep the latest artifact for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.lfsEnabled">lfs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable LFS for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeCommitTemplate">merge_commit_template</a></code> | <code>str</code> | Template used to create merge commit message in merge requests. (Introduced in GitLab 14.5.). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeMethod">merge_method</a></code> | <code>str</code> | Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergePipelinesEnabled">merge_pipelines_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable merge pipelines. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsAccessLevel">merge_requests_access_level</a></code> | <code>str</code> | Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsEnabled">merge_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable merge requests for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsTemplate">merge_requests_template</a></code> | <code>str</code> | Sets the template for new merge requests in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeTrainsEnabled">merge_trains_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirror">mirror</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable project pull mirror. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorOverwritesDivergedBranches">mirror_overwrites_diverged_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable overwrite diverged branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorTriggerBuilds">mirror_trigger_builds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable trigger builds on pushes for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.modelExperimentsAccessLevel">model_experiments_access_level</a></code> | <code>str</code> | Set visibility of machine learning model experiments. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.modelRegistryAccessLevel">model_registry_access_level</a></code> | <code>str</code> | Set visibility of machine learning model registry. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.monitorAccessLevel">monitor_access_level</a></code> | <code>str</code> | Set the monitor access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mrDefaultTargetSelf">mr_default_target_self</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | For forked projects, target merge requests to this project. If false, the target will be the upstream project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.namespaceId">namespace_id</a></code> | <code>typing.Union[int, float]</code> | The namespace (group or user) of the project. Defaults to your user. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfAllDiscussionsAreResolved">only_allow_merge_if_all_discussions_are_resolved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true if you want allow merges only if all discussions are resolved. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfPipelineSucceeds">only_allow_merge_if_pipeline_succeeds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true if you want allow merges only if a pipeline succeeds. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyMirrorProtectedBranches">only_mirror_protected_branches</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable only mirror protected branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.packagesEnabled">packages_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable packages repository for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pagesAccessLevel">pages_access_level</a></code> | <code>str</code> | Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.path">path</a></code> | <code>str</code> | The path of the repository. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pipelinesEnabled">pipelines_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable pipelines for the project. The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.preReceiveSecretDetectionEnabled">pre_receive_secret_detection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Secret Push Detection is enabled. Requires GitLab Ultimate and at least GitLab 17.3. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.printingMergeRequestLinkEnabled">printing_merge_request_link_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Show link to create/view merge request when pushing from the command line. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.publicBuilds">public_builds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.publicJobs">public_jobs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pushRules">push_rules</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.releasesAccessLevel">releases_access_level</a></code> | <code>str</code> | Set the releases access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.removeSourceBranchAfterMerge">remove_source_branch_after_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable `Delete source branch` option by default for all new merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryAccessLevel">repository_access_level</a></code> | <code>str</code> | Set the repository access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryStorage">repository_storage</a></code> | <code>str</code> | Which storage shard the repository is on. (administrator only). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.requestAccessEnabled">request_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.requirementsAccessLevel">requirements_access_level</a></code> | <code>str</code> | Set the requirements access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.resolveOutdatedDiffDiscussions">resolve_outdated_diff_discussions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Automatically resolve merge request diffs discussions on lines changed with a push. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.restrictUserDefinedVariables">restrict_user_defined_variables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.securityAndComplianceAccessLevel">security_and_compliance_access_level</a></code> | <code>str</code> | Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.sharedRunnersEnabled">shared_runners_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable shared runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.skipWaitForDefaultBranchProtection">skip_wait_for_default_branch_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, the default behavior to wait for the default branch protection to be created is skipped. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsAccessLevel">snippets_access_level</a></code> | <code>str</code> | Set the snippets access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsEnabled">snippets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable snippets for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.squashCommitTemplate">squash_commit_template</a></code> | <code>str</code> | Template used to create squash commit message in merge requests. (Introduced in GitLab 14.6.). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.squashOption">squash_option</a></code> | <code>str</code> | Squash commits when merge request. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.suggestionCommitMessage">suggestion_commit_message</a></code> | <code>str</code> | The commit message used to apply merge request suggestions. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | The list of tags for a project; |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.templateName">template_name</a></code> | <code>str</code> | When used without use_custom_template, name of a built-in project template. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.templateProjectId">template_project_id</a></code> | <code>typing.Union[int, float]</code> | When used with use_custom_template, project ID of a custom project template. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.topics">topics</a></code> | <code>typing.List[str]</code> | The list of topics for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.useCustomTemplate">use_custom_template</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.visibilityLevel">visibility_level</a></code> | <code>str</code> | Set to `public` to create a public project. Valid values are `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.wikiAccessLevel">wiki_access_level</a></code> | <code>str</code> | Set the wiki access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.wikiEnabled">wiki_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable wiki for the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.project.ProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.project.ProjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.project.ProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.project.ProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.ProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.project.ProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.project.ProjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#name Project#name}

---

##### `allow_merge_on_skipped_pipeline`<sup>Optional</sup> <a name="allow_merge_on_skipped_pipeline" id="@cdktf/provider-gitlab.project.ProjectConfig.property.allowMergeOnSkippedPipeline"></a>

```python
allow_merge_on_skipped_pipeline: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true if you want to treat skipped pipelines as if they finished with success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#allow_merge_on_skipped_pipeline Project#allow_merge_on_skipped_pipeline}

---

##### `allow_pipeline_trigger_approve_deployment`<sup>Optional</sup> <a name="allow_pipeline_trigger_approve_deployment" id="@cdktf/provider-gitlab.project.ProjectConfig.property.allowPipelineTriggerApproveDeployment"></a>

```python
allow_pipeline_trigger_approve_deployment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set whether or not a pipeline triggerer is allowed to approve deployments. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#allow_pipeline_trigger_approve_deployment Project#allow_pipeline_trigger_approve_deployment}

---

##### `analytics_access_level`<sup>Optional</sup> <a name="analytics_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.analyticsAccessLevel"></a>

```python
analytics_access_level: str
```

- *Type:* str

Set the analytics access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#analytics_access_level Project#analytics_access_level}

---

##### `approvals_before_merge`<sup>Optional</sup> <a name="approvals_before_merge" id="@cdktf/provider-gitlab.project.ProjectConfig.property.approvalsBeforeMerge"></a>

```python
approvals_before_merge: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of merge request approvals required for merging.

Default is 0.
This field **does not** work well in combination with the `gitlab_project_approval_rule` resource
and is most likely gonna be deprecated in a future GitLab version (see [this upstream epic](https://gitlab.com/groups/gitlab-org/-/epics/7572)).
In the meantime we recommend against using this attribute and use `gitlab_project_approval_rule` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#approvals_before_merge Project#approvals_before_merge}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-gitlab.project.ProjectConfig.property.archived"></a>

```python
archived: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#archived Project#archived}

---

##### `archive_on_destroy`<sup>Optional</sup> <a name="archive_on_destroy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.archiveOnDestroy"></a>

```python
archive_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to `true` to archive the project instead of deleting on destroy.

If set to `true` it will entire omit the `DELETE` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#archive_on_destroy Project#archive_on_destroy}

---

##### `auto_cancel_pending_pipelines`<sup>Optional</sup> <a name="auto_cancel_pending_pipelines" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoCancelPendingPipelines"></a>

```python
auto_cancel_pending_pipelines: str
```

- *Type:* str

Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#auto_cancel_pending_pipelines Project#auto_cancel_pending_pipelines}

---

##### `autoclose_referenced_issues`<sup>Optional</sup> <a name="autoclose_referenced_issues" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autocloseReferencedIssues"></a>

```python
autoclose_referenced_issues: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set whether auto-closing referenced issues on default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#autoclose_referenced_issues Project#autoclose_referenced_issues}

---

##### `auto_devops_deploy_strategy`<sup>Optional</sup> <a name="auto_devops_deploy_strategy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsDeployStrategy"></a>

```python
auto_devops_deploy_strategy: str
```

- *Type:* str

Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#auto_devops_deploy_strategy Project#auto_devops_deploy_strategy}

---

##### `auto_devops_enabled`<sup>Optional</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsEnabled"></a>

```python
auto_devops_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Auto DevOps for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#auto_devops_enabled Project#auto_devops_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.project.ProjectConfig.property.avatar"></a>

```python
avatar: str
```

- *Type:* str

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#avatar Project#avatar}

---

##### `avatar_hash`<sup>Optional</sup> <a name="avatar_hash" id="@cdktf/provider-gitlab.project.ProjectConfig.property.avatarHash"></a>

```python
avatar_hash: str
```

- *Type:* str

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#avatar_hash Project#avatar_hash}

---

##### `build_coverage_regex`<sup>Optional</sup> <a name="build_coverage_regex" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildCoverageRegex"></a>

```python
build_coverage_regex: str
```

- *Type:* str

Test coverage parsing for the project. This is deprecated feature in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#build_coverage_regex Project#build_coverage_regex}

---

##### `build_git_strategy`<sup>Optional</sup> <a name="build_git_strategy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildGitStrategy"></a>

```python
build_git_strategy: str
```

- *Type:* str

The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#build_git_strategy Project#build_git_strategy}

---

##### `builds_access_level`<sup>Optional</sup> <a name="builds_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildsAccessLevel"></a>

```python
builds_access_level: str
```

- *Type:* str

Set the builds access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#builds_access_level Project#builds_access_level}

---

##### `build_timeout`<sup>Optional</sup> <a name="build_timeout" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildTimeout"></a>

```python
build_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time, in seconds, that a job can run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#build_timeout Project#build_timeout}

---

##### `ci_config_path`<sup>Optional</sup> <a name="ci_config_path" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciConfigPath"></a>

```python
ci_config_path: str
```

- *Type:* str

Custom Path to CI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#ci_config_path Project#ci_config_path}

---

##### `ci_default_git_depth`<sup>Optional</sup> <a name="ci_default_git_depth" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciDefaultGitDepth"></a>

```python
ci_default_git_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default number of revisions for shallow cloning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#ci_default_git_depth Project#ci_default_git_depth}

---

##### `ci_forward_deployment_enabled`<sup>Optional</sup> <a name="ci_forward_deployment_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciForwardDeploymentEnabled"></a>

```python
ci_forward_deployment_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When a new deployment job starts, skip older deployment jobs that are still pending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#ci_forward_deployment_enabled Project#ci_forward_deployment_enabled}

---

##### `ci_pipeline_variables_minimum_override_role`<sup>Optional</sup> <a name="ci_pipeline_variables_minimum_override_role" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciPipelineVariablesMinimumOverrideRole"></a>

```python
ci_pipeline_variables_minimum_override_role: str
```

- *Type:* str

The minimum role required to set variables when running pipelines and jobs.

Introduced in GitLab 17.1. Valid values are `developer`, `maintainer`, `owner`, `no_one_allowed`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#ci_pipeline_variables_minimum_override_role Project#ci_pipeline_variables_minimum_override_role}

---

##### `ci_restrict_pipeline_cancellation_role`<sup>Optional</sup> <a name="ci_restrict_pipeline_cancellation_role" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciRestrictPipelineCancellationRole"></a>

```python
ci_restrict_pipeline_cancellation_role: str
```

- *Type:* str

The role required to cancel a pipeline or job.

Introduced in GitLab 16.8. Premium and Ultimate only. Valid values are `developer`, `maintainer`, `no one`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#ci_restrict_pipeline_cancellation_role Project#ci_restrict_pipeline_cancellation_role}

---

##### `ci_separated_caches`<sup>Optional</sup> <a name="ci_separated_caches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciSeparatedCaches"></a>

```python
ci_separated_caches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use separate caches for protected branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#ci_separated_caches Project#ci_separated_caches}

---

##### `container_expiration_policy`<sup>Optional</sup> <a name="container_expiration_policy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerExpirationPolicy"></a>

```python
container_expiration_policy: ProjectContainerExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

container_expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#container_expiration_policy Project#container_expiration_policy}

---

##### `container_registry_access_level`<sup>Optional</sup> <a name="container_registry_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryAccessLevel"></a>

```python
container_registry_access_level: str
```

- *Type:* str

Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#container_registry_access_level Project#container_registry_access_level}

---

##### `container_registry_enabled`<sup>Optional</sup> <a name="container_registry_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryEnabled"></a>

```python
container_registry_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable container registry for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#container_registry_enabled Project#container_registry_enabled}

---

##### `default_branch`<sup>Optional</sup> <a name="default_branch" id="@cdktf/provider-gitlab.project.ProjectConfig.property.defaultBranch"></a>

```python
default_branch: str
```

- *Type:* str

The default branch for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#default_branch Project#default_branch}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.project.ProjectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#description Project#description}

---

##### `emails_enabled`<sup>Optional</sup> <a name="emails_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.emailsEnabled"></a>

```python
emails_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#emails_enabled Project#emails_enabled}

---

##### `environments_access_level`<sup>Optional</sup> <a name="environments_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.environmentsAccessLevel"></a>

```python
environments_access_level: str
```

- *Type:* str

Set the environments access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#environments_access_level Project#environments_access_level}

---

##### `external_authorization_classification_label`<sup>Optional</sup> <a name="external_authorization_classification_label" id="@cdktf/provider-gitlab.project.ProjectConfig.property.externalAuthorizationClassificationLabel"></a>

```python
external_authorization_classification_label: str
```

- *Type:* str

The classification label for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#external_authorization_classification_label Project#external_authorization_classification_label}

---

##### `feature_flags_access_level`<sup>Optional</sup> <a name="feature_flags_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.featureFlagsAccessLevel"></a>

```python
feature_flags_access_level: str
```

- *Type:* str

Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#feature_flags_access_level Project#feature_flags_access_level}

---

##### `forked_from_project_id`<sup>Optional</sup> <a name="forked_from_project_id" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forkedFromProjectId"></a>

```python
forked_from_project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The id of the project to fork.

During create the project is forked and during an update the fork relation is changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#forked_from_project_id Project#forked_from_project_id}

---

##### `forking_access_level`<sup>Optional</sup> <a name="forking_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forkingAccessLevel"></a>

```python
forking_access_level: str
```

- *Type:* str

Set the forking access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#forking_access_level Project#forking_access_level}

---

##### `group_runners_enabled`<sup>Optional</sup> <a name="group_runners_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.groupRunnersEnabled"></a>

```python
group_runners_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable group runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#group_runners_enabled Project#group_runners_enabled}

---

##### `group_with_project_templates_id`<sup>Optional</sup> <a name="group_with_project_templates_id" id="@cdktf/provider-gitlab.project.ProjectConfig.property.groupWithProjectTemplatesId"></a>

```python
group_with_project_templates_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For group-level custom templates, specifies ID of group from which all the custom project templates are sourced.

Leave empty for instance-level templates. Requires use_custom_template to be true (enterprise edition).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#group_with_project_templates_id Project#group_with_project_templates_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.project.ProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#id Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_url`<sup>Optional</sup> <a name="import_url" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrl"></a>

```python
import_url: str
```

- *Type:* str

Git URL to a repository to be imported.

Together with `mirror = true` it will setup a Pull Mirror. This can also be used together with `forked_from_project_id` to setup a Pull Mirror for a fork. The fork takes precedence over the import. Make sure to provide the credentials in `import_url_username` and `import_url_password`. GitLab never returns the credentials, thus the provider cannot detect configuration drift in the credentials. They can also not be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#import_url Project#import_url}

---

##### `import_url_password`<sup>Optional</sup> <a name="import_url_password" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlPassword"></a>

```python
import_url_password: str
```

- *Type:* str

The password for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#import_url_password Project#import_url_password}

---

##### `import_url_username`<sup>Optional</sup> <a name="import_url_username" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlUsername"></a>

```python
import_url_username: str
```

- *Type:* str

The username for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`.  See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#import_url_username Project#import_url_username}

---

##### `infrastructure_access_level`<sup>Optional</sup> <a name="infrastructure_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.infrastructureAccessLevel"></a>

```python
infrastructure_access_level: str
```

- *Type:* str

Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#infrastructure_access_level Project#infrastructure_access_level}

---

##### `initialize_with_readme`<sup>Optional</sup> <a name="initialize_with_readme" id="@cdktf/provider-gitlab.project.ProjectConfig.property.initializeWithReadme"></a>

```python
initialize_with_readme: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create main branch with first commit containing a README.md file. Must be set to `true` if importing an uninitialized project with a different `default_branch`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#initialize_with_readme Project#initialize_with_readme}

---

##### `issues_access_level`<sup>Optional</sup> <a name="issues_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesAccessLevel"></a>

```python
issues_access_level: str
```

- *Type:* str

Set the issues access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#issues_access_level Project#issues_access_level}

---

##### `issues_enabled`<sup>Optional</sup> <a name="issues_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesEnabled"></a>

```python
issues_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable issue tracking for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#issues_enabled Project#issues_enabled}

---

##### `issues_template`<sup>Optional</sup> <a name="issues_template" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesTemplate"></a>

```python
issues_template: str
```

- *Type:* str

Sets the template for new issues in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#issues_template Project#issues_template}

---

##### `keep_latest_artifact`<sup>Optional</sup> <a name="keep_latest_artifact" id="@cdktf/provider-gitlab.project.ProjectConfig.property.keepLatestArtifact"></a>

```python
keep_latest_artifact: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable or enable the ability to keep the latest artifact for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#keep_latest_artifact Project#keep_latest_artifact}

---

##### `lfs_enabled`<sup>Optional</sup> <a name="lfs_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.lfsEnabled"></a>

```python
lfs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable LFS for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#lfs_enabled Project#lfs_enabled}

---

##### `merge_commit_template`<sup>Optional</sup> <a name="merge_commit_template" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeCommitTemplate"></a>

```python
merge_commit_template: str
```

- *Type:* str

Template used to create merge commit message in merge requests. (Introduced in GitLab 14.5.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_commit_template Project#merge_commit_template}

---

##### `merge_method`<sup>Optional</sup> <a name="merge_method" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeMethod"></a>

```python
merge_method: str
```

- *Type:* str

Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_method Project#merge_method}

---

##### `merge_pipelines_enabled`<sup>Optional</sup> <a name="merge_pipelines_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergePipelinesEnabled"></a>

```python
merge_pipelines_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable merge pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_pipelines_enabled Project#merge_pipelines_enabled}

---

##### `merge_requests_access_level`<sup>Optional</sup> <a name="merge_requests_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsAccessLevel"></a>

```python
merge_requests_access_level: str
```

- *Type:* str

Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_requests_access_level Project#merge_requests_access_level}

---

##### `merge_requests_enabled`<sup>Optional</sup> <a name="merge_requests_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsEnabled"></a>

```python
merge_requests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable merge requests for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_requests_enabled Project#merge_requests_enabled}

---

##### `merge_requests_template`<sup>Optional</sup> <a name="merge_requests_template" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsTemplate"></a>

```python
merge_requests_template: str
```

- *Type:* str

Sets the template for new merge requests in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_requests_template Project#merge_requests_template}

---

##### `merge_trains_enabled`<sup>Optional</sup> <a name="merge_trains_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeTrainsEnabled"></a>

```python
merge_trains_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#merge_trains_enabled Project#merge_trains_enabled}

---

##### `mirror`<sup>Optional</sup> <a name="mirror" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirror"></a>

```python
mirror: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable project pull mirror.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#mirror Project#mirror}

---

##### `mirror_overwrites_diverged_branches`<sup>Optional</sup> <a name="mirror_overwrites_diverged_branches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorOverwritesDivergedBranches"></a>

```python
mirror_overwrites_diverged_branches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable overwrite diverged branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#mirror_overwrites_diverged_branches Project#mirror_overwrites_diverged_branches}

---

##### `mirror_trigger_builds`<sup>Optional</sup> <a name="mirror_trigger_builds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorTriggerBuilds"></a>

```python
mirror_trigger_builds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable trigger builds on pushes for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#mirror_trigger_builds Project#mirror_trigger_builds}

---

##### `model_experiments_access_level`<sup>Optional</sup> <a name="model_experiments_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.modelExperimentsAccessLevel"></a>

```python
model_experiments_access_level: str
```

- *Type:* str

Set visibility of machine learning model experiments. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#model_experiments_access_level Project#model_experiments_access_level}

---

##### `model_registry_access_level`<sup>Optional</sup> <a name="model_registry_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.modelRegistryAccessLevel"></a>

```python
model_registry_access_level: str
```

- *Type:* str

Set visibility of machine learning model registry. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#model_registry_access_level Project#model_registry_access_level}

---

##### `monitor_access_level`<sup>Optional</sup> <a name="monitor_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.monitorAccessLevel"></a>

```python
monitor_access_level: str
```

- *Type:* str

Set the monitor access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#monitor_access_level Project#monitor_access_level}

---

##### `mr_default_target_self`<sup>Optional</sup> <a name="mr_default_target_self" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mrDefaultTargetSelf"></a>

```python
mr_default_target_self: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

For forked projects, target merge requests to this project. If false, the target will be the upstream project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#mr_default_target_self Project#mr_default_target_self}

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktf/provider-gitlab.project.ProjectConfig.property.namespaceId"></a>

```python
namespace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The namespace (group or user) of the project. Defaults to your user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#namespace_id Project#namespace_id}

---

##### `only_allow_merge_if_all_discussions_are_resolved`<sup>Optional</sup> <a name="only_allow_merge_if_all_discussions_are_resolved" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```python
only_allow_merge_if_all_discussions_are_resolved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true if you want allow merges only if all discussions are resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#only_allow_merge_if_all_discussions_are_resolved Project#only_allow_merge_if_all_discussions_are_resolved}

---

##### `only_allow_merge_if_pipeline_succeeds`<sup>Optional</sup> <a name="only_allow_merge_if_pipeline_succeeds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfPipelineSucceeds"></a>

```python
only_allow_merge_if_pipeline_succeeds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true if you want allow merges only if a pipeline succeeds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#only_allow_merge_if_pipeline_succeeds Project#only_allow_merge_if_pipeline_succeeds}

---

##### `only_mirror_protected_branches`<sup>Optional</sup> <a name="only_mirror_protected_branches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyMirrorProtectedBranches"></a>

```python
only_mirror_protected_branches: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable only mirror protected branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#only_mirror_protected_branches Project#only_mirror_protected_branches}

---

##### `packages_enabled`<sup>Optional</sup> <a name="packages_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.packagesEnabled"></a>

```python
packages_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable packages repository for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#packages_enabled Project#packages_enabled}

---

##### `pages_access_level`<sup>Optional</sup> <a name="pages_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pagesAccessLevel"></a>

```python
pages_access_level: str
```

- *Type:* str

Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#pages_access_level Project#pages_access_level}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-gitlab.project.ProjectConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The path of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#path Project#path}

---

##### `pipelines_enabled`<sup>Optional</sup> <a name="pipelines_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pipelinesEnabled"></a>

```python
pipelines_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable pipelines for the project. The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#pipelines_enabled Project#pipelines_enabled}

---

##### `pre_receive_secret_detection_enabled`<sup>Optional</sup> <a name="pre_receive_secret_detection_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.preReceiveSecretDetectionEnabled"></a>

```python
pre_receive_secret_detection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Secret Push Detection is enabled. Requires GitLab Ultimate and at least GitLab 17.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#pre_receive_secret_detection_enabled Project#pre_receive_secret_detection_enabled}

---

##### `printing_merge_request_link_enabled`<sup>Optional</sup> <a name="printing_merge_request_link_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.printingMergeRequestLinkEnabled"></a>

```python
printing_merge_request_link_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Show link to create/view merge request when pushing from the command line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#printing_merge_request_link_enabled Project#printing_merge_request_link_enabled}

---

##### `public_builds`<sup>Optional</sup> <a name="public_builds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.publicBuilds"></a>

```python
public_builds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#public_builds Project#public_builds}

---

##### `public_jobs`<sup>Optional</sup> <a name="public_jobs" id="@cdktf/provider-gitlab.project.ProjectConfig.property.publicJobs"></a>

```python
public_jobs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#public_jobs Project#public_jobs}

---

##### `push_rules`<sup>Optional</sup> <a name="push_rules" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pushRules"></a>

```python
push_rules: ProjectPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#push_rules Project#push_rules}

---

##### `releases_access_level`<sup>Optional</sup> <a name="releases_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.releasesAccessLevel"></a>

```python
releases_access_level: str
```

- *Type:* str

Set the releases access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#releases_access_level Project#releases_access_level}

---

##### `remove_source_branch_after_merge`<sup>Optional</sup> <a name="remove_source_branch_after_merge" id="@cdktf/provider-gitlab.project.ProjectConfig.property.removeSourceBranchAfterMerge"></a>

```python
remove_source_branch_after_merge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable `Delete source branch` option by default for all new merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#remove_source_branch_after_merge Project#remove_source_branch_after_merge}

---

##### `repository_access_level`<sup>Optional</sup> <a name="repository_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryAccessLevel"></a>

```python
repository_access_level: str
```

- *Type:* str

Set the repository access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#repository_access_level Project#repository_access_level}

---

##### `repository_storage`<sup>Optional</sup> <a name="repository_storage" id="@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryStorage"></a>

```python
repository_storage: str
```

- *Type:* str

Which storage shard the repository is on. (administrator only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#repository_storage Project#repository_storage}

---

##### `request_access_enabled`<sup>Optional</sup> <a name="request_access_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.requestAccessEnabled"></a>

```python
request_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#request_access_enabled Project#request_access_enabled}

---

##### `requirements_access_level`<sup>Optional</sup> <a name="requirements_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.requirementsAccessLevel"></a>

```python
requirements_access_level: str
```

- *Type:* str

Set the requirements access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#requirements_access_level Project#requirements_access_level}

---

##### `resolve_outdated_diff_discussions`<sup>Optional</sup> <a name="resolve_outdated_diff_discussions" id="@cdktf/provider-gitlab.project.ProjectConfig.property.resolveOutdatedDiffDiscussions"></a>

```python
resolve_outdated_diff_discussions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Automatically resolve merge request diffs discussions on lines changed with a push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#resolve_outdated_diff_discussions Project#resolve_outdated_diff_discussions}

---

##### `restrict_user_defined_variables`<sup>Optional</sup> <a name="restrict_user_defined_variables" id="@cdktf/provider-gitlab.project.ProjectConfig.property.restrictUserDefinedVariables"></a>

```python
restrict_user_defined_variables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#restrict_user_defined_variables Project#restrict_user_defined_variables}

---

##### `security_and_compliance_access_level`<sup>Optional</sup> <a name="security_and_compliance_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.securityAndComplianceAccessLevel"></a>

```python
security_and_compliance_access_level: str
```

- *Type:* str

Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#security_and_compliance_access_level Project#security_and_compliance_access_level}

---

##### `shared_runners_enabled`<sup>Optional</sup> <a name="shared_runners_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.sharedRunnersEnabled"></a>

```python
shared_runners_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable shared runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#shared_runners_enabled Project#shared_runners_enabled}

---

##### `skip_wait_for_default_branch_protection`<sup>Optional</sup> <a name="skip_wait_for_default_branch_protection" id="@cdktf/provider-gitlab.project.ProjectConfig.property.skipWaitForDefaultBranchProtection"></a>

```python
skip_wait_for_default_branch_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, the default behavior to wait for the default branch protection to be created is skipped.

This is necessary if the current user is not an admin and the default branch protection is disabled on an instance-level.
There is currently no known way to determine if the default branch protection is disabled on an instance-level for non-admin users.
This attribute is only used during resource creation, thus changes are suppressed and the attribute cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#skip_wait_for_default_branch_protection Project#skip_wait_for_default_branch_protection}

---

##### `snippets_access_level`<sup>Optional</sup> <a name="snippets_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsAccessLevel"></a>

```python
snippets_access_level: str
```

- *Type:* str

Set the snippets access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#snippets_access_level Project#snippets_access_level}

---

##### `snippets_enabled`<sup>Optional</sup> <a name="snippets_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsEnabled"></a>

```python
snippets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable snippets for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#snippets_enabled Project#snippets_enabled}

---

##### `squash_commit_template`<sup>Optional</sup> <a name="squash_commit_template" id="@cdktf/provider-gitlab.project.ProjectConfig.property.squashCommitTemplate"></a>

```python
squash_commit_template: str
```

- *Type:* str

Template used to create squash commit message in merge requests. (Introduced in GitLab 14.6.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#squash_commit_template Project#squash_commit_template}

---

##### `squash_option`<sup>Optional</sup> <a name="squash_option" id="@cdktf/provider-gitlab.project.ProjectConfig.property.squashOption"></a>

```python
squash_option: str
```

- *Type:* str

Squash commits when merge request.

Valid values are `never`, `always`, `default_on`, or `default_off`. The default value is `default_off`. [GitLab >= 14.1]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#squash_option Project#squash_option}

---

##### `suggestion_commit_message`<sup>Optional</sup> <a name="suggestion_commit_message" id="@cdktf/provider-gitlab.project.ProjectConfig.property.suggestionCommitMessage"></a>

```python
suggestion_commit_message: str
```

- *Type:* str

The commit message used to apply merge request suggestions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#suggestion_commit_message Project#suggestion_commit_message}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-gitlab.project.ProjectConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

The list of tags for a project;

put array of tags, that should be finally assigned to a project. Use topics instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#tags Project#tags}

---

##### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktf/provider-gitlab.project.ProjectConfig.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

When used without use_custom_template, name of a built-in project template.

When used with use_custom_template, name of a custom project template. This option is mutually exclusive with `template_project_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#template_name Project#template_name}

---

##### `template_project_id`<sup>Optional</sup> <a name="template_project_id" id="@cdktf/provider-gitlab.project.ProjectConfig.property.templateProjectId"></a>

```python
template_project_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When used with use_custom_template, project ID of a custom project template.

This is preferable to using template_name since template_name may be ambiguous (enterprise edition). This option is mutually exclusive with `template_name`. See `gitlab_group_project_file_template` to set a project as a template project. If a project has not been set as a template, using it here will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#template_project_id Project#template_project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-gitlab.project.ProjectConfig.property.timeouts"></a>

```python
timeouts: ProjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#timeouts Project#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-gitlab.project.ProjectConfig.property.topics"></a>

```python
topics: typing.List[str]
```

- *Type:* typing.List[str]

The list of topics for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#topics Project#topics}

---

##### `use_custom_template`<sup>Optional</sup> <a name="use_custom_template" id="@cdktf/provider-gitlab.project.ProjectConfig.property.useCustomTemplate"></a>

```python
use_custom_template: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition).

~> When using a custom template, [Group Tokens won't work](https://docs.gitlab.com/15.7/ee/user/project/settings/import_export_troubleshooting.html#import-using-the-rest-api-fails-when-using-a-group-access-token). You must use a real user's Personal Access Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#use_custom_template Project#use_custom_template}

---

##### `visibility_level`<sup>Optional</sup> <a name="visibility_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.visibilityLevel"></a>

```python
visibility_level: str
```

- *Type:* str

Set to `public` to create a public project. Valid values are `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#visibility_level Project#visibility_level}

---

##### `wiki_access_level`<sup>Optional</sup> <a name="wiki_access_level" id="@cdktf/provider-gitlab.project.ProjectConfig.property.wikiAccessLevel"></a>

```python
wiki_access_level: str
```

- *Type:* str

Set the wiki access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#wiki_access_level Project#wiki_access_level}

---

##### `wiki_enabled`<sup>Optional</sup> <a name="wiki_enabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.wikiEnabled"></a>

```python
wiki_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable wiki for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#wiki_enabled Project#wiki_enabled}

---

### ProjectContainerExpirationPolicy <a name="ProjectContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project

project.ProjectContainerExpirationPolicy(
  cadence: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  keep_n: typing.Union[int, float] = None,
  name_regex: str = None,
  name_regex_delete: str = None,
  name_regex_keep: str = None,
  older_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.cadence">cadence</a></code> | <code>str</code> | The cadence of the policy. Valid values are: `1d`, `7d`, `14d`, `1month`, `3month`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the policy is enabled. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.keepN">keep_n</a></code> | <code>typing.Union[int, float]</code> | The number of images to keep. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegex">name_regex</a></code> | <code>str</code> | The regular expression to match image names to delete. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexDelete">name_regex_delete</a></code> | <code>str</code> | The regular expression to match image names to delete. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexKeep">name_regex_keep</a></code> | <code>str</code> | The regular expression to match image names to keep. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.olderThan">older_than</a></code> | <code>str</code> | The number of days to keep images. |

---

##### `cadence`<sup>Optional</sup> <a name="cadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.cadence"></a>

```python
cadence: str
```

- *Type:* str

The cadence of the policy. Valid values are: `1d`, `7d`, `14d`, `1month`, `3month`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#cadence Project#cadence}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#enabled Project#enabled}

---

##### `keep_n`<sup>Optional</sup> <a name="keep_n" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.keepN"></a>

```python
keep_n: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of images to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#keep_n Project#keep_n}

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

The regular expression to match image names to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#name_regex Project#name_regex}

---

##### `name_regex_delete`<sup>Optional</sup> <a name="name_regex_delete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexDelete"></a>

```python
name_regex_delete: str
```

- *Type:* str

The regular expression to match image names to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#name_regex_delete Project#name_regex_delete}

---

##### `name_regex_keep`<sup>Optional</sup> <a name="name_regex_keep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexKeep"></a>

```python
name_regex_keep: str
```

- *Type:* str

The regular expression to match image names to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#name_regex_keep Project#name_regex_keep}

---

##### `older_than`<sup>Optional</sup> <a name="older_than" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.olderThan"></a>

```python
older_than: str
```

- *Type:* str

The number of days to keep images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#older_than Project#older_than}

---

### ProjectPushRules <a name="ProjectPushRules" id="@cdktf/provider-gitlab.project.ProjectPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectPushRules.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project

project.ProjectPushRules(
  author_email_regex: str = None,
  branch_name_regex: str = None,
  commit_committer_check: typing.Union[bool, IResolvable] = None,
  commit_committer_name_check: typing.Union[bool, IResolvable] = None,
  commit_message_negative_regex: str = None,
  commit_message_regex: str = None,
  deny_delete_tag: typing.Union[bool, IResolvable] = None,
  file_name_regex: str = None,
  max_file_size: typing.Union[int, float] = None,
  member_check: typing.Union[bool, IResolvable] = None,
  prevent_secrets: typing.Union[bool, IResolvable] = None,
  reject_non_dco_commits: typing.Union[bool, IResolvable] = None,
  reject_unsigned_commits: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.authorEmailRegex">author_email_regex</a></code> | <code>str</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.branchNameRegex">branch_name_regex</a></code> | <code>str</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterCheck">commit_committer_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Users can only push commits to this repository that were committed with one of their own verified emails. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterNameCheck">commit_committer_name_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageNegativeRegex">commit_message_negative_regex</a></code> | <code>str</code> | No commit message is allowed to match this regex, e.g. `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageRegex">commit_message_regex</a></code> | <code>str</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.denyDeleteTag">deny_delete_tag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.fileNameRegex">file_name_regex</a></code> | <code>str</code> | All committed filenames must not match this regex, e.g. `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | Maximum file size (MB). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.memberCheck">member_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Restrict commits by author (email) to existing GitLab users. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.preventSecrets">prevent_secrets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectNonDcoCommits">reject_non_dco_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectUnsignedCommits">reject_unsigned_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Reject commit when it’s not signed through GPG. |

---

##### `author_email_regex`<sup>Optional</sup> <a name="author_email_regex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.authorEmailRegex"></a>

```python
author_email_regex: str
```

- *Type:* str

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#author_email_regex Project#author_email_regex}

---

##### `branch_name_regex`<sup>Optional</sup> <a name="branch_name_regex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.branchNameRegex"></a>

```python
branch_name_regex: str
```

- *Type:* str

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#branch_name_regex Project#branch_name_regex}

---

##### `commit_committer_check`<sup>Optional</sup> <a name="commit_committer_check" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterCheck"></a>

```python
commit_committer_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users can only push commits to this repository that were committed with one of their own verified emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#commit_committer_check Project#commit_committer_check}

---

##### `commit_committer_name_check`<sup>Optional</sup> <a name="commit_committer_name_check" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterNameCheck"></a>

```python
commit_committer_name_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#commit_committer_name_check Project#commit_committer_name_check}

---

##### `commit_message_negative_regex`<sup>Optional</sup> <a name="commit_message_negative_regex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageNegativeRegex"></a>

```python
commit_message_negative_regex: str
```

- *Type:* str

No commit message is allowed to match this regex, e.g. `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#commit_message_negative_regex Project#commit_message_negative_regex}

---

##### `commit_message_regex`<sup>Optional</sup> <a name="commit_message_regex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageRegex"></a>

```python
commit_message_regex: str
```

- *Type:* str

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#commit_message_regex Project#commit_message_regex}

---

##### `deny_delete_tag`<sup>Optional</sup> <a name="deny_delete_tag" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.denyDeleteTag"></a>

```python
deny_delete_tag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#deny_delete_tag Project#deny_delete_tag}

---

##### `file_name_regex`<sup>Optional</sup> <a name="file_name_regex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.fileNameRegex"></a>

```python
file_name_regex: str
```

- *Type:* str

All committed filenames must not match this regex, e.g. `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#file_name_regex Project#file_name_regex}

---

##### `max_file_size`<sup>Optional</sup> <a name="max_file_size" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum file size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#max_file_size Project#max_file_size}

---

##### `member_check`<sup>Optional</sup> <a name="member_check" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.memberCheck"></a>

```python
member_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Restrict commits by author (email) to existing GitLab users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#member_check Project#member_check}

---

##### `prevent_secrets`<sup>Optional</sup> <a name="prevent_secrets" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.preventSecrets"></a>

```python
prevent_secrets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#prevent_secrets Project#prevent_secrets}

---

##### `reject_non_dco_commits`<sup>Optional</sup> <a name="reject_non_dco_commits" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectNonDcoCommits"></a>

```python
reject_non_dco_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#reject_non_dco_commits Project#reject_non_dco_commits}

---

##### `reject_unsigned_commits`<sup>Optional</sup> <a name="reject_unsigned_commits" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectUnsignedCommits"></a>

```python
reject_unsigned_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Reject commit when it’s not signed through GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#reject_unsigned_commits Project#reject_unsigned_commits}

---

### ProjectTimeouts <a name="ProjectTimeouts" id="@cdktf/provider-gitlab.project.ProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project

project.ProjectTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#create Project#create}. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#delete Project#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-gitlab.project.ProjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#create Project#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-gitlab.project.ProjectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project#delete Project#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectContainerExpirationPolicyOutputReference <a name="ProjectContainerExpirationPolicyOutputReference" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project

project.ProjectContainerExpirationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetCadence">reset_cadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetKeepN">reset_keep_n</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegex">reset_name_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexDelete">reset_name_regex_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexKeep">reset_name_regex_keep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetOlderThan">reset_older_than</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cadence` <a name="reset_cadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetCadence"></a>

```python
def reset_cadence() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_keep_n` <a name="reset_keep_n" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetKeepN"></a>

```python
def reset_keep_n() -> None
```

##### `reset_name_regex` <a name="reset_name_regex" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegex"></a>

```python
def reset_name_regex() -> None
```

##### `reset_name_regex_delete` <a name="reset_name_regex_delete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexDelete"></a>

```python
def reset_name_regex_delete() -> None
```

##### `reset_name_regex_keep` <a name="reset_name_regex_keep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexKeep"></a>

```python
def reset_name_regex_keep() -> None
```

##### `reset_older_than` <a name="reset_older_than" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetOlderThan"></a>

```python
def reset_older_than() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nextRunAt">next_run_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadenceInput">cadence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepNInput">keep_n_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDeleteInput">name_regex_delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexInput">name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeepInput">name_regex_keep_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThanInput">older_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadence">cadence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepN">keep_n</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegex">name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete">name_regex_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep">name_regex_keep</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThan">older_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `next_run_at`<sup>Required</sup> <a name="next_run_at" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nextRunAt"></a>

```python
next_run_at: str
```

- *Type:* str

---

##### `cadence_input`<sup>Optional</sup> <a name="cadence_input" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadenceInput"></a>

```python
cadence_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keep_n_input`<sup>Optional</sup> <a name="keep_n_input" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepNInput"></a>

```python
keep_n_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_regex_delete_input`<sup>Optional</sup> <a name="name_regex_delete_input" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDeleteInput"></a>

```python
name_regex_delete_input: str
```

- *Type:* str

---

##### `name_regex_input`<sup>Optional</sup> <a name="name_regex_input" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexInput"></a>

```python
name_regex_input: str
```

- *Type:* str

---

##### `name_regex_keep_input`<sup>Optional</sup> <a name="name_regex_keep_input" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeepInput"></a>

```python
name_regex_keep_input: str
```

- *Type:* str

---

##### `older_than_input`<sup>Optional</sup> <a name="older_than_input" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThanInput"></a>

```python
older_than_input: str
```

- *Type:* str

---

##### `cadence`<sup>Required</sup> <a name="cadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadence"></a>

```python
cadence: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keep_n`<sup>Required</sup> <a name="keep_n" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepN"></a>

```python
keep_n: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_regex`<sup>Required</sup> <a name="name_regex" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

---

##### `name_regex_delete`<sup>Required</sup> <a name="name_regex_delete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete"></a>

```python
name_regex_delete: str
```

- *Type:* str

---

##### `name_regex_keep`<sup>Required</sup> <a name="name_regex_keep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep"></a>

```python
name_regex_keep: str
```

- *Type:* str

---

##### `older_than`<sup>Required</sup> <a name="older_than" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThan"></a>

```python
older_than: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ProjectContainerExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---


### ProjectPushRulesOutputReference <a name="ProjectPushRulesOutputReference" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project

project.ProjectPushRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetAuthorEmailRegex">reset_author_email_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetBranchNameRegex">reset_branch_name_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterCheck">reset_commit_committer_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterNameCheck">reset_commit_committer_name_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageNegativeRegex">reset_commit_message_negative_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageRegex">reset_commit_message_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetDenyDeleteTag">reset_deny_delete_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetFileNameRegex">reset_file_name_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMaxFileSize">reset_max_file_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMemberCheck">reset_member_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetPreventSecrets">reset_prevent_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectNonDcoCommits">reset_reject_non_dco_commits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectUnsignedCommits">reset_reject_unsigned_commits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_author_email_regex` <a name="reset_author_email_regex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetAuthorEmailRegex"></a>

```python
def reset_author_email_regex() -> None
```

##### `reset_branch_name_regex` <a name="reset_branch_name_regex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetBranchNameRegex"></a>

```python
def reset_branch_name_regex() -> None
```

##### `reset_commit_committer_check` <a name="reset_commit_committer_check" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterCheck"></a>

```python
def reset_commit_committer_check() -> None
```

##### `reset_commit_committer_name_check` <a name="reset_commit_committer_name_check" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterNameCheck"></a>

```python
def reset_commit_committer_name_check() -> None
```

##### `reset_commit_message_negative_regex` <a name="reset_commit_message_negative_regex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageNegativeRegex"></a>

```python
def reset_commit_message_negative_regex() -> None
```

##### `reset_commit_message_regex` <a name="reset_commit_message_regex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageRegex"></a>

```python
def reset_commit_message_regex() -> None
```

##### `reset_deny_delete_tag` <a name="reset_deny_delete_tag" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetDenyDeleteTag"></a>

```python
def reset_deny_delete_tag() -> None
```

##### `reset_file_name_regex` <a name="reset_file_name_regex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetFileNameRegex"></a>

```python
def reset_file_name_regex() -> None
```

##### `reset_max_file_size` <a name="reset_max_file_size" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMaxFileSize"></a>

```python
def reset_max_file_size() -> None
```

##### `reset_member_check` <a name="reset_member_check" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMemberCheck"></a>

```python
def reset_member_check() -> None
```

##### `reset_prevent_secrets` <a name="reset_prevent_secrets" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetPreventSecrets"></a>

```python
def reset_prevent_secrets() -> None
```

##### `reset_reject_non_dco_commits` <a name="reset_reject_non_dco_commits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectNonDcoCommits"></a>

```python
def reset_reject_non_dco_commits() -> None
```

##### `reset_reject_unsigned_commits` <a name="reset_reject_unsigned_commits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectUnsignedCommits"></a>

```python
def reset_reject_unsigned_commits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegexInput">author_email_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegexInput">branch_name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheckInput">commit_committer_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheckInput">commit_committer_name_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegexInput">commit_message_negative_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegexInput">commit_message_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTagInput">deny_delete_tag_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegexInput">file_name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSizeInput">max_file_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheckInput">member_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecretsInput">prevent_secrets_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectNonDcoCommitsInput">reject_non_dco_commits_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommitsInput">reject_unsigned_commits_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegex">author_email_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegex">branch_name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheck">commit_committer_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheck">commit_committer_name_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegex">commit_message_negative_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegex">commit_message_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTag">deny_delete_tag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegex">file_name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheck">member_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecrets">prevent_secrets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectNonDcoCommits">reject_non_dco_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommits">reject_unsigned_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `author_email_regex_input`<sup>Optional</sup> <a name="author_email_regex_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegexInput"></a>

```python
author_email_regex_input: str
```

- *Type:* str

---

##### `branch_name_regex_input`<sup>Optional</sup> <a name="branch_name_regex_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegexInput"></a>

```python
branch_name_regex_input: str
```

- *Type:* str

---

##### `commit_committer_check_input`<sup>Optional</sup> <a name="commit_committer_check_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheckInput"></a>

```python
commit_committer_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_committer_name_check_input`<sup>Optional</sup> <a name="commit_committer_name_check_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheckInput"></a>

```python
commit_committer_name_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_message_negative_regex_input`<sup>Optional</sup> <a name="commit_message_negative_regex_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegexInput"></a>

```python
commit_message_negative_regex_input: str
```

- *Type:* str

---

##### `commit_message_regex_input`<sup>Optional</sup> <a name="commit_message_regex_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegexInput"></a>

```python
commit_message_regex_input: str
```

- *Type:* str

---

##### `deny_delete_tag_input`<sup>Optional</sup> <a name="deny_delete_tag_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTagInput"></a>

```python
deny_delete_tag_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_name_regex_input`<sup>Optional</sup> <a name="file_name_regex_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegexInput"></a>

```python
file_name_regex_input: str
```

- *Type:* str

---

##### `max_file_size_input`<sup>Optional</sup> <a name="max_file_size_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSizeInput"></a>

```python
max_file_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `member_check_input`<sup>Optional</sup> <a name="member_check_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheckInput"></a>

```python
member_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prevent_secrets_input`<sup>Optional</sup> <a name="prevent_secrets_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecretsInput"></a>

```python
prevent_secrets_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reject_non_dco_commits_input`<sup>Optional</sup> <a name="reject_non_dco_commits_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectNonDcoCommitsInput"></a>

```python
reject_non_dco_commits_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reject_unsigned_commits_input`<sup>Optional</sup> <a name="reject_unsigned_commits_input" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommitsInput"></a>

```python
reject_unsigned_commits_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `author_email_regex`<sup>Required</sup> <a name="author_email_regex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegex"></a>

```python
author_email_regex: str
```

- *Type:* str

---

##### `branch_name_regex`<sup>Required</sup> <a name="branch_name_regex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegex"></a>

```python
branch_name_regex: str
```

- *Type:* str

---

##### `commit_committer_check`<sup>Required</sup> <a name="commit_committer_check" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheck"></a>

```python
commit_committer_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_committer_name_check`<sup>Required</sup> <a name="commit_committer_name_check" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheck"></a>

```python
commit_committer_name_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_message_negative_regex`<sup>Required</sup> <a name="commit_message_negative_regex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```python
commit_message_negative_regex: str
```

- *Type:* str

---

##### `commit_message_regex`<sup>Required</sup> <a name="commit_message_regex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegex"></a>

```python
commit_message_regex: str
```

- *Type:* str

---

##### `deny_delete_tag`<sup>Required</sup> <a name="deny_delete_tag" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTag"></a>

```python
deny_delete_tag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_name_regex`<sup>Required</sup> <a name="file_name_regex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegex"></a>

```python
file_name_regex: str
```

- *Type:* str

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `member_check`<sup>Required</sup> <a name="member_check" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheck"></a>

```python
member_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prevent_secrets`<sup>Required</sup> <a name="prevent_secrets" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecrets"></a>

```python
prevent_secrets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reject_non_dco_commits`<sup>Required</sup> <a name="reject_non_dco_commits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectNonDcoCommits"></a>

```python
reject_non_dco_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reject_unsigned_commits`<sup>Required</sup> <a name="reject_unsigned_commits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```python
reject_unsigned_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.internalValue"></a>

```python
internal_value: ProjectPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---


### ProjectTimeoutsOutputReference <a name="ProjectTimeoutsOutputReference" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project

project.ProjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProjectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>]

---



