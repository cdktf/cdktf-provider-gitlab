// https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/group_provisioned_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabGroupProvisionedUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Return only active provisioned users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/group_provisioned_users#active DataGitlabGroupProvisionedUsers#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Return only blocked provisioned users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/group_provisioned_users#blocked DataGitlabGroupProvisionedUsers#blocked}
  */
  readonly blocked?: boolean | cdktf.IResolvable;
  /**
  * Return only provisioned users created on or after the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/group_provisioned_users#created_after DataGitlabGroupProvisionedUsers#created_after}
  */
  readonly createdAfter?: string;
  /**
  * Return only provisioned users created on or before the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/group_provisioned_users#created_before DataGitlabGroupProvisionedUsers#created_before}
  */
  readonly createdBefore?: string;
  /**
  * The ID or URL-encoded path of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/group_provisioned_users#id DataGitlabGroupProvisionedUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The search query to filter the provisioned users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/group_provisioned_users#search DataGitlabGroupProvisionedUsers#search}
  */
  readonly search?: string;
  /**
  * The username of the provisioned user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/group_provisioned_users#username DataGitlabGroupProvisionedUsers#username}
  */
  readonly username?: string;
  /**
  * provisioned_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/group_provisioned_users#provisioned_users DataGitlabGroupProvisionedUsers#provisioned_users}
  */
  readonly provisionedUsers?: DataGitlabGroupProvisionedUsersProvisionedUsers[] | cdktf.IResolvable;
}
export interface DataGitlabGroupProvisionedUsersProvisionedUsers {
}

export function dataGitlabGroupProvisionedUsersProvisionedUsersToTerraform(struct?: DataGitlabGroupProvisionedUsersProvisionedUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabGroupProvisionedUsersProvisionedUsersToHclTerraform(struct?: DataGitlabGroupProvisionedUsersProvisionedUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGitlabGroupProvisionedUsersProvisionedUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabGroupProvisionedUsersProvisionedUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // bot - computed: true, optional: false, required: false
  public get bot() {
    return this.getBooleanAttribute('bot');
  }

  // confirmed_at - computed: true, optional: false, required: false
  public get confirmedAt() {
    return this.getStringAttribute('confirmed_at');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // external - computed: true, optional: false, required: false
  public get external() {
    return this.getBooleanAttribute('external');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_title - computed: true, optional: false, required: false
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }

  // last_activity_on - computed: true, optional: false, required: false
  public get lastActivityOn() {
    return this.getStringAttribute('last_activity_on');
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

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // private_profile - computed: true, optional: false, required: false
  public get privateProfile() {
    return this.getBooleanAttribute('private_profile');
  }

  // pronouns - computed: true, optional: false, required: false
  public get pronouns() {
    return this.getStringAttribute('pronouns');
  }

  // public_email - computed: true, optional: false, required: false
  public get publicEmail() {
    return this.getStringAttribute('public_email');
  }

  // skype - computed: true, optional: false, required: false
  public get skype() {
    return this.getStringAttribute('skype');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }

  // website_url - computed: true, optional: false, required: false
  public get websiteUrl() {
    return this.getStringAttribute('website_url');
  }
}

export class DataGitlabGroupProvisionedUsersProvisionedUsersList extends cdktf.ComplexList {
  public internalValue? : DataGitlabGroupProvisionedUsersProvisionedUsers[] | cdktf.IResolvable

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
  public get(index: number): DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference {
    return new DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/group_provisioned_users gitlab_group_provisioned_users}
*/
export class DataGitlabGroupProvisionedUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_provisioned_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabGroupProvisionedUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabGroupProvisionedUsers to import
  * @param importFromId The id of the existing DataGitlabGroupProvisionedUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/group_provisioned_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabGroupProvisionedUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_provisioned_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/data-sources/group_provisioned_users gitlab_group_provisioned_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabGroupProvisionedUsersConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabGroupProvisionedUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_provisioned_users',
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
    this._active = config.active;
    this._blocked = config.blocked;
    this._createdAfter = config.createdAfter;
    this._createdBefore = config.createdBefore;
    this._id = config.id;
    this._search = config.search;
    this._username = config.username;
    this._provisionedUsers.internalValue = config.provisionedUsers;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // provisioned_users - computed: false, optional: true, required: false
  private _provisionedUsers = new DataGitlabGroupProvisionedUsersProvisionedUsersList(this, "provisioned_users", false);
  public get provisionedUsers() {
    return this._provisionedUsers;
  }
  public putProvisionedUsers(value: DataGitlabGroupProvisionedUsersProvisionedUsers[] | cdktf.IResolvable) {
    this._provisionedUsers.internalValue = value;
  }
  public resetProvisionedUsers() {
    this._provisionedUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedUsersInput() {
    return this._provisionedUsers.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      search: cdktf.stringToTerraform(this._search),
      username: cdktf.stringToTerraform(this._username),
      provisioned_users: cdktf.listMapper(dataGitlabGroupProvisionedUsersProvisionedUsersToTerraform, true)(this._provisionedUsers.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_users: {
        value: cdktf.listMapperHcl(dataGitlabGroupProvisionedUsersProvisionedUsersToHclTerraform, true)(this._provisionedUsers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGitlabGroupProvisionedUsersProvisionedUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
