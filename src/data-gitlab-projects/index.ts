/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Limit by archived status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#archived DataGitlabProjects#archived}
  */
  readonly archived?: boolean | cdktf.IResolvable;
  /**
  * The ID of the group owned by the authenticated user to look projects for within. Cannot be used with `min_access_level`, `with_programming_language` or `statistics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#group_id DataGitlabProjects#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#id DataGitlabProjects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include projects in subgroups of this group. Default is `false`. Needs `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#include_subgroups DataGitlabProjects#include_subgroups}
  */
  readonly includeSubgroups?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of project results pages that may be queried. Prevents overloading your Gitlab instance in case of a misconfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#max_queryable_pages DataGitlabProjects#max_queryable_pages}
  */
  readonly maxQueryablePages?: number;
  /**
  * Limit by projects that the current user is a member of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#membership DataGitlabProjects#membership}
  */
  readonly membership?: boolean | cdktf.IResolvable;
  /**
  * Limit to projects where current user has at least this access level, refer to the [official documentation](https://docs.gitlab.com/api/members/) for values. Cannot be used with `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#min_access_level DataGitlabProjects#min_access_level}
  */
  readonly minAccessLevel?: number;
  /**
  * Return projects ordered ordered by: `id`, `name`, `path`, `created_at`, `updated_at`, `last_activity_at`, `similarity`, `repository_size`, `storage_size`, `packages_size`, `wiki_size`. Some values or only available in certain circumstances. See [upstream docs](https://docs.gitlab.com/api/projects/#list-all-projects) for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#order_by DataGitlabProjects#order_by}
  */
  readonly orderBy?: string;
  /**
  * Limit by projects owned by the current user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#owned DataGitlabProjects#owned}
  */
  readonly owned?: boolean | cdktf.IResolvable;
  /**
  * The first page to begin the query on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#page DataGitlabProjects#page}
  */
  readonly page?: number;
  /**
  * The number of results to return per page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#per_page DataGitlabProjects#per_page}
  */
  readonly perPage?: number;
  /**
  * Return list of authorized projects matching the search criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#search DataGitlabProjects#search}
  */
  readonly search?: string;
  /**
  * Return only the ID, URL, name, and path of each project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#simple DataGitlabProjects#simple}
  */
  readonly simple?: boolean | cdktf.IResolvable;
  /**
  * Return projects sorted in `asc` or `desc` order. Default is `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#sort DataGitlabProjects#sort}
  */
  readonly sort?: string;
  /**
  * Limit by projects starred by the current user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#starred DataGitlabProjects#starred}
  */
  readonly starred?: boolean | cdktf.IResolvable;
  /**
  * Include project statistics. Cannot be used with `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#statistics DataGitlabProjects#statistics}
  */
  readonly statistics?: boolean | cdktf.IResolvable;
  /**
  * Limit by projects that have all of the given topics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#topic DataGitlabProjects#topic}
  */
  readonly topic?: string[];
  /**
  * Limit by visibility `public`, `internal`, or `private`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#visibility DataGitlabProjects#visibility}
  */
  readonly visibility?: string;
  /**
  * Include custom attributes in response _(admins only)_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#with_custom_attributes DataGitlabProjects#with_custom_attributes}
  */
  readonly withCustomAttributes?: boolean | cdktf.IResolvable;
  /**
  * Limit by projects with issues feature enabled. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#with_issues_enabled DataGitlabProjects#with_issues_enabled}
  */
  readonly withIssuesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Limit by projects with merge requests feature enabled. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#with_merge_requests_enabled DataGitlabProjects#with_merge_requests_enabled}
  */
  readonly withMergeRequestsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Limit by projects which use the given programming language. Cannot be used with `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#with_programming_language DataGitlabProjects#with_programming_language}
  */
  readonly withProgrammingLanguage?: string;
  /**
  * Include projects shared to this group. Default is `true`. Needs `group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#with_shared DataGitlabProjects#with_shared}
  */
  readonly withShared?: boolean | cdktf.IResolvable;
}
export interface DataGitlabProjectsProjectsContainerExpirationPolicy {
}

