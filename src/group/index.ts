/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of email address domains to allow group access. Will be concatenated together into a comma separated string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#allowed_email_domains_list Group#allowed_email_domains_list}
  */
  readonly allowedEmailDomainsList?: string[];
  /**
  * Default to Auto DevOps pipeline for all projects within this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#auto_devops_enabled Group#auto_devops_enabled}
  */
  readonly autoDevopsEnabled?: boolean | cdktf.IResolvable;
  /**
  * A local path to the avatar image to upload. **Note**: not available for imported resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#avatar Group#avatar}
  */
  readonly avatar?: string;
  /**
  * The hash of the avatar image. Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#avatar_hash Group#avatar_hash}
  */
  readonly avatarHash?: string;
  /**
  * Initial default branch name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#default_branch Group#default_branch}
  */
  readonly defaultBranch?: string;
  /**
  * See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#default_branch_protection Group#default_branch_protection}
  */
  readonly defaultBranchProtection?: number;
  /**
  * The group's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Enable email notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#emails_enabled Group#emails_enabled}
  */
  readonly emailsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Can be set by administrators only. Additional CI/CD minutes for this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}
  */
  readonly extraSharedRunnersMinutesLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of IP addresses or subnet masks to restrict group access. Will be concatenated together into a comma separated string. Only allowed on top level groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#ip_restriction_ranges Group#ip_restriction_ranges}
  */
  readonly ipRestrictionRanges?: string[];
  /**
  * Enable/disable Large File Storage (LFS) for the projects in this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#lfs_enabled Group#lfs_enabled}
  */
  readonly lfsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Users cannot be added to projects in this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#membership_lock Group#membership_lock}
  */
  readonly membershipLock?: boolean | cdktf.IResolvable;
  /**
  * Disable the capability of a group from getting mentioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#mentions_disabled Group#mentions_disabled}
  */
  readonly mentionsDisabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Id of the parent group (creates a nested group).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#parent_id Group#parent_id}
  */
  readonly parentId?: number;
  /**
  * The path of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#path Group#path}
  */
  readonly path: string;
  /**
  * Whether the group should be permanently removed during a `delete` operation. This only works with subgroups. Must be configured via an `apply` before the `destroy` is run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#permanently_remove_on_delete Group#permanently_remove_on_delete}
  */
  readonly permanentlyRemoveOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Defaults to false. When enabled, users can not fork projects from this group to external namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#prevent_forking_outside_group Group#prevent_forking_outside_group}
  */
  readonly preventForkingOutsideGroup?: boolean | cdktf.IResolvable;
  /**
  * Determine if developers can create projects in the group. Valid values are: `noone`, `maintainer`, `developer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#project_creation_level Group#project_creation_level}
  */
  readonly projectCreationLevel?: string;
  /**
  * Allow users to request member access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#request_access_enabled Group#request_access_enabled}
  */
  readonly requestAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Require all users in this group to setup Two-factor authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#require_two_factor_authentication Group#require_two_factor_authentication}
  */
  readonly requireTwoFactorAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Prevent sharing a project with another group within this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#share_with_group_lock Group#share_with_group_lock}
  */
  readonly shareWithGroupLock?: boolean | cdktf.IResolvable;
  /**
  * Can be set by administrators only. Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}
  */
  readonly sharedRunnersMinutesLimit?: number;
  /**
  * Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#shared_runners_setting Group#shared_runners_setting}
  */
  readonly sharedRunnersSetting?: string;
  /**
  * Allowed to create subgroups. Valid values are: `owner`, `maintainer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#subgroup_creation_level Group#subgroup_creation_level}
  */
  readonly subgroupCreationLevel?: string;
  /**
  * Defaults to 48. Time before Two-factor authentication is enforced (in hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#two_factor_grace_period Group#two_factor_grace_period}
  */
  readonly twoFactorGracePeriod?: number;
  /**
  * The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#visibility_level Group#visibility_level}
  */
  readonly visibilityLevel?: string;
  /**
  * The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#wiki_access_level Group#wiki_access_level}
  */
  readonly wikiAccessLevel?: string;
  /**
  * default_branch_protection_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#default_branch_protection_defaults Group#default_branch_protection_defaults}
  */
  readonly defaultBranchProtectionDefaults?: GroupDefaultBranchProtectionDefaults;
  /**
  * push_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#push_rules Group#push_rules}
  */
  readonly pushRules?: GroupPushRules;
}
export interface GroupDefaultBranchProtectionDefaults {
  /**
  * Allow force push for all users with push access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#allow_force_push Group#allow_force_push}
  */
  readonly allowForcePush?: boolean | cdktf.IResolvable;
  /**
  * An array of access levels allowed to merge. Valid values are: `developer`, `maintainer`, `no one`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#allowed_to_merge Group#allowed_to_merge}
  */
  readonly allowedToMerge?: string[];
  /**
  * An array of access levels allowed to push. Valid values are: `developer`, `maintainer`, `no one`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#allowed_to_push Group#allowed_to_push}
  */
  readonly allowedToPush?: string[];
  /**
  * Allow developers to initial push.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#developer_can_initial_push Group#developer_can_initial_push}
  */
  readonly developerCanInitialPush?: boolean | cdktf.IResolvable;
}

