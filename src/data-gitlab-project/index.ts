/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default number of revisions for shallow cloning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project#ci_default_git_depth DataGitlabProject#ci_default_git_depth}
  */
  readonly ciDefaultGitDepth?: number;
  /**
  * Fields included in the sub claim of the ID Token. Accepts an array starting with project_path. The array might also include ref_type and ref. Defaults to ["project_path", "ref_type", "ref"]. Introduced in GitLab 17.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project#ci_id_token_sub_claim_components DataGitlabProject#ci_id_token_sub_claim_components}
  */
  readonly ciIdTokenSubClaimComponents?: string[];
  /**
  * The integer that uniquely identifies the project within the gitlab install.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project#id DataGitlabProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path of the repository with namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project#path_with_namespace DataGitlabProject#path_with_namespace}
  */
  readonly pathWithNamespace?: string;
  /**
  * If true, jobs can be viewed by non-project members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project#public_builds DataGitlabProject#public_builds}
  */
  readonly publicBuilds?: boolean | cdktf.IResolvable;
}
export interface DataGitlabProjectContainerExpirationPolicy {
}

export function dataGitlabProjectContainerExpirationPolicyToTerraform(struct?: DataGitlabProjectContainerExpirationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectContainerExpirationPolicyToHclTerraform(struct?: DataGitlabProjectContainerExpirationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectContainerExpirationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGitlabProjectContainerExpirationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectContainerExpirationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cadence - computed: true, optional: false, required: false
  public get cadence() {
    return this.getStringAttribute('cadence');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // keep_n - computed: true, optional: false, required: false
  public get keepN() {
    return this.getNumberAttribute('keep_n');
  }

  // name_regex_delete - computed: true, optional: false, required: false
  public get nameRegexDelete() {
    return this.getStringAttribute('name_regex_delete');
  }

  // name_regex_keep - computed: true, optional: false, required: false
  public get nameRegexKeep() {
    return this.getStringAttribute('name_regex_keep');
  }

  // next_run_at - computed: true, optional: false, required: false
  public get nextRunAt() {
    return this.getStringAttribute('next_run_at');
  }

  // older_than - computed: true, optional: false, required: false
  public get olderThan() {
    return this.getStringAttribute('older_than');
  }
}

export class DataGitlabProjectContainerExpirationPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGitlabProjectContainerExpirationPolicyOutputReference {
    return new DataGitlabProjectContainerExpirationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectPushRules {
}

export function dataGitlabProjectPushRulesToTerraform(struct?: DataGitlabProjectPushRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectPushRulesToHclTerraform(struct?: DataGitlabProjectPushRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectPushRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGitlabProjectPushRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectPushRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // author_email_regex - computed: true, optional: false, required: false
  public get authorEmailRegex() {
    return this.getStringAttribute('author_email_regex');
  }

  // branch_name_regex - computed: true, optional: false, required: false
  public get branchNameRegex() {
    return this.getStringAttribute('branch_name_regex');
  }

  // commit_committer_check - computed: true, optional: false, required: false
  public get commitCommitterCheck() {
    return this.getBooleanAttribute('commit_committer_check');
  }

  // commit_committer_name_check - computed: true, optional: false, required: false
  public get commitCommitterNameCheck() {
    return this.getBooleanAttribute('commit_committer_name_check');
  }

  // commit_message_negative_regex - computed: true, optional: false, required: false
  public get commitMessageNegativeRegex() {
    return this.getStringAttribute('commit_message_negative_regex');
  }

  // commit_message_regex - computed: true, optional: false, required: false
  public get commitMessageRegex() {
    return this.getStringAttribute('commit_message_regex');
  }

  // deny_delete_tag - computed: true, optional: false, required: false
  public get denyDeleteTag() {
    return this.getBooleanAttribute('deny_delete_tag');
  }

  // file_name_regex - computed: true, optional: false, required: false
  public get fileNameRegex() {
    return this.getStringAttribute('file_name_regex');
  }

  // max_file_size - computed: true, optional: false, required: false
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }

  // member_check - computed: true, optional: false, required: false
  public get memberCheck() {
    return this.getBooleanAttribute('member_check');
  }

  // prevent_secrets - computed: true, optional: false, required: false
  public get preventSecrets() {
    return this.getBooleanAttribute('prevent_secrets');
  }

  // reject_non_dco_commits - computed: true, optional: false, required: false
  public get rejectNonDcoCommits() {
    return this.getBooleanAttribute('reject_non_dco_commits');
  }

  // reject_unsigned_commits - computed: true, optional: false, required: false
  public get rejectUnsignedCommits() {
    return this.getBooleanAttribute('reject_unsigned_commits');
  }
}

export class DataGitlabProjectPushRulesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGitlabProjectPushRulesOutputReference {
    return new DataGitlabProjectPushRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectSharedWithGroups {
}

export function dataGitlabProjectSharedWithGroupsToTerraform(struct?: DataGitlabProjectSharedWithGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectSharedWithGroupsToHclTerraform(struct?: DataGitlabProjectSharedWithGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectSharedWithGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGitlabProjectSharedWithGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectSharedWithGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_access_level - computed: true, optional: false, required: false
  public get groupAccessLevel() {
    return this.getNumberAttribute('group_access_level');
  }

  // group_full_path - computed: true, optional: false, required: false
  public get groupFullPath() {
    return this.getStringAttribute('group_full_path');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
}

export class DataGitlabProjectSharedWithGroupsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGitlabProjectSharedWithGroupsOutputReference {
    return new DataGitlabProjectSharedWithGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project gitlab_project}
*/
export class DataGitlabProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabProject to import
  * @param importFromId The id of the existing DataGitlabProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project gitlab_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.2.0',
        providerVersionConstraint: '~> 18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ciDefaultGitDepth = config.ciDefaultGitDepth;
    this._ciIdTokenSubClaimComponents = config.ciIdTokenSubClaimComponents;
    this._id = config.id;
    this._pathWithNamespace = config.pathWithNamespace;
    this._publicBuilds = config.publicBuilds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_pipeline_trigger_approve_deployment - computed: true, optional: false, required: false
  public get allowPipelineTriggerApproveDeployment() {
    return this.getBooleanAttribute('allow_pipeline_trigger_approve_deployment');
  }

  // analytics_access_level - computed: true, optional: false, required: false
  public get analyticsAccessLevel() {
    return this.getStringAttribute('analytics_access_level');
  }

  // archived - computed: true, optional: false, required: false
  public get archived() {
    return this.getBooleanAttribute('archived');
  }

  // auto_cancel_pending_pipelines - computed: true, optional: false, required: false
  public get autoCancelPendingPipelines() {
    return this.getStringAttribute('auto_cancel_pending_pipelines');
  }

  // auto_devops_deploy_strategy - computed: true, optional: false, required: false
  public get autoDevopsDeployStrategy() {
    return this.getStringAttribute('auto_devops_deploy_strategy');
  }

  // auto_devops_enabled - computed: true, optional: false, required: false
  public get autoDevopsEnabled() {
    return this.getBooleanAttribute('auto_devops_enabled');
  }

  // autoclose_referenced_issues - computed: true, optional: false, required: false
  public get autocloseReferencedIssues() {
    return this.getBooleanAttribute('autoclose_referenced_issues');
  }

  // build_git_strategy - computed: true, optional: false, required: false
  public get buildGitStrategy() {
    return this.getStringAttribute('build_git_strategy');
  }

  // build_timeout - computed: true, optional: false, required: false
  public get buildTimeout() {
    return this.getNumberAttribute('build_timeout');
  }

  // builds_access_level - computed: true, optional: false, required: false
  public get buildsAccessLevel() {
    return this.getStringAttribute('builds_access_level');
  }

  // ci_config_path - computed: true, optional: false, required: false
  public get ciConfigPath() {
    return this.getStringAttribute('ci_config_path');
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

  // ci_delete_pipelines_in_seconds - computed: true, optional: false, required: false
  public get ciDeletePipelinesInSeconds() {
    return this.getNumberAttribute('ci_delete_pipelines_in_seconds');
  }

  // ci_id_token_sub_claim_components - computed: true, optional: true, required: false
  private _ciIdTokenSubClaimComponents?: string[]; 
  public get ciIdTokenSubClaimComponents() {
    return this.getListAttribute('ci_id_token_sub_claim_components');
  }
  public set ciIdTokenSubClaimComponents(value: string[]) {
    this._ciIdTokenSubClaimComponents = value;
  }
  public resetCiIdTokenSubClaimComponents() {
    this._ciIdTokenSubClaimComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciIdTokenSubClaimComponentsInput() {
    return this._ciIdTokenSubClaimComponents;
  }

  // ci_pipeline_variables_minimum_override_role - computed: true, optional: false, required: false
  public get ciPipelineVariablesMinimumOverrideRole() {
    return this.getStringAttribute('ci_pipeline_variables_minimum_override_role');
  }

  // ci_restrict_pipeline_cancellation_role - computed: true, optional: false, required: false
  public get ciRestrictPipelineCancellationRole() {
    return this.getStringAttribute('ci_restrict_pipeline_cancellation_role');
  }

  // ci_separated_caches - computed: true, optional: false, required: false
  public get ciSeparatedCaches() {
    return this.getBooleanAttribute('ci_separated_caches');
  }

  // container_expiration_policy - computed: true, optional: false, required: false
  private _containerExpirationPolicy = new DataGitlabProjectContainerExpirationPolicyList(this, "container_expiration_policy", false);
  public get containerExpirationPolicy() {
    return this._containerExpirationPolicy;
  }

  // container_registry_access_level - computed: true, optional: false, required: false
  public get containerRegistryAccessLevel() {
    return this.getStringAttribute('container_registry_access_level');
  }

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // emails_enabled - computed: true, optional: false, required: false
  public get emailsEnabled() {
    return this.getBooleanAttribute('emails_enabled');
  }

  // empty_repo - computed: true, optional: false, required: false
  public get emptyRepo() {
    return this.getBooleanAttribute('empty_repo');
  }

  // environments_access_level - computed: true, optional: false, required: false
  public get environmentsAccessLevel() {
    return this.getStringAttribute('environments_access_level');
  }

  // external_authorization_classification_label - computed: true, optional: false, required: false
  public get externalAuthorizationClassificationLabel() {
    return this.getStringAttribute('external_authorization_classification_label');
  }

  // feature_flags_access_level - computed: true, optional: false, required: false
  public get featureFlagsAccessLevel() {
    return this.getStringAttribute('feature_flags_access_level');
  }

  // forking_access_level - computed: true, optional: false, required: false
  public get forkingAccessLevel() {
    return this.getStringAttribute('forking_access_level');
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

  // import_url - computed: true, optional: false, required: false
  public get importUrl() {
    return this.getStringAttribute('import_url');
  }

  // infrastructure_access_level - computed: true, optional: false, required: false
  public get infrastructureAccessLevel() {
    return this.getStringAttribute('infrastructure_access_level');
  }

  // issues_access_level - computed: true, optional: false, required: false
  public get issuesAccessLevel() {
    return this.getStringAttribute('issues_access_level');
  }

  // issues_enabled - computed: true, optional: false, required: false
  public get issuesEnabled() {
    return this.getBooleanAttribute('issues_enabled');
  }

  // keep_latest_artifact - computed: true, optional: false, required: false
  public get keepLatestArtifact() {
    return this.getBooleanAttribute('keep_latest_artifact');
  }

  // lfs_enabled - computed: true, optional: false, required: false
  public get lfsEnabled() {
    return this.getBooleanAttribute('lfs_enabled');
  }

  // merge_commit_template - computed: true, optional: false, required: false
  public get mergeCommitTemplate() {
    return this.getStringAttribute('merge_commit_template');
  }

  // merge_pipelines_enabled - computed: true, optional: false, required: false
  public get mergePipelinesEnabled() {
    return this.getBooleanAttribute('merge_pipelines_enabled');
  }

  // merge_requests_access_level - computed: true, optional: false, required: false
  public get mergeRequestsAccessLevel() {
    return this.getStringAttribute('merge_requests_access_level');
  }

  // merge_requests_enabled - computed: true, optional: false, required: false
  public get mergeRequestsEnabled() {
    return this.getBooleanAttribute('merge_requests_enabled');
  }

  // merge_trains_enabled - computed: true, optional: false, required: false
  public get mergeTrainsEnabled() {
    return this.getBooleanAttribute('merge_trains_enabled');
  }

  // model_experiments_access_level - computed: true, optional: false, required: false
  public get modelExperimentsAccessLevel() {
    return this.getStringAttribute('model_experiments_access_level');
  }

  // model_registry_access_level - computed: true, optional: false, required: false
  public get modelRegistryAccessLevel() {
    return this.getStringAttribute('model_registry_access_level');
  }

  // monitor_access_level - computed: true, optional: false, required: false
  public get monitorAccessLevel() {
    return this.getStringAttribute('monitor_access_level');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getNumberAttribute('namespace_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // path_with_namespace - computed: true, optional: true, required: false
  private _pathWithNamespace?: string; 
  public get pathWithNamespace() {
    return this.getStringAttribute('path_with_namespace');
  }
  public set pathWithNamespace(value: string) {
    this._pathWithNamespace = value;
  }
  public resetPathWithNamespace() {
    this._pathWithNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathWithNamespaceInput() {
    return this._pathWithNamespace;
  }

  // pipelines_enabled - computed: true, optional: false, required: false
  public get pipelinesEnabled() {
    return this.getBooleanAttribute('pipelines_enabled');
  }

  // prevent_merge_without_jira_issue - computed: true, optional: false, required: false
  public get preventMergeWithoutJiraIssue() {
    return this.getBooleanAttribute('prevent_merge_without_jira_issue');
  }

  // printing_merge_request_link_enabled - computed: true, optional: false, required: false
  public get printingMergeRequestLinkEnabled() {
    return this.getBooleanAttribute('printing_merge_request_link_enabled');
  }

  // public_builds - computed: false, optional: true, required: false
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

  // push_rules - computed: true, optional: false, required: false
  private _pushRules = new DataGitlabProjectPushRulesList(this, "push_rules", false);
  public get pushRules() {
    return this._pushRules;
  }

  // releases_access_level - computed: true, optional: false, required: false
  public get releasesAccessLevel() {
    return this.getStringAttribute('releases_access_level');
  }

  // remove_source_branch_after_merge - computed: true, optional: false, required: false
  public get removeSourceBranchAfterMerge() {
    return this.getBooleanAttribute('remove_source_branch_after_merge');
  }

  // repository_access_level - computed: true, optional: false, required: false
  public get repositoryAccessLevel() {
    return this.getStringAttribute('repository_access_level');
  }

  // repository_storage - computed: true, optional: false, required: false
  public get repositoryStorage() {
    return this.getStringAttribute('repository_storage');
  }

  // request_access_enabled - computed: true, optional: false, required: false
  public get requestAccessEnabled() {
    return this.getBooleanAttribute('request_access_enabled');
  }

  // requirements_access_level - computed: true, optional: false, required: false
  public get requirementsAccessLevel() {
    return this.getStringAttribute('requirements_access_level');
  }

  // resolve_outdated_diff_discussions - computed: true, optional: false, required: false
  public get resolveOutdatedDiffDiscussions() {
    return this.getBooleanAttribute('resolve_outdated_diff_discussions');
  }

  // restrict_user_defined_variables - computed: true, optional: false, required: false
  public get restrictUserDefinedVariables() {
    return this.getBooleanAttribute('restrict_user_defined_variables');
  }

  // runners_token - computed: true, optional: false, required: false
  public get runnersToken() {
    return this.getStringAttribute('runners_token');
  }

  // security_and_compliance_access_level - computed: true, optional: false, required: false
  public get securityAndComplianceAccessLevel() {
    return this.getStringAttribute('security_and_compliance_access_level');
  }

  // shared_with_groups - computed: true, optional: false, required: false
  private _sharedWithGroups = new DataGitlabProjectSharedWithGroupsList(this, "shared_with_groups", false);
  public get sharedWithGroups() {
    return this._sharedWithGroups;
  }

  // snippets_access_level - computed: true, optional: false, required: false
  public get snippetsAccessLevel() {
    return this.getStringAttribute('snippets_access_level');
  }

  // snippets_enabled - computed: true, optional: false, required: false
  public get snippetsEnabled() {
    return this.getBooleanAttribute('snippets_enabled');
  }

  // squash_commit_template - computed: true, optional: false, required: false
  public get squashCommitTemplate() {
    return this.getStringAttribute('squash_commit_template');
  }

  // ssh_url_to_repo - computed: true, optional: false, required: false
  public get sshUrlToRepo() {
    return this.getStringAttribute('ssh_url_to_repo');
  }

  // suggestion_commit_message - computed: true, optional: false, required: false
  public get suggestionCommitMessage() {
    return this.getStringAttribute('suggestion_commit_message');
  }

  // topics - computed: true, optional: false, required: false
  public get topics() {
    return cdktf.Fn.tolist(this.getListAttribute('topics'));
  }

  // visibility_level - computed: true, optional: false, required: false
  public get visibilityLevel() {
    return this.getStringAttribute('visibility_level');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }

  // wiki_access_level - computed: true, optional: false, required: false
  public get wikiAccessLevel() {
    return this.getStringAttribute('wiki_access_level');
  }

  // wiki_enabled - computed: true, optional: false, required: false
  public get wikiEnabled() {
    return this.getBooleanAttribute('wiki_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ci_default_git_depth: cdktf.numberToTerraform(this._ciDefaultGitDepth),
      ci_id_token_sub_claim_components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ciIdTokenSubClaimComponents),
      id: cdktf.stringToTerraform(this._id),
      path_with_namespace: cdktf.stringToTerraform(this._pathWithNamespace),
      public_builds: cdktf.booleanToTerraform(this._publicBuilds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ci_default_git_depth: {
        value: cdktf.numberToHclTerraform(this._ciDefaultGitDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ci_id_token_sub_claim_components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ciIdTokenSubClaimComponents),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_with_namespace: {
        value: cdktf.stringToHclTerraform(this._pathWithNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_builds: {
        value: cdktf.booleanToHclTerraform(this._publicBuilds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
