# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-gitlab.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-gitlab.group.Group"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group gitlab_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.Group.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group.Group;

Group.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .path(java.lang.String)
//  .allowedEmailDomainsList(java.util.List<java.lang.String>)
//  .autoDevopsEnabled(java.lang.Boolean|IResolvable)
//  .avatar(java.lang.String)
//  .avatarHash(java.lang.String)
//  .defaultBranch(java.lang.String)
//  .defaultBranchProtection(java.lang.Number)
//  .defaultBranchProtectionDefaults(GroupDefaultBranchProtectionDefaults)
//  .description(java.lang.String)
//  .emailsEnabled(java.lang.Boolean|IResolvable)
//  .extraSharedRunnersMinutesLimit(java.lang.Number)
//  .id(java.lang.String)
//  .ipRestrictionRanges(java.util.List<java.lang.String>)
//  .lfsEnabled(java.lang.Boolean|IResolvable)
//  .membershipLock(java.lang.Boolean|IResolvable)
//  .mentionsDisabled(java.lang.Boolean|IResolvable)
//  .parentId(java.lang.Number)
//  .permanentlyRemoveOnDelete(java.lang.Boolean|IResolvable)
//  .preventForkingOutsideGroup(java.lang.Boolean|IResolvable)
//  .projectCreationLevel(java.lang.String)
//  .pushRules(GroupPushRules)
//  .requestAccessEnabled(java.lang.Boolean|IResolvable)
//  .requireTwoFactorAuthentication(java.lang.Boolean|IResolvable)
//  .sharedRunnersMinutesLimit(java.lang.Number)
//  .sharedRunnersSetting(java.lang.String)
//  .shareWithGroupLock(java.lang.Boolean|IResolvable)
//  .subgroupCreationLevel(java.lang.String)
//  .twoFactorGracePeriod(java.lang.Number)
//  .visibilityLevel(java.lang.String)
//  .wikiAccessLevel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The path of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.allowedEmailDomainsList">allowedEmailDomainsList</a></code> | <code>java.util.List<java.lang.String></code> | A list of email address domains to allow group access. Will be concatenated together into a comma separated string. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Default to Auto DevOps pipeline for all projects within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.avatar">avatar</a></code> | <code>java.lang.String</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.avatarHash">avatarHash</a></code> | <code>java.lang.String</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | Initial default branch name. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.defaultBranchProtection">defaultBranchProtection</a></code> | <code>java.lang.Number</code> | See https://docs.gitlab.com/api/groups/#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.defaultBranchProtectionDefaults">defaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | default_branch_protection_defaults block. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The group's description. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.emailsEnabled">emailsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.extraSharedRunnersMinutesLimit">extraSharedRunnersMinutesLimit</a></code> | <code>java.lang.Number</code> | Can be set by administrators only. Additional CI/CD minutes for this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.ipRestrictionRanges">ipRestrictionRanges</a></code> | <code>java.util.List<java.lang.String></code> | A list of IP addresses or subnet masks to restrict group access. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.lfsEnabled">lfsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable/disable Large File Storage (LFS) for the projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.membershipLock">membershipLock</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Users cannot be added to projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.mentionsDisabled">mentionsDisabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Disable the capability of a group from getting mentioned. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.parentId">parentId</a></code> | <code>java.lang.Number</code> | Id of the parent group (creates a nested group). |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.permanentlyRemoveOnDelete">permanentlyRemoveOnDelete</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the group should be permanently removed during a `delete` operation. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.preventForkingOutsideGroup">preventForkingOutsideGroup</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Defaults to false. When enabled, users can not fork projects from this group to external namespaces. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.projectCreationLevel">projectCreationLevel</a></code> | <code>java.lang.String</code> | Determine if developers can create projects in the group. Valid values are: `noone`, `owner`, `maintainer`, `developer`, `administrator`. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.pushRules">pushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.requestAccessEnabled">requestAccessEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.requireTwoFactorAuthentication">requireTwoFactorAuthentication</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Require all users in this group to setup Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.sharedRunnersMinutesLimit">sharedRunnersMinutesLimit</a></code> | <code>java.lang.Number</code> | Can be set by administrators only. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.sharedRunnersSetting">sharedRunnersSetting</a></code> | <code>java.lang.String</code> | Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.shareWithGroupLock">shareWithGroupLock</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Prevent sharing a project with another group within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.subgroupCreationLevel">subgroupCreationLevel</a></code> | <code>java.lang.String</code> | Allowed to create subgroups. Valid values are: `owner`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.twoFactorGracePeriod">twoFactorGracePeriod</a></code> | <code>java.lang.Number</code> | Defaults to 48. Time before Two-factor authentication is enforced (in hours). |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.visibilityLevel">visibilityLevel</a></code> | <code>java.lang.String</code> | The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.wikiAccessLevel">wikiAccessLevel</a></code> | <code>java.lang.String</code> | The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#name Group#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#path Group#path}

---

##### `allowedEmailDomainsList`<sup>Optional</sup> <a name="allowedEmailDomainsList" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.allowedEmailDomainsList"></a>

- *Type:* java.util.List<java.lang.String>

A list of email address domains to allow group access. Will be concatenated together into a comma separated string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#allowed_email_domains_list Group#allowed_email_domains_list}

---

##### `autoDevopsEnabled`<sup>Optional</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.autoDevopsEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Default to Auto DevOps pipeline for all projects within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#auto_devops_enabled Group#auto_devops_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.avatar"></a>

- *Type:* java.lang.String

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#avatar Group#avatar}

---

##### `avatarHash`<sup>Optional</sup> <a name="avatarHash" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.avatarHash"></a>

- *Type:* java.lang.String

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#avatar_hash Group#avatar_hash}

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.defaultBranch"></a>

- *Type:* java.lang.String

Initial default branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#default_branch Group#default_branch}

---

##### `defaultBranchProtection`<sup>Optional</sup> <a name="defaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.defaultBranchProtection"></a>

- *Type:* java.lang.Number

See https://docs.gitlab.com/api/groups/#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#default_branch_protection Group#default_branch_protection}

---

##### `defaultBranchProtectionDefaults`<sup>Optional</sup> <a name="defaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.defaultBranchProtectionDefaults"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

default_branch_protection_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#default_branch_protection_defaults Group#default_branch_protection_defaults}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The group's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#description Group#description}

---

##### `emailsEnabled`<sup>Optional</sup> <a name="emailsEnabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.emailsEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#emails_enabled Group#emails_enabled}

---

##### `extraSharedRunnersMinutesLimit`<sup>Optional</sup> <a name="extraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.extraSharedRunnersMinutesLimit"></a>

- *Type:* java.lang.Number