export function dataGitlabProjectsProjectsContainerExpirationPolicyToTerraform(struct?: DataGitlabProjectsProjectsContainerExpirationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectsProjectsContainerExpirationPolicyToHclTerraform(struct?: DataGitlabProjectsProjectsContainerExpirationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectsProjectsContainerExpirationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectsProjectsContainerExpirationPolicy | undefined) {
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

  // name_regex - computed: true, optional: false, required: false
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
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

export class DataGitlabProjectsProjectsContainerExpirationPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference {
    return new DataGitlabProjectsProjectsContainerExpirationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectsProjectsForkedFromProject {
}

export function dataGitlabProjectsProjectsForkedFromProjectToTerraform(struct?: DataGitlabProjectsProjectsForkedFromProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectsProjectsForkedFromProjectToHclTerraform(struct?: DataGitlabProjectsProjectsForkedFromProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectsProjectsForkedFromProjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectsProjectsForkedFromProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectsProjectsForkedFromProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_url_to_repo - computed: true, optional: false, required: false
  public get httpUrlToRepo() {
    return this.getStringAttribute('http_url_to_repo');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_with_namespace - computed: true, optional: false, required: false
  public get nameWithNamespace() {
    return this.getStringAttribute('name_with_namespace');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // path_with_namespace - computed: true, optional: false, required: false
  public get pathWithNamespace() {
    return this.getStringAttribute('path_with_namespace');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }
}

export class DataGitlabProjectsProjectsForkedFromProjectList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectsProjectsForkedFromProjectOutputReference {
    return new DataGitlabProjectsProjectsForkedFromProjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectsProjectsNamespace {
}

export function dataGitlabProjectsProjectsNamespaceToTerraform(struct?: DataGitlabProjectsProjectsNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectsProjectsNamespaceToHclTerraform(struct?: DataGitlabProjectsProjectsNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectsProjectsNamespaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectsProjectsNamespace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectsProjectsNamespace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // full_path - computed: true, optional: false, required: false
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataGitlabProjectsProjectsNamespaceList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectsProjectsNamespaceOutputReference {
    return new DataGitlabProjectsProjectsNamespaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectsProjectsOwner {
}

export function dataGitlabProjectsProjectsOwnerToTerraform(struct?: DataGitlabProjectsProjectsOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectsProjectsOwnerToHclTerraform(struct?: DataGitlabProjectsProjectsOwner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectsProjectsOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectsProjectsOwner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectsProjectsOwner | undefined) {
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

  // website_url - computed: true, optional: false, required: false
  public get websiteUrl() {
    return this.getStringAttribute('website_url');
  }
}

export class DataGitlabProjectsProjectsOwnerList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectsProjectsOwnerOutputReference {
    return new DataGitlabProjectsProjectsOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectsProjectsPermissions {
}

export function dataGitlabProjectsProjectsPermissionsToTerraform(struct?: DataGitlabProjectsProjectsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectsProjectsPermissionsToHclTerraform(struct?: DataGitlabProjectsProjectsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectsProjectsPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectsProjectsPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectsProjectsPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_access - computed: true, optional: false, required: false
  private _groupAccess = new cdktf.NumberMap(this, "group_access");
  public get groupAccess() {
    return this._groupAccess;
  }

  // project_access - computed: true, optional: false, required: false
  private _projectAccess = new cdktf.NumberMap(this, "project_access");
  public get projectAccess() {
    return this._projectAccess;
  }
}

export class DataGitlabProjectsProjectsPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectsProjectsPermissionsOutputReference {
    return new DataGitlabProjectsProjectsPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectsProjectsSharedWithGroups {
}

export function dataGitlabProjectsProjectsSharedWithGroupsToTerraform(struct?: DataGitlabProjectsProjectsSharedWithGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectsProjectsSharedWithGroupsToHclTerraform(struct?: DataGitlabProjectsProjectsSharedWithGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectsProjectsSharedWithGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectsProjectsSharedWithGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectsProjectsSharedWithGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_access_level - computed: true, optional: false, required: false
  public get groupAccessLevel() {
    return this.getStringAttribute('group_access_level');
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

export class DataGitlabProjectsProjectsSharedWithGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectsProjectsSharedWithGroupsOutputReference {
    return new DataGitlabProjectsProjectsSharedWithGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGitlabProjectsProjects {
}

export function dataGitlabProjectsProjectsToTerraform(struct?: DataGitlabProjectsProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectsProjectsToHclTerraform(struct?: DataGitlabProjectsProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectsProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectsProjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectsProjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // _links - computed: true, optional: false, required: false
  private _links = new cdktf.StringMap(this, "_links");
  public get links() {
    return this._links;
  }

  // allow_merge_on_skipped_pipeline - computed: true, optional: false, required: false
  public get allowMergeOnSkippedPipeline() {
    return this.getBooleanAttribute('allow_merge_on_skipped_pipeline');
  }

  // allow_pipeline_trigger_approve_deployment - computed: true, optional: false, required: false
  public get allowPipelineTriggerApproveDeployment() {
    return this.getBooleanAttribute('allow_pipeline_trigger_approve_deployment');
  }

  // analytics_access_level - computed: true, optional: false, required: false
  public get analyticsAccessLevel() {
    return this.getStringAttribute('analytics_access_level');
  }

  // approvals_before_merge - computed: true, optional: false, required: false
  public get approvalsBeforeMerge() {
    return this.getNumberAttribute('approvals_before_merge');
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

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // build_coverage_regex - computed: true, optional: false, required: false
  public get buildCoverageRegex() {
    return this.getStringAttribute('build_coverage_regex');
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

  // ci_default_git_depth - computed: true, optional: false, required: false
  public get ciDefaultGitDepth() {
    return this.getNumberAttribute('ci_default_git_depth');
  }

  // ci_delete_pipelines_in_seconds - computed: true, optional: false, required: false
  public get ciDeletePipelinesInSeconds() {
    return this.getNumberAttribute('ci_delete_pipelines_in_seconds');
  }

  // ci_forward_deployment_enabled - computed: true, optional: false, required: false
  public get ciForwardDeploymentEnabled() {
    return this.getBooleanAttribute('ci_forward_deployment_enabled');
  }

  // ci_id_token_sub_claim_components - computed: true, optional: false, required: false
  public get ciIdTokenSubClaimComponents() {
    return this.getListAttribute('ci_id_token_sub_claim_components');
  }

  // ci_pipeline_variables_minimum_override_role - computed: true, optional: false, required: false
  public get ciPipelineVariablesMinimumOverrideRole() {
    return this.getStringAttribute('ci_pipeline_variables_minimum_override_role');
  }

  // ci_restrict_pipeline_cancellation_role - computed: true, optional: false, required: false
  public get ciRestrictPipelineCancellationRole() {
    return this.getStringAttribute('ci_restrict_pipeline_cancellation_role');
  }

  // container_expiration_policy - computed: true, optional: false, required: false
  private _containerExpirationPolicy = new DataGitlabProjectsProjectsContainerExpirationPolicyList(this, "container_expiration_policy", false);
  public get containerExpirationPolicy() {
    return this._containerExpirationPolicy;
  }

  // container_registry_access_level - computed: true, optional: false, required: false
  public get containerRegistryAccessLevel() {
    return this.getStringAttribute('container_registry_access_level');
  }

  // container_registry_enabled - computed: true, optional: false, required: false
  public get containerRegistryEnabled() {
    return this.getBooleanAttribute('container_registry_enabled');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // creator_id - computed: true, optional: false, required: false
  public get creatorId() {
    return this.getNumberAttribute('creator_id');
  }

  // custom_attributes - computed: true, optional: false, required: false
  private _customAttributes = new cdktf.StringMapList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
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

  // forked_from_project - computed: true, optional: false, required: false
  private _forkedFromProject = new DataGitlabProjectsProjectsForkedFromProjectList(this, "forked_from_project", false);
  public get forkedFromProject() {
    return this._forkedFromProject;
  }

  // forking_access_level - computed: true, optional: false, required: false
  public get forkingAccessLevel() {
    return this.getStringAttribute('forking_access_level');
  }

  // forks_count - computed: true, optional: false, required: false
  public get forksCount() {
    return this.getNumberAttribute('forks_count');
  }

  // group_runners_enabled - computed: true, optional: false, required: false
  public get groupRunnersEnabled() {
    return this.getBooleanAttribute('group_runners_enabled');
  }

  // http_url_to_repo - computed: true, optional: false, required: false
  public get httpUrlToRepo() {
    return this.getStringAttribute('http_url_to_repo');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // import_error - computed: true, optional: false, required: false
  public get importError() {
    return this.getStringAttribute('import_error');
  }

  // import_status - computed: true, optional: false, required: false
  public get importStatus() {
    return this.getStringAttribute('import_status');
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

  // jobs_enabled - computed: true, optional: false, required: false
  public get jobsEnabled() {
    return this.getBooleanAttribute('jobs_enabled');
  }

  // keep_latest_artifact - computed: true, optional: false, required: false
  public get keepLatestArtifact() {
    return this.getBooleanAttribute('keep_latest_artifact');
  }

  // last_activity_at - computed: true, optional: false, required: false
  public get lastActivityAt() {
    return this.getStringAttribute('last_activity_at');
  }

  // lfs_enabled - computed: true, optional: false, required: false
  public get lfsEnabled() {
    return this.getBooleanAttribute('lfs_enabled');
  }

  // merge_commit_template - computed: true, optional: false, required: false
  public get mergeCommitTemplate() {
    return this.getStringAttribute('merge_commit_template');
  }

  // merge_method - computed: true, optional: false, required: false
  public get mergeMethod() {
    return this.getStringAttribute('merge_method');
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

  // mirror - computed: true, optional: false, required: false
  public get mirror() {
    return this.getBooleanAttribute('mirror');
  }

  // mirror_overwrites_diverged_branches - computed: true, optional: false, required: false
  public get mirrorOverwritesDivergedBranches() {
    return this.getBooleanAttribute('mirror_overwrites_diverged_branches');
  }

  // mirror_trigger_builds - computed: true, optional: false, required: false
  public get mirrorTriggerBuilds() {
    return this.getBooleanAttribute('mirror_trigger_builds');
  }

  // mirror_user_id - computed: true, optional: false, required: false
  public get mirrorUserId() {
    return this.getNumberAttribute('mirror_user_id');
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

  // name_with_namespace - computed: true, optional: false, required: false
  public get nameWithNamespace() {
    return this.getStringAttribute('name_with_namespace');
  }

  // namespace - computed: true, optional: false, required: false
  private _namespace = new DataGitlabProjectsProjectsNamespaceList(this, "namespace", false);
  public get namespace() {
    return this._namespace;
  }

  // only_allow_merge_if_all_discussions_are_resolved - computed: true, optional: false, required: false
  public get onlyAllowMergeIfAllDiscussionsAreResolved() {
    return this.getBooleanAttribute('only_allow_merge_if_all_discussions_are_resolved');
  }

  // only_allow_merge_if_pipeline_succeeds - computed: true, optional: false, required: false
  public get onlyAllowMergeIfPipelineSucceeds() {
    return this.getBooleanAttribute('only_allow_merge_if_pipeline_succeeds');
  }

  // only_mirror_protected_branches - computed: true, optional: false, required: false
  public get onlyMirrorProtectedBranches() {
    return this.getBooleanAttribute('only_mirror_protected_branches');
  }

  // open_issues_count - computed: true, optional: false, required: false
  public get openIssuesCount() {
    return this.getNumberAttribute('open_issues_count');
  }

  // owner - computed: true, optional: false, required: false
  private _owner = new DataGitlabProjectsProjectsOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }

  // packages_enabled - computed: true, optional: false, required: false
  public get packagesEnabled() {
    return this.getBooleanAttribute('packages_enabled');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // path_with_namespace - computed: true, optional: false, required: false
  public get pathWithNamespace() {
    return this.getStringAttribute('path_with_namespace');
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new DataGitlabProjectsProjectsPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }

  // prevent_merge_without_jira_issue - computed: true, optional: false, required: false
  public get preventMergeWithoutJiraIssue() {
    return this.getBooleanAttribute('prevent_merge_without_jira_issue');
  }

  // public_builds - computed: true, optional: false, required: false
  public get publicBuilds() {
    return this.getBooleanAttribute('public_builds');
  }

  // readme_url - computed: true, optional: false, required: false
  public get readmeUrl() {
    return this.getStringAttribute('readme_url');
  }

  // releases_access_level - computed: true, optional: false, required: false
  public get releasesAccessLevel() {
    return this.getStringAttribute('releases_access_level');
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

  // shared_runners_enabled - computed: true, optional: false, required: false
  public get sharedRunnersEnabled() {
    return this.getBooleanAttribute('shared_runners_enabled');
  }

  // shared_with_groups - computed: true, optional: false, required: false
  private _sharedWithGroups = new DataGitlabProjectsProjectsSharedWithGroupsList(this, "shared_with_groups", false);
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

  // star_count - computed: true, optional: false, required: false
  public get starCount() {
    return this.getNumberAttribute('star_count');
  }

  // statistics - computed: true, optional: false, required: false
  private _statistics = new cdktf.NumberMap(this, "statistics");
  public get statistics() {
    return this._statistics;
  }

  // suggestion_commit_message - computed: true, optional: false, required: false
  public get suggestionCommitMessage() {
    return this.getStringAttribute('suggestion_commit_message');
  }

  // tag_list - computed: true, optional: false, required: false
  public get tagList() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_list'));
  }

  // topics - computed: true, optional: false, required: false
  public get topics() {
    return cdktf.Fn.tolist(this.getListAttribute('topics'));
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
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
}

export class DataGitlabProjectsProjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectsProjectsOutputReference {
    return new DataGitlabProjectsProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects gitlab_projects}
*/
export class DataGitlabProjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabProjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabProjects to import
  * @param importFromId The id of the existing DataGitlabProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/projects gitlab_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab_projects',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.11.0',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archived = config.archived;
    this._groupId = config.groupId;
    this._id = config.id;
    this._includeSubgroups = config.includeSubgroups;
    this._maxQueryablePages = config.maxQueryablePages;
    this._membership = config.membership;
    this._minAccessLevel = config.minAccessLevel;
    this._orderBy = config.orderBy;
    this._owned = config.owned;
    this._page = config.page;
    this._perPage = config.perPage;
    this._search = config.search;
    this._simple = config.simple;
    this._sort = config.sort;
    this._starred = config.starred;
    this._statistics = config.statistics;
    this._topic = config.topic;
    this._visibility = config.visibility;
    this._withCustomAttributes = config.withCustomAttributes;
    this._withIssuesEnabled = config.withIssuesEnabled;
    this._withMergeRequestsEnabled = config.withMergeRequestsEnabled;
    this._withProgrammingLanguage = config.withProgrammingLanguage;
    this._withShared = config.withShared;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // include_subgroups - computed: false, optional: true, required: false
  private _includeSubgroups?: boolean | cdktf.IResolvable; 
  public get includeSubgroups() {
    return this.getBooleanAttribute('include_subgroups');
  }
  public set includeSubgroups(value: boolean | cdktf.IResolvable) {
    this._includeSubgroups = value;
  }
  public resetIncludeSubgroups() {
    this._includeSubgroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubgroupsInput() {
    return this._includeSubgroups;
  }

  // max_queryable_pages - computed: false, optional: true, required: false
  private _maxQueryablePages?: number; 
  public get maxQueryablePages() {
    return this.getNumberAttribute('max_queryable_pages');
  }
  public set maxQueryablePages(value: number) {
    this._maxQueryablePages = value;
  }
  public resetMaxQueryablePages() {
    this._maxQueryablePages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQueryablePagesInput() {
    return this._maxQueryablePages;
  }

  // membership - computed: false, optional: true, required: false
  private _membership?: boolean | cdktf.IResolvable; 
  public get membership() {
    return this.getBooleanAttribute('membership');
  }
  public set membership(value: boolean | cdktf.IResolvable) {
    this._membership = value;
  }
  public resetMembership() {
    this._membership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipInput() {
    return this._membership;
  }

  // min_access_level - computed: false, optional: true, required: false
  private _minAccessLevel?: number; 
  public get minAccessLevel() {
    return this.getNumberAttribute('min_access_level');
  }
  public set minAccessLevel(value: number) {
    this._minAccessLevel = value;
  }
  public resetMinAccessLevel() {
    this._minAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAccessLevelInput() {
    return this._minAccessLevel;
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

  // owned - computed: false, optional: true, required: false
  private _owned?: boolean | cdktf.IResolvable; 
  public get owned() {
    return this.getBooleanAttribute('owned');
  }
  public set owned(value: boolean | cdktf.IResolvable) {
    this._owned = value;
  }
  public resetOwned() {
    this._owned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownedInput() {
    return this._owned;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // per_page - computed: false, optional: true, required: false
  private _perPage?: number; 
  public get perPage() {
    return this.getNumberAttribute('per_page');
  }
  public set perPage(value: number) {
    this._perPage = value;
  }
  public resetPerPage() {
    this._perPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPageInput() {
    return this._perPage;
  }

  // projects - computed: true, optional: false, required: false
  private _projects = new DataGitlabProjectsProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
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

  // simple - computed: false, optional: true, required: false
  private _simple?: boolean | cdktf.IResolvable; 
  public get simple() {
    return this.getBooleanAttribute('simple');
  }
  public set simple(value: boolean | cdktf.IResolvable) {
    this._simple = value;
  }
  public resetSimple() {
    this._simple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleInput() {
    return this._simple;
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

  // starred - computed: false, optional: true, required: false
  private _starred?: boolean | cdktf.IResolvable; 
  public get starred() {
    return this.getBooleanAttribute('starred');
  }
  public set starred(value: boolean | cdktf.IResolvable) {
    this._starred = value;
  }
  public resetStarred() {
    this._starred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starredInput() {
    return this._starred;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics?: boolean | cdktf.IResolvable; 
  public get statistics() {
    return this.getBooleanAttribute('statistics');
  }
  public set statistics(value: boolean | cdktf.IResolvable) {
    this._statistics = value;
  }
  public resetStatistics() {
    this._statistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string[]; 
  public get topic() {
    return cdktf.Fn.tolist(this.getListAttribute('topic'));
  }
  public set topic(value: string[]) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // with_custom_attributes - computed: false, optional: true, required: false
  private _withCustomAttributes?: boolean | cdktf.IResolvable; 
  public get withCustomAttributes() {
    return this.getBooleanAttribute('with_custom_attributes');
  }
  public set withCustomAttributes(value: boolean | cdktf.IResolvable) {
    this._withCustomAttributes = value;
  }
  public resetWithCustomAttributes() {
    this._withCustomAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withCustomAttributesInput() {
    return this._withCustomAttributes;
  }

  // with_issues_enabled - computed: false, optional: true, required: false
  private _withIssuesEnabled?: boolean | cdktf.IResolvable; 
  public get withIssuesEnabled() {
    return this.getBooleanAttribute('with_issues_enabled');
  }
  public set withIssuesEnabled(value: boolean | cdktf.IResolvable) {
    this._withIssuesEnabled = value;
  }
  public resetWithIssuesEnabled() {
    this._withIssuesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withIssuesEnabledInput() {
    return this._withIssuesEnabled;
  }

  // with_merge_requests_enabled - computed: false, optional: true, required: false
  private _withMergeRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get withMergeRequestsEnabled() {
    return this.getBooleanAttribute('with_merge_requests_enabled');
  }
  public set withMergeRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._withMergeRequestsEnabled = value;
  }
  public resetWithMergeRequestsEnabled() {
    this._withMergeRequestsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withMergeRequestsEnabledInput() {
    return this._withMergeRequestsEnabled;
  }

  // with_programming_language - computed: false, optional: true, required: false
  private _withProgrammingLanguage?: string; 
  public get withProgrammingLanguage() {
    return this.getStringAttribute('with_programming_language');
  }
  public set withProgrammingLanguage(value: string) {
    this._withProgrammingLanguage = value;
  }
  public resetWithProgrammingLanguage() {
    this._withProgrammingLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withProgrammingLanguageInput() {
    return this._withProgrammingLanguage;
  }

  // with_shared - computed: false, optional: true, required: false
  private _withShared?: boolean | cdktf.IResolvable; 
  public get withShared() {
    return this.getBooleanAttribute('with_shared');
  }
  public set withShared(value: boolean | cdktf.IResolvable) {
    this._withShared = value;
  }
  public resetWithShared() {
    this._withShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSharedInput() {
    return this._withShared;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archived: cdktf.booleanToTerraform(this._archived),
      group_id: cdktf.numberToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      include_subgroups: cdktf.booleanToTerraform(this._includeSubgroups),
      max_queryable_pages: cdktf.numberToTerraform(this._maxQueryablePages),
      membership: cdktf.booleanToTerraform(this._membership),
      min_access_level: cdktf.numberToTerraform(this._minAccessLevel),
      order_by: cdktf.stringToTerraform(this._orderBy),
      owned: cdktf.booleanToTerraform(this._owned),
      page: cdktf.numberToTerraform(this._page),
      per_page: cdktf.numberToTerraform(this._perPage),
      search: cdktf.stringToTerraform(this._search),
      simple: cdktf.booleanToTerraform(this._simple),
      sort: cdktf.stringToTerraform(this._sort),
      starred: cdktf.booleanToTerraform(this._starred),
      statistics: cdktf.booleanToTerraform(this._statistics),
      topic: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topic),
      visibility: cdktf.stringToTerraform(this._visibility),
      with_custom_attributes: cdktf.booleanToTerraform(this._withCustomAttributes),
      with_issues_enabled: cdktf.booleanToTerraform(this._withIssuesEnabled),
      with_merge_requests_enabled: cdktf.booleanToTerraform(this._withMergeRequestsEnabled),
      with_programming_language: cdktf.stringToTerraform(this._withProgrammingLanguage),
      with_shared: cdktf.booleanToTerraform(this._withShared),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archived: {
        value: cdktf.booleanToHclTerraform(this._archived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
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
      include_subgroups: {
        value: cdktf.booleanToHclTerraform(this._includeSubgroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_queryable_pages: {
        value: cdktf.numberToHclTerraform(this._maxQueryablePages),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      membership: {
        value: cdktf.booleanToHclTerraform(this._membership),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      min_access_level: {
        value: cdktf.numberToHclTerraform(this._minAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owned: {
        value: cdktf.booleanToHclTerraform(this._owned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_page: {
        value: cdktf.numberToHclTerraform(this._perPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      simple: {
        value: cdktf.booleanToHclTerraform(this._simple),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starred: {
        value: cdktf.booleanToHclTerraform(this._starred),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      statistics: {
        value: cdktf.booleanToHclTerraform(this._statistics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      topic: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topic),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_custom_attributes: {
        value: cdktf.booleanToHclTerraform(this._withCustomAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      with_issues_enabled: {
        value: cdktf.booleanToHclTerraform(this._withIssuesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      with_merge_requests_enabled: {
        value: cdktf.booleanToHclTerraform(this._withMergeRequestsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      with_programming_language: {
        value: cdktf.stringToHclTerraform(this._withProgrammingLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_shared: {
        value: cdktf.booleanToHclTerraform(this._withShared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
