// https://www.terraform.io/docs/providers/gitlab/r/group_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access level for the member. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_membership#access_level GroupMembership#access_level}
  */
  readonly accessLevel: string;
  /**
  * Expiration date for the group membership. Format: `YYYY-MM-DD`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_membership#expires_at GroupMembership#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * The id of the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_membership#group_id GroupMembership#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_membership#id GroupMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the deletion of direct memberships of the removed member in subgroups and projects should be skipped. Only used during a destroy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_membership#skip_subresources_on_destroy GroupMembership#skip_subresources_on_destroy}
  */
  readonly skipSubresourcesOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Whether the removed member should be unassigned from any issues or merge requests inside a given group or project. Only used during a destroy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_membership#unassign_issuables_on_destroy GroupMembership#unassign_issuables_on_destroy}
  */
  readonly unassignIssuablesOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The id of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_membership#user_id GroupMembership#user_id}
  */
  readonly userId: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/group_membership gitlab_group_membership}
*/
export class GroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/group_membership gitlab_group_membership} Resource
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
        providerVersion: '15.9.0',
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
    this._accessLevel = config.accessLevel;
    this._expiresAt = config.expiresAt;
    this._groupId = config.groupId;
    this._id = config.id;
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

  // skip_subresources_on_destroy - computed: false, optional: true, required: false
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

  // unassign_issuables_on_destroy - computed: false, optional: true, required: false
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
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      skip_subresources_on_destroy: cdktf.booleanToTerraform(this._skipSubresourcesOnDestroy),
      unassign_issuables_on_destroy: cdktf.booleanToTerraform(this._unassignIssuablesOnDestroy),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }
}