Can be set by administrators only. Additional CI/CD minutes for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRestrictionRanges`<sup>Optional</sup> <a name="ipRestrictionRanges" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.ipRestrictionRanges"></a>

- *Type:* java.util.List<java.lang.String>

A list of IP addresses or subnet masks to restrict group access.

Will be concatenated together into a comma separated string. Only allowed on top level groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#ip_restriction_ranges Group#ip_restriction_ranges}

---

##### `lfsEnabled`<sup>Optional</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.lfsEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable/disable Large File Storage (LFS) for the projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#lfs_enabled Group#lfs_enabled}

---

##### `membershipLock`<sup>Optional</sup> <a name="membershipLock" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.membershipLock"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Users cannot be added to projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#membership_lock Group#membership_lock}

---

##### `mentionsDisabled`<sup>Optional</sup> <a name="mentionsDisabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.mentionsDisabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Disable the capability of a group from getting mentioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#mentions_disabled Group#mentions_disabled}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.parentId"></a>

- *Type:* java.lang.Number

Id of the parent group (creates a nested group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#parent_id Group#parent_id}

---

##### `permanentlyRemoveOnDelete`<sup>Optional</sup> <a name="permanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.permanentlyRemoveOnDelete"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the group should be permanently removed during a `delete` operation.

This only works with subgroups. Must be configured via an `apply` before the `destroy` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#permanently_remove_on_delete Group#permanently_remove_on_delete}

---

##### `preventForkingOutsideGroup`<sup>Optional</sup> <a name="preventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.preventForkingOutsideGroup"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Defaults to false. When enabled, users can not fork projects from this group to external namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#prevent_forking_outside_group Group#prevent_forking_outside_group}

---

##### `projectCreationLevel`<sup>Optional</sup> <a name="projectCreationLevel" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.projectCreationLevel"></a>

- *Type:* java.lang.String

Determine if developers can create projects in the group. Valid values are: `noone`, `owner`, `maintainer`, `developer`, `administrator`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#project_creation_level Group#project_creation_level}

---

##### `pushRules`<sup>Optional</sup> <a name="pushRules" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.pushRules"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#push_rules Group#push_rules}

---

##### `requestAccessEnabled`<sup>Optional</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.requestAccessEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#request_access_enabled Group#request_access_enabled}

---

##### `requireTwoFactorAuthentication`<sup>Optional</sup> <a name="requireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.requireTwoFactorAuthentication"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Require all users in this group to setup Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#require_two_factor_authentication Group#require_two_factor_authentication}

---

##### `sharedRunnersMinutesLimit`<sup>Optional</sup> <a name="sharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.sharedRunnersMinutesLimit"></a>

- *Type:* java.lang.Number

Can be set by administrators only.

Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}

---

##### `sharedRunnersSetting`<sup>Optional</sup> <a name="sharedRunnersSetting" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.sharedRunnersSetting"></a>

- *Type:* java.lang.String

Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#shared_runners_setting Group#shared_runners_setting}

---

##### `shareWithGroupLock`<sup>Optional</sup> <a name="shareWithGroupLock" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.shareWithGroupLock"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Prevent sharing a project with another group within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#share_with_group_lock Group#share_with_group_lock}

---

##### `subgroupCreationLevel`<sup>Optional</sup> <a name="subgroupCreationLevel" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.subgroupCreationLevel"></a>

- *Type:* java.lang.String

Allowed to create subgroups. Valid values are: `owner`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#subgroup_creation_level Group#subgroup_creation_level}

---

##### `twoFactorGracePeriod`<sup>Optional</sup> <a name="twoFactorGracePeriod" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.twoFactorGracePeriod"></a>

- *Type:* java.lang.Number

Defaults to 48. Time before Two-factor authentication is enforced (in hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#two_factor_grace_period Group#two_factor_grace_period}

---

##### `visibilityLevel`<sup>Optional</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.visibilityLevel"></a>

- *Type:* java.lang.String

The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#visibility_level Group#visibility_level}

---

##### `wikiAccessLevel`<sup>Optional</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.wikiAccessLevel"></a>

- *Type:* java.lang.String

The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#wiki_access_level Group#wiki_access_level}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.group.Group.putDefaultBranchProtectionDefaults">putDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.putPushRules">putPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAllowedEmailDomainsList">resetAllowedEmailDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled">resetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatar">resetAvatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatarHash">resetAvatarHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranch">resetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection">resetDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtectionDefaults">resetDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetEmailsEnabled">resetEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit">resetExtraSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges">resetIpRestrictionRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetLfsEnabled">resetLfsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMembershipLock">resetMembershipLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMentionsDisabled">resetMentionsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPermanentlyRemoveOnDelete">resetPermanentlyRemoveOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup">resetPreventForkingOutsideGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel">resetProjectCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPushRules">resetPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled">resetRequestAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication">resetRequireTwoFactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit">resetSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersSetting">resetSharedRunnersSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock">resetShareWithGroupLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel">resetSubgroupCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod">resetTwoFactorGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetVisibilityLevel">resetVisibilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetWikiAccessLevel">resetWikiAccessLevel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.group.Group.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.group.Group.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.group.Group.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.group.Group.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.group.Group.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.group.Group.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.group.Group.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.group.Group.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.group.Group.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.group.Group.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.group.Group.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.group.Group.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.group.Group.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.group.Group.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultBranchProtectionDefaults` <a name="putDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.putDefaultBranchProtectionDefaults"></a>

