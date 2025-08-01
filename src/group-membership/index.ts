/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access level for the member. Valid values are: `no one`, `minimal`, `guest`, `planner`, `reporter`, `developer`, `maintainer`, `owner`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group_membership#access_level GroupMembership#access_level}
  */
  readonly accessLevel: string;
  /**
  * Expiration date for the group membership. Format: `YYYY-MM-DD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group_membership#expires_at GroupMembership#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * The ID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group_membership#group_id GroupMembership#group_id}
  */
  readonly groupId: number;
  /**
  * The ID of a custom member role. Only available for Ultimate instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group_membership#member_role_id GroupMembership#member_role_id}
  */
  readonly memberRoleId?: number;
  /**
  * Whether the deletion of direct memberships of the removed member in subgroups and projects should be skipped. Only used during a destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group_membership#skip_subresources_on_destroy GroupMembership#skip_subresources_on_destroy}
  */
  readonly skipSubresourcesOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Whether the removed member should be unassigned from any issues or merge requests inside a given group or project. Only used during a destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group_membership#unassign_issuables_on_destroy GroupMembership#unassign_issuables_on_destroy}
  */
  readonly unassignIssuablesOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The ID of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group_membership#user_id GroupMembership#user_id}
  */
  readonly userId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group_membership gitlab_group_membership}
*/
export class GroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupMembership to import
  * @param importFromId The id of the existing GroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/group_membership gitlab_group_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: GroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_membership',
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
    this._accessLevel = config.accessLevel;
    this._expiresAt = config.expiresAt;
    this._groupId = config.groupId;
    this._memberRoleId = config.memberRoleId;
    this._skipSubresourcesOnDestroy = config.skipSubresourcesOnDestroy;
    this._unassignIssuablesOnDestroy = config.unassignIssuablesOnDestroy;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: false, required: true
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // expires_at - computed: true, optional: true, required: false
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

  // group_id - computed: false, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
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

  // skip_subresources_on_destroy - computed: true, optional: true, required: false
  private _skipSubresourcesOnDestroy?: boolean | cdktf.IResolvable; 
  public get skipSubresourcesOnDestroy() {
    return this.getBooleanAttribute('skip_subresources_on_destroy');
  }
  public set skipSubresourcesOnDestroy(value: boolean | cdktf.IResolvable) {
    this._skipSubresourcesOnDestroy = value;
  }
  public resetSkipSubresourcesOnDestroy() {
    this._skipSubresourcesOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSubresourcesOnDestroyInput() {
    return this._skipSubresourcesOnDestroy;
  }

  // unassign_issuables_on_destroy - computed: true, optional: true, required: false
  private _unassignIssuablesOnDestroy?: boolean | cdktf.IResolvable; 
  public get unassignIssuablesOnDestroy() {
    return this.getBooleanAttribute('unassign_issuables_on_destroy');
  }
  public set unassignIssuablesOnDestroy(value: boolean | cdktf.IResolvable) {
    this._unassignIssuablesOnDestroy = value;
  }
  public resetUnassignIssuablesOnDestroy() {
    this._unassignIssuablesOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unassignIssuablesOnDestroyInput() {
    return this._unassignIssuablesOnDestroy;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      group_id: cdktf.numberToTerraform(this._groupId),
      member_role_id: cdktf.numberToTerraform(this._memberRoleId),
      skip_subresources_on_destroy: cdktf.booleanToTerraform(this._skipSubresourcesOnDestroy),
      unassign_issuables_on_destroy: cdktf.booleanToTerraform(this._unassignIssuablesOnDestroy),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member_role_id: {
        value: cdktf.numberToHclTerraform(this._memberRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_subresources_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._skipSubresourcesOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unassign_issuables_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._unassignIssuablesOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
