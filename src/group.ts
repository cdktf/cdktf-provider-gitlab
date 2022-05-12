// https://www.terraform.io/docs/providers/gitlab/r/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to false. Default to Auto DevOps pipeline for all projects within this group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#auto_devops_enabled Group#auto_devops_enabled}
  */
  readonly autoDevopsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Defaults to 2. See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#default_branch_protection Group#default_branch_protection}
  */
  readonly defaultBranchProtection?: number;
  /**
  * The description of the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Defaults to false. Disable email notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#emails_disabled Group#emails_disabled}
  */
  readonly emailsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Defaults to true. Enable/disable Large File Storage (LFS) for the projects in this group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#lfs_enabled Group#lfs_enabled}
  */
  readonly lfsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Defaults to false. Disable the capability of a group from getting mentioned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#mentions_disabled Group#mentions_disabled}
  */
  readonly mentionsDisabled?: boolean | cdktf.IResolvable;
  /**
  * The name of this group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#name Group#name}
  */
  readonly name: string;
  /**
  * Id of the parent group (creates a nested group).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#parent_id Group#parent_id}
  */
  readonly parentId?: number;
  /**
  * The path of the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#path Group#path}
  */
  readonly path: string;
  /**
  * Defaults to false. When enabled, users can not fork projects from this group to external namespaces.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#prevent_forking_outside_group Group#prevent_forking_outside_group}
  */
  readonly preventForkingOutsideGroup?: boolean | cdktf.IResolvable;
  /**
  * Defaults to maintainer. Determine if developers can create projects in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#project_creation_level Group#project_creation_level}
  */
  readonly projectCreationLevel?: string;
  /**
  * Defaults to false. Allow users to request member access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#request_access_enabled Group#request_access_enabled}
  */
  readonly requestAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Defaults to false. Require all users in this group to setup Two-factor authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#require_two_factor_authentication Group#require_two_factor_authentication}
  */
  readonly requireTwoFactorAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Defaults to false. Prevent sharing a project with another group within this group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#share_with_group_lock Group#share_with_group_lock}
  */
  readonly shareWithGroupLock?: boolean | cdktf.IResolvable;
  /**
  * Defaults to owner. Allowed to create subgroups.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#subgroup_creation_level Group#subgroup_creation_level}
  */
  readonly subgroupCreationLevel?: string;
  /**
  * Defaults to 48. Time before Two-factor authentication is enforced (in hours).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#two_factor_grace_period Group#two_factor_grace_period}
  */
  readonly twoFactorGracePeriod?: number;
  /**
  * The group's visibility. Can be `private`, `internal`, or `public`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#visibility_level Group#visibility_level}
  */
  readonly visibilityLevel?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/group gitlab_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/group gitlab_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoDevopsEnabled = config.autoDevopsEnabled;
    this._defaultBranchProtection = config.defaultBranchProtection;
    this._description = config.description;
    this._emailsDisabled = config.emailsDisabled;
    this._lfsEnabled = config.lfsEnabled;
    this._mentionsDisabled = config.mentionsDisabled;
    this._name = config.name;
    this._parentId = config.parentId;
    this._path = config.path;
    this._preventForkingOutsideGroup = config.preventForkingOutsideGroup;
    this._projectCreationLevel = config.projectCreationLevel;
    this._requestAccessEnabled = config.requestAccessEnabled;
    this._requireTwoFactorAuthentication = config.requireTwoFactorAuthentication;
    this._shareWithGroupLock = config.shareWithGroupLock;
    this._subgroupCreationLevel = config.subgroupCreationLevel;
    this._twoFactorGracePeriod = config.twoFactorGracePeriod;
    this._visibilityLevel = config.visibilityLevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_devops_enabled - computed: false, optional: true, required: false
  private _autoDevopsEnabled?: boolean | cdktf.IResolvable; 
  public get autoDevopsEnabled() {
    return this.getBooleanAttribute('auto_devops_enabled');
  }
  public set autoDevopsEnabled(value: boolean | cdktf.IResolvable) {
    this._autoDevopsEnabled = value;
  }
  public resetAutoDevopsEnabled() {
    this._autoDevopsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDevopsEnabledInput() {
    return this._autoDevopsEnabled;
  }

  // default_branch_protection - computed: false, optional: true, required: false
  private _defaultBranchProtection?: number; 
  public get defaultBranchProtection() {
    return this.getNumberAttribute('default_branch_protection');
  }
  public set defaultBranchProtection(value: number) {
    this._defaultBranchProtection = value;
  }
  public resetDefaultBranchProtection() {
    this._defaultBranchProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchProtectionInput() {
    return this._defaultBranchProtection;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // emails_disabled - computed: false, optional: true, required: false
  private _emailsDisabled?: boolean | cdktf.IResolvable; 
  public get emailsDisabled() {
    return this.getBooleanAttribute('emails_disabled');
  }
  public set emailsDisabled(value: boolean | cdktf.IResolvable) {
    this._emailsDisabled = value;
  }
  public resetEmailsDisabled() {
    this._emailsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsDisabledInput() {
    return this._emailsDisabled;
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // full_path - computed: true, optional: false, required: false
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lfs_enabled - computed: false, optional: true, required: false
  private _lfsEnabled?: boolean | cdktf.IResolvable; 
  public get lfsEnabled() {
    return this.getBooleanAttribute('lfs_enabled');
  }
  public set lfsEnabled(value: boolean | cdktf.IResolvable) {
    this._lfsEnabled = value;
  }
  public resetLfsEnabled() {
    this._lfsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfsEnabledInput() {
    return this._lfsEnabled;
  }

  // mentions_disabled - computed: false, optional: true, required: false
  private _mentionsDisabled?: boolean | cdktf.IResolvable; 
  public get mentionsDisabled() {
    return this.getBooleanAttribute('mentions_disabled');
  }
  public set mentionsDisabled(value: boolean | cdktf.IResolvable) {
    this._mentionsDisabled = value;
  }
  public resetMentionsDisabled() {
    this._mentionsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mentionsDisabledInput() {
    return this._mentionsDisabled;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: number; 
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }
  public set parentId(value: number) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prevent_forking_outside_group - computed: false, optional: true, required: false
  private _preventForkingOutsideGroup?: boolean | cdktf.IResolvable; 
  public get preventForkingOutsideGroup() {
    return this.getBooleanAttribute('prevent_forking_outside_group');
  }
  public set preventForkingOutsideGroup(value: boolean | cdktf.IResolvable) {
    this._preventForkingOutsideGroup = value;
  }
  public resetPreventForkingOutsideGroup() {
    this._preventForkingOutsideGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventForkingOutsideGroupInput() {
    return this._preventForkingOutsideGroup;
  }

  // project_creation_level - computed: false, optional: true, required: false
  private _projectCreationLevel?: string; 
  public get projectCreationLevel() {
    return this.getStringAttribute('project_creation_level');
  }
  public set projectCreationLevel(value: string) {
    this._projectCreationLevel = value;
  }
  public resetProjectCreationLevel() {
    this._projectCreationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectCreationLevelInput() {
    return this._projectCreationLevel;
  }

  // request_access_enabled - computed: false, optional: true, required: false
  private _requestAccessEnabled?: boolean | cdktf.IResolvable; 
  public get requestAccessEnabled() {
    return this.getBooleanAttribute('request_access_enabled');
  }
  public set requestAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._requestAccessEnabled = value;
  }
  public resetRequestAccessEnabled() {
    this._requestAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAccessEnabledInput() {
    return this._requestAccessEnabled;
  }

  // require_two_factor_authentication - computed: false, optional: true, required: false
  private _requireTwoFactorAuthentication?: boolean | cdktf.IResolvable; 
  public get requireTwoFactorAuthentication() {
    return this.getBooleanAttribute('require_two_factor_authentication');
  }
  public set requireTwoFactorAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireTwoFactorAuthentication = value;
  }
  public resetRequireTwoFactorAuthentication() {
    this._requireTwoFactorAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTwoFactorAuthenticationInput() {
    return this._requireTwoFactorAuthentication;
  }

  // runners_token - computed: true, optional: false, required: false
  public get runnersToken() {
    return this.getStringAttribute('runners_token');
  }

  // share_with_group_lock - computed: false, optional: true, required: false
  private _shareWithGroupLock?: boolean | cdktf.IResolvable; 
  public get shareWithGroupLock() {
    return this.getBooleanAttribute('share_with_group_lock');
  }
  public set shareWithGroupLock(value: boolean | cdktf.IResolvable) {
    this._shareWithGroupLock = value;
  }
  public resetShareWithGroupLock() {
    this._shareWithGroupLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareWithGroupLockInput() {
    return this._shareWithGroupLock;
  }

  // subgroup_creation_level - computed: false, optional: true, required: false
  private _subgroupCreationLevel?: string; 
  public get subgroupCreationLevel() {
    return this.getStringAttribute('subgroup_creation_level');
  }
  public set subgroupCreationLevel(value: string) {
    this._subgroupCreationLevel = value;
  }
  public resetSubgroupCreationLevel() {
    this._subgroupCreationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subgroupCreationLevelInput() {
    return this._subgroupCreationLevel;
  }

  // two_factor_grace_period - computed: false, optional: true, required: false
  private _twoFactorGracePeriod?: number; 
  public get twoFactorGracePeriod() {
    return this.getNumberAttribute('two_factor_grace_period');
  }
  public set twoFactorGracePeriod(value: number) {
    this._twoFactorGracePeriod = value;
  }
  public resetTwoFactorGracePeriod() {
    this._twoFactorGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorGracePeriodInput() {
    return this._twoFactorGracePeriod;
  }

  // visibility_level - computed: true, optional: true, required: false
  private _visibilityLevel?: string; 
  public get visibilityLevel() {
    return this.getStringAttribute('visibility_level');
  }
  public set visibilityLevel(value: string) {
    this._visibilityLevel = value;
  }
  public resetVisibilityLevel() {
    this._visibilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityLevelInput() {
    return this._visibilityLevel;
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_devops_enabled: cdktf.booleanToTerraform(this._autoDevopsEnabled),
      default_branch_protection: cdktf.numberToTerraform(this._defaultBranchProtection),
      description: cdktf.stringToTerraform(this._description),
      emails_disabled: cdktf.booleanToTerraform(this._emailsDisabled),
      lfs_enabled: cdktf.booleanToTerraform(this._lfsEnabled),
      mentions_disabled: cdktf.booleanToTerraform(this._mentionsDisabled),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.numberToTerraform(this._parentId),
      path: cdktf.stringToTerraform(this._path),
      prevent_forking_outside_group: cdktf.booleanToTerraform(this._preventForkingOutsideGroup),
      project_creation_level: cdktf.stringToTerraform(this._projectCreationLevel),
      request_access_enabled: cdktf.booleanToTerraform(this._requestAccessEnabled),
      require_two_factor_authentication: cdktf.booleanToTerraform(this._requireTwoFactorAuthentication),
      share_with_group_lock: cdktf.booleanToTerraform(this._shareWithGroupLock),
      subgroup_creation_level: cdktf.stringToTerraform(this._subgroupCreationLevel),
      two_factor_grace_period: cdktf.numberToTerraform(this._twoFactorGracePeriod),
      visibility_level: cdktf.stringToTerraform(this._visibilityLevel),
    };
  }
}
