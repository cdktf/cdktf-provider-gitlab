// https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_share_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupShareGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Share expiration date. Format: `YYYY-MM-DD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_share_group#expires_at GroupShareGroup#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * The access level to grant the group. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_share_group#group_access GroupShareGroup#group_access}
  */
  readonly groupAccess: string;
  /**
  * The id of the main group to be shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_share_group#group_id GroupShareGroup#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_share_group#id GroupShareGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The id of the additional group with which the main group will be shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_share_group#share_group_id GroupShareGroup#share_group_id}
  */
  readonly shareGroupId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_share_group gitlab_group_share_group}
*/
export class GroupShareGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_share_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group_share_group gitlab_group_share_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupShareGroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupShareGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_share_group',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.4.0',
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
    this._expiresAt = config.expiresAt;
    this._groupAccess = config.groupAccess;
    this._groupId = config.groupId;
    this._id = config.id;
    this._shareGroupId = config.shareGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // group_access - computed: false, optional: false, required: true
  private _groupAccess?: string; 
  public get groupAccess() {
    return this.getStringAttribute('group_access');
  }
  public set groupAccess(value: string) {
    this._groupAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAccessInput() {
    return this._groupAccess;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
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

  // share_group_id - computed: false, optional: false, required: true
  private _shareGroupId?: number; 
  public get shareGroupId() {
    return this.getNumberAttribute('share_group_id');
  }
  public set shareGroupId(value: number) {
    this._shareGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareGroupIdInput() {
    return this._shareGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      group_access: cdktf.stringToTerraform(this._groupAccess),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      share_group_id: cdktf.numberToTerraform(this._shareGroupId),
    };
  }
}
