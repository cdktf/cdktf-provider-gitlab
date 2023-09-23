// https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to false. Default to Auto DevOps pipeline for all projects within this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#auto_devops_enabled Group#auto_devops_enabled}
  */
  readonly autoDevopsEnabled?: boolean | cdktf.IResolvable;
  /**
  * A local path to the avatar image to upload. **Note**: not available for imported resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#avatar Group#avatar}
  */
  readonly avatar?: string;
  /**
  * The hash of the avatar image. Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#avatar_hash Group#avatar_hash}
  */
  readonly avatarHash?: string;
  /**
  * Defaults to 2. See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#default_branch_protection Group#default_branch_protection}
  */
  readonly defaultBranchProtection?: number;
  /**
  * The description of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Defaults to false. Disable email notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#emails_disabled Group#emails_disabled}
  */
  readonly emailsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Can be set by administrators only. Additional CI/CD minutes for this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}
  */
  readonly extraSharedRunnersMinutesLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of IP addresses or subnet masks to restrict group access. Will be concatenated together into a comma separated string. Only allowed on top level groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#ip_restriction_ranges Group#ip_restriction_ranges}
  */
  readonly ipRestrictionRanges?: string[];
  /**
  * Defaults to true. Enable/disable Large File Storage (LFS) for the projects in this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#lfs_enabled Group#lfs_enabled}
  */
  readonly lfsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Users cannot be added to projects in this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#membership_lock Group#membership_lock}
  */
  readonly membershipLock?: boolean | cdktf.IResolvable;
  /**
  * Defaults to false. Disable the capability of a group from getting mentioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#mentions_disabled Group#mentions_disabled}
  */
  readonly mentionsDisabled?: boolean | cdktf.IResolvable;
  /**
  * The name of this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Id of the parent group (creates a nested group).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#parent_id Group#parent_id}
  */
  readonly parentId?: number;
  /**
  * The path of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#path Group#path}
  */
  readonly path: string;
  /**
  * Defaults to false. When enabled, users can not fork projects from this group to external namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#prevent_forking_outside_group Group#prevent_forking_outside_group}
  */
  readonly preventForkingOutsideGroup?: boolean | cdktf.IResolvable;
  /**
  * Defaults to maintainer. Determine if developers can create projects in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#project_creation_level Group#project_creation_level}
  */
  readonly projectCreationLevel?: string;
  /**
  * Defaults to false. Allow users to request member access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#request_access_enabled Group#request_access_enabled}
  */
  readonly requestAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Defaults to false. Require all users in this group to setup Two-factor authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#require_two_factor_authentication Group#require_two_factor_authentication}
  */
  readonly requireTwoFactorAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Defaults to false. Prevent sharing a project with another group within this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#share_with_group_lock Group#share_with_group_lock}
  */
  readonly shareWithGroupLock?: boolean | cdktf.IResolvable;
  /**
  * Can be set by administrators only. Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}
  */
  readonly sharedRunnersMinutesLimit?: number;
  /**
  * Defaults to owner. Allowed to create subgroups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#subgroup_creation_level Group#subgroup_creation_level}
  */
  readonly subgroupCreationLevel?: string;
  /**
  * Defaults to 48. Time before Two-factor authentication is enforced (in hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#two_factor_grace_period Group#two_factor_grace_period}
  */
  readonly twoFactorGracePeriod?: number;
  /**
  * The group's visibility. Can be `private`, `internal`, or `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#visibility_level Group#visibility_level}
  */
  readonly visibilityLevel?: string;
  /**
  * The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group#wiki_access_level Group#wiki_access_level}
  */
  readonly wikiAccessLevel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group gitlab_group}
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
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/group gitlab_group} Resource
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
    this._autoDevopsEnabled = config.autoDevopsEnabled;
    this._avatar = config.avatar;
    this._avatarHash = config.avatarHash;
    this._defaultBranchProtection = config.defaultBranchProtection;
    this._description = config.description;
    this._emailsDisabled = config.emailsDisabled;
    this._extraSharedRunnersMinutesLimit = config.extraSharedRunnersMinutesLimit;
    this._id = config.id;
    this._ipRestrictionRanges = config.ipRestrictionRanges;
    this._lfsEnabled = config.lfsEnabled;
    this._membershipLock = config.membershipLock;
    this._mentionsDisabled = config.mentionsDisabled;
    this._name = config.name;
    this._parentId = config.parentId;
    this._path = config.path;
    this._preventForkingOutsideGroup = config.preventForkingOutsideGroup;
    this._projectCreationLevel = config.projectCreationLevel;
    this._requestAccessEnabled = config.requestAccessEnabled;
    this._requireTwoFactorAuthentication = config.requireTwoFactorAuthentication;
    this._shareWithGroupLock = config.shareWithGroupLock;
    this._sharedRunnersMinutesLimit = config.sharedRunnersMinutesLimit;
    this._subgroupCreationLevel = config.subgroupCreationLevel;
    this._twoFactorGracePeriod = config.twoFactorGracePeriod;
    this._visibilityLevel = config.visibilityLevel;
    this._wikiAccessLevel = config.wikiAccessLevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_devops_enabled - computed: true, optional: true, required: false
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

  // avatar - computed: false, optional: true, required: false
  private _avatar?: string; 
  public get avatar() {
    return this.getStringAttribute('avatar');
  }
  public set avatar(value: string) {
    this._avatar = value;
  }
  public resetAvatar() {
    this._avatar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarInput() {
    return this._avatar;
  }

  // avatar_hash - computed: true, optional: true, required: false
  private _avatarHash?: string; 
  public get avatarHash() {
    return this.getStringAttribute('avatar_hash');
  }
  public set avatarHash(value: string) {
    this._avatarHash = value;
  }
  public resetAvatarHash() {
    this._avatarHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarHashInput() {
    return this._avatarHash;
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // default_branch_protection - computed: true, optional: true, required: false
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

  // emails_disabled - computed: true, optional: true, required: false
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

  // extra_shared_runners_minutes_limit - computed: true, optional: true, required: false
  private _extraSharedRunnersMinutesLimit?: number; 
  public get extraSharedRunnersMinutesLimit() {
    return this.getNumberAttribute('extra_shared_runners_minutes_limit');
  }
  public set extraSharedRunnersMinutesLimit(value: number) {
    this._extraSharedRunnersMinutesLimit = value;
  }
  public resetExtraSharedRunnersMinutesLimit() {
    this._extraSharedRunnersMinutesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraSharedRunnersMinutesLimitInput() {
    return this._extraSharedRunnersMinutesLimit;
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

  // ip_restriction_ranges - computed: false, optional: true, required: false
  private _ipRestrictionRanges?: string[]; 
  public get ipRestrictionRanges() {
    return this.getListAttribute('ip_restriction_ranges');
  }
  public set ipRestrictionRanges(value: string[]) {
    this._ipRestrictionRanges = value;
  }
  public resetIpRestrictionRanges() {
    this._ipRestrictionRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionRangesInput() {
    return this._ipRestrictionRanges;
  }

  // lfs_enabled - computed: true, optional: true, required: false
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

  // membership_lock - computed: false, optional: true, required: false
  private _membershipLock?: boolean | cdktf.IResolvable; 
  public get membershipLock() {
    return this.getBooleanAttribute('membership_lock');
  }
  public set membershipLock(value: boolean | cdktf.IResolvable) {
    this._membershipLock = value;
  }
  public resetMembershipLock() {
    this._membershipLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipLockInput() {
    return this._membershipLock;
  }

  // mentions_disabled - computed: true, optional: true, required: false
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

  // parent_id - computed: true, optional: true, required: false
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

  // prevent_forking_outside_group - computed: true, optional: true, required: false
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

  // project_creation_level - computed: true, optional: true, required: false
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

  // request_access_enabled - computed: true, optional: true, required: false
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

  // require_two_factor_authentication - computed: true, optional: true, required: false
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

  // share_with_group_lock - computed: true, optional: true, required: false
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

  // shared_runners_minutes_limit - computed: true, optional: true, required: false
  private _sharedRunnersMinutesLimit?: number; 
  public get sharedRunnersMinutesLimit() {
    return this.getNumberAttribute('shared_runners_minutes_limit');
  }
  public set sharedRunnersMinutesLimit(value: number) {
    this._sharedRunnersMinutesLimit = value;
  }
  public resetSharedRunnersMinutesLimit() {
    this._sharedRunnersMinutesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedRunnersMinutesLimitInput() {
    return this._sharedRunnersMinutesLimit;
  }

  // subgroup_creation_level - computed: true, optional: true, required: false
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

  // two_factor_grace_period - computed: true, optional: true, required: false
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

  // wiki_access_level - computed: true, optional: true, required: false
  private _wikiAccessLevel?: string; 
  public get wikiAccessLevel() {
    return this.getStringAttribute('wiki_access_level');
  }
  public set wikiAccessLevel(value: string) {
    this._wikiAccessLevel = value;
  }
  public resetWikiAccessLevel() {
    this._wikiAccessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wikiAccessLevelInput() {
    return this._wikiAccessLevel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_devops_enabled: cdktf.booleanToTerraform(this._autoDevopsEnabled),
      avatar: cdktf.stringToTerraform(this._avatar),
      avatar_hash: cdktf.stringToTerraform(this._avatarHash),
      default_branch_protection: cdktf.numberToTerraform(this._defaultBranchProtection),
      description: cdktf.stringToTerraform(this._description),
      emails_disabled: cdktf.booleanToTerraform(this._emailsDisabled),
      extra_shared_runners_minutes_limit: cdktf.numberToTerraform(this._extraSharedRunnersMinutesLimit),
      id: cdktf.stringToTerraform(this._id),
      ip_restriction_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipRestrictionRanges),
      lfs_enabled: cdktf.booleanToTerraform(this._lfsEnabled),
      membership_lock: cdktf.booleanToTerraform(this._membershipLock),
      mentions_disabled: cdktf.booleanToTerraform(this._mentionsDisabled),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.numberToTerraform(this._parentId),
      path: cdktf.stringToTerraform(this._path),
      prevent_forking_outside_group: cdktf.booleanToTerraform(this._preventForkingOutsideGroup),
      project_creation_level: cdktf.stringToTerraform(this._projectCreationLevel),
      request_access_enabled: cdktf.booleanToTerraform(this._requestAccessEnabled),
      require_two_factor_authentication: cdktf.booleanToTerraform(this._requireTwoFactorAuthentication),
      share_with_group_lock: cdktf.booleanToTerraform(this._shareWithGroupLock),
      shared_runners_minutes_limit: cdktf.numberToTerraform(this._sharedRunnersMinutesLimit),
      subgroup_creation_level: cdktf.stringToTerraform(this._subgroupCreationLevel),
      two_factor_grace_period: cdktf.numberToTerraform(this._twoFactorGracePeriod),
      visibility_level: cdktf.stringToTerraform(this._visibilityLevel),
      wiki_access_level: cdktf.stringToTerraform(this._wikiAccessLevel),
    };
  }
}
