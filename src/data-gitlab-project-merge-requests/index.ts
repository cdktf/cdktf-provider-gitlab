/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectMergeRequestsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Return merge requests created by the given user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#author_id DataGitlabProjectMergeRequests#author_id}
  */
  readonly authorId?: number;
  /**
  * Return merge requests created by the given username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#author_username DataGitlabProjectMergeRequests#author_username}
  */
  readonly authorUsername?: string;
  /**
  * Return merge requests created after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#created_after DataGitlabProjectMergeRequests#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Return merge requests created before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#created_before DataGitlabProjectMergeRequests#created_before}
  */
  readonly createdBefore?: string;
  /**
  * The unique internal IDs of the merge requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#iids DataGitlabProjectMergeRequests#iids}
  */
  readonly iids?: number[];
  /**
  * Return only merge requests for a specific milestone. `None` returns merge requests with no milestone. `Any` returns merge requests that have an assigned milestone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#milestone DataGitlabProjectMergeRequests#milestone}
  */
  readonly milestone?: string;
  /**
  * Return merge requests reacted to by the authenticated user with the given emoji. `None` returns issues not given a reaction. `Any` returns issues given at least one reaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#my_reaction_emoji DataGitlabProjectMergeRequests#my_reaction_emoji}
  */
  readonly myReactionEmoji?: string;
  /**
  * Return requests ordered by `created_at`, `title` or `updated_at`. Default is `created_at`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#order_by DataGitlabProjectMergeRequests#order_by}
  */
  readonly orderBy?: string;
  /**
  * The ID or path of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#project DataGitlabProjectMergeRequests#project}
  */
  readonly project: string;
  /**
  * Return merge requests reviewed by the given username. `None` returns merge requests with no reviews. `Any` returns merge requests with any reviewer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#reviewer_username DataGitlabProjectMergeRequests#reviewer_username}
  */
  readonly reviewerUsername?: string;
  /**
  * Return merge requests for the given scope: `created_by_me`, `assigned_to_me`, or `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#scope DataGitlabProjectMergeRequests#scope}
  */
  readonly scope?: string;
  /**
  * Search merge requests against their `title` or `description`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#search DataGitlabProjectMergeRequests#search}
  */
  readonly search?: string;
  /**
  * Return requests sorted in `asc` or `desc` order. Default is `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#sort DataGitlabProjectMergeRequests#sort}
  */
  readonly sort?: string;
  /**
  * Return merge requests with the given source branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#source_branch DataGitlabProjectMergeRequests#source_branch}
  */
  readonly sourceBranch?: string;
  /**
  * Return all merge requests (all) or just those that are opened, closed, locked, or merged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#state DataGitlabProjectMergeRequests#state}
  */
  readonly state?: string;
  /**
  * Return merge requests with the given target branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#target_branch DataGitlabProjectMergeRequests#target_branch}
  */
  readonly targetBranch?: string;
  /**
  * Return merge requests updated after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#updated_after DataGitlabProjectMergeRequests#updated_after}
  */
  readonly updatedAfter?: string;
  /**
  * Return merge requests updated before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#updated_before DataGitlabProjectMergeRequests#updated_before}
  */
  readonly updatedBefore?: string;
  /**
  * Filter merge requests against their wip status. `yes` to return only draft merge requests, `no` to return non-draft merge requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#wip DataGitlabProjectMergeRequests#wip}
  */
  readonly wip?: string;
}
export interface DataGitlabProjectMergeRequestsMergeRequestsAssignee {
}

export function dataGitlabProjectMergeRequestsMergeRequestsAssigneeToTerraform(struct?: DataGitlabProjectMergeRequestsMergeRequestsAssignee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectMergeRequestsMergeRequestsAssigneeToHclTerraform(struct?: DataGitlabProjectMergeRequestsMergeRequestsAssignee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabProjectMergeRequestsMergeRequestsAssignee | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectMergeRequestsMergeRequestsAssignee | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }
}
export interface DataGitlabProjectMergeRequestsMergeRequestsAssignees {
}

export function dataGitlabProjectMergeRequestsMergeRequestsAssigneesToTerraform(struct?: DataGitlabProjectMergeRequestsMergeRequestsAssignees): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectMergeRequestsMergeRequestsAssigneesToHclTerraform(struct?: DataGitlabProjectMergeRequestsMergeRequestsAssignees): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectMergeRequestsMergeRequestsAssignees | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectMergeRequestsMergeRequestsAssignees | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }
}