```java
public void putDefaultBranchProtectionDefaults(GroupDefaultBranchProtectionDefaults value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.group.Group.putDefaultBranchProtectionDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

---

##### `putPushRules` <a name="putPushRules" id="@cdktf/provider-gitlab.group.Group.putPushRules"></a>

```java
public void putPushRules(GroupPushRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

---

##### `resetAllowedEmailDomainsList` <a name="resetAllowedEmailDomainsList" id="@cdktf/provider-gitlab.group.Group.resetAllowedEmailDomainsList"></a>

```java
public void resetAllowedEmailDomainsList()
```

##### `resetAutoDevopsEnabled` <a name="resetAutoDevopsEnabled" id="@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled"></a>

```java
public void resetAutoDevopsEnabled()
```

##### `resetAvatar` <a name="resetAvatar" id="@cdktf/provider-gitlab.group.Group.resetAvatar"></a>

```java
public void resetAvatar()
```

##### `resetAvatarHash` <a name="resetAvatarHash" id="@cdktf/provider-gitlab.group.Group.resetAvatarHash"></a>

```java
public void resetAvatarHash()
```

##### `resetDefaultBranch` <a name="resetDefaultBranch" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranch"></a>

```java
public void resetDefaultBranch()
```

##### `resetDefaultBranchProtection` <a name="resetDefaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection"></a>

```java
public void resetDefaultBranchProtection()
```

##### `resetDefaultBranchProtectionDefaults` <a name="resetDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtectionDefaults"></a>

```java
public void resetDefaultBranchProtectionDefaults()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.group.Group.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEmailsEnabled` <a name="resetEmailsEnabled" id="@cdktf/provider-gitlab.group.Group.resetEmailsEnabled"></a>

```java
public void resetEmailsEnabled()
```

##### `resetExtraSharedRunnersMinutesLimit` <a name="resetExtraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit"></a>

```java
public void resetExtraSharedRunnersMinutesLimit()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.group.Group.resetId"></a>

```java
public void resetId()
```

##### `resetIpRestrictionRanges` <a name="resetIpRestrictionRanges" id="@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges"></a>

```java
public void resetIpRestrictionRanges()
```

##### `resetLfsEnabled` <a name="resetLfsEnabled" id="@cdktf/provider-gitlab.group.Group.resetLfsEnabled"></a>

```java
public void resetLfsEnabled()
```

##### `resetMembershipLock` <a name="resetMembershipLock" id="@cdktf/provider-gitlab.group.Group.resetMembershipLock"></a>

```java
public void resetMembershipLock()
```

##### `resetMentionsDisabled` <a name="resetMentionsDisabled" id="@cdktf/provider-gitlab.group.Group.resetMentionsDisabled"></a>

```java
public void resetMentionsDisabled()
```

##### `resetParentId` <a name="resetParentId" id="@cdktf/provider-gitlab.group.Group.resetParentId"></a>

```java
public void resetParentId()
```

##### `resetPermanentlyRemoveOnDelete` <a name="resetPermanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.Group.resetPermanentlyRemoveOnDelete"></a>

```java
public void resetPermanentlyRemoveOnDelete()
```

##### `resetPreventForkingOutsideGroup` <a name="resetPreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup"></a>

```java
public void resetPreventForkingOutsideGroup()
```

##### `resetProjectCreationLevel` <a name="resetProjectCreationLevel" id="@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel"></a>

```java
public void resetProjectCreationLevel()
```

##### `resetPushRules` <a name="resetPushRules" id="@cdktf/provider-gitlab.group.Group.resetPushRules"></a>

```java
public void resetPushRules()
```

##### `resetRequestAccessEnabled` <a name="resetRequestAccessEnabled" id="@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled"></a>

```java
public void resetRequestAccessEnabled()
```

##### `resetRequireTwoFactorAuthentication` <a name="resetRequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication"></a>

```java
public void resetRequireTwoFactorAuthentication()
```

##### `resetSharedRunnersMinutesLimit` <a name="resetSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit"></a>

```java
public void resetSharedRunnersMinutesLimit()
```

##### `resetSharedRunnersSetting` <a name="resetSharedRunnersSetting" id="@cdktf/provider-gitlab.group.Group.resetSharedRunnersSetting"></a>

```java
public void resetSharedRunnersSetting()
```

##### `resetShareWithGroupLock` <a name="resetShareWithGroupLock" id="@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock"></a>

```java
public void resetShareWithGroupLock()
```

##### `resetSubgroupCreationLevel` <a name="resetSubgroupCreationLevel" id="@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel"></a>

```java
public void resetSubgroupCreationLevel()
```

##### `resetTwoFactorGracePeriod` <a name="resetTwoFactorGracePeriod" id="@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod"></a>

```java
public void resetTwoFactorGracePeriod()
```

##### `resetVisibilityLevel` <a name="resetVisibilityLevel" id="@cdktf/provider-gitlab.group.Group.resetVisibilityLevel"></a>

```java
public void resetVisibilityLevel()
```

##### `resetWikiAccessLevel` <a name="resetWikiAccessLevel" id="@cdktf/provider-gitlab.group.Group.resetWikiAccessLevel"></a>

```java
public void resetWikiAccessLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.group.Group.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group.Group;

Group.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.group.Group.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group.Group;

Group.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.group.Group.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group.Group;

Group.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group.Group;

Group.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Group.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Group to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Group that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Group to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarUrl">avatarUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaults">defaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference">GroupDefaultBranchProtectionDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullName">fullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullPath">fullPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pushRules">pushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference">GroupPushRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.runnersToken">runnersToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.webUrl">webUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.allowedEmailDomainsListInput">allowedEmailDomainsListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput">autoDevopsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHashInput">avatarHashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarInput">avatarInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchInput">defaultBranchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaultsInput">defaultBranchProtectionDefaultsInput</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput">defaultBranchProtectionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsEnabledInput">emailsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput">extraSharedRunnersMinutesLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput">ipRestrictionRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput">lfsEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLockInput">membershipLockInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput">mentionsDisabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentIdInput">parentIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDeleteInput">permanentlyRemoveOnDeleteInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput">preventForkingOutsideGroupInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput">projectCreationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pushRulesInput">pushRulesInput</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput">requestAccessEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput">requireTwoFactorAuthenticationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput">sharedRunnersMinutesLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersSettingInput">sharedRunnersSettingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput">shareWithGroupLockInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput">subgroupCreationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput">twoFactorGracePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput">visibilityLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput">wikiAccessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.allowedEmailDomainsList">allowedEmailDomainsList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatar">avatar</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHash">avatarHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection">defaultBranchProtection</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsEnabled">emailsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit">extraSharedRunnersMinutesLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges">ipRestrictionRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabled">lfsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLock">membershipLock</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabled">mentionsDisabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentId">parentId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDelete">permanentlyRemoveOnDelete</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup">preventForkingOutsideGroup</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevel">projectCreationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication">requireTwoFactorAuthentication</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit">sharedRunnersMinutesLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersSetting">sharedRunnersSetting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock">shareWithGroupLock</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel">subgroupCreationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod">twoFactorGracePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevel">visibilityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevel">wikiAccessLevel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.group.Group.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.group.Group.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.group.Group.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.group.Group.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.Group.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.Group.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.group.Group.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.group.Group.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.Group.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.Group.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.group.Group.property.avatarUrl"></a>

```java
public java.lang.String getAvatarUrl();
```

- *Type:* java.lang.String

---

##### `defaultBranchProtectionDefaults`<sup>Required</sup> <a name="defaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaults"></a>

```java
public GroupDefaultBranchProtectionDefaultsOutputReference getDefaultBranchProtectionDefaults();
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference">GroupDefaultBranchProtectionDefaultsOutputReference</a>

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-gitlab.group.Group.property.fullName"></a>

```java
public java.lang.String getFullName();
```

- *Type:* java.lang.String

---

##### `fullPath`<sup>Required</sup> <a name="fullPath" id="@cdktf/provider-gitlab.group.Group.property.fullPath"></a>

```java
public java.lang.String getFullPath();
```

- *Type:* java.lang.String

---

##### `pushRules`<sup>Required</sup> <a name="pushRules" id="@cdktf/provider-gitlab.group.Group.property.pushRules"></a>

```java
public GroupPushRulesOutputReference getPushRules();
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference">GroupPushRulesOutputReference</a>

---

##### `runnersToken`<sup>Required</sup> <a name="runnersToken" id="@cdktf/provider-gitlab.group.Group.property.runnersToken"></a>

```java
public java.lang.String getRunnersToken();
```

- *Type:* java.lang.String

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.group.Group.property.webUrl"></a>

```java
public java.lang.String getWebUrl();
```

- *Type:* java.lang.String

---

##### `allowedEmailDomainsListInput`<sup>Optional</sup> <a name="allowedEmailDomainsListInput" id="@cdktf/provider-gitlab.group.Group.property.allowedEmailDomainsListInput"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomainsListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoDevopsEnabledInput`<sup>Optional</sup> <a name="autoDevopsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoDevopsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `avatarHashInput`<sup>Optional</sup> <a name="avatarHashInput" id="@cdktf/provider-gitlab.group.Group.property.avatarHashInput"></a>

```java
public java.lang.String getAvatarHashInput();
```

- *Type:* java.lang.String

---

##### `avatarInput`<sup>Optional</sup> <a name="avatarInput" id="@cdktf/provider-gitlab.group.Group.property.avatarInput"></a>

```java
public java.lang.String getAvatarInput();
```

- *Type:* java.lang.String

---

##### `defaultBranchInput`<sup>Optional</sup> <a name="defaultBranchInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchInput"></a>

```java
public java.lang.String getDefaultBranchInput();
```

- *Type:* java.lang.String

---

##### `defaultBranchProtectionDefaultsInput`<sup>Optional</sup> <a name="defaultBranchProtectionDefaultsInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaultsInput"></a>

```java
public GroupDefaultBranchProtectionDefaults getDefaultBranchProtectionDefaultsInput();
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

---

##### `defaultBranchProtectionInput`<sup>Optional</sup> <a name="defaultBranchProtectionInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput"></a>

```java
public java.lang.Number getDefaultBranchProtectionInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.group.Group.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `emailsEnabledInput`<sup>Optional</sup> <a name="emailsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.emailsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEmailsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `extraSharedRunnersMinutesLimitInput`<sup>Optional</sup> <a name="extraSharedRunnersMinutesLimitInput" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput"></a>

```java
public java.lang.Number getExtraSharedRunnersMinutesLimitInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.group.Group.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipRestrictionRangesInput`<sup>Optional</sup> <a name="ipRestrictionRangesInput" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput"></a>

```java
public java.util.List<java.lang.String> getIpRestrictionRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lfsEnabledInput`<sup>Optional</sup> <a name="lfsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getLfsEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membershipLockInput`<sup>Optional</sup> <a name="membershipLockInput" id="@cdktf/provider-gitlab.group.Group.property.membershipLockInput"></a>

```java
public java.lang.Boolean|IResolvable getMembershipLockInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mentionsDisabledInput`<sup>Optional</sup> <a name="mentionsDisabledInput" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMentionsDisabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.group.Group.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktf/provider-gitlab.group.Group.property.parentIdInput"></a>

```java
public java.lang.Number getParentIdInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-gitlab.group.Group.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `permanentlyRemoveOnDeleteInput`<sup>Optional</sup> <a name="permanentlyRemoveOnDeleteInput" id="@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDeleteInput"></a>

```java
public java.lang.Boolean|IResolvable getPermanentlyRemoveOnDeleteInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preventForkingOutsideGroupInput`<sup>Optional</sup> <a name="preventForkingOutsideGroupInput" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput"></a>

```java
public java.lang.Boolean|IResolvable getPreventForkingOutsideGroupInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `projectCreationLevelInput`<sup>Optional</sup> <a name="projectCreationLevelInput" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput"></a>

```java
public java.lang.String getProjectCreationLevelInput();
```

- *Type:* java.lang.String

---

##### `pushRulesInput`<sup>Optional</sup> <a name="pushRulesInput" id="@cdktf/provider-gitlab.group.Group.property.pushRulesInput"></a>

```java
public GroupPushRules getPushRulesInput();
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

---

##### `requestAccessEnabledInput`<sup>Optional</sup> <a name="requestAccessEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRequestAccessEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireTwoFactorAuthenticationInput`<sup>Optional</sup> <a name="requireTwoFactorAuthenticationInput" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireTwoFactorAuthenticationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sharedRunnersMinutesLimitInput`<sup>Optional</sup> <a name="sharedRunnersMinutesLimitInput" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput"></a>

```java
public java.lang.Number getSharedRunnersMinutesLimitInput();
```

- *Type:* java.lang.Number

---

##### `sharedRunnersSettingInput`<sup>Optional</sup> <a name="sharedRunnersSettingInput" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersSettingInput"></a>

```java
public java.lang.String getSharedRunnersSettingInput();
```

- *Type:* java.lang.String

---

##### `shareWithGroupLockInput`<sup>Optional</sup> <a name="shareWithGroupLockInput" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput"></a>

```java
public java.lang.Boolean|IResolvable getShareWithGroupLockInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `subgroupCreationLevelInput`<sup>Optional</sup> <a name="subgroupCreationLevelInput" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput"></a>

```java
public java.lang.String getSubgroupCreationLevelInput();
```

- *Type:* java.lang.String

---

##### `twoFactorGracePeriodInput`<sup>Optional</sup> <a name="twoFactorGracePeriodInput" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput"></a>

```java
public java.lang.Number getTwoFactorGracePeriodInput();
```

- *Type:* java.lang.Number

---

##### `visibilityLevelInput`<sup>Optional</sup> <a name="visibilityLevelInput" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput"></a>

```java
public java.lang.String getVisibilityLevelInput();
```

- *Type:* java.lang.String

---

##### `wikiAccessLevelInput`<sup>Optional</sup> <a name="wikiAccessLevelInput" id="@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput"></a>

```java
public java.lang.String getWikiAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `allowedEmailDomainsList`<sup>Required</sup> <a name="allowedEmailDomainsList" id="@cdktf/provider-gitlab.group.Group.property.allowedEmailDomainsList"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomainsList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoDevopsEnabled`<sup>Required</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoDevopsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `avatar`<sup>Required</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.Group.property.avatar"></a>

```java
public java.lang.String getAvatar();
```

- *Type:* java.lang.String

---

##### `avatarHash`<sup>Required</sup> <a name="avatarHash" id="@cdktf/provider-gitlab.group.Group.property.avatarHash"></a>

```java
public java.lang.String getAvatarHash();
```

- *Type:* java.lang.String

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.group.Group.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

---

##### `defaultBranchProtection`<sup>Required</sup> <a name="defaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection"></a>

```java
public java.lang.Number getDefaultBranchProtection();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.group.Group.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `emailsEnabled`<sup>Required</sup> <a name="emailsEnabled" id="@cdktf/provider-gitlab.group.Group.property.emailsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEmailsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `extraSharedRunnersMinutesLimit`<sup>Required</sup> <a name="extraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit"></a>

```java
public java.lang.Number getExtraSharedRunnersMinutesLimit();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipRestrictionRanges`<sup>Required</sup> <a name="ipRestrictionRanges" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges"></a>

```java
public java.util.List<java.lang.String> getIpRestrictionRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lfsEnabled`<sup>Required</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getLfsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `membershipLock`<sup>Required</sup> <a name="membershipLock" id="@cdktf/provider-gitlab.group.Group.property.membershipLock"></a>

```java
public java.lang.Boolean|IResolvable getMembershipLock();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `mentionsDisabled`<sup>Required</sup> <a name="mentionsDisabled" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabled"></a>

```java
public java.lang.Boolean|IResolvable getMentionsDisabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.Group.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-gitlab.group.Group.property.parentId"></a>

```java
public java.lang.Number getParentId();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `permanentlyRemoveOnDelete`<sup>Required</sup> <a name="permanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDelete"></a>

```java
public java.lang.Boolean|IResolvable getPermanentlyRemoveOnDelete();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preventForkingOutsideGroup`<sup>Required</sup> <a name="preventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup"></a>

```java
public java.lang.Boolean|IResolvable getPreventForkingOutsideGroup();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `projectCreationLevel`<sup>Required</sup> <a name="projectCreationLevel" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevel"></a>

```java
public java.lang.String getProjectCreationLevel();
```

- *Type:* java.lang.String

---

##### `requestAccessEnabled`<sup>Required</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRequestAccessEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireTwoFactorAuthentication`<sup>Required</sup> <a name="requireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication"></a>

```java
public java.lang.Boolean|IResolvable getRequireTwoFactorAuthentication();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `sharedRunnersMinutesLimit`<sup>Required</sup> <a name="sharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit"></a>

```java
public java.lang.Number getSharedRunnersMinutesLimit();
```

- *Type:* java.lang.Number

---

##### `sharedRunnersSetting`<sup>Required</sup> <a name="sharedRunnersSetting" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersSetting"></a>

```java
public java.lang.String getSharedRunnersSetting();
```

- *Type:* java.lang.String

---

##### `shareWithGroupLock`<sup>Required</sup> <a name="shareWithGroupLock" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock"></a>

```java
public java.lang.Boolean|IResolvable getShareWithGroupLock();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `subgroupCreationLevel`<sup>Required</sup> <a name="subgroupCreationLevel" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel"></a>

```java
public java.lang.String getSubgroupCreationLevel();
```

- *Type:* java.lang.String

---

##### `twoFactorGracePeriod`<sup>Required</sup> <a name="twoFactorGracePeriod" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod"></a>

```java
public java.lang.Number getTwoFactorGracePeriod();
```

- *Type:* java.lang.Number

---

##### `visibilityLevel`<sup>Required</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevel"></a>

```java
public java.lang.String getVisibilityLevel();
```

- *Type:* java.lang.String

---

##### `wikiAccessLevel`<sup>Required</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.group.Group.property.wikiAccessLevel"></a>

```java
public java.lang.String getWikiAccessLevel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.group.Group.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-gitlab.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group.GroupConfig;

GroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .path(java.lang.String)
//  .allowedEmailDomainsList(java.util.List<java.lang.String>)
//  .autoDevopsEnabled(java.lang.Boolean|IResolvable)
//  .avatar(java.lang.String)
//  .avatarHash(java.lang.String)
//  .defaultBranch(java.lang.String)
//  .defaultBranchProtection(java.lang.Number)
//  .defaultBranchProtectionDefaults(GroupDefaultBranchProtectionDefaults)
//  .description(java.lang.String)
//  .emailsEnabled(java.lang.Boolean|IResolvable)
//  .extraSharedRunnersMinutesLimit(java.lang.Number)
//  .id(java.lang.String)
//  .ipRestrictionRanges(java.util.List<java.lang.String>)
//  .lfsEnabled(java.lang.Boolean|IResolvable)
//  .membershipLock(java.lang.Boolean|IResolvable)
//  .mentionsDisabled(java.lang.Boolean|IResolvable)
//  .parentId(java.lang.Number)
//  .permanentlyRemoveOnDelete(java.lang.Boolean|IResolvable)
//  .preventForkingOutsideGroup(java.lang.Boolean|IResolvable)
//  .projectCreationLevel(java.lang.String)
//  .pushRules(GroupPushRules)
//  .requestAccessEnabled(java.lang.Boolean|IResolvable)
//  .requireTwoFactorAuthentication(java.lang.Boolean|IResolvable)
//  .sharedRunnersMinutesLimit(java.lang.Number)
//  .sharedRunnersSetting(java.lang.String)
//  .shareWithGroupLock(java.lang.Boolean|IResolvable)
//  .subgroupCreationLevel(java.lang.String)
//  .twoFactorGracePeriod(java.lang.Number)
//  .visibilityLevel(java.lang.String)
//  .wikiAccessLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.path">path</a></code> | <code>java.lang.String</code> | The path of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.allowedEmailDomainsList">allowedEmailDomainsList</a></code> | <code>java.util.List<java.lang.String></code> | A list of email address domains to allow group access. Will be concatenated together into a comma separated string. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Default to Auto DevOps pipeline for all projects within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatar">avatar</a></code> | <code>java.lang.String</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash">avatarHash</a></code> | <code>java.lang.String</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranch">defaultBranch</a></code> | <code>java.lang.String</code> | Initial default branch name. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection">defaultBranchProtection</a></code> | <code>java.lang.Number</code> | See https://docs.gitlab.com/api/groups/#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtectionDefaults">defaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | default_branch_protection_defaults block. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | The group's description. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.emailsEnabled">emailsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit">extraSharedRunnersMinutesLimit</a></code> | <code>java.lang.Number</code> | Can be set by administrators only. Additional CI/CD minutes for this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges">ipRestrictionRanges</a></code> | <code>java.util.List<java.lang.String></code> | A list of IP addresses or subnet masks to restrict group access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled">lfsEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable/disable Large File Storage (LFS) for the projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock">membershipLock</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Users cannot be added to projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled">mentionsDisabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Disable the capability of a group from getting mentioned. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.parentId">parentId</a></code> | <code>java.lang.Number</code> | Id of the parent group (creates a nested group). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.permanentlyRemoveOnDelete">permanentlyRemoveOnDelete</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the group should be permanently removed during a `delete` operation. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup">preventForkingOutsideGroup</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Defaults to false. When enabled, users can not fork projects from this group to external namespaces. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel">projectCreationLevel</a></code> | <code>java.lang.String</code> | Determine if developers can create projects in the group. Valid values are: `noone`, `owner`, `maintainer`, `developer`, `administrator`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.pushRules">pushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication">requireTwoFactorAuthentication</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Require all users in this group to setup Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit">sharedRunnersMinutesLimit</a></code> | <code>java.lang.Number</code> | Can be set by administrators only. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersSetting">sharedRunnersSetting</a></code> | <code>java.lang.String</code> | Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock">shareWithGroupLock</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Prevent sharing a project with another group within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel">subgroupCreationLevel</a></code> | <code>java.lang.String</code> | Allowed to create subgroups. Valid values are: `owner`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod">twoFactorGracePeriod</a></code> | <code>java.lang.Number</code> | Defaults to 48. Time before Two-factor authentication is enforced (in hours). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel">visibilityLevel</a></code> | <code>java.lang.String</code> | The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel">wikiAccessLevel</a></code> | <code>java.lang.String</code> | The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.GroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.GroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.group.GroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.GroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.GroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.GroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#name Group#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.GroupConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#path Group#path}

---

##### `allowedEmailDomainsList`<sup>Optional</sup> <a name="allowedEmailDomainsList" id="@cdktf/provider-gitlab.group.GroupConfig.property.allowedEmailDomainsList"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomainsList();
```

- *Type:* java.util.List<java.lang.String>

A list of email address domains to allow group access. Will be concatenated together into a comma separated string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#allowed_email_domains_list Group#allowed_email_domains_list}

---

##### `autoDevopsEnabled`<sup>Optional</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoDevopsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Default to Auto DevOps pipeline for all projects within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#auto_devops_enabled Group#auto_devops_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatar"></a>

```java
public java.lang.String getAvatar();
```

- *Type:* java.lang.String

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#avatar Group#avatar}

---

##### `avatarHash`<sup>Optional</sup> <a name="avatarHash" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash"></a>

```java
public java.lang.String getAvatarHash();
```

- *Type:* java.lang.String

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#avatar_hash Group#avatar_hash}

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranch"></a>

```java
public java.lang.String getDefaultBranch();
```

- *Type:* java.lang.String

Initial default branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#default_branch Group#default_branch}

---

##### `defaultBranchProtection`<sup>Optional</sup> <a name="defaultBranchProtection" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection"></a>

```java
public java.lang.Number getDefaultBranchProtection();
```

- *Type:* java.lang.Number

See https://docs.gitlab.com/api/groups/#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#default_branch_protection Group#default_branch_protection}

---

##### `defaultBranchProtectionDefaults`<sup>Optional</sup> <a name="defaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtectionDefaults"></a>

```java
public GroupDefaultBranchProtectionDefaults getDefaultBranchProtectionDefaults();
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

default_branch_protection_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#default_branch_protection_defaults Group#default_branch_protection_defaults}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.group.GroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The group's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#description Group#description}

---

##### `emailsEnabled`<sup>Optional</sup> <a name="emailsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.emailsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEmailsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#emails_enabled Group#emails_enabled}

---

##### `extraSharedRunnersMinutesLimit`<sup>Optional</sup> <a name="extraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit"></a>

```java
public java.lang.Number getExtraSharedRunnersMinutesLimit();
```

- *Type:* java.lang.Number

Can be set by administrators only. Additional CI/CD minutes for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.group.GroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRestrictionRanges`<sup>Optional</sup> <a name="ipRestrictionRanges" id="@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges"></a>

```java
public java.util.List<java.lang.String> getIpRestrictionRanges();
```

- *Type:* java.util.List<java.lang.String>

A list of IP addresses or subnet masks to restrict group access.

Will be concatenated together into a comma separated string. Only allowed on top level groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#ip_restriction_ranges Group#ip_restriction_ranges}

---

##### `lfsEnabled`<sup>Optional</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getLfsEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable/disable Large File Storage (LFS) for the projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#lfs_enabled Group#lfs_enabled}

---

##### `membershipLock`<sup>Optional</sup> <a name="membershipLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock"></a>

```java
public java.lang.Boolean|IResolvable getMembershipLock();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Users cannot be added to projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#membership_lock Group#membership_lock}

---

##### `mentionsDisabled`<sup>Optional</sup> <a name="mentionsDisabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled"></a>

```java
public java.lang.Boolean|IResolvable getMentionsDisabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Disable the capability of a group from getting mentioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#mentions_disabled Group#mentions_disabled}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktf/provider-gitlab.group.GroupConfig.property.parentId"></a>

```java
public java.lang.Number getParentId();
```

- *Type:* java.lang.Number

Id of the parent group (creates a nested group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#parent_id Group#parent_id}

---

##### `permanentlyRemoveOnDelete`<sup>Optional</sup> <a name="permanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.GroupConfig.property.permanentlyRemoveOnDelete"></a>

```java
public java.lang.Boolean|IResolvable getPermanentlyRemoveOnDelete();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the group should be permanently removed during a `delete` operation.

This only works with subgroups. Must be configured via an `apply` before the `destroy` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#permanently_remove_on_delete Group#permanently_remove_on_delete}

---

##### `preventForkingOutsideGroup`<sup>Optional</sup> <a name="preventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup"></a>

```java
public java.lang.Boolean|IResolvable getPreventForkingOutsideGroup();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Defaults to false. When enabled, users can not fork projects from this group to external namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#prevent_forking_outside_group Group#prevent_forking_outside_group}

---

##### `projectCreationLevel`<sup>Optional</sup> <a name="projectCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel"></a>

```java
public java.lang.String getProjectCreationLevel();
```

- *Type:* java.lang.String

Determine if developers can create projects in the group. Valid values are: `noone`, `owner`, `maintainer`, `developer`, `administrator`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#project_creation_level Group#project_creation_level}

---

##### `pushRules`<sup>Optional</sup> <a name="pushRules" id="@cdktf/provider-gitlab.group.GroupConfig.property.pushRules"></a>

```java
public GroupPushRules getPushRules();
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#push_rules Group#push_rules}

---

##### `requestAccessEnabled`<sup>Optional</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRequestAccessEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#request_access_enabled Group#request_access_enabled}

---

##### `requireTwoFactorAuthentication`<sup>Optional</sup> <a name="requireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication"></a>

```java
public java.lang.Boolean|IResolvable getRequireTwoFactorAuthentication();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Require all users in this group to setup Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#require_two_factor_authentication Group#require_two_factor_authentication}

---

##### `sharedRunnersMinutesLimit`<sup>Optional</sup> <a name="sharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit"></a>

```java
public java.lang.Number getSharedRunnersMinutesLimit();
```

- *Type:* java.lang.Number

Can be set by administrators only.

Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}

---

##### `sharedRunnersSetting`<sup>Optional</sup> <a name="sharedRunnersSetting" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersSetting"></a>

```java
public java.lang.String getSharedRunnersSetting();
```

- *Type:* java.lang.String

Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#shared_runners_setting Group#shared_runners_setting}

---

##### `shareWithGroupLock`<sup>Optional</sup> <a name="shareWithGroupLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock"></a>

```java
public java.lang.Boolean|IResolvable getShareWithGroupLock();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Prevent sharing a project with another group within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#share_with_group_lock Group#share_with_group_lock}

---

##### `subgroupCreationLevel`<sup>Optional</sup> <a name="subgroupCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel"></a>

```java
public java.lang.String getSubgroupCreationLevel();
```

- *Type:* java.lang.String

Allowed to create subgroups. Valid values are: `owner`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#subgroup_creation_level Group#subgroup_creation_level}

---

##### `twoFactorGracePeriod`<sup>Optional</sup> <a name="twoFactorGracePeriod" id="@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod"></a>

```java
public java.lang.Number getTwoFactorGracePeriod();
```

- *Type:* java.lang.Number

Defaults to 48. Time before Two-factor authentication is enforced (in hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#two_factor_grace_period Group#two_factor_grace_period}

---

##### `visibilityLevel`<sup>Optional</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel"></a>

```java
public java.lang.String getVisibilityLevel();
```

- *Type:* java.lang.String

The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#visibility_level Group#visibility_level}

---

##### `wikiAccessLevel`<sup>Optional</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel"></a>

```java
public java.lang.String getWikiAccessLevel();
```

- *Type:* java.lang.String

The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#wiki_access_level Group#wiki_access_level}

---

### GroupDefaultBranchProtectionDefaults <a name="GroupDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group.GroupDefaultBranchProtectionDefaults;

GroupDefaultBranchProtectionDefaults.builder()
//  .allowedToMerge(java.util.List<java.lang.String>)
//  .allowedToPush(java.util.List<java.lang.String>)
//  .allowForcePush(java.lang.Boolean|IResolvable)
//  .developerCanInitialPush(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToMerge">allowedToMerge</a></code> | <code>java.util.List<java.lang.String></code> | An array of access levels allowed to merge. Valid values are: `developer`, `maintainer`, `no one`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToPush">allowedToPush</a></code> | <code>java.util.List<java.lang.String></code> | An array of access levels allowed to push. Valid values are: `developer`, `maintainer`, `no one`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowForcePush">allowForcePush</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow force push for all users with push access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.developerCanInitialPush">developerCanInitialPush</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allow developers to initial push. |

---

##### `allowedToMerge`<sup>Optional</sup> <a name="allowedToMerge" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToMerge"></a>

```java
public java.util.List<java.lang.String> getAllowedToMerge();
```

- *Type:* java.util.List<java.lang.String>

An array of access levels allowed to merge. Valid values are: `developer`, `maintainer`, `no one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#allowed_to_merge Group#allowed_to_merge}

---

##### `allowedToPush`<sup>Optional</sup> <a name="allowedToPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToPush"></a>

```java
public java.util.List<java.lang.String> getAllowedToPush();
```

- *Type:* java.util.List<java.lang.String>

An array of access levels allowed to push. Valid values are: `developer`, `maintainer`, `no one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#allowed_to_push Group#allowed_to_push}

---

##### `allowForcePush`<sup>Optional</sup> <a name="allowForcePush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowForcePush"></a>

```java
public java.lang.Boolean|IResolvable getAllowForcePush();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow force push for all users with push access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#allow_force_push Group#allow_force_push}

---

##### `developerCanInitialPush`<sup>Optional</sup> <a name="developerCanInitialPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.developerCanInitialPush"></a>

```java
public java.lang.Boolean|IResolvable getDeveloperCanInitialPush();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allow developers to initial push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#developer_can_initial_push Group#developer_can_initial_push}

---

### GroupPushRules <a name="GroupPushRules" id="@cdktf/provider-gitlab.group.GroupPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupPushRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group.GroupPushRules;

GroupPushRules.builder()
//  .authorEmailRegex(java.lang.String)
//  .branchNameRegex(java.lang.String)
//  .commitCommitterCheck(java.lang.Boolean|IResolvable)
//  .commitCommitterNameCheck(java.lang.Boolean|IResolvable)
//  .commitMessageNegativeRegex(java.lang.String)
//  .commitMessageRegex(java.lang.String)
//  .denyDeleteTag(java.lang.Boolean|IResolvable)
//  .fileNameRegex(java.lang.String)
//  .maxFileSize(java.lang.Number)
//  .memberCheck(java.lang.Boolean|IResolvable)
//  .preventSecrets(java.lang.Boolean|IResolvable)
//  .rejectNonDcoCommits(java.lang.Boolean|IResolvable)
//  .rejectUnsignedCommits(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.authorEmailRegex">authorEmailRegex</a></code> | <code>java.lang.String</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.branchNameRegex">branchNameRegex</a></code> | <code>java.lang.String</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterCheck">commitCommitterCheck</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Only commits pushed using verified emails are allowed. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterNameCheck">commitCommitterNameCheck</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageNegativeRegex">commitMessageNegativeRegex</a></code> | <code>java.lang.String</code> | No commit message is allowed to match this regex, for example `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageRegex">commitMessageRegex</a></code> | <code>java.lang.String</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.denyDeleteTag">denyDeleteTag</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.fileNameRegex">fileNameRegex</a></code> | <code>java.lang.String</code> | Filenames matching the regular expression provided in this attribute are not allowed, for example, `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | Maximum file size (MB) allowed. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.memberCheck">memberCheck</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Allows only GitLab users to author commits. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.preventSecrets">preventSecrets</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.rejectNonDcoCommits">rejectNonDcoCommits</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.rejectUnsignedCommits">rejectUnsignedCommits</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Only commits signed through GPG are allowed. |

---

##### `authorEmailRegex`<sup>Optional</sup> <a name="authorEmailRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.authorEmailRegex"></a>

```java
public java.lang.String getAuthorEmailRegex();
```

- *Type:* java.lang.String

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#author_email_regex Group#author_email_regex}

---

##### `branchNameRegex`<sup>Optional</sup> <a name="branchNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.branchNameRegex"></a>

```java
public java.lang.String getBranchNameRegex();
```

- *Type:* java.lang.String

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#branch_name_regex Group#branch_name_regex}

---

##### `commitCommitterCheck`<sup>Optional</sup> <a name="commitCommitterCheck" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterCheck"></a>

```java
public java.lang.Boolean|IResolvable getCommitCommitterCheck();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Only commits pushed using verified emails are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#commit_committer_check Group#commit_committer_check}

---

##### `commitCommitterNameCheck`<sup>Optional</sup> <a name="commitCommitterNameCheck" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterNameCheck"></a>

```java
public java.lang.Boolean|IResolvable getCommitCommitterNameCheck();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#commit_committer_name_check Group#commit_committer_name_check}

---

##### `commitMessageNegativeRegex`<sup>Optional</sup> <a name="commitMessageNegativeRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageNegativeRegex"></a>

```java
public java.lang.String getCommitMessageNegativeRegex();
```

- *Type:* java.lang.String

No commit message is allowed to match this regex, for example `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#commit_message_negative_regex Group#commit_message_negative_regex}

---

##### `commitMessageRegex`<sup>Optional</sup> <a name="commitMessageRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageRegex"></a>

```java
public java.lang.String getCommitMessageRegex();
```

- *Type:* java.lang.String

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#commit_message_regex Group#commit_message_regex}

---

##### `denyDeleteTag`<sup>Optional</sup> <a name="denyDeleteTag" id="@cdktf/provider-gitlab.group.GroupPushRules.property.denyDeleteTag"></a>

```java
public java.lang.Boolean|IResolvable getDenyDeleteTag();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#deny_delete_tag Group#deny_delete_tag}

---

##### `fileNameRegex`<sup>Optional</sup> <a name="fileNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.fileNameRegex"></a>

```java
public java.lang.String getFileNameRegex();
```

- *Type:* java.lang.String

Filenames matching the regular expression provided in this attribute are not allowed, for example, `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#file_name_regex Group#file_name_regex}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktf/provider-gitlab.group.GroupPushRules.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

Maximum file size (MB) allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#max_file_size Group#max_file_size}

---

##### `memberCheck`<sup>Optional</sup> <a name="memberCheck" id="@cdktf/provider-gitlab.group.GroupPushRules.property.memberCheck"></a>

```java
public java.lang.Boolean|IResolvable getMemberCheck();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Allows only GitLab users to author commits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#member_check Group#member_check}

---

##### `preventSecrets`<sup>Optional</sup> <a name="preventSecrets" id="@cdktf/provider-gitlab.group.GroupPushRules.property.preventSecrets"></a>

```java
public java.lang.Boolean|IResolvable getPreventSecrets();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#prevent_secrets Group#prevent_secrets}

---

##### `rejectNonDcoCommits`<sup>Optional</sup> <a name="rejectNonDcoCommits" id="@cdktf/provider-gitlab.group.GroupPushRules.property.rejectNonDcoCommits"></a>

```java
public java.lang.Boolean|IResolvable getRejectNonDcoCommits();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#reject_non_dco_commits Group#reject_non_dco_commits}

---

##### `rejectUnsignedCommits`<sup>Optional</sup> <a name="rejectUnsignedCommits" id="@cdktf/provider-gitlab.group.GroupPushRules.property.rejectUnsignedCommits"></a>

```java
public java.lang.Boolean|IResolvable getRejectUnsignedCommits();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Only commits signed through GPG are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group#reject_unsigned_commits Group#reject_unsigned_commits}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupDefaultBranchProtectionDefaultsOutputReference <a name="GroupDefaultBranchProtectionDefaultsOutputReference" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference;

new GroupDefaultBranchProtectionDefaultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToMerge">resetAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToPush">resetAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowForcePush">resetAllowForcePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetDeveloperCanInitialPush">resetDeveloperCanInitialPush</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedToMerge` <a name="resetAllowedToMerge" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToMerge"></a>

```java
public void resetAllowedToMerge()
```

##### `resetAllowedToPush` <a name="resetAllowedToPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToPush"></a>

```java
public void resetAllowedToPush()
```

##### `resetAllowForcePush` <a name="resetAllowForcePush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowForcePush"></a>

```java
public void resetAllowForcePush()
```

##### `resetDeveloperCanInitialPush` <a name="resetDeveloperCanInitialPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetDeveloperCanInitialPush"></a>

```java
public void resetDeveloperCanInitialPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMergeInput">allowedToMergeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPushInput">allowedToPushInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePushInput">allowForcePushInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPushInput">developerCanInitialPushInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMerge">allowedToMerge</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPush">allowedToPush</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePush">allowForcePush</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPush">developerCanInitialPush</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedToMergeInput`<sup>Optional</sup> <a name="allowedToMergeInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMergeInput"></a>

```java
public java.util.List<java.lang.String> getAllowedToMergeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedToPushInput`<sup>Optional</sup> <a name="allowedToPushInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPushInput"></a>

```java
public java.util.List<java.lang.String> getAllowedToPushInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowForcePushInput`<sup>Optional</sup> <a name="allowForcePushInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePushInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowForcePushInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `developerCanInitialPushInput`<sup>Optional</sup> <a name="developerCanInitialPushInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPushInput"></a>

```java
public java.lang.Boolean|IResolvable getDeveloperCanInitialPushInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `allowedToMerge`<sup>Required</sup> <a name="allowedToMerge" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMerge"></a>

```java
public java.util.List<java.lang.String> getAllowedToMerge();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedToPush`<sup>Required</sup> <a name="allowedToPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPush"></a>

```java
public java.util.List<java.lang.String> getAllowedToPush();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowForcePush`<sup>Required</sup> <a name="allowForcePush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePush"></a>

```java
public java.lang.Boolean|IResolvable getAllowForcePush();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `developerCanInitialPush`<sup>Required</sup> <a name="developerCanInitialPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPush"></a>

```java
public java.lang.Boolean|IResolvable getDeveloperCanInitialPush();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.internalValue"></a>

```java
public GroupDefaultBranchProtectionDefaults getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

---


### GroupPushRulesOutputReference <a name="GroupPushRulesOutputReference" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.group.GroupPushRulesOutputReference;

new GroupPushRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetAuthorEmailRegex">resetAuthorEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetBranchNameRegex">resetBranchNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterCheck">resetCommitCommitterCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterNameCheck">resetCommitCommitterNameCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageNegativeRegex">resetCommitMessageNegativeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageRegex">resetCommitMessageRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetDenyDeleteTag">resetDenyDeleteTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetFileNameRegex">resetFileNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMemberCheck">resetMemberCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetPreventSecrets">resetPreventSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectNonDcoCommits">resetRejectNonDcoCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectUnsignedCommits">resetRejectUnsignedCommits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorEmailRegex` <a name="resetAuthorEmailRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetAuthorEmailRegex"></a>

```java
public void resetAuthorEmailRegex()
```

##### `resetBranchNameRegex` <a name="resetBranchNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetBranchNameRegex"></a>

```java
public void resetBranchNameRegex()
```

##### `resetCommitCommitterCheck` <a name="resetCommitCommitterCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterCheck"></a>

```java
public void resetCommitCommitterCheck()
```

##### `resetCommitCommitterNameCheck` <a name="resetCommitCommitterNameCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterNameCheck"></a>

```java
public void resetCommitCommitterNameCheck()
```

##### `resetCommitMessageNegativeRegex` <a name="resetCommitMessageNegativeRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageNegativeRegex"></a>

```java
public void resetCommitMessageNegativeRegex()
```

##### `resetCommitMessageRegex` <a name="resetCommitMessageRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageRegex"></a>

```java
public void resetCommitMessageRegex()
```

##### `resetDenyDeleteTag` <a name="resetDenyDeleteTag" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetDenyDeleteTag"></a>

```java
public void resetDenyDeleteTag()
```

##### `resetFileNameRegex` <a name="resetFileNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetFileNameRegex"></a>

```java
public void resetFileNameRegex()
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMaxFileSize"></a>

```java
public void resetMaxFileSize()
```

##### `resetMemberCheck` <a name="resetMemberCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMemberCheck"></a>

```java
public void resetMemberCheck()
```

##### `resetPreventSecrets` <a name="resetPreventSecrets" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetPreventSecrets"></a>

```java
public void resetPreventSecrets()
```

##### `resetRejectNonDcoCommits` <a name="resetRejectNonDcoCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectNonDcoCommits"></a>

```java
public void resetRejectNonDcoCommits()
```

##### `resetRejectUnsignedCommits` <a name="resetRejectUnsignedCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectUnsignedCommits"></a>

```java
public void resetRejectUnsignedCommits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegexInput">authorEmailRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegexInput">branchNameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheckInput">commitCommitterCheckInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheckInput">commitCommitterNameCheckInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegexInput">commitMessageNegativeRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegexInput">commitMessageRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTagInput">denyDeleteTagInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegexInput">fileNameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheckInput">memberCheckInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecretsInput">preventSecretsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommitsInput">rejectNonDcoCommitsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommitsInput">rejectUnsignedCommitsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegex">authorEmailRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegex">branchNameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheck">commitCommitterCheck</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheck">commitCommitterNameCheck</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegex">commitMessageNegativeRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegex">commitMessageRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTag">denyDeleteTag</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegex">fileNameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheck">memberCheck</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecrets">preventSecrets</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommits">rejectNonDcoCommits</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommits">rejectUnsignedCommits</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorEmailRegexInput`<sup>Optional</sup> <a name="authorEmailRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegexInput"></a>

```java
public java.lang.String getAuthorEmailRegexInput();
```

- *Type:* java.lang.String

---

##### `branchNameRegexInput`<sup>Optional</sup> <a name="branchNameRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegexInput"></a>

```java
public java.lang.String getBranchNameRegexInput();
```

- *Type:* java.lang.String

---

##### `commitCommitterCheckInput`<sup>Optional</sup> <a name="commitCommitterCheckInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getCommitCommitterCheckInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `commitCommitterNameCheckInput`<sup>Optional</sup> <a name="commitCommitterNameCheckInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getCommitCommitterNameCheckInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `commitMessageNegativeRegexInput`<sup>Optional</sup> <a name="commitMessageNegativeRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegexInput"></a>

```java
public java.lang.String getCommitMessageNegativeRegexInput();
```

- *Type:* java.lang.String

---

##### `commitMessageRegexInput`<sup>Optional</sup> <a name="commitMessageRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegexInput"></a>

```java
public java.lang.String getCommitMessageRegexInput();
```

- *Type:* java.lang.String

---

##### `denyDeleteTagInput`<sup>Optional</sup> <a name="denyDeleteTagInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTagInput"></a>

```java
public java.lang.Boolean|IResolvable getDenyDeleteTagInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fileNameRegexInput`<sup>Optional</sup> <a name="fileNameRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegexInput"></a>

```java
public java.lang.String getFileNameRegexInput();
```

- *Type:* java.lang.String

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSizeInput"></a>

```java
public java.lang.Number getMaxFileSizeInput();
```

- *Type:* java.lang.Number

---

##### `memberCheckInput`<sup>Optional</sup> <a name="memberCheckInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getMemberCheckInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preventSecretsInput`<sup>Optional</sup> <a name="preventSecretsInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecretsInput"></a>

```java
public java.lang.Boolean|IResolvable getPreventSecretsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rejectNonDcoCommitsInput`<sup>Optional</sup> <a name="rejectNonDcoCommitsInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommitsInput"></a>

```java
public java.lang.Boolean|IResolvable getRejectNonDcoCommitsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rejectUnsignedCommitsInput`<sup>Optional</sup> <a name="rejectUnsignedCommitsInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommitsInput"></a>

```java
public java.lang.Boolean|IResolvable getRejectUnsignedCommitsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `authorEmailRegex`<sup>Required</sup> <a name="authorEmailRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegex"></a>

```java
public java.lang.String getAuthorEmailRegex();
```

- *Type:* java.lang.String

---

##### `branchNameRegex`<sup>Required</sup> <a name="branchNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegex"></a>

```java
public java.lang.String getBranchNameRegex();
```

- *Type:* java.lang.String

---

##### `commitCommitterCheck`<sup>Required</sup> <a name="commitCommitterCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheck"></a>

```java
public java.lang.Boolean|IResolvable getCommitCommitterCheck();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `commitCommitterNameCheck`<sup>Required</sup> <a name="commitCommitterNameCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheck"></a>

```java
public java.lang.Boolean|IResolvable getCommitCommitterNameCheck();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `commitMessageNegativeRegex`<sup>Required</sup> <a name="commitMessageNegativeRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```java
public java.lang.String getCommitMessageNegativeRegex();
```

- *Type:* java.lang.String

---

##### `commitMessageRegex`<sup>Required</sup> <a name="commitMessageRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegex"></a>

```java
public java.lang.String getCommitMessageRegex();
```

- *Type:* java.lang.String

---

##### `denyDeleteTag`<sup>Required</sup> <a name="denyDeleteTag" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTag"></a>

```java
public java.lang.Boolean|IResolvable getDenyDeleteTag();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `fileNameRegex`<sup>Required</sup> <a name="fileNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegex"></a>

```java
public java.lang.String getFileNameRegex();
```

- *Type:* java.lang.String

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSize"></a>

```java
public java.lang.Number getMaxFileSize();
```

- *Type:* java.lang.Number

---

##### `memberCheck`<sup>Required</sup> <a name="memberCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheck"></a>

```java
public java.lang.Boolean|IResolvable getMemberCheck();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preventSecrets`<sup>Required</sup> <a name="preventSecrets" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecrets"></a>

```java
public java.lang.Boolean|IResolvable getPreventSecrets();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rejectNonDcoCommits`<sup>Required</sup> <a name="rejectNonDcoCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommits"></a>

```java
public java.lang.Boolean|IResolvable getRejectNonDcoCommits();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rejectUnsignedCommits`<sup>Required</sup> <a name="rejectUnsignedCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```java
public java.lang.Boolean|IResolvable getRejectUnsignedCommits();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.internalValue"></a>

```java
public GroupPushRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

---



