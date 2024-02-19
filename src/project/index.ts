// https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to true if you want to treat skipped pipelines as if they finished with success.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#allow_merge_on_skipped_pipeline Project#allow_merge_on_skipped_pipeline}
  */
  readonly allowMergeOnSkippedPipeline?: boolean | cdktf.IResolvable;
  /**
  * Set the analytics access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#analytics_access_level Project#analytics_access_level}
  */
  readonly analyticsAccessLevel?: string;
  /**
  * Number of merge request approvals required for merging. Default is 0.
  *   This field **does not** work well in combination with the `gitlab_project_approval_rule` resource
  *   and is most likely gonna be deprecated in a future GitLab version (see [this upstream epic](https://gitlab.com/groups/gitlab-org/-/epics/7572)).
  *   In the meantime we recommend against using this attribute and use `gitlab_project_approval_rule` instead.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#approvals_before_merge Project#approvals_before_merge}
  */
  readonly approvalsBeforeMerge?: number;
  /**
  * Set to `true` to archive the project instead of deleting on destroy. If set to `true` it will entire omit the `DELETE` operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#archive_on_destroy Project#archive_on_destroy}
  */
  readonly archiveOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#archived Project#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
  /**
  * Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#auto_cancel_pending_pipelines Project#auto_cancel_pending_pipelines}
  */
  readonly autoCancelPendingPipelines?: string;
  /**
  * Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#auto_devops_deploy_strategy Project#auto_devops_deploy_strategy}
  */
  readonly autoDevopsDeployStrategy?: string;
  /**
  * Enable Auto DevOps for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#auto_devops_enabled Project#auto_devops_enabled}
  */
  readonly autoDevopsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set whether auto-closing referenced issues on default branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#autoclose_referenced_issues Project#autoclose_referenced_issues}
  */
  readonly autocloseReferencedIssues?: boolean | cdktf.IResolvable;
  /**
  * A local path to the avatar image to upload. **Note**: not available for imported resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#avatar Project#avatar}
  */
  readonly avatar?: string;
  /**
  * The hash of the avatar image. Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#avatar_hash Project#avatar_hash}
  */
  readonly avatarHash?: string;
  /**
  * Test coverage parsing for the project. This is deprecated feature in GitLab 15.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#build_coverage_regex Project#build_coverage_regex}
  */
  readonly buildCoverageRegex?: string;
  /**
  * The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#build_git_strategy Project#build_git_strategy}
  */
  readonly buildGitStrategy?: string;
  /**
  * The maximum amount of time, in seconds, that a job can run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#build_timeout Project#build_timeout}
  */
  readonly buildTimeout?: number;
  /**
  * Set the builds access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#builds_access_level Project#builds_access_level}
  */
  readonly buildsAccessLevel?: string;
  /**
  * Custom Path to CI config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#ci_config_path Project#ci_config_path}
  */
  readonly ciConfigPath?: string;
  /**
  * Default number of revisions for shallow cloning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#ci_default_git_depth Project#ci_default_git_depth}
  */
  readonly ciDefaultGitDepth?: number;
  /**
  * When a new deployment job starts, skip older deployment jobs that are still pending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#ci_forward_deployment_enabled Project#ci_forward_deployment_enabled}
  */
  readonly ciForwardDeploymentEnabled?: boolean | cdktf.IResolvable;
  /**
  * The role required to cancel a pipeline or job. Introduced in GitLab 16.8. Premium and Ultimate only. Valid values are `developer`, `maintainer`, `no one`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#ci_restrict_pipeline_cancellation_role Project#ci_restrict_pipeline_cancellation_role}
  */
  readonly ciRestrictPipelineCancellationRole?: string;
  /**
  * Use separate caches for protected branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#ci_separated_caches Project#ci_separated_caches}
  */
  readonly ciSeparatedCaches?: boolean | cdktf.IResolvable;
  /**
  * Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#container_registry_access_level Project#container_registry_access_level}
  */
  readonly containerRegistryAccessLevel?: string;
  /**
  * Enable container registry for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#container_registry_enabled Project#container_registry_enabled}
  */
  readonly containerRegistryEnabled?: boolean | cdktf.IResolvable;
  /**
  * The default branch for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#default_branch Project#default_branch}
  */
  readonly defaultBranch?: string;
  /**
  * A description of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Disable email notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#emails_disabled Project#emails_disabled}
  */
  readonly emailsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Set the environments access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#environments_access_level Project#environments_access_level}
  */
  readonly environmentsAccessLevel?: string;
  /**
  * The classification label for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#external_authorization_classification_label Project#external_authorization_classification_label}
  */
  readonly externalAuthorizationClassificationLabel?: string;
  /**
  * Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#feature_flags_access_level Project#feature_flags_access_level}
  */
  readonly featureFlagsAccessLevel?: string;
  /**
  * The id of the project to fork. During create the project is forked and during an update the fork relation is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#forked_from_project_id Project#forked_from_project_id}
  */
  readonly forkedFromProjectId?: number;
  /**
  * Set the forking access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#forking_access_level Project#forking_access_level}
  */
  readonly forkingAccessLevel?: string;
  /**
  * Enable group runners for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#group_runners_enabled Project#group_runners_enabled}
  */
  readonly groupRunnersEnabled?: boolean | cdktf.IResolvable;
  /**
  * For group-level custom templates, specifies ID of group from which all the custom project templates are sourced. Leave empty for instance-level templates. Requires use_custom_template to be true (enterprise edition).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#group_with_project_templates_id Project#group_with_project_templates_id}
  */
  readonly groupWithProjectTemplatesId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Git URL to a repository to be imported. Together with `mirror = true` it will setup a Pull Mirror. This can also be used together with `forked_from_project_id` to setup a Pull Mirror for a fork. The fork takes precedence over the import. Make sure to provide the credentials in `import_url_username` and `import_url_password`. GitLab never returns the credentials, thus the provider cannot detect configuration drift in the credentials. They can also not be imported using `terraform import`. See the examples section for how to properly use it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#import_url Project#import_url}
  */
  readonly importUrl?: string;
  /**
  * The password for the `import_url`. The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`. See the examples section for how to properly use it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#import_url_password Project#import_url_password}
  */
  readonly importUrlPassword?: string;
  /**
  * The username for the `import_url`. The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`.  See the examples section for how to properly use it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#import_url_username Project#import_url_username}
  */
  readonly importUrlUsername?: string;
  /**
  * Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#infrastructure_access_level Project#infrastructure_access_level}
  */
  readonly infrastructureAccessLevel?: string;
  /**
  * Create main branch with first commit containing a README.md file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#initialize_with_readme Project#initialize_with_readme}
  */
  readonly initializeWithReadme?: boolean | cdktf.IResolvable;
  /**
  * Set the issues access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#issues_access_level Project#issues_access_level}
  */
  readonly issuesAccessLevel?: string;
  /**
  * Enable issue tracking for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#issues_enabled Project#issues_enabled}
  */
  readonly issuesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Sets the template for new issues in the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#issues_template Project#issues_template}
  */
  readonly issuesTemplate?: string;
  /**
  * Disable or enable the ability to keep the latest artifact for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#keep_latest_artifact Project#keep_latest_artifact}
  */
  readonly keepLatestArtifact?: boolean | cdktf.IResolvable;
  /**
  * Enable LFS for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#lfs_enabled Project#lfs_enabled}
  */
  readonly lfsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Template used to create merge commit message in merge requests. (Introduced in GitLab 14.5.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#merge_commit_template Project#merge_commit_template}
  */
  readonly mergeCommitTemplate?: string;
  /**
  * Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#merge_method Project#merge_method}
  */
  readonly mergeMethod?: string;
  /**
  * Enable or disable merge pipelines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#merge_pipelines_enabled Project#merge_pipelines_enabled}
  */
  readonly mergePipelinesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#merge_requests_access_level Project#merge_requests_access_level}
  */
  readonly mergeRequestsAccessLevel?: string;
  /**
  * Enable merge requests for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#merge_requests_enabled Project#merge_requests_enabled}
  */
  readonly mergeRequestsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Sets the template for new merge requests in the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#merge_requests_template Project#merge_requests_template}
  */
  readonly mergeRequestsTemplate?: string;
  /**
  * Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#merge_trains_enabled Project#merge_trains_enabled}
  */
  readonly mergeTrainsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable project pull mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#mirror Project#mirror}
  */
  readonly mirror?: boolean | cdktf.IResolvable;
  /**
  * Enable overwrite diverged branches for a mirrored project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#mirror_overwrites_diverged_branches Project#mirror_overwrites_diverged_branches}
  */
  readonly mirrorOverwritesDivergedBranches?: boolean | cdktf.IResolvable;
  /**
  * Enable trigger builds on pushes for a mirrored project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#mirror_trigger_builds Project#mirror_trigger_builds}
  */
  readonly mirrorTriggerBuilds?: boolean | cdktf.IResolvable;
  /**
  * Set the monitor access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#monitor_access_level Project#monitor_access_level}
  */
  readonly monitorAccessLevel?: string;
  /**
  * For forked projects, target merge requests to this project. If false, the target will be the upstream project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#mr_default_target_self Project#mr_default_target_self}
  */
  readonly mrDefaultTargetSelf?: boolean | cdktf.IResolvable;
  /**
  * The name of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * The namespace (group or user) of the project. Defaults to your user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#namespace_id Project#namespace_id}
  */
  readonly namespaceId?: number;
  /**
  * Set to true if you want allow merges only if all discussions are resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#only_allow_merge_if_all_discussions_are_resolved Project#only_allow_merge_if_all_discussions_are_resolved}
  */
  readonly onlyAllowMergeIfAllDiscussionsAreResolved?: boolean | cdktf.IResolvable;
  /**
  * Set to true if you want allow merges only if a pipeline succeeds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#only_allow_merge_if_pipeline_succeeds Project#only_allow_merge_if_pipeline_succeeds}
  */
  readonly onlyAllowMergeIfPipelineSucceeds?: boolean | cdktf.IResolvable;
  /**
  * Enable only mirror protected branches for a mirrored project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#only_mirror_protected_branches Project#only_mirror_protected_branches}
  */
  readonly onlyMirrorProtectedBranches?: boolean | cdktf.IResolvable;
  /**
  * Enable packages repository for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#packages_enabled Project#packages_enabled}
  */
  readonly packagesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#pages_access_level Project#pages_access_level}
  */
  readonly pagesAccessLevel?: string;
  /**
  * The path of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#path Project#path}
  */
  readonly path?: string;
  /**
  * Enable pipelines for the project. The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#pipelines_enabled Project#pipelines_enabled}
  */
  readonly pipelinesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Show link to create/view merge request when pushing from the command line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#printing_merge_request_link_enabled Project#printing_merge_request_link_enabled}
  */
  readonly printingMergeRequestLinkEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true, jobs can be viewed by non-project members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#public_builds Project#public_builds}
  */
  readonly publicBuilds?: boolean | cdktf.IResolvable;
  /**
  * If true, jobs can be viewed by non-project members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#public_jobs Project#public_jobs}
  */
  readonly publicJobs?: boolean | cdktf.IResolvable;
  /**
  * Set the releases access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#releases_access_level Project#releases_access_level}
  */
  readonly releasesAccessLevel?: string;
  /**
  * Enable `Delete source branch` option by default for all new merge requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#remove_source_branch_after_merge Project#remove_source_branch_after_merge}
  */
  readonly removeSourceBranchAfterMerge?: boolean | cdktf.IResolvable;
  /**
  * Set the repository access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#repository_access_level Project#repository_access_level}
  */
  readonly repositoryAccessLevel?: string;
  /**
  * 	Which storage shard the repository is on. (administrator only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#repository_storage Project#repository_storage}
  */
  readonly repositoryStorage?: string;
  /**
  * Allow users to request member access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#request_access_enabled Project#request_access_enabled}
  */
  readonly requestAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set the requirements access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#requirements_access_level Project#requirements_access_level}
  */
  readonly requirementsAccessLevel?: string;
  /**
  * Automatically resolve merge request diffs discussions on lines changed with a push.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#resolve_outdated_diff_discussions Project#resolve_outdated_diff_discussions}
  */
  readonly resolveOutdatedDiffDiscussions?: boolean | cdktf.IResolvable;
  /**
  * Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#restrict_user_defined_variables Project#restrict_user_defined_variables}
  */
  readonly restrictUserDefinedVariables?: boolean | cdktf.IResolvable;
  /**
  * Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#security_and_compliance_access_level Project#security_and_compliance_access_level}
  */
  readonly securityAndComplianceAccessLevel?: string;
  /**
  * Enable shared runners for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#shared_runners_enabled Project#shared_runners_enabled}
  */
  readonly sharedRunnersEnabled?: boolean | cdktf.IResolvable;
  /**
  * If `true`, the default behavior to wait for the default branch protection to be created is skipped.
  * This is necessary if the current user is not an admin and the default branch protection is disabled on an instance-level.
  * There is currently no known way to determine if the default branch protection is disabled on an instance-level for non-admin users.
  * This attribute is only used during resource creation, thus changes are suppressed and the attribute cannot be imported.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#skip_wait_for_default_branch_protection Project#skip_wait_for_default_branch_protection}
  */
  readonly skipWaitForDefaultBranchProtection?: boolean | cdktf.IResolvable;
  /**
  * Set the snippets access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#snippets_access_level Project#snippets_access_level}
  */
  readonly snippetsAccessLevel?: string;
  /**
  * Enable snippets for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#snippets_enabled Project#snippets_enabled}
  */
  readonly snippetsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Template used to create squash commit message in merge requests. (Introduced in GitLab 14.6.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#squash_commit_template Project#squash_commit_template}
  */
  readonly squashCommitTemplate?: string;
  /**
  * Squash commits when merge request. Valid values are `never`, `always`, `default_on`, or `default_off`. The default value is `default_off`. [GitLab >= 14.1]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#squash_option Project#squash_option}
  */
  readonly squashOption?: string;
  /**
  * The commit message used to apply merge request suggestions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#suggestion_commit_message Project#suggestion_commit_message}
  */
  readonly suggestionCommitMessage?: string;
  /**
  * The list of tags for a project; put array of tags, that should be finally assigned to a project. Use topics instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#tags Project#tags}
  */
  readonly tags?: string[];
  /**
  * When used without use_custom_template, name of a built-in project template. When used with use_custom_template, name of a custom project template. This option is mutually exclusive with `template_project_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#template_name Project#template_name}
  */
  readonly templateName?: string;
  /**
  * When used with use_custom_template, project ID of a custom project template. This is preferable to using template_name since template_name may be ambiguous (enterprise edition). This option is mutually exclusive with `template_name`. See `gitlab_group_project_file_template` to set a project as a template project. If a project has not been set as a template, using it here will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#template_project_id Project#template_project_id}
  */
  readonly templateProjectId?: number;
  /**
  * The list of topics for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#topics Project#topics}
  */
  readonly topics?: string[];
  /**
  * Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition).
  * 		~> When using a custom template, [Group Tokens won't work](https://docs.gitlab.com/15.7/ee/user/project/settings/import_export_troubleshooting.html#import-using-the-rest-api-fails-when-using-a-group-access-token). You must use a real user's Personal Access Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#use_custom_template Project#use_custom_template}
  */
  readonly useCustomTemplate?: boolean | cdktf.IResolvable;
  /**
  * Set to `public` to create a public project. Valid values are `private`, `internal`, `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#visibility_level Project#visibility_level}
  */
  readonly visibilityLevel?: string;
  /**
  * Set the wiki access level. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#wiki_access_level Project#wiki_access_level}
  */
  readonly wikiAccessLevel?: string;
  /**
  * Enable wiki for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#wiki_enabled Project#wiki_enabled}
  */
  readonly wikiEnabled?: boolean | cdktf.IResolvable;
  /**
  * container_expiration_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#container_expiration_policy Project#container_expiration_policy}
  */
  readonly containerExpirationPolicy?: ProjectContainerExpirationPolicy;
  /**
  * push_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#push_rules Project#push_rules}
  */
  readonly pushRules?: ProjectPushRules;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#timeouts Project#timeouts}
  */
  readonly timeouts?: ProjectTimeouts;
}
export interface ProjectContainerExpirationPolicy {
  /**
  * The cadence of the policy. Valid values are: `1d`, `7d`, `14d`, `1month`, `3month`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#cadence Project#cadence}
  */
  readonly cadence?: string;
  /**
  * If true, the policy is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#enabled Project#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of images to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#keep_n Project#keep_n}
  */
  readonly keepN?: number;
  /**
  * The regular expression to match image names to delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#name_regex Project#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * The regular expression to match image names to delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#name_regex_delete Project#name_regex_delete}
  */
  readonly nameRegexDelete?: string;
  /**
  * The regular expression to match image names to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#name_regex_keep Project#name_regex_keep}
  */
  readonly nameRegexKeep?: string;
  /**
  * The number of days to keep images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#older_than Project#older_than}
  */
  readonly olderThan?: string;
}

export function projectContainerExpirationPolicyToTerraform(struct?: ProjectContainerExpirationPolicyOutputReference | ProjectContainerExpirationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cadence: cdktf.stringToTerraform(struct!.cadence),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    keep_n: cdktf.numberToTerraform(struct!.keepN),
    name_regex: cdktf.stringToTerraform(struct!.nameRegex),
    name_regex_delete: cdktf.stringToTerraform(struct!.nameRegexDelete),
    name_regex_keep: cdktf.stringToTerraform(struct!.nameRegexKeep),
    older_than: cdktf.stringToTerraform(struct!.olderThan),
  }
}


