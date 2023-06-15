// https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/data-sources/user_sshkeys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabUserSshkeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/data-sources/user_sshkeys#id DataGitlabUserSshkeys#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the user to get the SSH keys for.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/data-sources/user_sshkeys#user_id DataGitlabUserSshkeys#user_id}
  */
  readonly userId?: number;
  /**
  * Username of the user to get the SSH keys for.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/data-sources/user_sshkeys#username DataGitlabUserSshkeys#username}
  */
  readonly username?: string;
}
export interface DataGitlabUserSshkeysKeys {
}

export function dataGitlabUserSshkeysKeysToTerraform(struct?: DataGitlabUserSshkeysKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGitlabUserSshkeysKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabUserSshkeysKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabUserSshkeysKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
}

export class DataGitlabUserSshkeysKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabUserSshkeysKeysOutputReference {
    return new DataGitlabUserSshkeysKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/data-sources/user_sshkeys gitlab_user_sshkeys}
*/
export class DataGitlabUserSshkeys extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_user_sshkeys";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/data-sources/user_sshkeys gitlab_user_sshkeys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabUserSshkeysConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGitlabUserSshkeysConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab_user_sshkeys',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '15.11.0',
        providerVersionConstraint: '~> 15.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._userId = config.userId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // keys - computed: true, optional: false, required: false
  private _keys = new DataGitlabUserSshkeysKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      user_id: cdktf.numberToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
