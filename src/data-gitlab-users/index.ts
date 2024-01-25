/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter users that are active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users#active DataGitlabUsers#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Filter users that are blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users#blocked DataGitlabUsers#blocked}
  */
  readonly blocked?: boolean | cdktf.IResolvable;
  /**
  * Search for users created after a specific date. (Requires administrator privileges)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users#created_after DataGitlabUsers#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Search for users created before a specific date. (Requires administrator privileges)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users#created_before DataGitlabUsers#created_before}
  */
  readonly createdBefore?: string;
  /**
  * Lookup users by external provider. (Requires administrator privileges)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users#extern_provider DataGitlabUsers#extern_provider}
  */
  readonly externProvider?: string;
  /**
  * Lookup users by external UID. (Requires administrator privileges)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users#extern_uid DataGitlabUsers#extern_uid}
  */
  readonly externUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users#id DataGitlabUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Order the users' list by `id`, `name`, `username`, `created_at` or `updated_at`. (Requires administrator privileges)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users#order_by DataGitlabUsers#order_by}
  */
  readonly orderBy?: string;
  /**
  * Search users by username, name or email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users#search DataGitlabUsers#search}
  */
  readonly search?: string;
  /**
  * Sort users' list in asc or desc order. (Requires administrator privileges)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users#sort DataGitlabUsers#sort}
  */
  readonly sort?: string;
}
export interface DataGitlabUsersUsers {
}

export function dataGitlabUsersUsersToTerraform(struct?: DataGitlabUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabUsersUsersToHclTerraform(struct?: DataGitlabUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabUsersUsers | undefined) {
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

  // bio - computed: true, optional: false, required: false
  public get bio() {
    return this.getStringAttribute('bio');
  }

  // can_create_group - computed: true, optional: false, required: false
  public get canCreateGroup() {
    return this.getBooleanAttribute('can_create_group');
  }

  // can_create_project - computed: true, optional: false, required: false
  public get canCreateProject() {
    return this.getBooleanAttribute('can_create_project');
  }

  // color_scheme_id - computed: true, optional: false, required: false
  public get colorSchemeId() {
    return this.getNumberAttribute('color_scheme_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // current_sign_in_at - computed: true, optional: false, required: false
  public get currentSignInAt() {
    return this.getStringAttribute('current_sign_in_at');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // extern_uid - computed: true, optional: false, required: false
  public get externUid() {
    return this.getStringAttribute('extern_uid');
  }

  // external - computed: true, optional: false, required: false
  public get external() {
    return this.getBooleanAttribute('external');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_admin - computed: true, optional: false, required: false
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }

  // is_bot - computed: true, optional: false, required: false
  public get isBot() {
    return this.getBooleanAttribute('is_bot');
  }

  // last_sign_in_at - computed: true, optional: false, required: false
  public get lastSignInAt() {
    return this.getStringAttribute('last_sign_in_at');
  }

  // linkedin - computed: true, optional: false, required: false
  public get linkedin() {
    return this.getStringAttribute('linkedin');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getNumberAttribute('namespace_id');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // projects_limit - computed: true, optional: false, required: false
  public get projectsLimit() {
    return this.getNumberAttribute('projects_limit');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // skype - computed: true, optional: false, required: false
  public get skype() {
    return this.getStringAttribute('skype');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // theme_id - computed: true, optional: false, required: false
  public get themeId() {
    return this.getNumberAttribute('theme_id');
  }

  // twitter - computed: true, optional: false, required: false
  public get twitter() {
    return this.getStringAttribute('twitter');
  }

  // two_factor_enabled - computed: true, optional: false, required: false
  public get twoFactorEnabled() {
    return this.getBooleanAttribute('two_factor_enabled');
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

export class DataGitlabUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabUsersUsersOutputReference {
    return new DataGitlabUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users gitlab_users}
*/
export class DataGitlabUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabUsers to import
  * @param importFromId The id of the existing DataGitlabUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/data-sources/users gitlab_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGitlabUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab_users',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.8.1',
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
    this._active = config.active;
    this._blocked = config.blocked;
    this._createdAfter = config.createdAfter;
    this._createdBefore = config.createdBefore;
    this._externProvider = config.externProvider;
    this._externUid = config.externUid;
    this._id = config.id;
    this._orderBy = config.orderBy;
    this._search = config.search;
    this._sort = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // blocked - computed: false, optional: true, required: false
  private _blocked?: boolean | cdktf.IResolvable; 
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }
  public set blocked(value: boolean | cdktf.IResolvable) {
    this._blocked = value;
  }
  public resetBlocked() {
    this._blocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
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

  // extern_provider - computed: false, optional: true, required: false
  private _externProvider?: string; 
  public get externProvider() {
    return this.getStringAttribute('extern_provider');
  }
  public set externProvider(value: string) {
    this._externProvider = value;
  }
  public resetExternProvider() {
    this._externProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externProviderInput() {
    return this._externProvider;
  }

  // extern_uid - computed: false, optional: true, required: false
  private _externUid?: string; 
  public get externUid() {
    return this.getStringAttribute('extern_uid');
  }
  public set externUid(value: string) {
    this._externUid = value;
  }
  public resetExternUid() {
    this._externUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externUidInput() {
    return this._externUid;
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

  // users - computed: true, optional: false, required: false
  private _users = new DataGitlabUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      blocked: cdktf.booleanToTerraform(this._blocked),
      created_after: cdktf.stringToTerraform(this._createdAfter),
      created_before: cdktf.stringToTerraform(this._createdBefore),
      extern_provider: cdktf.stringToTerraform(this._externProvider),
      extern_uid: cdktf.stringToTerraform(this._externUid),
      id: cdktf.stringToTerraform(this._id),
      order_by: cdktf.stringToTerraform(this._orderBy),
      search: cdktf.stringToTerraform(this._search),
      sort: cdktf.stringToTerraform(this._sort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blocked: {
        value: cdktf.booleanToHclTerraform(this._blocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      extern_provider: {
        value: cdktf.stringToHclTerraform(this._externProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extern_uid: {
        value: cdktf.stringToHclTerraform(this._externUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