export function projectContainerExpirationPolicyToHclTerraform(struct?: ProjectContainerExpirationPolicyOutputReference | ProjectContainerExpirationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cadence: {
      value: cdktf.stringToHclTerraform(struct!.cadence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_n: {
      value: cdktf.numberToHclTerraform(struct!.keepN),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_regex: {
      value: cdktf.stringToHclTerraform(struct!.nameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_regex_delete: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_regex_keep: {
      value: cdktf.stringToHclTerraform(struct!.nameRegexKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    older_than: {
      value: cdktf.stringToHclTerraform(struct!.olderThan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectContainerExpirationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectContainerExpirationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cadence !== undefined) {
      hasAnyValues = true;
      internalValueResult.cadence = this._cadence;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._keepN !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepN = this._keepN;
    }
    if (this._nameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegex = this._nameRegex;
    }
    if (this._nameRegexDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexDelete = this._nameRegexDelete;
    }
    if (this._nameRegexKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegexKeep = this._nameRegexKeep;
    }
    if (this._olderThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.olderThan = this._olderThan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectContainerExpirationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cadence = undefined;
      this._enabled = undefined;
      this._keepN = undefined;
      this._nameRegex = undefined;
      this._nameRegexDelete = undefined;
      this._nameRegexKeep = undefined;
      this._olderThan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cadence = value.cadence;
      this._enabled = value.enabled;
      this._keepN = value.keepN;
      this._nameRegex = value.nameRegex;
      this._nameRegexDelete = value.nameRegexDelete;
      this._nameRegexKeep = value.nameRegexKeep;
      this._olderThan = value.olderThan;
    }
  }

  // cadence - computed: true, optional: true, required: false
  private _cadence?: string; 
  public get cadence() {
    return this.getStringAttribute('cadence');
  }
  public set cadence(value: string) {
    this._cadence = value;
  }
  public resetCadence() {
    this._cadence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cadenceInput() {
    return this._cadence;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // keep_n - computed: true, optional: true, required: false
  private _keepN?: number; 
  public get keepN() {
    return this.getNumberAttribute('keep_n');
  }
  public set keepN(value: number) {
    this._keepN = value;
  }
  public resetKeepN() {
    this._keepN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepNInput() {
    return this._keepN;
  }

  // name_regex - computed: true, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // name_regex_delete - computed: true, optional: true, required: false
  private _nameRegexDelete?: string; 
  public get nameRegexDelete() {
    return this.getStringAttribute('name_regex_delete');
  }
  public set nameRegexDelete(value: string) {
    this._nameRegexDelete = value;
  }
  public resetNameRegexDelete() {
    this._nameRegexDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexDeleteInput() {
    return this._nameRegexDelete;
  }

  // name_regex_keep - computed: true, optional: true, required: false
  private _nameRegexKeep?: string; 
  public get nameRegexKeep() {
    return this.getStringAttribute('name_regex_keep');
  }
  public set nameRegexKeep(value: string) {
    this._nameRegexKeep = value;
  }
  public resetNameRegexKeep() {
    this._nameRegexKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexKeepInput() {
    return this._nameRegexKeep;
  }

  // next_run_at - computed: true, optional: false, required: false
  public get nextRunAt() {
    return this.getStringAttribute('next_run_at');
  }

  // older_than - computed: true, optional: true, required: false
  private _olderThan?: string; 
  public get olderThan() {
    return this.getStringAttribute('older_than');
  }
  public set olderThan(value: string) {
    this._olderThan = value;
  }
  public resetOlderThan() {
    this._olderThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get olderThanInput() {
    return this._olderThan;
  }
}
export interface ProjectPushRules {
  /**
  * All commit author emails must match this regex, e.g. `@my-company.com$`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#author_email_regex Project#author_email_regex}
  */
  readonly authorEmailRegex?: string;
  /**
  * All branch names must match this regex, e.g. `(feature|hotfix)\/*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#branch_name_regex Project#branch_name_regex}
  */
  readonly branchNameRegex?: string;
  /**
  * Users can only push commits to this repository that were committed with one of their own verified emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#commit_committer_check Project#commit_committer_check}
  */
  readonly commitCommitterCheck?: boolean | cdktf.IResolvable;
  /**
  * No commit message is allowed to match this regex, for example `ssh\:\/\/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#commit_message_negative_regex Project#commit_message_negative_regex}
  */
  readonly commitMessageNegativeRegex?: string;
  /**
  * All commit messages must match this regex, e.g. `Fixed \d+\..*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#commit_message_regex Project#commit_message_regex}
  */
  readonly commitMessageRegex?: string;
  /**
  * Deny deleting a tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#deny_delete_tag Project#deny_delete_tag}
  */
  readonly denyDeleteTag?: boolean | cdktf.IResolvable;
  /**
  * All committed filenames must not match this regex, e.g. `(jar|exe)$`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#file_name_regex Project#file_name_regex}
  */
  readonly fileNameRegex?: string;
  /**
  * Maximum file size (MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#max_file_size Project#max_file_size}
  */
  readonly maxFileSize?: number;
  /**
  * Restrict commits by author (email) to existing GitLab users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#member_check Project#member_check}
  */
  readonly memberCheck?: boolean | cdktf.IResolvable;
  /**
  * GitLab will reject any files that are likely to contain secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#prevent_secrets Project#prevent_secrets}
  */
  readonly preventSecrets?: boolean | cdktf.IResolvable;
  /**
  * Reject commit when it’s not signed through GPG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#reject_unsigned_commits Project#reject_unsigned_commits}
  */
  readonly rejectUnsignedCommits?: boolean | cdktf.IResolvable;
}

export function projectPushRulesToTerraform(struct?: ProjectPushRulesOutputReference | ProjectPushRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    author_email_regex: cdktf.stringToTerraform(struct!.authorEmailRegex),
    branch_name_regex: cdktf.stringToTerraform(struct!.branchNameRegex),
    commit_committer_check: cdktf.booleanToTerraform(struct!.commitCommitterCheck),
    commit_message_negative_regex: cdktf.stringToTerraform(struct!.commitMessageNegativeRegex),
    commit_message_regex: cdktf.stringToTerraform(struct!.commitMessageRegex),
    deny_delete_tag: cdktf.booleanToTerraform(struct!.denyDeleteTag),
    file_name_regex: cdktf.stringToTerraform(struct!.fileNameRegex),
    max_file_size: cdktf.numberToTerraform(struct!.maxFileSize),
    member_check: cdktf.booleanToTerraform(struct!.memberCheck),
    prevent_secrets: cdktf.booleanToTerraform(struct!.preventSecrets),
    reject_unsigned_commits: cdktf.booleanToTerraform(struct!.rejectUnsignedCommits),
  }
}


export function projectPushRulesToHclTerraform(struct?: ProjectPushRulesOutputReference | ProjectPushRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    author_email_regex: {
      value: cdktf.stringToHclTerraform(struct!.authorEmailRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch_name_regex: {
      value: cdktf.stringToHclTerraform(struct!.branchNameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_committer_check: {
      value: cdktf.booleanToHclTerraform(struct!.commitCommitterCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    commit_message_negative_regex: {
      value: cdktf.stringToHclTerraform(struct!.commitMessageNegativeRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_message_regex: {
      value: cdktf.stringToHclTerraform(struct!.commitMessageRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_delete_tag: {
      value: cdktf.booleanToHclTerraform(struct!.denyDeleteTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_name_regex: {
      value: cdktf.stringToHclTerraform(struct!.fileNameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_file_size: {
      value: cdktf.numberToHclTerraform(struct!.maxFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    member_check: {
      value: cdktf.booleanToHclTerraform(struct!.memberCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prevent_secrets: {
      value: cdktf.booleanToHclTerraform(struct!.preventSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reject_unsigned_commits: {
      value: cdktf.booleanToHclTerraform(struct!.rejectUnsignedCommits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectPushRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectPushRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorEmailRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorEmailRegex = this._authorEmailRegex;
    }
    if (this._branchNameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchNameRegex = this._branchNameRegex;
    }
    if (this._commitCommitterCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitCommitterCheck = this._commitCommitterCheck;
    }
    if (this._commitMessageNegativeRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitMessageNegativeRegex = this._commitMessageNegativeRegex;
    }
    if (this._commitMessageRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitMessageRegex = this._commitMessageRegex;
    }
    if (this._denyDeleteTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDeleteTag = this._denyDeleteTag;
    }
    if (this._fileNameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileNameRegex = this._fileNameRegex;
    }
    if (this._maxFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFileSize = this._maxFileSize;
    }
    if (this._memberCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberCheck = this._memberCheck;
    }
    if (this._preventSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventSecrets = this._preventSecrets;
    }
    if (this._rejectUnsignedCommits !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectUnsignedCommits = this._rejectUnsignedCommits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectPushRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorEmailRegex = undefined;
      this._branchNameRegex = undefined;
      this._commitCommitterCheck = undefined;
      this._commitMessageNegativeRegex = undefined;
      this._commitMessageRegex = undefined;
      this._denyDeleteTag = undefined;
      this._fileNameRegex = undefined;
      this._maxFileSize = undefined;
      this._memberCheck = undefined;
      this._preventSecrets = undefined;
      this._rejectUnsignedCommits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorEmailRegex = value.authorEmailRegex;
      this._branchNameRegex = value.branchNameRegex;
      this._commitCommitterCheck = value.commitCommitterCheck;
      this._commitMessageNegativeRegex = value.commitMessageNegativeRegex;
      this._commitMessageRegex = value.commitMessageRegex;
      this._denyDeleteTag = value.denyDeleteTag;
      this._fileNameRegex = value.fileNameRegex;
      this._maxFileSize = value.maxFileSize;
      this._memberCheck = value.memberCheck;
      this._preventSecrets = value.preventSecrets;
      this._rejectUnsignedCommits = value.rejectUnsignedCommits;
    }
  }

  // author_email_regex - computed: false, optional: true, required: false
  private _authorEmailRegex?: string; 
  public get authorEmailRegex() {
    return this.getStringAttribute('author_email_regex');
  }
  public set authorEmailRegex(value: string) {
    this._authorEmailRegex = value;
  }
  public resetAuthorEmailRegex() {
    this._authorEmailRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorEmailRegexInput() {
    return this._authorEmailRegex;
  }

  // branch_name_regex - computed: false, optional: true, required: false
  private _branchNameRegex?: string; 
  public get branchNameRegex() {
    return this.getStringAttribute('branch_name_regex');
  }
  public set branchNameRegex(value: string) {
    this._branchNameRegex = value;
  }
  public resetBranchNameRegex() {
    this._branchNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameRegexInput() {
    return this._branchNameRegex;
  }

  // commit_committer_check - computed: false, optional: true, required: false
  private _commitCommitterCheck?: boolean | cdktf.IResolvable; 
  public get commitCommitterCheck() {
    return this.getBooleanAttribute('commit_committer_check');
  }
  public set commitCommitterCheck(value: boolean | cdktf.IResolvable) {
    this._commitCommitterCheck = value;
  }
  public resetCommitCommitterCheck() {
    this._commitCommitterCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitCommitterCheckInput() {
    return this._commitCommitterCheck;
  }

  // commit_message_negative_regex - computed: false, optional: true, required: false
  private _commitMessageNegativeRegex?: string; 
  public get commitMessageNegativeRegex() {
    return this.getStringAttribute('commit_message_negative_regex');
  }
  public set commitMessageNegativeRegex(value: string) {
    this._commitMessageNegativeRegex = value;
  }
  public resetCommitMessageNegativeRegex() {
    this._commitMessageNegativeRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessageNegativeRegexInput() {
    return this._commitMessageNegativeRegex;
  }

  // commit_message_regex - computed: false, optional: true, required: false
  private _commitMessageRegex?: string; 
  public get commitMessageRegex() {
    return this.getStringAttribute('commit_message_regex');
  }
  public set commitMessageRegex(value: string) {
    this._commitMessageRegex = value;
  }
  public resetCommitMessageRegex() {
    this._commitMessageRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessageRegexInput() {
    return this._commitMessageRegex;
  }

  // deny_delete_tag - computed: false, optional: true, required: false
  private _denyDeleteTag?: boolean | cdktf.IResolvable; 
  public get denyDeleteTag() {
    return this.getBooleanAttribute('deny_delete_tag');
  }
  public set denyDeleteTag(value: boolean | cdktf.IResolvable) {
    this._denyDeleteTag = value;
  }
  public resetDenyDeleteTag() {
    this._denyDeleteTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDeleteTagInput() {
    return this._denyDeleteTag;
  }

  // file_name_regex - computed: false, optional: true, required: false
  private _fileNameRegex?: string; 
  public get fileNameRegex() {
    return this.getStringAttribute('file_name_regex');
  }
  public set fileNameRegex(value: string) {
    this._fileNameRegex = value;
  }
  public resetFileNameRegex() {
    this._fileNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameRegexInput() {
    return this._fileNameRegex;
  }

  // max_file_size - computed: false, optional: true, required: false
  private _maxFileSize?: number; 
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }
  public set maxFileSize(value: number) {
    this._maxFileSize = value;
  }
  public resetMaxFileSize() {
    this._maxFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize;
  }

  // member_check - computed: false, optional: true, required: false
  private _memberCheck?: boolean | cdktf.IResolvable; 
  public get memberCheck() {
    return this.getBooleanAttribute('member_check');
  }
  public set memberCheck(value: boolean | cdktf.IResolvable) {
    this._memberCheck = value;
  }
  public resetMemberCheck() {
    this._memberCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberCheckInput() {
    return this._memberCheck;
  }

  // prevent_secrets - computed: false, optional: true, required: false
  private _preventSecrets?: boolean | cdktf.IResolvable; 
  public get preventSecrets() {
    return this.getBooleanAttribute('prevent_secrets');
  }
  public set preventSecrets(value: boolean | cdktf.IResolvable) {
    this._preventSecrets = value;
  }
  public resetPreventSecrets() {
    this._preventSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventSecretsInput() {
    return this._preventSecrets;
  }

  // reject_unsigned_commits - computed: false, optional: true, required: false
  private _rejectUnsignedCommits?: boolean | cdktf.IResolvable; 
  public get rejectUnsignedCommits() {
    return this.getBooleanAttribute('reject_unsigned_commits');
  }
  public set rejectUnsignedCommits(value: boolean | cdktf.IResolvable) {
    this._rejectUnsignedCommits = value;
  }
  public resetRejectUnsignedCommits() {
    this._rejectUnsignedCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnsignedCommitsInput() {
    return this._rejectUnsignedCommits;
  }
}
export interface ProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#create Project#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#delete Project#delete}
  */
  readonly delete?: string;
}

export function projectTimeoutsToTerraform(struct?: ProjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function projectTimeoutsToHclTerraform(struct?: ProjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project gitlab_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/resources/project gitlab_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.9.1',
        providerVersionConstraint: '~> 16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowMergeOnSkippedPipeline = config.allowMergeOnSkippedPipeline;
    this._analyticsAccessLevel = config.analyticsAccessLevel;
    this._approvalsBeforeMerge = config.approvalsBeforeMerge;
    this._archiveOnDestroy = config.archiveOnDestroy;
    this._archived = config.archived;
    this._autoCancelPendingPipelines = config.autoCancelPendingPipelines;
    this._autoDevopsDeployStrategy = config.autoDevopsDeployStrategy;
    this._autoDevopsEnabled = config.autoDevopsEnabled;
    this._autocloseReferencedIssues = config.autocloseReferencedIssues;
    this._avatar = config.avatar;
    this._avatarHash = config.avatarHash;
    this._buildCoverageRegex = config.buildCoverageRegex;
    this._buildGitStrategy = config.buildGitStrategy;
    this._buildTimeout = config.buildTimeout;
    this._buildsAccessLevel = config.buildsAccessLevel;
    this._ciConfigPath = config.ciConfigPath;
    this._ciDefaultGitDepth = config.ciDefaultGitDepth;
    this._ciForwardDeploymentEnabled = config.ciForwardDeploymentEnabled;
    this._ciRestrictPipelineCancellationRole = config.ciRestrictPipelineCancellationRole;
    this._ciSeparatedCaches = config.ciSeparatedCaches;
    this._containerRegistryAccessLevel = config.containerRegistryAccessLevel;
    this._containerRegistryEnabled = config.containerRegistryEnabled;
    this._defaultBranch = config.defaultBranch;
    this._description = config.description;
    this._emailsDisabled = config.emailsDisabled;
    this._environmentsAccessLevel = config.environmentsAccessLevel;
    this._externalAuthorizationClassificationLabel = config.externalAuthorizationClassificationLabel;
    this._featureFlagsAccessLevel = config.featureFlagsAccessLevel;
    this._forkedFromProjectId = config.forkedFromProjectId;
    this._forkingAccessLevel = config.forkingAccessLevel;
    this._groupRunnersEnabled = config.groupRunnersEnabled;
    this._groupWithProjectTemplatesId = config.groupWithProjectTemplatesId;
    this._id = config.id;
    this._importUrl = config.importUrl;
    this._importUrlPassword = config.importUrlPassword;
    this._importUrlUsername = config.importUrlUsername;
    this._infrastructureAccessLevel = config.infrastructureAccessLevel;
    this._initializeWithReadme = config.initializeWithReadme;
    this._issuesAccessLevel = config.issuesAccessLevel;
    this._issuesEnabled = config.issuesEnabled;
    this._issuesTemplate = config.issuesTemplate;
    this._keepLatestArtifact = config.keepLatestArtifact;
    this._lfsEnabled = config.lfsEnabled;
    this._mergeCommitTemplate = config.mergeCommitTemplate;
    this._mergeMethod = config.mergeMethod;
    this._mergePipelinesEnabled = config.mergePipelinesEnabled;
    this._mergeRequestsAccessLevel = config.mergeRequestsAccessLevel;
    this._mergeRequestsEnabled = config.mergeRequestsEnabled;
    this._mergeRequestsTemplate = config.mergeRequestsTemplate;
    this._mergeTrainsEnabled = config.mergeTrainsEnabled;
    this._mirror = config.mirror;
    this._mirrorOverwritesDivergedBranches = config.mirrorOverwritesDivergedBranches;
    this._mirrorTriggerBuilds = config.mirrorTriggerBuilds;
    this._monitorAccessLevel = config.monitorAccessLevel;
    this._mrDefaultTargetSelf = config.mrDefaultTargetSelf;
    this._name = config.name;
    this._namespaceId = config.namespaceId;
    this._onlyAllowMergeIfAllDiscussionsAreResolved = config.onlyAllowMergeIfAllDiscussionsAreResolved;
    this._onlyAllowMergeIfPipelineSucceeds = config.onlyAllowMergeIfPipelineSucceeds;
    this._onlyMirrorProtectedBranches = config.onlyMirrorProtectedBranches;
    this._packagesEnabled = config.packagesEnabled;
    this._pagesAccessLevel = config.pagesAccessLevel;
    this._path = config.path;
    this._pipelinesEnabled = config.pipelinesEnabled;
    this._printingMergeRequestLinkEnabled = config.printingMergeRequestLinkEnabled;
    this._publicBuilds = config.publicBuilds;
    this._publicJobs = config.publicJobs;
    this._releasesAccessLevel = config.releasesAccessLevel;
    this._removeSourceBranchAfterMerge = config.removeSourceBranchAfterMerge;
    this._repositoryAccessLevel = config.repositoryAccessLevel;
    this._repositoryStorage = config.repositoryStorage;
    this._requestAccessEnabled = config.requestAccessEnabled;
    this._requirementsAccessLevel = config.requirementsAccessLevel;
    this._resolveOutdatedDiffDiscussions = config.resolveOutdatedDiffDiscussions;
    this._restrictUserDefinedVariables = config.restrictUserDefinedVariables;
    this._securityAndComplianceAccessLevel = config.securityAndComplianceAccessLevel;
    this._sharedRunnersEnabled = config.sharedRunnersEnabled;
    this._skipWaitForDefaultBranchProtection = config.skipWaitForDefaultBranchProtection;
    this._snippetsAccessLevel = config.snippetsAccessLevel;
    this._snippetsEnabled = config.snippetsEnabled;
    this._squashCommitTemplate = config.squashCommitTemplate;
    this._squashOption = config.squashOption;
    this._suggestionCommitMessage = config.suggestionCommitMessage;
    this._tags = config.tags;
    this._templateName = config.templateName;
    this._templateProjectId = config.templateProjectId;
    this._topics = config.topics;
    this._useCustomTemplate = config.useCustomTemplate;
    this._visibilityLevel = config.visibilityLevel;
    this._wikiAccessLevel = config.wikiAccessLevel;
    this._wikiEnabled = config.wikiEnabled;
    this._containerExpirationPolicy.internalValue = config.containerExpirationPolicy;
    this._pushRules.internalValue = config.pushRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_merge_on_skipped_pipeline - computed: true, optional: true, required: false
  private _allowMergeOnSkippedPipeline?: boolean | cdktf.IResolvable; 
  public get allowMergeOnSkippedPipeline() {
    return this.getBooleanAttribute('allow_merge_on_skipped_pipeline');
  }
  public set allowMergeOnSkippedPipeline(value: boolean | cdktf.IResolvable) {
    this._allowMergeOnSkippedPipeline = value;
  }
  public resetAllowMergeOnSkippedPipeline() {
    this._allowMergeOnSkippedPipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMergeOnSkippedPipelineInput() {
    return this._allowMergeOnSkippedPipeline;
  }

  // analytics_access_level - computed: true, optional: true, required: false
  private _analyticsAccessLevel?: string; 
  public get analyticsAccessLevel() {
    return this.getStringAttribute('analytics_access_level');
  }
  public set analyticsAccessLevel(value: string) {
    this._analyticsAccessLevel = value;
  }
  public resetAnalyticsAccessLevel() {
    this._analyticsAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsAccessLevelInput() {
    return this._analyticsAccessLevel;
  }

  // approvals_before_merge - computed: false, optional: true, required: false
  private _approvalsBeforeMerge?: number; 
  public get approvalsBeforeMerge() {
    return this.getNumberAttribute('approvals_before_merge');
  }
  public set approvalsBeforeMerge(value: number) {
    this._approvalsBeforeMerge = value;
  }
  public resetApprovalsBeforeMerge() {
    this._approvalsBeforeMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalsBeforeMergeInput() {
    return this._approvalsBeforeMerge;
  }

  // archive_on_destroy - computed: false, optional: true, required: false
  private _archiveOnDestroy?: boolean | cdktf.IResolvable; 
  public get archiveOnDestroy() {
    return this.getBooleanAttribute('archive_on_destroy');
  }
  public set archiveOnDestroy(value: boolean | cdktf.IResolvable) {
    this._archiveOnDestroy = value;
  }
  public resetArchiveOnDestroy() {
    this._archiveOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveOnDestroyInput() {
    return this._archiveOnDestroy;
  }

  // archived - computed: false, optional: true, required: false
  private _archived?: boolean | cdktf.IResolvable; 
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean | cdktf.IResolvable) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived;
  }

  // auto_cancel_pending_pipelines - computed: true, optional: true, required: false
  private _autoCancelPendingPipelines?: string; 
  public get autoCancelPendingPipelines() {
    return this.getStringAttribute('auto_cancel_pending_pipelines');
  }
  public set autoCancelPendingPipelines(value: string) {
    this._autoCancelPendingPipelines = value;
  }
  public resetAutoCancelPendingPipelines() {
    this._autoCancelPendingPipelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCancelPendingPipelinesInput() {
    return this._autoCancelPendingPipelines;
  }

  // auto_devops_deploy_strategy - computed: true, optional: true, required: false
  private _autoDevopsDeployStrategy?: string; 
  public get autoDevopsDeployStrategy() {
    return this.getStringAttribute('auto_devops_deploy_strategy');
  }
  public set autoDevopsDeployStrategy(value: string) {
    this._autoDevopsDeployStrategy = value;
  }
  public resetAutoDevopsDeployStrategy() {
    this._autoDevopsDeployStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDevopsDeployStrategyInput() {
    return this._autoDevopsDeployStrategy;
  }

  // auto_devops_enabled - computed: true, optional: true, required: false
  private _autoDevopsEnabled?: boolean | cdktf.IResolvable; 
  public get autoDevopsEnabled() {
    return this.getBooleanAttribute('auto_devops_enabled');
  }
  public set autoDevopsEnabled(value: boolean | cdktf.IResolvable) {
    this._autoDevopsEnabled = value;
  }
  public resetAutoDevopsEnabled() {
    this._autoDevopsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDevopsEnabledInput() {
    return this._autoDevopsEnabled;
  }

  // autoclose_referenced_issues - computed: true, optional: true, required: false
  private _autocloseReferencedIssues?: boolean | cdktf.IResolvable; 
  public get autocloseReferencedIssues() {
    return this.getBooleanAttribute('autoclose_referenced_issues');
  }
  public set autocloseReferencedIssues(value: boolean | cdktf.IResolvable) {
    this._autocloseReferencedIssues = value;
  }
  public resetAutocloseReferencedIssues() {
    this._autocloseReferencedIssues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autocloseReferencedIssuesInput() {
    return this._autocloseReferencedIssues;
  }

  // avatar - computed: false, optional: true, required: false
  private _avatar?: string; 
  public get avatar() {
    return this.getStringAttribute('avatar');
  }
  public set avatar(value: string) {
    this._avatar = value;
  }
  public resetAvatar() {
    this._avatar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarInput() {
    return this._avatar;
  }

  // avatar_hash - computed: true, optional: true, required: false
  private _avatarHash?: string; 
  public get avatarHash() {
    return this.getStringAttribute('avatar_hash');
  }
  public set avatarHash(value: string) {
    this._avatarHash = value;
  }
  public resetAvatarHash() {
    this._avatarHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarHashInput() {
    return this._avatarHash;
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // build_coverage_regex - computed: false, optional: true, required: false
  private _buildCoverageRegex?: string; 
  public get buildCoverageRegex() {
    return this.getStringAttribute('build_coverage_regex');
  }
  public set buildCoverageRegex(value: string) {
    this._buildCoverageRegex = value;
  }
  public resetBuildCoverageRegex() {
    this._buildCoverageRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCoverageRegexInput() {
    return this._buildCoverageRegex;
  }

  // build_git_strategy - computed: true, optional: true, required: false
  private _buildGitStrategy?: string; 
  public get buildGitStrategy() {
    return this.getStringAttribute('build_git_strategy');
  }
  public set buildGitStrategy(value: string) {
    this._buildGitStrategy = value;
  }
  public resetBuildGitStrategy() {
    this._buildGitStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildGitStrategyInput() {
    return this._buildGitStrategy;
  }

  // build_timeout - computed: true, optional: true, required: false
  private _buildTimeout?: number; 
  public get buildTimeout() {
    return this.getNumberAttribute('build_timeout');
  }
  public set buildTimeout(value: number) {
    this._buildTimeout = value;
  }
  public resetBuildTimeout() {
    this._buildTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTimeoutInput() {
    return this._buildTimeout;
  }

  // builds_access_level - computed: true, optional: true, required: false
  private _buildsAccessLevel?: string; 
  public get buildsAccessLevel() {
    return this.getStringAttribute('builds_access_level');
  }
  public set buildsAccessLevel(value: string) {
    this._buildsAccessLevel = value;
  }
  public resetBuildsAccessLevel() {
    this._buildsAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildsAccessLevelInput() {
    return this._buildsAccessLevel;
  }

  // ci_config_path - computed: false, optional: true, required: false
  private _ciConfigPath?: string; 
  public get ciConfigPath() {
    return this.getStringAttribute('ci_config_path');
  }
  public set ciConfigPath(value: string) {
    this._ciConfigPath = value;
  }
  public resetCiConfigPath() {
    this._ciConfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciConfigPathInput() {
    return this._ciConfigPath;
  }

  // ci_default_git_depth - computed: true, optional: true, required: false
  private _ciDefaultGitDepth?: number; 
  public get ciDefaultGitDepth() {
    return this.getNumberAttribute('ci_default_git_depth');
  }
  public set ciDefaultGitDepth(value: number) {
    this._ciDefaultGitDepth = value;
  }
  public resetCiDefaultGitDepth() {
    this._ciDefaultGitDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciDefaultGitDepthInput() {
    return this._ciDefaultGitDepth;
  }

  // ci_forward_deployment_enabled - computed: true, optional: true, required: false
  private _ciForwardDeploymentEnabled?: boolean | cdktf.IResolvable; 
  public get ciForwardDeploymentEnabled() {
    return this.getBooleanAttribute('ci_forward_deployment_enabled');
  }
  public set ciForwardDeploymentEnabled(value: boolean | cdktf.IResolvable) {
    this._ciForwardDeploymentEnabled = value;
  }
  public resetCiForwardDeploymentEnabled() {
    this._ciForwardDeploymentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciForwardDeploymentEnabledInput() {
    return this._ciForwardDeploymentEnabled;
  }

  // ci_restrict_pipeline_cancellation_role - computed: true, optional: true, required: false
  private _ciRestrictPipelineCancellationRole?: string; 
  public get ciRestrictPipelineCancellationRole() {
    return this.getStringAttribute('ci_restrict_pipeline_cancellation_role');
  }
  public set ciRestrictPipelineCancellationRole(value: string) {
    this._ciRestrictPipelineCancellationRole = value;
  }
  public resetCiRestrictPipelineCancellationRole() {
    this._ciRestrictPipelineCancellationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciRestrictPipelineCancellationRoleInput() {
    return this._ciRestrictPipelineCancellationRole;
  }

  // ci_separated_caches - computed: true, optional: true, required: false
  private _ciSeparatedCaches?: boolean | cdktf.IResolvable; 
  public get ciSeparatedCaches() {
    return this.getBooleanAttribute('ci_separated_caches');
  }
  public set ciSeparatedCaches(value: boolean | cdktf.IResolvable) {
    this._ciSeparatedCaches = value;
  }
  public resetCiSeparatedCaches() {
    this._ciSeparatedCaches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciSeparatedCachesInput() {
    return this._ciSeparatedCaches;
  }

  // container_registry_access_level - computed: true, optional: true, required: false
  private _containerRegistryAccessLevel?: string; 
  public get containerRegistryAccessLevel() {
    return this.getStringAttribute('container_registry_access_level');
  }
  public set containerRegistryAccessLevel(value: string) {
    this._containerRegistryAccessLevel = value;
  }
  public resetContainerRegistryAccessLevel() {
    this._containerRegistryAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryAccessLevelInput() {
    return this._containerRegistryAccessLevel;
  }

  // container_registry_enabled - computed: true, optional: true, required: false
  private _containerRegistryEnabled?: boolean | cdktf.IResolvable; 
  public get containerRegistryEnabled() {
    return this.getBooleanAttribute('container_registry_enabled');
  }
  public set containerRegistryEnabled(value: boolean | cdktf.IResolvable) {
    this._containerRegistryEnabled = value;
  }
  public resetContainerRegistryEnabled() {
    this._containerRegistryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryEnabledInput() {
    return this._containerRegistryEnabled;
  }

  // default_branch - computed: true, optional: true, required: false
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // emails_disabled - computed: true, optional: true, required: false
  private _emailsDisabled?: boolean | cdktf.IResolvable; 
  public get emailsDisabled() {
    return this.getBooleanAttribute('emails_disabled');
  }
  public set emailsDisabled(value: boolean | cdktf.IResolvable) {
    this._emailsDisabled = value;
  }
  public resetEmailsDisabled() {
    this._emailsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsDisabledInput() {
    return this._emailsDisabled;
  }

  // empty_repo - computed: true, optional: false, required: false
  public get emptyRepo() {
    return this.getBooleanAttribute('empty_repo');
  }

  // environments_access_level - computed: true, optional: true, required: false
  private _environmentsAccessLevel?: string; 
  public get environmentsAccessLevel() {
    return this.getStringAttribute('environments_access_level');
  }
  public set environmentsAccessLevel(value: string) {
    this._environmentsAccessLevel = value;
  }
  public resetEnvironmentsAccessLevel() {
    this._environmentsAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsAccessLevelInput() {
    return this._environmentsAccessLevel;
  }

  // external_authorization_classification_label - computed: false, optional: true, required: false
  private _externalAuthorizationClassificationLabel?: string; 
  public get externalAuthorizationClassificationLabel() {
    return this.getStringAttribute('external_authorization_classification_label');
  }
  public set externalAuthorizationClassificationLabel(value: string) {
    this._externalAuthorizationClassificationLabel = value;
  }
  public resetExternalAuthorizationClassificationLabel() {
    this._externalAuthorizationClassificationLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthorizationClassificationLabelInput() {
    return this._externalAuthorizationClassificationLabel;
  }

  // feature_flags_access_level - computed: true, optional: true, required: false
  private _featureFlagsAccessLevel?: string; 
  public get featureFlagsAccessLevel() {
    return this.getStringAttribute('feature_flags_access_level');
  }
  public set featureFlagsAccessLevel(value: string) {
    this._featureFlagsAccessLevel = value;
  }
  public resetFeatureFlagsAccessLevel() {
    this._featureFlagsAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureFlagsAccessLevelInput() {
    return this._featureFlagsAccessLevel;
  }

  // forked_from_project_id - computed: false, optional: true, required: false
  private _forkedFromProjectId?: number; 
  public get forkedFromProjectId() {
    return this.getNumberAttribute('forked_from_project_id');
  }
  public set forkedFromProjectId(value: number) {
    this._forkedFromProjectId = value;
  }
  public resetForkedFromProjectId() {
    this._forkedFromProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forkedFromProjectIdInput() {
    return this._forkedFromProjectId;
  }

  // forking_access_level - computed: true, optional: true, required: false
  private _forkingAccessLevel?: string; 
  public get forkingAccessLevel() {
    return this.getStringAttribute('forking_access_level');
  }
  public set forkingAccessLevel(value: string) {
    this._forkingAccessLevel = value;
  }
  public resetForkingAccessLevel() {
    this._forkingAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forkingAccessLevelInput() {
    return this._forkingAccessLevel;
  }

  // group_runners_enabled - computed: true, optional: true, required: false
  private _groupRunnersEnabled?: boolean | cdktf.IResolvable; 
  public get groupRunnersEnabled() {
    return this.getBooleanAttribute('group_runners_enabled');
  }
  public set groupRunnersEnabled(value: boolean | cdktf.IResolvable) {
    this._groupRunnersEnabled = value;
  }
  public resetGroupRunnersEnabled() {
    this._groupRunnersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRunnersEnabledInput() {
    return this._groupRunnersEnabled;
  }

  // group_with_project_templates_id - computed: false, optional: true, required: false
  private _groupWithProjectTemplatesId?: number; 
  public get groupWithProjectTemplatesId() {
    return this.getNumberAttribute('group_with_project_templates_id');
  }
  public set groupWithProjectTemplatesId(value: number) {
    this._groupWithProjectTemplatesId = value;
  }
  public resetGroupWithProjectTemplatesId() {
    this._groupWithProjectTemplatesId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWithProjectTemplatesIdInput() {
    return this._groupWithProjectTemplatesId;
  }

  // http_url_to_repo - computed: true, optional: false, required: false
  public get httpUrlToRepo() {
    return this.getStringAttribute('http_url_to_repo');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // import_url - computed: false, optional: true, required: false
  private _importUrl?: string; 
  public get importUrl() {
    return this.getStringAttribute('import_url');
  }
  public set importUrl(value: string) {
    this._importUrl = value;
  }
  public resetImportUrl() {
    this._importUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importUrlInput() {
    return this._importUrl;
  }

  // import_url_password - computed: false, optional: true, required: false
  private _importUrlPassword?: string; 
  public get importUrlPassword() {
    return this.getStringAttribute('import_url_password');
  }
  public set importUrlPassword(value: string) {
    this._importUrlPassword = value;
  }
  public resetImportUrlPassword() {
    this._importUrlPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importUrlPasswordInput() {
    return this._importUrlPassword;
  }

  // import_url_username - computed: false, optional: true, required: false
  private _importUrlUsername?: string; 
  public get importUrlUsername() {
    return this.getStringAttribute('import_url_username');
  }
  public set importUrlUsername(value: string) {
    this._importUrlUsername = value;
  }
  public resetImportUrlUsername() {
    this._importUrlUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importUrlUsernameInput() {
    return this._importUrlUsername;
  }

  // infrastructure_access_level - computed: true, optional: true, required: false
  private _infrastructureAccessLevel?: string; 
  public get infrastructureAccessLevel() {
    return this.getStringAttribute('infrastructure_access_level');
  }
  public set infrastructureAccessLevel(value: string) {
    this._infrastructureAccessLevel = value;
  }
  public resetInfrastructureAccessLevel() {
    this._infrastructureAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureAccessLevelInput() {
    return this._infrastructureAccessLevel;
  }

  // initialize_with_readme - computed: false, optional: true, required: false
  private _initializeWithReadme?: boolean | cdktf.IResolvable; 
  public get initializeWithReadme() {
    return this.getBooleanAttribute('initialize_with_readme');
  }
  public set initializeWithReadme(value: boolean | cdktf.IResolvable) {
    this._initializeWithReadme = value;
  }
  public resetInitializeWithReadme() {
    this._initializeWithReadme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeWithReadmeInput() {
    return this._initializeWithReadme;
  }

  // issues_access_level - computed: true, optional: true, required: false
  private _issuesAccessLevel?: string; 
  public get issuesAccessLevel() {
    return this.getStringAttribute('issues_access_level');
  }
  public set issuesAccessLevel(value: string) {
    this._issuesAccessLevel = value;
  }
  public resetIssuesAccessLevel() {
    this._issuesAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuesAccessLevelInput() {
    return this._issuesAccessLevel;
  }

  // issues_enabled - computed: true, optional: true, required: false
  private _issuesEnabled?: boolean | cdktf.IResolvable; 
  public get issuesEnabled() {
    return this.getBooleanAttribute('issues_enabled');
  }
  public set issuesEnabled(value: boolean | cdktf.IResolvable) {
    this._issuesEnabled = value;
  }
  public resetIssuesEnabled() {
    this._issuesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuesEnabledInput() {
    return this._issuesEnabled;
  }

  // issues_template - computed: false, optional: true, required: false
  private _issuesTemplate?: string; 
  public get issuesTemplate() {
    return this.getStringAttribute('issues_template');
  }
  public set issuesTemplate(value: string) {
    this._issuesTemplate = value;
  }
  public resetIssuesTemplate() {
    this._issuesTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuesTemplateInput() {
    return this._issuesTemplate;
  }

  // keep_latest_artifact - computed: true, optional: true, required: false
  private _keepLatestArtifact?: boolean | cdktf.IResolvable; 
  public get keepLatestArtifact() {
    return this.getBooleanAttribute('keep_latest_artifact');
  }
  public set keepLatestArtifact(value: boolean | cdktf.IResolvable) {
    this._keepLatestArtifact = value;
  }
  public resetKeepLatestArtifact() {
    this._keepLatestArtifact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLatestArtifactInput() {
    return this._keepLatestArtifact;
  }

  // lfs_enabled - computed: true, optional: true, required: false
  private _lfsEnabled?: boolean | cdktf.IResolvable; 
  public get lfsEnabled() {
    return this.getBooleanAttribute('lfs_enabled');
  }
  public set lfsEnabled(value: boolean | cdktf.IResolvable) {
    this._lfsEnabled = value;
  }
  public resetLfsEnabled() {
    this._lfsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfsEnabledInput() {
    return this._lfsEnabled;
  }

  // merge_commit_template - computed: false, optional: true, required: false
  private _mergeCommitTemplate?: string; 
  public get mergeCommitTemplate() {
    return this.getStringAttribute('merge_commit_template');
  }
  public set mergeCommitTemplate(value: string) {
    this._mergeCommitTemplate = value;
  }
  public resetMergeCommitTemplate() {
    this._mergeCommitTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeCommitTemplateInput() {
    return this._mergeCommitTemplate;
  }

  // merge_method - computed: true, optional: true, required: false
  private _mergeMethod?: string; 
  public get mergeMethod() {
    return this.getStringAttribute('merge_method');
  }
  public set mergeMethod(value: string) {
    this._mergeMethod = value;
  }
  public resetMergeMethod() {
    this._mergeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeMethodInput() {
    return this._mergeMethod;
  }

  // merge_pipelines_enabled - computed: true, optional: true, required: false
  private _mergePipelinesEnabled?: boolean | cdktf.IResolvable; 
  public get mergePipelinesEnabled() {
    return this.getBooleanAttribute('merge_pipelines_enabled');
  }
  public set mergePipelinesEnabled(value: boolean | cdktf.IResolvable) {
    this._mergePipelinesEnabled = value;
  }
  public resetMergePipelinesEnabled() {
    this._mergePipelinesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergePipelinesEnabledInput() {
    return this._mergePipelinesEnabled;
  }

  // merge_requests_access_level - computed: true, optional: true, required: false
  private _mergeRequestsAccessLevel?: string; 
  public get mergeRequestsAccessLevel() {
    return this.getStringAttribute('merge_requests_access_level');
  }
  public set mergeRequestsAccessLevel(value: string) {
    this._mergeRequestsAccessLevel = value;
  }
  public resetMergeRequestsAccessLevel() {
    this._mergeRequestsAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestsAccessLevelInput() {
    return this._mergeRequestsAccessLevel;
  }

  // merge_requests_enabled - computed: true, optional: true, required: false
  private _mergeRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get mergeRequestsEnabled() {
    return this.getBooleanAttribute('merge_requests_enabled');
  }
  public set mergeRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._mergeRequestsEnabled = value;
  }
  public resetMergeRequestsEnabled() {
    this._mergeRequestsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestsEnabledInput() {
    return this._mergeRequestsEnabled;
  }

  // merge_requests_template - computed: false, optional: true, required: false
  private _mergeRequestsTemplate?: string; 
  public get mergeRequestsTemplate() {
    return this.getStringAttribute('merge_requests_template');
  }
  public set mergeRequestsTemplate(value: string) {
    this._mergeRequestsTemplate = value;
  }
  public resetMergeRequestsTemplate() {
    this._mergeRequestsTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestsTemplateInput() {
    return this._mergeRequestsTemplate;
  }

  // merge_trains_enabled - computed: true, optional: true, required: false
  private _mergeTrainsEnabled?: boolean | cdktf.IResolvable; 
  public get mergeTrainsEnabled() {
    return this.getBooleanAttribute('merge_trains_enabled');
  }
  public set mergeTrainsEnabled(value: boolean | cdktf.IResolvable) {
    this._mergeTrainsEnabled = value;
  }
  public resetMergeTrainsEnabled() {
    this._mergeTrainsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTrainsEnabledInput() {
    return this._mergeTrainsEnabled;
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror?: boolean | cdktf.IResolvable; 
  public get mirror() {
    return this.getBooleanAttribute('mirror');
  }
  public set mirror(value: boolean | cdktf.IResolvable) {
    this._mirror = value;
  }
  public resetMirror() {
    this._mirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror;
  }

  // mirror_overwrites_diverged_branches - computed: true, optional: true, required: false
  private _mirrorOverwritesDivergedBranches?: boolean | cdktf.IResolvable; 
  public get mirrorOverwritesDivergedBranches() {
    return this.getBooleanAttribute('mirror_overwrites_diverged_branches');
  }
  public set mirrorOverwritesDivergedBranches(value: boolean | cdktf.IResolvable) {
    this._mirrorOverwritesDivergedBranches = value;
  }
  public resetMirrorOverwritesDivergedBranches() {
    this._mirrorOverwritesDivergedBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorOverwritesDivergedBranchesInput() {
    return this._mirrorOverwritesDivergedBranches;
  }

  // mirror_trigger_builds - computed: true, optional: true, required: false
  private _mirrorTriggerBuilds?: boolean | cdktf.IResolvable; 
  public get mirrorTriggerBuilds() {
    return this.getBooleanAttribute('mirror_trigger_builds');
  }
  public set mirrorTriggerBuilds(value: boolean | cdktf.IResolvable) {
    this._mirrorTriggerBuilds = value;
  }
  public resetMirrorTriggerBuilds() {
    this._mirrorTriggerBuilds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorTriggerBuildsInput() {
    return this._mirrorTriggerBuilds;
  }

  // monitor_access_level - computed: true, optional: true, required: false
  private _monitorAccessLevel?: string; 
  public get monitorAccessLevel() {
    return this.getStringAttribute('monitor_access_level');
  }
  public set monitorAccessLevel(value: string) {
    this._monitorAccessLevel = value;
  }
  public resetMonitorAccessLevel() {
    this._monitorAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAccessLevelInput() {
    return this._monitorAccessLevel;
  }

  // mr_default_target_self - computed: false, optional: true, required: false
  private _mrDefaultTargetSelf?: boolean | cdktf.IResolvable; 
  public get mrDefaultTargetSelf() {
    return this.getBooleanAttribute('mr_default_target_self');
  }
  public set mrDefaultTargetSelf(value: boolean | cdktf.IResolvable) {
    this._mrDefaultTargetSelf = value;
  }
  public resetMrDefaultTargetSelf() {
    this._mrDefaultTargetSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mrDefaultTargetSelfInput() {
    return this._mrDefaultTargetSelf;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace_id - computed: true, optional: true, required: false
  private _namespaceId?: number; 
  public get namespaceId() {
    return this.getNumberAttribute('namespace_id');
  }
  public set namespaceId(value: number) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // only_allow_merge_if_all_discussions_are_resolved - computed: true, optional: true, required: false
  private _onlyAllowMergeIfAllDiscussionsAreResolved?: boolean | cdktf.IResolvable; 
  public get onlyAllowMergeIfAllDiscussionsAreResolved() {
    return this.getBooleanAttribute('only_allow_merge_if_all_discussions_are_resolved');
  }
  public set onlyAllowMergeIfAllDiscussionsAreResolved(value: boolean | cdktf.IResolvable) {
    this._onlyAllowMergeIfAllDiscussionsAreResolved = value;
  }
  public resetOnlyAllowMergeIfAllDiscussionsAreResolved() {
    this._onlyAllowMergeIfAllDiscussionsAreResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyAllowMergeIfAllDiscussionsAreResolvedInput() {
    return this._onlyAllowMergeIfAllDiscussionsAreResolved;
  }

  // only_allow_merge_if_pipeline_succeeds - computed: true, optional: true, required: false
  private _onlyAllowMergeIfPipelineSucceeds?: boolean | cdktf.IResolvable; 
  public get onlyAllowMergeIfPipelineSucceeds() {
    return this.getBooleanAttribute('only_allow_merge_if_pipeline_succeeds');
  }
  public set onlyAllowMergeIfPipelineSucceeds(value: boolean | cdktf.IResolvable) {
    this._onlyAllowMergeIfPipelineSucceeds = value;
  }
  public resetOnlyAllowMergeIfPipelineSucceeds() {
    this._onlyAllowMergeIfPipelineSucceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyAllowMergeIfPipelineSucceedsInput() {
    return this._onlyAllowMergeIfPipelineSucceeds;
  }

  // only_mirror_protected_branches - computed: true, optional: true, required: false
  private _onlyMirrorProtectedBranches?: boolean | cdktf.IResolvable; 
  public get onlyMirrorProtectedBranches() {
    return this.getBooleanAttribute('only_mirror_protected_branches');
  }
  public set onlyMirrorProtectedBranches(value: boolean | cdktf.IResolvable) {
    this._onlyMirrorProtectedBranches = value;
  }
  public resetOnlyMirrorProtectedBranches() {
    this._onlyMirrorProtectedBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyMirrorProtectedBranchesInput() {
    return this._onlyMirrorProtectedBranches;
  }

  // packages_enabled - computed: true, optional: true, required: false
  private _packagesEnabled?: boolean | cdktf.IResolvable; 
  public get packagesEnabled() {
    return this.getBooleanAttribute('packages_enabled');
  }
  public set packagesEnabled(value: boolean | cdktf.IResolvable) {
    this._packagesEnabled = value;
  }
  public resetPackagesEnabled() {
    this._packagesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesEnabledInput() {
    return this._packagesEnabled;
  }

  // pages_access_level - computed: true, optional: true, required: false
  private _pagesAccessLevel?: string; 
  public get pagesAccessLevel() {
    return this.getStringAttribute('pages_access_level');
  }
  public set pagesAccessLevel(value: string) {
    this._pagesAccessLevel = value;
  }
  public resetPagesAccessLevel() {
    this._pagesAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagesAccessLevelInput() {
    return this._pagesAccessLevel;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_with_namespace - computed: true, optional: false, required: false
  public get pathWithNamespace() {
    return this.getStringAttribute('path_with_namespace');
  }

  // pipelines_enabled - computed: true, optional: true, required: false
  private _pipelinesEnabled?: boolean | cdktf.IResolvable; 
  public get pipelinesEnabled() {
    return this.getBooleanAttribute('pipelines_enabled');
  }
  public set pipelinesEnabled(value: boolean | cdktf.IResolvable) {
    this._pipelinesEnabled = value;
  }
  public resetPipelinesEnabled() {
    this._pipelinesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelinesEnabledInput() {
    return this._pipelinesEnabled;
  }

  // printing_merge_request_link_enabled - computed: true, optional: true, required: false
  private _printingMergeRequestLinkEnabled?: boolean | cdktf.IResolvable; 
  public get printingMergeRequestLinkEnabled() {
    return this.getBooleanAttribute('printing_merge_request_link_enabled');
  }
  public set printingMergeRequestLinkEnabled(value: boolean | cdktf.IResolvable) {
    this._printingMergeRequestLinkEnabled = value;
  }
  public resetPrintingMergeRequestLinkEnabled() {
    this._printingMergeRequestLinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get printingMergeRequestLinkEnabledInput() {
    return this._printingMergeRequestLinkEnabled;
  }

  // public_builds - computed: true, optional: true, required: false
  private _publicBuilds?: boolean | cdktf.IResolvable; 
  public get publicBuilds() {
    return this.getBooleanAttribute('public_builds');
  }
  public set publicBuilds(value: boolean | cdktf.IResolvable) {
    this._publicBuilds = value;
  }
  public resetPublicBuilds() {
    this._publicBuilds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicBuildsInput() {
    return this._publicBuilds;
  }

  // public_jobs - computed: true, optional: true, required: false
  private _publicJobs?: boolean | cdktf.IResolvable; 
  public get publicJobs() {
    return this.getBooleanAttribute('public_jobs');
  }
  public set publicJobs(value: boolean | cdktf.IResolvable) {
    this._publicJobs = value;
  }
  public resetPublicJobs() {
    this._publicJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicJobsInput() {
    return this._publicJobs;
  }

  // releases_access_level - computed: true, optional: true, required: false
  private _releasesAccessLevel?: string; 
  public get releasesAccessLevel() {
    return this.getStringAttribute('releases_access_level');
  }
  public set releasesAccessLevel(value: string) {
    this._releasesAccessLevel = value;
  }
  public resetReleasesAccessLevel() {
    this._releasesAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releasesAccessLevelInput() {
    return this._releasesAccessLevel;
  }

  // remove_source_branch_after_merge - computed: true, optional: true, required: false
  private _removeSourceBranchAfterMerge?: boolean | cdktf.IResolvable; 
  public get removeSourceBranchAfterMerge() {
    return this.getBooleanAttribute('remove_source_branch_after_merge');
  }
  public set removeSourceBranchAfterMerge(value: boolean | cdktf.IResolvable) {
    this._removeSourceBranchAfterMerge = value;
  }
  public resetRemoveSourceBranchAfterMerge() {
    this._removeSourceBranchAfterMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeSourceBranchAfterMergeInput() {
    return this._removeSourceBranchAfterMerge;
  }

  // repository_access_level - computed: true, optional: true, required: false
  private _repositoryAccessLevel?: string; 
  public get repositoryAccessLevel() {
    return this.getStringAttribute('repository_access_level');
  }
  public set repositoryAccessLevel(value: string) {
    this._repositoryAccessLevel = value;
  }
  public resetRepositoryAccessLevel() {
    this._repositoryAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAccessLevelInput() {
    return this._repositoryAccessLevel;
  }

  // repository_storage - computed: true, optional: true, required: false
  private _repositoryStorage?: string; 
  public get repositoryStorage() {
    return this.getStringAttribute('repository_storage');
  }
  public set repositoryStorage(value: string) {
    this._repositoryStorage = value;
  }
  public resetRepositoryStorage() {
    this._repositoryStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryStorageInput() {
    return this._repositoryStorage;
  }

  // request_access_enabled - computed: true, optional: true, required: false
  private _requestAccessEnabled?: boolean | cdktf.IResolvable; 
  public get requestAccessEnabled() {
    return this.getBooleanAttribute('request_access_enabled');
  }
  public set requestAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._requestAccessEnabled = value;
  }
  public resetRequestAccessEnabled() {
    this._requestAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAccessEnabledInput() {
    return this._requestAccessEnabled;
  }

  // requirements_access_level - computed: true, optional: true, required: false
  private _requirementsAccessLevel?: string; 
  public get requirementsAccessLevel() {
    return this.getStringAttribute('requirements_access_level');
  }
  public set requirementsAccessLevel(value: string) {
    this._requirementsAccessLevel = value;
  }
  public resetRequirementsAccessLevel() {
    this._requirementsAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsAccessLevelInput() {
    return this._requirementsAccessLevel;
  }

  // resolve_outdated_diff_discussions - computed: false, optional: true, required: false
  private _resolveOutdatedDiffDiscussions?: boolean | cdktf.IResolvable; 
  public get resolveOutdatedDiffDiscussions() {
    return this.getBooleanAttribute('resolve_outdated_diff_discussions');
  }
  public set resolveOutdatedDiffDiscussions(value: boolean | cdktf.IResolvable) {
    this._resolveOutdatedDiffDiscussions = value;
  }
  public resetResolveOutdatedDiffDiscussions() {
    this._resolveOutdatedDiffDiscussions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveOutdatedDiffDiscussionsInput() {
    return this._resolveOutdatedDiffDiscussions;
  }

  // restrict_user_defined_variables - computed: false, optional: true, required: false
  private _restrictUserDefinedVariables?: boolean | cdktf.IResolvable; 
  public get restrictUserDefinedVariables() {
    return this.getBooleanAttribute('restrict_user_defined_variables');
  }
  public set restrictUserDefinedVariables(value: boolean | cdktf.IResolvable) {
    this._restrictUserDefinedVariables = value;
  }
  public resetRestrictUserDefinedVariables() {
    this._restrictUserDefinedVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictUserDefinedVariablesInput() {
    return this._restrictUserDefinedVariables;
  }

  // runners_token - computed: true, optional: false, required: false
  public get runnersToken() {
    return this.getStringAttribute('runners_token');
  }

  // security_and_compliance_access_level - computed: true, optional: true, required: false
  private _securityAndComplianceAccessLevel?: string; 
  public get securityAndComplianceAccessLevel() {
    return this.getStringAttribute('security_and_compliance_access_level');
  }
  public set securityAndComplianceAccessLevel(value: string) {
    this._securityAndComplianceAccessLevel = value;
  }
  public resetSecurityAndComplianceAccessLevel() {
    this._securityAndComplianceAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAndComplianceAccessLevelInput() {
    return this._securityAndComplianceAccessLevel;
  }

  // shared_runners_enabled - computed: true, optional: true, required: false
  private _sharedRunnersEnabled?: boolean | cdktf.IResolvable; 
  public get sharedRunnersEnabled() {
    return this.getBooleanAttribute('shared_runners_enabled');
  }
  public set sharedRunnersEnabled(value: boolean | cdktf.IResolvable) {
    this._sharedRunnersEnabled = value;
  }
  public resetSharedRunnersEnabled() {
    this._sharedRunnersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedRunnersEnabledInput() {
    return this._sharedRunnersEnabled;
  }

  // skip_wait_for_default_branch_protection - computed: false, optional: true, required: false
  private _skipWaitForDefaultBranchProtection?: boolean | cdktf.IResolvable; 
  public get skipWaitForDefaultBranchProtection() {
    return this.getBooleanAttribute('skip_wait_for_default_branch_protection');
  }
  public set skipWaitForDefaultBranchProtection(value: boolean | cdktf.IResolvable) {
    this._skipWaitForDefaultBranchProtection = value;
  }
  public resetSkipWaitForDefaultBranchProtection() {
    this._skipWaitForDefaultBranchProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWaitForDefaultBranchProtectionInput() {
    return this._skipWaitForDefaultBranchProtection;
  }

  // snippets_access_level - computed: true, optional: true, required: false
  private _snippetsAccessLevel?: string; 
  public get snippetsAccessLevel() {
    return this.getStringAttribute('snippets_access_level');
  }
  public set snippetsAccessLevel(value: string) {
    this._snippetsAccessLevel = value;
  }
  public resetSnippetsAccessLevel() {
    this._snippetsAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetsAccessLevelInput() {
    return this._snippetsAccessLevel;
  }

  // snippets_enabled - computed: true, optional: true, required: false
  private _snippetsEnabled?: boolean | cdktf.IResolvable; 
  public get snippetsEnabled() {
    return this.getBooleanAttribute('snippets_enabled');
  }
  public set snippetsEnabled(value: boolean | cdktf.IResolvable) {
    this._snippetsEnabled = value;
  }
  public resetSnippetsEnabled() {
    this._snippetsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetsEnabledInput() {
    return this._snippetsEnabled;
  }

  // squash_commit_template - computed: false, optional: true, required: false
  private _squashCommitTemplate?: string; 
  public get squashCommitTemplate() {
    return this.getStringAttribute('squash_commit_template');
  }
  public set squashCommitTemplate(value: string) {
    this._squashCommitTemplate = value;
  }
  public resetSquashCommitTemplate() {
    this._squashCommitTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squashCommitTemplateInput() {
    return this._squashCommitTemplate;
  }

  // squash_option - computed: true, optional: true, required: false
  private _squashOption?: string; 
  public get squashOption() {
    return this.getStringAttribute('squash_option');
  }
  public set squashOption(value: string) {
    this._squashOption = value;
  }
  public resetSquashOption() {
    this._squashOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get squashOptionInput() {
    return this._squashOption;
  }

  // ssh_url_to_repo - computed: true, optional: false, required: false
  public get sshUrlToRepo() {
    return this.getStringAttribute('ssh_url_to_repo');
  }

  // suggestion_commit_message - computed: false, optional: true, required: false
  private _suggestionCommitMessage?: string; 
  public get suggestionCommitMessage() {
    return this.getStringAttribute('suggestion_commit_message');
  }
  public set suggestionCommitMessage(value: string) {
    this._suggestionCommitMessage = value;
  }
  public resetSuggestionCommitMessage() {
    this._suggestionCommitMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestionCommitMessageInput() {
    return this._suggestionCommitMessage;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // template_project_id - computed: false, optional: true, required: false
  private _templateProjectId?: number; 
  public get templateProjectId() {
    return this.getNumberAttribute('template_project_id');
  }
  public set templateProjectId(value: number) {
    this._templateProjectId = value;
  }
  public resetTemplateProjectId() {
    this._templateProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateProjectIdInput() {
    return this._templateProjectId;
  }

  // topics - computed: true, optional: true, required: false
  private _topics?: string[]; 
  public get topics() {
    return cdktf.Fn.tolist(this.getListAttribute('topics'));
  }
  public set topics(value: string[]) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // use_custom_template - computed: false, optional: true, required: false
  private _useCustomTemplate?: boolean | cdktf.IResolvable; 
  public get useCustomTemplate() {
    return this.getBooleanAttribute('use_custom_template');
  }
  public set useCustomTemplate(value: boolean | cdktf.IResolvable) {
    this._useCustomTemplate = value;
  }
  public resetUseCustomTemplate() {
    this._useCustomTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomTemplateInput() {
    return this._useCustomTemplate;
  }

  // visibility_level - computed: true, optional: true, required: false
  private _visibilityLevel?: string; 
  public get visibilityLevel() {
    return this.getStringAttribute('visibility_level');
  }
  public set visibilityLevel(value: string) {
    this._visibilityLevel = value;
  }
  public resetVisibilityLevel() {
    this._visibilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityLevelInput() {
    return this._visibilityLevel;
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }

  // wiki_access_level - computed: true, optional: true, required: false
  private _wikiAccessLevel?: string; 
  public get wikiAccessLevel() {
    return this.getStringAttribute('wiki_access_level');
  }
  public set wikiAccessLevel(value: string) {
    this._wikiAccessLevel = value;
  }
  public resetWikiAccessLevel() {
    this._wikiAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wikiAccessLevelInput() {
    return this._wikiAccessLevel;
  }

  // wiki_enabled - computed: true, optional: true, required: false
  private _wikiEnabled?: boolean | cdktf.IResolvable; 
  public get wikiEnabled() {
    return this.getBooleanAttribute('wiki_enabled');
  }
  public set wikiEnabled(value: boolean | cdktf.IResolvable) {
    this._wikiEnabled = value;
  }
  public resetWikiEnabled() {
    this._wikiEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wikiEnabledInput() {
    return this._wikiEnabled;
  }

  // container_expiration_policy - computed: false, optional: true, required: false
  private _containerExpirationPolicy = new ProjectContainerExpirationPolicyOutputReference(this, "container_expiration_policy");
  public get containerExpirationPolicy() {
    return this._containerExpirationPolicy;
  }
  public putContainerExpirationPolicy(value: ProjectContainerExpirationPolicy) {
    this._containerExpirationPolicy.internalValue = value;
  }
  public resetContainerExpirationPolicy() {
    this._containerExpirationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerExpirationPolicyInput() {
    return this._containerExpirationPolicy.internalValue;
  }

  // push_rules - computed: false, optional: true, required: false
  private _pushRules = new ProjectPushRulesOutputReference(this, "push_rules");
  public get pushRules() {
    return this._pushRules;
  }
  public putPushRules(value: ProjectPushRules) {
    this._pushRules.internalValue = value;
  }
  public resetPushRules() {
    this._pushRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushRulesInput() {
    return this._pushRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ProjectTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_merge_on_skipped_pipeline: cdktf.booleanToTerraform(this._allowMergeOnSkippedPipeline),
      analytics_access_level: cdktf.stringToTerraform(this._analyticsAccessLevel),
      approvals_before_merge: cdktf.numberToTerraform(this._approvalsBeforeMerge),
      archive_on_destroy: cdktf.booleanToTerraform(this._archiveOnDestroy),
      archived: cdktf.booleanToTerraform(this._archived),
      auto_cancel_pending_pipelines: cdktf.stringToTerraform(this._autoCancelPendingPipelines),
      auto_devops_deploy_strategy: cdktf.stringToTerraform(this._autoDevopsDeployStrategy),
      auto_devops_enabled: cdktf.booleanToTerraform(this._autoDevopsEnabled),
      autoclose_referenced_issues: cdktf.booleanToTerraform(this._autocloseReferencedIssues),
      avatar: cdktf.stringToTerraform(this._avatar),
      avatar_hash: cdktf.stringToTerraform(this._avatarHash),
      build_coverage_regex: cdktf.stringToTerraform(this._buildCoverageRegex),
      build_git_strategy: cdktf.stringToTerraform(this._buildGitStrategy),
      build_timeout: cdktf.numberToTerraform(this._buildTimeout),
      builds_access_level: cdktf.stringToTerraform(this._buildsAccessLevel),
      ci_config_path: cdktf.stringToTerraform(this._ciConfigPath),
      ci_default_git_depth: cdktf.numberToTerraform(this._ciDefaultGitDepth),
      ci_forward_deployment_enabled: cdktf.booleanToTerraform(this._ciForwardDeploymentEnabled),
      ci_restrict_pipeline_cancellation_role: cdktf.stringToTerraform(this._ciRestrictPipelineCancellationRole),
      ci_separated_caches: cdktf.booleanToTerraform(this._ciSeparatedCaches),
      container_registry_access_level: cdktf.stringToTerraform(this._containerRegistryAccessLevel),
      container_registry_enabled: cdktf.booleanToTerraform(this._containerRegistryEnabled),
      default_branch: cdktf.stringToTerraform(this._defaultBranch),
      description: cdktf.stringToTerraform(this._description),
      emails_disabled: cdktf.booleanToTerraform(this._emailsDisabled),
      environments_access_level: cdktf.stringToTerraform(this._environmentsAccessLevel),
      external_authorization_classification_label: cdktf.stringToTerraform(this._externalAuthorizationClassificationLabel),
      feature_flags_access_level: cdktf.stringToTerraform(this._featureFlagsAccessLevel),
      forked_from_project_id: cdktf.numberToTerraform(this._forkedFromProjectId),
      forking_access_level: cdktf.stringToTerraform(this._forkingAccessLevel),
      group_runners_enabled: cdktf.booleanToTerraform(this._groupRunnersEnabled),
      group_with_project_templates_id: cdktf.numberToTerraform(this._groupWithProjectTemplatesId),
      id: cdktf.stringToTerraform(this._id),
      import_url: cdktf.stringToTerraform(this._importUrl),
      import_url_password: cdktf.stringToTerraform(this._importUrlPassword),
      import_url_username: cdktf.stringToTerraform(this._importUrlUsername),
      infrastructure_access_level: cdktf.stringToTerraform(this._infrastructureAccessLevel),
      initialize_with_readme: cdktf.booleanToTerraform(this._initializeWithReadme),
      issues_access_level: cdktf.stringToTerraform(this._issuesAccessLevel),
      issues_enabled: cdktf.booleanToTerraform(this._issuesEnabled),
      issues_template: cdktf.stringToTerraform(this._issuesTemplate),
      keep_latest_artifact: cdktf.booleanToTerraform(this._keepLatestArtifact),
      lfs_enabled: cdktf.booleanToTerraform(this._lfsEnabled),
      merge_commit_template: cdktf.stringToTerraform(this._mergeCommitTemplate),
      merge_method: cdktf.stringToTerraform(this._mergeMethod),
      merge_pipelines_enabled: cdktf.booleanToTerraform(this._mergePipelinesEnabled),
      merge_requests_access_level: cdktf.stringToTerraform(this._mergeRequestsAccessLevel),
      merge_requests_enabled: cdktf.booleanToTerraform(this._mergeRequestsEnabled),
      merge_requests_template: cdktf.stringToTerraform(this._mergeRequestsTemplate),
      merge_trains_enabled: cdktf.booleanToTerraform(this._mergeTrainsEnabled),
      mirror: cdktf.booleanToTerraform(this._mirror),
      mirror_overwrites_diverged_branches: cdktf.booleanToTerraform(this._mirrorOverwritesDivergedBranches),
      mirror_trigger_builds: cdktf.booleanToTerraform(this._mirrorTriggerBuilds),
      monitor_access_level: cdktf.stringToTerraform(this._monitorAccessLevel),
      mr_default_target_self: cdktf.booleanToTerraform(this._mrDefaultTargetSelf),
      name: cdktf.stringToTerraform(this._name),
      namespace_id: cdktf.numberToTerraform(this._namespaceId),
      only_allow_merge_if_all_discussions_are_resolved: cdktf.booleanToTerraform(this._onlyAllowMergeIfAllDiscussionsAreResolved),
      only_allow_merge_if_pipeline_succeeds: cdktf.booleanToTerraform(this._onlyAllowMergeIfPipelineSucceeds),
      only_mirror_protected_branches: cdktf.booleanToTerraform(this._onlyMirrorProtectedBranches),
      packages_enabled: cdktf.booleanToTerraform(this._packagesEnabled),
      pages_access_level: cdktf.stringToTerraform(this._pagesAccessLevel),
      path: cdktf.stringToTerraform(this._path),
      pipelines_enabled: cdktf.booleanToTerraform(this._pipelinesEnabled),
      printing_merge_request_link_enabled: cdktf.booleanToTerraform(this._printingMergeRequestLinkEnabled),
      public_builds: cdktf.booleanToTerraform(this._publicBuilds),
      public_jobs: cdktf.booleanToTerraform(this._publicJobs),
      releases_access_level: cdktf.stringToTerraform(this._releasesAccessLevel),
      remove_source_branch_after_merge: cdktf.booleanToTerraform(this._removeSourceBranchAfterMerge),
      repository_access_level: cdktf.stringToTerraform(this._repositoryAccessLevel),
      repository_storage: cdktf.stringToTerraform(this._repositoryStorage),
      request_access_enabled: cdktf.booleanToTerraform(this._requestAccessEnabled),
      requirements_access_level: cdktf.stringToTerraform(this._requirementsAccessLevel),
      resolve_outdated_diff_discussions: cdktf.booleanToTerraform(this._resolveOutdatedDiffDiscussions),
      restrict_user_defined_variables: cdktf.booleanToTerraform(this._restrictUserDefinedVariables),
      security_and_compliance_access_level: cdktf.stringToTerraform(this._securityAndComplianceAccessLevel),
      shared_runners_enabled: cdktf.booleanToTerraform(this._sharedRunnersEnabled),
      skip_wait_for_default_branch_protection: cdktf.booleanToTerraform(this._skipWaitForDefaultBranchProtection),
      snippets_access_level: cdktf.stringToTerraform(this._snippetsAccessLevel),
      snippets_enabled: cdktf.booleanToTerraform(this._snippetsEnabled),
      squash_commit_template: cdktf.stringToTerraform(this._squashCommitTemplate),
      squash_option: cdktf.stringToTerraform(this._squashOption),
      suggestion_commit_message: cdktf.stringToTerraform(this._suggestionCommitMessage),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template_name: cdktf.stringToTerraform(this._templateName),
      template_project_id: cdktf.numberToTerraform(this._templateProjectId),
      topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topics),
      use_custom_template: cdktf.booleanToTerraform(this._useCustomTemplate),
      visibility_level: cdktf.stringToTerraform(this._visibilityLevel),
      wiki_access_level: cdktf.stringToTerraform(this._wikiAccessLevel),
      wiki_enabled: cdktf.booleanToTerraform(this._wikiEnabled),
      container_expiration_policy: projectContainerExpirationPolicyToTerraform(this._containerExpirationPolicy.internalValue),
      push_rules: projectPushRulesToTerraform(this._pushRules.internalValue),
      timeouts: projectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_merge_on_skipped_pipeline: {
        value: cdktf.booleanToHclTerraform(this._allowMergeOnSkippedPipeline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      analytics_access_level: {
        value: cdktf.stringToHclTerraform(this._analyticsAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approvals_before_merge: {
        value: cdktf.numberToHclTerraform(this._approvalsBeforeMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      archive_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._archiveOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      archived: {
        value: cdktf.booleanToHclTerraform(this._archived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_cancel_pending_pipelines: {
        value: cdktf.stringToHclTerraform(this._autoCancelPendingPipelines),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_devops_deploy_strategy: {
        value: cdktf.stringToHclTerraform(this._autoDevopsDeployStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_devops_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoDevopsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autoclose_referenced_issues: {
        value: cdktf.booleanToHclTerraform(this._autocloseReferencedIssues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      avatar: {
        value: cdktf.stringToHclTerraform(this._avatar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avatar_hash: {
        value: cdktf.stringToHclTerraform(this._avatarHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_coverage_regex: {
        value: cdktf.stringToHclTerraform(this._buildCoverageRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_git_strategy: {
        value: cdktf.stringToHclTerraform(this._buildGitStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_timeout: {
        value: cdktf.numberToHclTerraform(this._buildTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      builds_access_level: {
        value: cdktf.stringToHclTerraform(this._buildsAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ci_config_path: {
        value: cdktf.stringToHclTerraform(this._ciConfigPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ci_default_git_depth: {
        value: cdktf.numberToHclTerraform(this._ciDefaultGitDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ci_forward_deployment_enabled: {
        value: cdktf.booleanToHclTerraform(this._ciForwardDeploymentEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ci_restrict_pipeline_cancellation_role: {
        value: cdktf.stringToHclTerraform(this._ciRestrictPipelineCancellationRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ci_separated_caches: {
        value: cdktf.booleanToHclTerraform(this._ciSeparatedCaches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      container_registry_access_level: {
        value: cdktf.stringToHclTerraform(this._containerRegistryAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_registry_enabled: {
        value: cdktf.booleanToHclTerraform(this._containerRegistryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_branch: {
        value: cdktf.stringToHclTerraform(this._defaultBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emails_disabled: {
        value: cdktf.booleanToHclTerraform(this._emailsDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environments_access_level: {
        value: cdktf.stringToHclTerraform(this._environmentsAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_authorization_classification_label: {
        value: cdktf.stringToHclTerraform(this._externalAuthorizationClassificationLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_flags_access_level: {
        value: cdktf.stringToHclTerraform(this._featureFlagsAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forked_from_project_id: {
        value: cdktf.numberToHclTerraform(this._forkedFromProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forking_access_level: {
        value: cdktf.stringToHclTerraform(this._forkingAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_runners_enabled: {
        value: cdktf.booleanToHclTerraform(this._groupRunnersEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_with_project_templates_id: {
        value: cdktf.numberToHclTerraform(this._groupWithProjectTemplatesId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_url: {
        value: cdktf.stringToHclTerraform(this._importUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_url_password: {
        value: cdktf.stringToHclTerraform(this._importUrlPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_url_username: {
        value: cdktf.stringToHclTerraform(this._importUrlUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infrastructure_access_level: {
        value: cdktf.stringToHclTerraform(this._infrastructureAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initialize_with_readme: {
        value: cdktf.booleanToHclTerraform(this._initializeWithReadme),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issues_access_level: {
        value: cdktf.stringToHclTerraform(this._issuesAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issues_enabled: {
        value: cdktf.booleanToHclTerraform(this._issuesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issues_template: {
        value: cdktf.stringToHclTerraform(this._issuesTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_latest_artifact: {
        value: cdktf.booleanToHclTerraform(this._keepLatestArtifact),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lfs_enabled: {
        value: cdktf.booleanToHclTerraform(this._lfsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      merge_commit_template: {
        value: cdktf.stringToHclTerraform(this._mergeCommitTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_method: {
        value: cdktf.stringToHclTerraform(this._mergeMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_pipelines_enabled: {
        value: cdktf.booleanToHclTerraform(this._mergePipelinesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      merge_requests_access_level: {
        value: cdktf.stringToHclTerraform(this._mergeRequestsAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_requests_enabled: {
        value: cdktf.booleanToHclTerraform(this._mergeRequestsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      merge_requests_template: {
        value: cdktf.stringToHclTerraform(this._mergeRequestsTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_trains_enabled: {
        value: cdktf.booleanToHclTerraform(this._mergeTrainsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mirror: {
        value: cdktf.booleanToHclTerraform(this._mirror),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mirror_overwrites_diverged_branches: {
        value: cdktf.booleanToHclTerraform(this._mirrorOverwritesDivergedBranches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mirror_trigger_builds: {
        value: cdktf.booleanToHclTerraform(this._mirrorTriggerBuilds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitor_access_level: {
        value: cdktf.stringToHclTerraform(this._monitorAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mr_default_target_self: {
        value: cdktf.booleanToHclTerraform(this._mrDefaultTargetSelf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_id: {
        value: cdktf.numberToHclTerraform(this._namespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      only_allow_merge_if_all_discussions_are_resolved: {
        value: cdktf.booleanToHclTerraform(this._onlyAllowMergeIfAllDiscussionsAreResolved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      only_allow_merge_if_pipeline_succeeds: {
        value: cdktf.booleanToHclTerraform(this._onlyAllowMergeIfPipelineSucceeds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      only_mirror_protected_branches: {
        value: cdktf.booleanToHclTerraform(this._onlyMirrorProtectedBranches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      packages_enabled: {
        value: cdktf.booleanToHclTerraform(this._packagesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pages_access_level: {
        value: cdktf.stringToHclTerraform(this._pagesAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipelines_enabled: {
        value: cdktf.booleanToHclTerraform(this._pipelinesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      printing_merge_request_link_enabled: {
        value: cdktf.booleanToHclTerraform(this._printingMergeRequestLinkEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_builds: {
        value: cdktf.booleanToHclTerraform(this._publicBuilds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_jobs: {
        value: cdktf.booleanToHclTerraform(this._publicJobs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      releases_access_level: {
        value: cdktf.stringToHclTerraform(this._releasesAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_source_branch_after_merge: {
        value: cdktf.booleanToHclTerraform(this._removeSourceBranchAfterMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository_access_level: {
        value: cdktf.stringToHclTerraform(this._repositoryAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_storage: {
        value: cdktf.stringToHclTerraform(this._repositoryStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._requestAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      requirements_access_level: {
        value: cdktf.stringToHclTerraform(this._requirementsAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_outdated_diff_discussions: {
        value: cdktf.booleanToHclTerraform(this._resolveOutdatedDiffDiscussions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_user_defined_variables: {
        value: cdktf.booleanToHclTerraform(this._restrictUserDefinedVariables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_and_compliance_access_level: {
        value: cdktf.stringToHclTerraform(this._securityAndComplianceAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_runners_enabled: {
        value: cdktf.booleanToHclTerraform(this._sharedRunnersEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_wait_for_default_branch_protection: {
        value: cdktf.booleanToHclTerraform(this._skipWaitForDefaultBranchProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snippets_access_level: {
        value: cdktf.stringToHclTerraform(this._snippetsAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippets_enabled: {
        value: cdktf.booleanToHclTerraform(this._snippetsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      squash_commit_template: {
        value: cdktf.stringToHclTerraform(this._squashCommitTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      squash_option: {
        value: cdktf.stringToHclTerraform(this._squashOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suggestion_commit_message: {
        value: cdktf.stringToHclTerraform(this._suggestionCommitMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_project_id: {
        value: cdktf.numberToHclTerraform(this._templateProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_custom_template: {
        value: cdktf.booleanToHclTerraform(this._useCustomTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      visibility_level: {
        value: cdktf.stringToHclTerraform(this._visibilityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiki_access_level: {
        value: cdktf.stringToHclTerraform(this._wikiAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiki_enabled: {
        value: cdktf.booleanToHclTerraform(this._wikiEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      container_expiration_policy: {
        value: projectContainerExpirationPolicyToHclTerraform(this._containerExpirationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectContainerExpirationPolicyList",
      },
      push_rules: {
        value: projectPushRulesToHclTerraform(this._pushRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectPushRulesList",
      },
      timeouts: {
        value: projectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