export function groupDefaultBranchProtectionDefaultsToTerraform(struct?: GroupDefaultBranchProtectionDefaultsOutputReference | GroupDefaultBranchProtectionDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_force_push: cdktf.booleanToTerraform(struct!.allowForcePush),
    allowed_to_merge: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedToMerge),
    allowed_to_push: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedToPush),
    developer_can_initial_push: cdktf.booleanToTerraform(struct!.developerCanInitialPush),
  }
}


export function groupDefaultBranchProtectionDefaultsToHclTerraform(struct?: GroupDefaultBranchProtectionDefaultsOutputReference | GroupDefaultBranchProtectionDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_force_push: {
      value: cdktf.booleanToHclTerraform(struct!.allowForcePush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_to_merge: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedToMerge),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_to_push: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedToPush),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    developer_can_initial_push: {
      value: cdktf.booleanToHclTerraform(struct!.developerCanInitialPush),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupDefaultBranchProtectionDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupDefaultBranchProtectionDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowForcePush !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowForcePush = this._allowForcePush;
    }
    if (this._allowedToMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedToMerge = this._allowedToMerge;
    }
    if (this._allowedToPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedToPush = this._allowedToPush;
    }
    if (this._developerCanInitialPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.developerCanInitialPush = this._developerCanInitialPush;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupDefaultBranchProtectionDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowForcePush = undefined;
      this._allowedToMerge = undefined;
      this._allowedToPush = undefined;
      this._developerCanInitialPush = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowForcePush = value.allowForcePush;
      this._allowedToMerge = value.allowedToMerge;
      this._allowedToPush = value.allowedToPush;
      this._developerCanInitialPush = value.developerCanInitialPush;
    }
  }

  // allow_force_push - computed: true, optional: true, required: false
  private _allowForcePush?: boolean | cdktf.IResolvable; 
  public get allowForcePush() {
    return this.getBooleanAttribute('allow_force_push');
  }
  public set allowForcePush(value: boolean | cdktf.IResolvable) {
    this._allowForcePush = value;
  }
  public resetAllowForcePush() {
    this._allowForcePush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowForcePushInput() {
    return this._allowForcePush;
  }

  // allowed_to_merge - computed: true, optional: true, required: false
  private _allowedToMerge?: string[]; 
  public get allowedToMerge() {
    return this.getListAttribute('allowed_to_merge');
  }
  public set allowedToMerge(value: string[]) {
    this._allowedToMerge = value;
  }
  public resetAllowedToMerge() {
    this._allowedToMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToMergeInput() {
    return this._allowedToMerge;
  }

  // allowed_to_push - computed: true, optional: true, required: false
  private _allowedToPush?: string[]; 
  public get allowedToPush() {
    return this.getListAttribute('allowed_to_push');
  }
  public set allowedToPush(value: string[]) {
    this._allowedToPush = value;
  }
  public resetAllowedToPush() {
    this._allowedToPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedToPushInput() {
    return this._allowedToPush;
  }

  // developer_can_initial_push - computed: true, optional: true, required: false
  private _developerCanInitialPush?: boolean | cdktf.IResolvable; 
  public get developerCanInitialPush() {
    return this.getBooleanAttribute('developer_can_initial_push');
  }
  public set developerCanInitialPush(value: boolean | cdktf.IResolvable) {
    this._developerCanInitialPush = value;
  }
  public resetDeveloperCanInitialPush() {
    this._developerCanInitialPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerCanInitialPushInput() {
    return this._developerCanInitialPush;
  }
}
export interface GroupPushRules {
  /**
  * All commit author emails must match this regex, e.g. `@my-company.com$`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#author_email_regex Group#author_email_regex}
  */
  readonly authorEmailRegex?: string;
  /**
  * All branch names must match this regex, e.g. `(feature|hotfix)\/*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#branch_name_regex Group#branch_name_regex}
  */
  readonly branchNameRegex?: string;
  /**
  * Only commits pushed using verified emails are allowed.  **Note** This attribute is only supported in GitLab versions >= 16.4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#commit_committer_check Group#commit_committer_check}
  */
  readonly commitCommitterCheck?: boolean | cdktf.IResolvable;
  /**
  * Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#commit_committer_name_check Group#commit_committer_name_check}
  */
  readonly commitCommitterNameCheck?: boolean | cdktf.IResolvable;
  /**
  * No commit message is allowed to match this regex, for example `ssh\:\/\/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#commit_message_negative_regex Group#commit_message_negative_regex}
  */
  readonly commitMessageNegativeRegex?: string;
  /**
  * All commit messages must match this regex, e.g. `Fixed \d+\..*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#commit_message_regex Group#commit_message_regex}
  */
  readonly commitMessageRegex?: string;
  /**
  * Deny deleting a tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#deny_delete_tag Group#deny_delete_tag}
  */
  readonly denyDeleteTag?: boolean | cdktf.IResolvable;
  /**
  * Filenames matching the regular expression provided in this attribute are not allowed, for example, `(jar|exe)$`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#file_name_regex Group#file_name_regex}
  */
  readonly fileNameRegex?: string;
  /**
  * Maximum file size (MB) allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#max_file_size Group#max_file_size}
  */
  readonly maxFileSize?: number;
  /**
  * Allows only GitLab users to author commits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#member_check Group#member_check}
  */
  readonly memberCheck?: boolean | cdktf.IResolvable;
  /**
  * GitLab will reject any files that are likely to contain secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#prevent_secrets Group#prevent_secrets}
  */
  readonly preventSecrets?: boolean | cdktf.IResolvable;
  /**
  * Reject commit when it’s not DCO certified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#reject_non_dco_commits Group#reject_non_dco_commits}
  */
  readonly rejectNonDcoCommits?: boolean | cdktf.IResolvable;
  /**
  * Only commits signed through GPG are allowed.  **Note** This attribute is only supported in GitLab versions >= 16.4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#reject_unsigned_commits Group#reject_unsigned_commits}
  */
  readonly rejectUnsignedCommits?: boolean | cdktf.IResolvable;
}

export function groupPushRulesToTerraform(struct?: GroupPushRulesOutputReference | GroupPushRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    author_email_regex: cdktf.stringToTerraform(struct!.authorEmailRegex),
    branch_name_regex: cdktf.stringToTerraform(struct!.branchNameRegex),
    commit_committer_check: cdktf.booleanToTerraform(struct!.commitCommitterCheck),
    commit_committer_name_check: cdktf.booleanToTerraform(struct!.commitCommitterNameCheck),
    commit_message_negative_regex: cdktf.stringToTerraform(struct!.commitMessageNegativeRegex),
    commit_message_regex: cdktf.stringToTerraform(struct!.commitMessageRegex),
    deny_delete_tag: cdktf.booleanToTerraform(struct!.denyDeleteTag),
    file_name_regex: cdktf.stringToTerraform(struct!.fileNameRegex),
    max_file_size: cdktf.numberToTerraform(struct!.maxFileSize),
    member_check: cdktf.booleanToTerraform(struct!.memberCheck),
    prevent_secrets: cdktf.booleanToTerraform(struct!.preventSecrets),
    reject_non_dco_commits: cdktf.booleanToTerraform(struct!.rejectNonDcoCommits),
    reject_unsigned_commits: cdktf.booleanToTerraform(struct!.rejectUnsignedCommits),
  }
}


export function groupPushRulesToHclTerraform(struct?: GroupPushRulesOutputReference | GroupPushRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    author_email_regex: {
      value: cdktf.stringToHclTerraform(struct!.authorEmailRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch_name_regex: {
      value: cdktf.stringToHclTerraform(struct!.branchNameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_committer_check: {
      value: cdktf.booleanToHclTerraform(struct!.commitCommitterCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    commit_committer_name_check: {
      value: cdktf.booleanToHclTerraform(struct!.commitCommitterNameCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    commit_message_negative_regex: {
      value: cdktf.stringToHclTerraform(struct!.commitMessageNegativeRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_message_regex: {
      value: cdktf.stringToHclTerraform(struct!.commitMessageRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_delete_tag: {
      value: cdktf.booleanToHclTerraform(struct!.denyDeleteTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_name_regex: {
      value: cdktf.stringToHclTerraform(struct!.fileNameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_file_size: {
      value: cdktf.numberToHclTerraform(struct!.maxFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    member_check: {
      value: cdktf.booleanToHclTerraform(struct!.memberCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prevent_secrets: {
      value: cdktf.booleanToHclTerraform(struct!.preventSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reject_non_dco_commits: {
      value: cdktf.booleanToHclTerraform(struct!.rejectNonDcoCommits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reject_unsigned_commits: {
      value: cdktf.booleanToHclTerraform(struct!.rejectUnsignedCommits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupPushRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupPushRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorEmailRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorEmailRegex = this._authorEmailRegex;
    }
    if (this._branchNameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchNameRegex = this._branchNameRegex;
    }
    if (this._commitCommitterCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitCommitterCheck = this._commitCommitterCheck;
    }
    if (this._commitCommitterNameCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitCommitterNameCheck = this._commitCommitterNameCheck;
    }
    if (this._commitMessageNegativeRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitMessageNegativeRegex = this._commitMessageNegativeRegex;
    }
    if (this._commitMessageRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitMessageRegex = this._commitMessageRegex;
    }
    if (this._denyDeleteTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDeleteTag = this._denyDeleteTag;
    }
    if (this._fileNameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileNameRegex = this._fileNameRegex;
    }
    if (this._maxFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFileSize = this._maxFileSize;
    }
    if (this._memberCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberCheck = this._memberCheck;
    }
    if (this._preventSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventSecrets = this._preventSecrets;
    }
    if (this._rejectNonDcoCommits !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectNonDcoCommits = this._rejectNonDcoCommits;
    }
    if (this._rejectUnsignedCommits !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectUnsignedCommits = this._rejectUnsignedCommits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupPushRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorEmailRegex = undefined;
      this._branchNameRegex = undefined;
      this._commitCommitterCheck = undefined;
      this._commitCommitterNameCheck = undefined;
      this._commitMessageNegativeRegex = undefined;
      this._commitMessageRegex = undefined;
      this._denyDeleteTag = undefined;
      this._fileNameRegex = undefined;
      this._maxFileSize = undefined;
      this._memberCheck = undefined;
      this._preventSecrets = undefined;
      this._rejectNonDcoCommits = undefined;
      this._rejectUnsignedCommits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorEmailRegex = value.authorEmailRegex;
      this._branchNameRegex = value.branchNameRegex;
      this._commitCommitterCheck = value.commitCommitterCheck;
      this._commitCommitterNameCheck = value.commitCommitterNameCheck;
      this._commitMessageNegativeRegex = value.commitMessageNegativeRegex;
      this._commitMessageRegex = value.commitMessageRegex;
      this._denyDeleteTag = value.denyDeleteTag;
      this._fileNameRegex = value.fileNameRegex;
      this._maxFileSize = value.maxFileSize;
      this._memberCheck = value.memberCheck;
      this._preventSecrets = value.preventSecrets;
      this._rejectNonDcoCommits = value.rejectNonDcoCommits;
      this._rejectUnsignedCommits = value.rejectUnsignedCommits;
    }
  }

  // author_email_regex - computed: true, optional: true, required: false
  private _authorEmailRegex?: string; 
  public get authorEmailRegex() {
    return this.getStringAttribute('author_email_regex');
  }
  public set authorEmailRegex(value: string) {
    this._authorEmailRegex = value;
  }
  public resetAuthorEmailRegex() {
    this._authorEmailRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorEmailRegexInput() {
    return this._authorEmailRegex;
  }

  // branch_name_regex - computed: true, optional: true, required: false
  private _branchNameRegex?: string; 
  public get branchNameRegex() {
    return this.getStringAttribute('branch_name_regex');
  }
  public set branchNameRegex(value: string) {
    this._branchNameRegex = value;
  }
  public resetBranchNameRegex() {
    this._branchNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameRegexInput() {
    return this._branchNameRegex;
  }

  // commit_committer_check - computed: true, optional: true, required: false
  private _commitCommitterCheck?: boolean | cdktf.IResolvable; 
  public get commitCommitterCheck() {
    return this.getBooleanAttribute('commit_committer_check');
  }
  public set commitCommitterCheck(value: boolean | cdktf.IResolvable) {
    this._commitCommitterCheck = value;
  }
  public resetCommitCommitterCheck() {
    this._commitCommitterCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitCommitterCheckInput() {
    return this._commitCommitterCheck;
  }

  // commit_committer_name_check - computed: true, optional: true, required: false
  private _commitCommitterNameCheck?: boolean | cdktf.IResolvable; 
  public get commitCommitterNameCheck() {
    return this.getBooleanAttribute('commit_committer_name_check');
  }
  public set commitCommitterNameCheck(value: boolean | cdktf.IResolvable) {
    this._commitCommitterNameCheck = value;
  }
  public resetCommitCommitterNameCheck() {
    this._commitCommitterNameCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitCommitterNameCheckInput() {
    return this._commitCommitterNameCheck;
  }

  // commit_message_negative_regex - computed: true, optional: true, required: false
  private _commitMessageNegativeRegex?: string; 
  public get commitMessageNegativeRegex() {
    return this.getStringAttribute('commit_message_negative_regex');
  }
  public set commitMessageNegativeRegex(value: string) {
    this._commitMessageNegativeRegex = value;
  }
  public resetCommitMessageNegativeRegex() {
    this._commitMessageNegativeRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessageNegativeRegexInput() {
    return this._commitMessageNegativeRegex;
  }

  // commit_message_regex - computed: true, optional: true, required: false
  private _commitMessageRegex?: string; 
  public get commitMessageRegex() {
    return this.getStringAttribute('commit_message_regex');
  }
  public set commitMessageRegex(value: string) {
    this._commitMessageRegex = value;
  }
  public resetCommitMessageRegex() {
    this._commitMessageRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessageRegexInput() {
    return this._commitMessageRegex;
  }

  // deny_delete_tag - computed: true, optional: true, required: false
  private _denyDeleteTag?: boolean | cdktf.IResolvable; 
  public get denyDeleteTag() {
    return this.getBooleanAttribute('deny_delete_tag');
  }
  public set denyDeleteTag(value: boolean | cdktf.IResolvable) {
    this._denyDeleteTag = value;
  }
  public resetDenyDeleteTag() {
    this._denyDeleteTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDeleteTagInput() {
    return this._denyDeleteTag;
  }

  // file_name_regex - computed: true, optional: true, required: false
  private _fileNameRegex?: string; 
  public get fileNameRegex() {
    return this.getStringAttribute('file_name_regex');
  }
  public set fileNameRegex(value: string) {
    this._fileNameRegex = value;
  }
  public resetFileNameRegex() {
    this._fileNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameRegexInput() {
    return this._fileNameRegex;
  }

  // max_file_size - computed: true, optional: true, required: false
  private _maxFileSize?: number; 
  public get maxFileSize() {
    return this.getNumberAttribute('max_file_size');
  }
  public set maxFileSize(value: number) {
    this._maxFileSize = value;
  }
  public resetMaxFileSize() {
    this._maxFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFileSizeInput() {
    return this._maxFileSize;
  }

  // member_check - computed: true, optional: true, required: false
  private _memberCheck?: boolean | cdktf.IResolvable; 
  public get memberCheck() {
    return this.getBooleanAttribute('member_check');
  }
  public set memberCheck(value: boolean | cdktf.IResolvable) {
    this._memberCheck = value;
  }
  public resetMemberCheck() {
    this._memberCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberCheckInput() {
    return this._memberCheck;
  }

  // prevent_secrets - computed: true, optional: true, required: false
  private _preventSecrets?: boolean | cdktf.IResolvable; 
  public get preventSecrets() {
    return this.getBooleanAttribute('prevent_secrets');
  }
  public set preventSecrets(value: boolean | cdktf.IResolvable) {
    this._preventSecrets = value;
  }
  public resetPreventSecrets() {
    this._preventSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventSecretsInput() {
    return this._preventSecrets;
  }

  // reject_non_dco_commits - computed: true, optional: true, required: false
  private _rejectNonDcoCommits?: boolean | cdktf.IResolvable; 
  public get rejectNonDcoCommits() {
    return this.getBooleanAttribute('reject_non_dco_commits');
  }
  public set rejectNonDcoCommits(value: boolean | cdktf.IResolvable) {
    this._rejectNonDcoCommits = value;
  }
  public resetRejectNonDcoCommits() {
    this._rejectNonDcoCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectNonDcoCommitsInput() {
    return this._rejectNonDcoCommits;
  }

  // reject_unsigned_commits - computed: true, optional: true, required: false
  private _rejectUnsignedCommits?: boolean | cdktf.IResolvable; 
  public get rejectUnsignedCommits() {
    return this.getBooleanAttribute('reject_unsigned_commits');
  }
  public set rejectUnsignedCommits(value: boolean | cdktf.IResolvable) {
    this._rejectUnsignedCommits = value;
  }
  public resetRejectUnsignedCommits() {
    this._rejectUnsignedCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnsignedCommitsInput() {
    return this._rejectUnsignedCommits;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group gitlab_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/group gitlab_group} Resource
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
        providerVersion: '17.6.0',
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
    this._allowedEmailDomainsList = config.allowedEmailDomainsList;
    this._autoDevopsEnabled = config.autoDevopsEnabled;
    this._avatar = config.avatar;
    this._avatarHash = config.avatarHash;
    this._defaultBranch = config.defaultBranch;
    this._defaultBranchProtection = config.defaultBranchProtection;
    this._description = config.description;
    this._emailsEnabled = config.emailsEnabled;
    this._extraSharedRunnersMinutesLimit = config.extraSharedRunnersMinutesLimit;
    this._id = config.id;
    this._ipRestrictionRanges = config.ipRestrictionRanges;
    this._lfsEnabled = config.lfsEnabled;
    this._membershipLock = config.membershipLock;
    this._mentionsDisabled = config.mentionsDisabled;
    this._name = config.name;
    this._parentId = config.parentId;
    this._path = config.path;
    this._permanentlyRemoveOnDelete = config.permanentlyRemoveOnDelete;
    this._preventForkingOutsideGroup = config.preventForkingOutsideGroup;
    this._projectCreationLevel = config.projectCreationLevel;
    this._requestAccessEnabled = config.requestAccessEnabled;
    this._requireTwoFactorAuthentication = config.requireTwoFactorAuthentication;
    this._shareWithGroupLock = config.shareWithGroupLock;
    this._sharedRunnersMinutesLimit = config.sharedRunnersMinutesLimit;
    this._sharedRunnersSetting = config.sharedRunnersSetting;
    this._subgroupCreationLevel = config.subgroupCreationLevel;
    this._twoFactorGracePeriod = config.twoFactorGracePeriod;
    this._visibilityLevel = config.visibilityLevel;
    this._wikiAccessLevel = config.wikiAccessLevel;
    this._defaultBranchProtectionDefaults.internalValue = config.defaultBranchProtectionDefaults;
    this._pushRules.internalValue = config.pushRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_email_domains_list - computed: false, optional: true, required: false
  private _allowedEmailDomainsList?: string[]; 
  public get allowedEmailDomainsList() {
    return this.getListAttribute('allowed_email_domains_list');
  }
  public set allowedEmailDomainsList(value: string[]) {
    this._allowedEmailDomainsList = value;
  }
  public resetAllowedEmailDomainsList() {
    this._allowedEmailDomainsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEmailDomainsListInput() {
    return this._allowedEmailDomainsList;
  }

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

  // default_branch - computed: false, optional: true, required: false
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
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

  // emails_enabled - computed: true, optional: true, required: false
  private _emailsEnabled?: boolean | cdktf.IResolvable; 
  public get emailsEnabled() {
    return this.getBooleanAttribute('emails_enabled');
  }
  public set emailsEnabled(value: boolean | cdktf.IResolvable) {
    this._emailsEnabled = value;
  }
  public resetEmailsEnabled() {
    this._emailsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsEnabledInput() {
    return this._emailsEnabled;
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

  // permanently_remove_on_delete - computed: false, optional: true, required: false
  private _permanentlyRemoveOnDelete?: boolean | cdktf.IResolvable; 
  public get permanentlyRemoveOnDelete() {
    return this.getBooleanAttribute('permanently_remove_on_delete');
  }
  public set permanentlyRemoveOnDelete(value: boolean | cdktf.IResolvable) {
    this._permanentlyRemoveOnDelete = value;
  }
  public resetPermanentlyRemoveOnDelete() {
    this._permanentlyRemoveOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentlyRemoveOnDeleteInput() {
    return this._permanentlyRemoveOnDelete;
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

  // shared_runners_setting - computed: true, optional: true, required: false
  private _sharedRunnersSetting?: string; 
  public get sharedRunnersSetting() {
    return this.getStringAttribute('shared_runners_setting');
  }
  public set sharedRunnersSetting(value: string) {
    this._sharedRunnersSetting = value;
  }
  public resetSharedRunnersSetting() {
    this._sharedRunnersSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedRunnersSettingInput() {
    return this._sharedRunnersSetting;
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

  // default_branch_protection_defaults - computed: false, optional: true, required: false
  private _defaultBranchProtectionDefaults = new GroupDefaultBranchProtectionDefaultsOutputReference(this, "default_branch_protection_defaults");
  public get defaultBranchProtectionDefaults() {
    return this._defaultBranchProtectionDefaults;
  }
  public putDefaultBranchProtectionDefaults(value: GroupDefaultBranchProtectionDefaults) {
    this._defaultBranchProtectionDefaults.internalValue = value;
  }
  public resetDefaultBranchProtectionDefaults() {
    this._defaultBranchProtectionDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchProtectionDefaultsInput() {
    return this._defaultBranchProtectionDefaults.internalValue;
  }

  // push_rules - computed: false, optional: true, required: false
  private _pushRules = new GroupPushRulesOutputReference(this, "push_rules");
  public get pushRules() {
    return this._pushRules;
  }
  public putPushRules(value: GroupPushRules) {
    this._pushRules.internalValue = value;
  }
  public resetPushRules() {
    this._pushRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushRulesInput() {
    return this._pushRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_email_domains_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedEmailDomainsList),
      auto_devops_enabled: cdktf.booleanToTerraform(this._autoDevopsEnabled),
      avatar: cdktf.stringToTerraform(this._avatar),
      avatar_hash: cdktf.stringToTerraform(this._avatarHash),
      default_branch: cdktf.stringToTerraform(this._defaultBranch),
      default_branch_protection: cdktf.numberToTerraform(this._defaultBranchProtection),
      description: cdktf.stringToTerraform(this._description),
      emails_enabled: cdktf.booleanToTerraform(this._emailsEnabled),
      extra_shared_runners_minutes_limit: cdktf.numberToTerraform(this._extraSharedRunnersMinutesLimit),
      id: cdktf.stringToTerraform(this._id),
      ip_restriction_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipRestrictionRanges),
      lfs_enabled: cdktf.booleanToTerraform(this._lfsEnabled),
      membership_lock: cdktf.booleanToTerraform(this._membershipLock),
      mentions_disabled: cdktf.booleanToTerraform(this._mentionsDisabled),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.numberToTerraform(this._parentId),
      path: cdktf.stringToTerraform(this._path),
      permanently_remove_on_delete: cdktf.booleanToTerraform(this._permanentlyRemoveOnDelete),
      prevent_forking_outside_group: cdktf.booleanToTerraform(this._preventForkingOutsideGroup),
      project_creation_level: cdktf.stringToTerraform(this._projectCreationLevel),
      request_access_enabled: cdktf.booleanToTerraform(this._requestAccessEnabled),
      require_two_factor_authentication: cdktf.booleanToTerraform(this._requireTwoFactorAuthentication),
      share_with_group_lock: cdktf.booleanToTerraform(this._shareWithGroupLock),
      shared_runners_minutes_limit: cdktf.numberToTerraform(this._sharedRunnersMinutesLimit),
      shared_runners_setting: cdktf.stringToTerraform(this._sharedRunnersSetting),
      subgroup_creation_level: cdktf.stringToTerraform(this._subgroupCreationLevel),
      two_factor_grace_period: cdktf.numberToTerraform(this._twoFactorGracePeriod),
      visibility_level: cdktf.stringToTerraform(this._visibilityLevel),
      wiki_access_level: cdktf.stringToTerraform(this._wikiAccessLevel),
      default_branch_protection_defaults: groupDefaultBranchProtectionDefaultsToTerraform(this._defaultBranchProtectionDefaults.internalValue),
      push_rules: groupPushRulesToTerraform(this._pushRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_email_domains_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedEmailDomainsList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_devops_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoDevopsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      avatar: {
        value: cdktf.stringToHclTerraform(this._avatar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avatar_hash: {
        value: cdktf.stringToHclTerraform(this._avatarHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_branch: {
        value: cdktf.stringToHclTerraform(this._defaultBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_branch_protection: {
        value: cdktf.numberToHclTerraform(this._defaultBranchProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emails_enabled: {
        value: cdktf.booleanToHclTerraform(this._emailsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extra_shared_runners_minutes_limit: {
        value: cdktf.numberToHclTerraform(this._extraSharedRunnersMinutesLimit),
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
      ip_restriction_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipRestrictionRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lfs_enabled: {
        value: cdktf.booleanToHclTerraform(this._lfsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      membership_lock: {
        value: cdktf.booleanToHclTerraform(this._membershipLock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mentions_disabled: {
        value: cdktf.booleanToHclTerraform(this._mentionsDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.numberToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permanently_remove_on_delete: {
        value: cdktf.booleanToHclTerraform(this._permanentlyRemoveOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_forking_outside_group: {
        value: cdktf.booleanToHclTerraform(this._preventForkingOutsideGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_creation_level: {
        value: cdktf.stringToHclTerraform(this._projectCreationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._requestAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_two_factor_authentication: {
        value: cdktf.booleanToHclTerraform(this._requireTwoFactorAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      share_with_group_lock: {
        value: cdktf.booleanToHclTerraform(this._shareWithGroupLock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_runners_minutes_limit: {
        value: cdktf.numberToHclTerraform(this._sharedRunnersMinutesLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_runners_setting: {
        value: cdktf.stringToHclTerraform(this._sharedRunnersSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subgroup_creation_level: {
        value: cdktf.stringToHclTerraform(this._subgroupCreationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor_grace_period: {
        value: cdktf.numberToHclTerraform(this._twoFactorGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      visibility_level: {
        value: cdktf.stringToHclTerraform(this._visibilityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiki_access_level: {
        value: cdktf.stringToHclTerraform(this._wikiAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_branch_protection_defaults: {
        value: groupDefaultBranchProtectionDefaultsToHclTerraform(this._defaultBranchProtectionDefaults.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupDefaultBranchProtectionDefaultsList",
      },
      push_rules: {
        value: groupPushRulesToHclTerraform(this._pushRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupPushRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