export class DataGitlabProjectMergeRequestsMergeRequestsAssigneesList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference {
    return new DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectMergeRequestsMergeRequestsAuthor {
}

export function dataGitlabProjectMergeRequestsMergeRequestsAuthorToTerraform(struct?: DataGitlabProjectMergeRequestsMergeRequestsAuthor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectMergeRequestsMergeRequestsAuthorToHclTerraform(struct?: DataGitlabProjectMergeRequestsMergeRequestsAuthor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabProjectMergeRequestsMergeRequestsAuthor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectMergeRequestsMergeRequestsAuthor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }
}
export interface DataGitlabProjectMergeRequestsMergeRequestsClosedBy {
}

export function dataGitlabProjectMergeRequestsMergeRequestsClosedByToTerraform(struct?: DataGitlabProjectMergeRequestsMergeRequestsClosedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectMergeRequestsMergeRequestsClosedByToHclTerraform(struct?: DataGitlabProjectMergeRequestsMergeRequestsClosedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabProjectMergeRequestsMergeRequestsClosedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectMergeRequestsMergeRequestsClosedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }
}
export interface DataGitlabProjectMergeRequestsMergeRequests {
}

export function dataGitlabProjectMergeRequestsMergeRequestsToTerraform(struct?: DataGitlabProjectMergeRequestsMergeRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectMergeRequestsMergeRequestsToHclTerraform(struct?: DataGitlabProjectMergeRequestsMergeRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectMergeRequestsMergeRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectMergeRequestsMergeRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectMergeRequestsMergeRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assignee - computed: true, optional: false, required: false
  private _assignee = new DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference(this, "assignee");
  public get assignee() {
    return this._assignee;
  }

  // assignees - computed: true, optional: false, required: false
  private _assignees = new DataGitlabProjectMergeRequestsMergeRequestsAssigneesList(this, "assignees", false);
  public get assignees() {
    return this._assignees;
  }

  // author - computed: true, optional: false, required: false
  private _author = new DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference(this, "author");
  public get author() {
    return this._author;
  }

  // blocking_discussions_resolved - computed: true, optional: false, required: false
  public get blockingDiscussionsResolved() {
    return this.getBooleanAttribute('blocking_discussions_resolved');
  }

  // closed_at - computed: true, optional: false, required: false
  public get closedAt() {
    return this.getStringAttribute('closed_at');
  }

  // closed_by - computed: true, optional: false, required: false
  private _closedBy = new DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference(this, "closed_by");
  public get closedBy() {
    return this._closedBy;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // iid - computed: true, optional: false, required: false
  public get iid() {
    return this.getNumberAttribute('iid');
  }
}

export class DataGitlabProjectMergeRequestsMergeRequestsList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectMergeRequestsMergeRequestsOutputReference {
    return new DataGitlabProjectMergeRequestsMergeRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests gitlab_project_merge_requests}
*/
export class DataGitlabProjectMergeRequests extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_merge_requests";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabProjectMergeRequests resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabProjectMergeRequests to import
  * @param importFromId The id of the existing DataGitlabProjectMergeRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabProjectMergeRequests to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_merge_requests", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/data-sources/project_merge_requests gitlab_project_merge_requests} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectMergeRequestsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectMergeRequestsConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_merge_requests',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.1.0',
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
    this._authorId = config.authorId;
    this._authorUsername = config.authorUsername;
    this._createdAfter = config.createdAfter;
    this._createdBefore = config.createdBefore;
    this._iids = config.iids;
    this._milestone = config.milestone;
    this._myReactionEmoji = config.myReactionEmoji;
    this._orderBy = config.orderBy;
    this._project = config.project;
    this._reviewerUsername = config.reviewerUsername;
    this._scope = config.scope;
    this._search = config.search;
    this._sort = config.sort;
    this._sourceBranch = config.sourceBranch;
    this._state = config.state;
    this._targetBranch = config.targetBranch;
    this._updatedAfter = config.updatedAfter;
    this._updatedBefore = config.updatedBefore;
    this._wip = config.wip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author_id - computed: false, optional: true, required: false
  private _authorId?: number; 
  public get authorId() {
    return this.getNumberAttribute('author_id');
  }
  public set authorId(value: number) {
    this._authorId = value;
  }
  public resetAuthorId() {
    this._authorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorIdInput() {
    return this._authorId;
  }

  // author_username - computed: false, optional: true, required: false
  private _authorUsername?: string; 
  public get authorUsername() {
    return this.getStringAttribute('author_username');
  }
  public set authorUsername(value: string) {
    this._authorUsername = value;
  }
  public resetAuthorUsername() {
    this._authorUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorUsernameInput() {
    return this._authorUsername;
  }

  // created_after - computed: false, optional: true, required: false
  private _createdAfter?: string; 
  public get createdAfter() {
    return this.getStringAttribute('created_after');
  }
  public set createdAfter(value: string) {
    this._createdAfter = value;
  }
  public resetCreatedAfter() {
    this._createdAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAfterInput() {
    return this._createdAfter;
  }

  // created_before - computed: false, optional: true, required: false
  private _createdBefore?: string; 
  public get createdBefore() {
    return this.getStringAttribute('created_before');
  }
  public set createdBefore(value: string) {
    this._createdBefore = value;
  }
  public resetCreatedBefore() {
    this._createdBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdBeforeInput() {
    return this._createdBefore;
  }

  // iids - computed: false, optional: true, required: false
  private _iids?: number[]; 
  public get iids() {
    return this.getNumberListAttribute('iids');
  }
  public set iids(value: number[]) {
    this._iids = value;
  }
  public resetIids() {
    this._iids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iidsInput() {
    return this._iids;
  }

  // merge_requests - computed: true, optional: false, required: false
  private _mergeRequests = new DataGitlabProjectMergeRequestsMergeRequestsList(this, "merge_requests", false);
  public get mergeRequests() {
    return this._mergeRequests;
  }

  // milestone - computed: false, optional: true, required: false
  private _milestone?: string; 
  public get milestone() {
    return this.getStringAttribute('milestone');
  }
  public set milestone(value: string) {
    this._milestone = value;
  }
  public resetMilestone() {
    this._milestone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get milestoneInput() {
    return this._milestone;
  }

  // my_reaction_emoji - computed: false, optional: true, required: false
  private _myReactionEmoji?: string; 
  public get myReactionEmoji() {
    return this.getStringAttribute('my_reaction_emoji');
  }
  public set myReactionEmoji(value: string) {
    this._myReactionEmoji = value;
  }
  public resetMyReactionEmoji() {
    this._myReactionEmoji = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myReactionEmojiInput() {
    return this._myReactionEmoji;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // reviewer_username - computed: false, optional: true, required: false
  private _reviewerUsername?: string; 
  public get reviewerUsername() {
    return this.getStringAttribute('reviewer_username');
  }
  public set reviewerUsername(value: string) {
    this._reviewerUsername = value;
  }
  public resetReviewerUsername() {
    this._reviewerUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerUsernameInput() {
    return this._reviewerUsername;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // source_branch - computed: false, optional: true, required: false
  private _sourceBranch?: string; 
  public get sourceBranch() {
    return this.getStringAttribute('source_branch');
  }
  public set sourceBranch(value: string) {
    this._sourceBranch = value;
  }
  public resetSourceBranch() {
    this._sourceBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBranchInput() {
    return this._sourceBranch;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // target_branch - computed: false, optional: true, required: false
  private _targetBranch?: string; 
  public get targetBranch() {
    return this.getStringAttribute('target_branch');
  }
  public set targetBranch(value: string) {
    this._targetBranch = value;
  }
  public resetTargetBranch() {
    this._targetBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBranchInput() {
    return this._targetBranch;
  }

  // updated_after - computed: false, optional: true, required: false
  private _updatedAfter?: string; 
  public get updatedAfter() {
    return this.getStringAttribute('updated_after');
  }
  public set updatedAfter(value: string) {
    this._updatedAfter = value;
  }
  public resetUpdatedAfter() {
    this._updatedAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAfterInput() {
    return this._updatedAfter;
  }

  // updated_before - computed: false, optional: true, required: false
  private _updatedBefore?: string; 
  public get updatedBefore() {
    return this.getStringAttribute('updated_before');
  }
  public set updatedBefore(value: string) {
    this._updatedBefore = value;
  }
  public resetUpdatedBefore() {
    this._updatedBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedBeforeInput() {
    return this._updatedBefore;
  }

  // wip - computed: false, optional: true, required: false
  private _wip?: string; 
  public get wip() {
    return this.getStringAttribute('wip');
  }
  public set wip(value: string) {
    this._wip = value;
  }
  public resetWip() {
    this._wip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wipInput() {
    return this._wip;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      author_id: cdktf.numberToTerraform(this._authorId),
      author_username: cdktf.stringToTerraform(this._authorUsername),
      created_after: cdktf.stringToTerraform(this._createdAfter),
      created_before: cdktf.stringToTerraform(this._createdBefore),
      iids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._iids),
      milestone: cdktf.stringToTerraform(this._milestone),
      my_reaction_emoji: cdktf.stringToTerraform(this._myReactionEmoji),
      order_by: cdktf.stringToTerraform(this._orderBy),
      project: cdktf.stringToTerraform(this._project),
      reviewer_username: cdktf.stringToTerraform(this._reviewerUsername),
      scope: cdktf.stringToTerraform(this._scope),
      search: cdktf.stringToTerraform(this._search),
      sort: cdktf.stringToTerraform(this._sort),
      source_branch: cdktf.stringToTerraform(this._sourceBranch),
      state: cdktf.stringToTerraform(this._state),
      target_branch: cdktf.stringToTerraform(this._targetBranch),
      updated_after: cdktf.stringToTerraform(this._updatedAfter),
      updated_before: cdktf.stringToTerraform(this._updatedBefore),
      wip: cdktf.stringToTerraform(this._wip),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      author_id: {
        value: cdktf.numberToHclTerraform(this._authorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      author_username: {
        value: cdktf.stringToHclTerraform(this._authorUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_after: {
        value: cdktf.stringToHclTerraform(this._createdAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_before: {
        value: cdktf.stringToHclTerraform(this._createdBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._iids),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      milestone: {
        value: cdktf.stringToHclTerraform(this._milestone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      my_reaction_emoji: {
        value: cdktf.stringToHclTerraform(this._myReactionEmoji),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reviewer_username: {
        value: cdktf.stringToHclTerraform(this._reviewerUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_branch: {
        value: cdktf.stringToHclTerraform(this._sourceBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_branch: {
        value: cdktf.stringToHclTerraform(this._targetBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_after: {
        value: cdktf.stringToHclTerraform(this._updatedAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_before: {
        value: cdktf.stringToHclTerraform(this._updatedBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wip: {
        value: cdktf.stringToHclTerraform(this._wip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
