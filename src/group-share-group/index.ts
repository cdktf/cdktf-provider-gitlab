/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_share_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupShareGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Share expiration date. Format: `YYYY-MM-DD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_share_group#expires_at GroupShareGroup#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * The access level to grant the group. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_share_group#group_access GroupShareGroup#group_access}
  */
  readonly groupAccess: string;
  /**
  * The id of the main group to be shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_share_group#group_id GroupShareGroup#group_id}
  */
  readonly groupId: string;
  /**
  * The ID of a custom member role. Only available for Ultimate instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_share_group#member_role_id GroupShareGroup#member_role_id}
  */
  readonly memberRoleId?: number;
  /**
  * The id of the additional group with which the main group will be shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_share_group#share_group_id GroupShareGroup#share_group_id}
  */
  readonly shareGroupId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_share_group gitlab_group_share_group}
*/
export class GroupShareGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_share_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupShareGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupShareGroup to import
  * @param importFromId The id of the existing GroupShareGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_share_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupShareGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_share_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/group_share_group gitlab_group_share_group} Resource
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
        providerVersion: '17.10.0',
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
    this._expiresAt = config.expiresAt;
    this._groupAccess = config.groupAccess;
    this._groupId = config.groupId;
    this._memberRoleId = config.memberRoleId;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_role_id - computed: true, optional: true, required: false
  private _memberRoleId?: number; 
  public get memberRoleId() {
    return this.getNumberAttribute('member_role_id');
  }
  public set memberRoleId(value: number) {
    this._memberRoleId = value;
  }
  public resetMemberRoleId() {
    this._memberRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberRoleIdInput() {
    return this._memberRoleId;
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
      member_role_id: cdktf.numberToTerraform(this._memberRoleId),
      share_group_id: cdktf.numberToTerraform(this._shareGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_access: {
        value: cdktf.stringToHclTerraform(this._groupAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_role_id: {
        value: cdktf.numberToHclTerraform(this._memberRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      share_group_id: {
        value: cdktf.numberToHclTerraform(this._shareGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
