# `gitlab_group`

Refer to the Terraform Registory for docs: [`gitlab_group`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group).

# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-gitlab.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-gitlab.group.Group"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group gitlab_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.Group.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.Group(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  path: str,
  auto_devops_enabled: typing.Union[bool, IResolvable] = None,
  avatar: str = None,
  avatar_hash: str = None,
  default_branch_protection: typing.Union[int, float] = None,
  description: str = None,
  emails_disabled: typing.Union[bool, IResolvable] = None,
  extra_shared_runners_minutes_limit: typing.Union[int, float] = None,
  id: str = None,
  ip_restriction_ranges: typing.List[str] = None,
  lfs_enabled: typing.Union[bool, IResolvable] = None,
  membership_lock: typing.Union[bool, IResolvable] = None,
  mentions_disabled: typing.Union[bool, IResolvable] = None,
  parent_id: typing.Union[int, float] = None,
  prevent_forking_outside_group: typing.Union[bool, IResolvable] = None,
  project_creation_level: str = None,
  request_access_enabled: typing.Union[bool, IResolvable] = None,
  require_two_factor_authentication: typing.Union[bool, IResolvable] = None,
  shared_runners_minutes_limit: typing.Union[int, float] = None,
  share_with_group_lock: typing.Union[bool, IResolvable] = None,
  subgroup_creation_level: str = None,
  two_factor_grace_period: typing.Union[int, float] = None,
  visibility_level: str = None,
  wiki_access_level: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.path">path</a></code> | <code>str</code> | The path of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. Default to Auto DevOps pipeline for all projects within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.avatar">avatar</a></code> | <code>str</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.avatarHash">avatar_hash</a></code> | <code>str</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.defaultBranchProtection">default_branch_protection</a></code> | <code>typing.Union[int, float]</code> | Defaults to 2. See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.emailsDisabled">emails_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. Disable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.extraSharedRunnersMinutesLimit">extra_shared_runners_minutes_limit</a></code> | <code>typing.Union[int, float]</code> | Can be set by administrators only. Additional CI/CD minutes for this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.ipRestrictionRanges">ip_restriction_ranges</a></code> | <code>typing.List[str]</code> | A list of IP addresses or subnet masks to restrict group access. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.lfsEnabled">lfs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to true. Enable/disable Large File Storage (LFS) for the projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.membershipLock">membership_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Users cannot be added to projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.mentionsDisabled">mentions_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. Disable the capability of a group from getting mentioned. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.parentId">parent_id</a></code> | <code>typing.Union[int, float]</code> | Id of the parent group (creates a nested group). |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.preventForkingOutsideGroup">prevent_forking_outside_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. When enabled, users can not fork projects from this group to external namespaces. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.projectCreationLevel">project_creation_level</a></code> | <code>str</code> | Defaults to maintainer. Determine if developers can create projects in the group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.requestAccessEnabled">request_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.requireTwoFactorAuthentication">require_two_factor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. Require all users in this group to setup Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.sharedRunnersMinutesLimit">shared_runners_minutes_limit</a></code> | <code>typing.Union[int, float]</code> | Can be set by administrators only. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.shareWithGroupLock">share_with_group_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. Prevent sharing a project with another group within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.subgroupCreationLevel">subgroup_creation_level</a></code> | <code>str</code> | Defaults to owner. Allowed to create subgroups. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.twoFactorGracePeriod">two_factor_grace_period</a></code> | <code>typing.Union[int, float]</code> | Defaults to 48. Time before Two-factor authentication is enforced (in hours). |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.visibilityLevel">visibility_level</a></code> | <code>str</code> | The group's visibility. Can be `private`, `internal`, or `public`. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.wikiAccessLevel">wiki_access_level</a></code> | <code>str</code> | The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.name"></a>

- *Type:* str

The name of this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#name Group#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.path"></a>

- *Type:* str

The path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#path Group#path}

---

##### `auto_devops_enabled`<sup>Optional</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.autoDevopsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. Default to Auto DevOps pipeline for all projects within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#auto_devops_enabled Group#auto_devops_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.avatar"></a>

- *Type:* str

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#avatar Group#avatar}

---

##### `avatar_hash`<sup>Optional</sup> <a name="avatar_hash" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.avatarHash"></a>

- *Type:* str

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#avatar_hash Group#avatar_hash}

---

##### `default_branch_protection`<sup>Optional</sup> <a name="default_branch_protection" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.defaultBranchProtection"></a>

- *Type:* typing.Union[int, float]

Defaults to 2. See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#default_branch_protection Group#default_branch_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.description"></a>

- *Type:* str

The description of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#description Group#description}

---

##### `emails_disabled`<sup>Optional</sup> <a name="emails_disabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.emailsDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. Disable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#emails_disabled Group#emails_disabled}

---

##### `extra_shared_runners_minutes_limit`<sup>Optional</sup> <a name="extra_shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.extraSharedRunnersMinutesLimit"></a>

- *Type:* typing.Union[int, float]

Can be set by administrators only. Additional CI/CD minutes for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_restriction_ranges`<sup>Optional</sup> <a name="ip_restriction_ranges" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.ipRestrictionRanges"></a>

- *Type:* typing.List[str]

A list of IP addresses or subnet masks to restrict group access.

Will be concatenated together into a comma separated string. Only allowed on top level groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#ip_restriction_ranges Group#ip_restriction_ranges}

---

##### `lfs_enabled`<sup>Optional</sup> <a name="lfs_enabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.lfsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to true. Enable/disable Large File Storage (LFS) for the projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#lfs_enabled Group#lfs_enabled}

---

##### `membership_lock`<sup>Optional</sup> <a name="membership_lock" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.membershipLock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users cannot be added to projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#membership_lock Group#membership_lock}

---

##### `mentions_disabled`<sup>Optional</sup> <a name="mentions_disabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.mentionsDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. Disable the capability of a group from getting mentioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#mentions_disabled Group#mentions_disabled}

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.parentId"></a>

- *Type:* typing.Union[int, float]

Id of the parent group (creates a nested group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#parent_id Group#parent_id}

---

##### `prevent_forking_outside_group`<sup>Optional</sup> <a name="prevent_forking_outside_group" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.preventForkingOutsideGroup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. When enabled, users can not fork projects from this group to external namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#prevent_forking_outside_group Group#prevent_forking_outside_group}

---

##### `project_creation_level`<sup>Optional</sup> <a name="project_creation_level" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.projectCreationLevel"></a>

- *Type:* str

Defaults to maintainer. Determine if developers can create projects in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#project_creation_level Group#project_creation_level}

---

##### `request_access_enabled`<sup>Optional</sup> <a name="request_access_enabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.requestAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#request_access_enabled Group#request_access_enabled}

---

##### `require_two_factor_authentication`<sup>Optional</sup> <a name="require_two_factor_authentication" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.requireTwoFactorAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. Require all users in this group to setup Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#require_two_factor_authentication Group#require_two_factor_authentication}

---

##### `shared_runners_minutes_limit`<sup>Optional</sup> <a name="shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.sharedRunnersMinutesLimit"></a>

- *Type:* typing.Union[int, float]

Can be set by administrators only.

Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}

---

##### `share_with_group_lock`<sup>Optional</sup> <a name="share_with_group_lock" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.shareWithGroupLock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. Prevent sharing a project with another group within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#share_with_group_lock Group#share_with_group_lock}

---

##### `subgroup_creation_level`<sup>Optional</sup> <a name="subgroup_creation_level" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.subgroupCreationLevel"></a>

- *Type:* str

Defaults to owner. Allowed to create subgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#subgroup_creation_level Group#subgroup_creation_level}

---

##### `two_factor_grace_period`<sup>Optional</sup> <a name="two_factor_grace_period" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.twoFactorGracePeriod"></a>

- *Type:* typing.Union[int, float]

Defaults to 48. Time before Two-factor authentication is enforced (in hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#two_factor_grace_period Group#two_factor_grace_period}

---

##### `visibility_level`<sup>Optional</sup> <a name="visibility_level" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.visibilityLevel"></a>

- *Type:* str

The group's visibility. Can be `private`, `internal`, or `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#visibility_level Group#visibility_level}

---

##### `wiki_access_level`<sup>Optional</sup> <a name="wiki_access_level" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.wikiAccessLevel"></a>

- *Type:* str

The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#wiki_access_level Group#wiki_access_level}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled">reset_auto_devops_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatar">reset_avatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatarHash">reset_avatar_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection">reset_default_branch_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetEmailsDisabled">reset_emails_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit">reset_extra_shared_runners_minutes_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges">reset_ip_restriction_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetLfsEnabled">reset_lfs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMembershipLock">reset_membership_lock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMentionsDisabled">reset_mentions_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetParentId">reset_parent_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup">reset_prevent_forking_outside_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel">reset_project_creation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled">reset_request_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication">reset_require_two_factor_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit">reset_shared_runners_minutes_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock">reset_share_with_group_lock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel">reset_subgroup_creation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod">reset_two_factor_grace_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetVisibilityLevel">reset_visibility_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetWikiAccessLevel">reset_wiki_access_level</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.group.Group.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.group.Group.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.group.Group.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.group.Group.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_auto_devops_enabled` <a name="reset_auto_devops_enabled" id="@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled"></a>

```python
def reset_auto_devops_enabled() -> None
```

##### `reset_avatar` <a name="reset_avatar" id="@cdktf/provider-gitlab.group.Group.resetAvatar"></a>

```python
def reset_avatar() -> None
```

##### `reset_avatar_hash` <a name="reset_avatar_hash" id="@cdktf/provider-gitlab.group.Group.resetAvatarHash"></a>

```python
def reset_avatar_hash() -> None
```

##### `reset_default_branch_protection` <a name="reset_default_branch_protection" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection"></a>

```python
def reset_default_branch_protection() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-gitlab.group.Group.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_emails_disabled` <a name="reset_emails_disabled" id="@cdktf/provider-gitlab.group.Group.resetEmailsDisabled"></a>

```python
def reset_emails_disabled() -> None
```

##### `reset_extra_shared_runners_minutes_limit` <a name="reset_extra_shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit"></a>

```python
def reset_extra_shared_runners_minutes_limit() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.group.Group.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_restriction_ranges` <a name="reset_ip_restriction_ranges" id="@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges"></a>

```python
def reset_ip_restriction_ranges() -> None
```

##### `reset_lfs_enabled` <a name="reset_lfs_enabled" id="@cdktf/provider-gitlab.group.Group.resetLfsEnabled"></a>

```python
def reset_lfs_enabled() -> None
```

##### `reset_membership_lock` <a name="reset_membership_lock" id="@cdktf/provider-gitlab.group.Group.resetMembershipLock"></a>

```python
def reset_membership_lock() -> None
```

##### `reset_mentions_disabled` <a name="reset_mentions_disabled" id="@cdktf/provider-gitlab.group.Group.resetMentionsDisabled"></a>

```python
def reset_mentions_disabled() -> None
```

##### `reset_parent_id` <a name="reset_parent_id" id="@cdktf/provider-gitlab.group.Group.resetParentId"></a>

```python
def reset_parent_id() -> None
```

##### `reset_prevent_forking_outside_group` <a name="reset_prevent_forking_outside_group" id="@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup"></a>

```python
def reset_prevent_forking_outside_group() -> None
```

##### `reset_project_creation_level` <a name="reset_project_creation_level" id="@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel"></a>

```python
def reset_project_creation_level() -> None
```

##### `reset_request_access_enabled` <a name="reset_request_access_enabled" id="@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled"></a>

```python
def reset_request_access_enabled() -> None
```

##### `reset_require_two_factor_authentication` <a name="reset_require_two_factor_authentication" id="@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication"></a>

```python
def reset_require_two_factor_authentication() -> None
```

##### `reset_shared_runners_minutes_limit` <a name="reset_shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit"></a>

```python
def reset_shared_runners_minutes_limit() -> None
```

##### `reset_share_with_group_lock` <a name="reset_share_with_group_lock" id="@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock"></a>

```python
def reset_share_with_group_lock() -> None
```

##### `reset_subgroup_creation_level` <a name="reset_subgroup_creation_level" id="@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel"></a>

```python
def reset_subgroup_creation_level() -> None
```

##### `reset_two_factor_grace_period` <a name="reset_two_factor_grace_period" id="@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod"></a>

```python
def reset_two_factor_grace_period() -> None
```

##### `reset_visibility_level` <a name="reset_visibility_level" id="@cdktf/provider-gitlab.group.Group.resetVisibilityLevel"></a>

```python
def reset_visibility_level() -> None
```

##### `reset_wiki_access_level` <a name="reset_wiki_access_level" id="@cdktf/provider-gitlab.group.Group.resetWikiAccessLevel"></a>

```python
def reset_wiki_access_level() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.group.Group.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.Group.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.group.Group.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.Group.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.group.Group.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.Group.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarUrl">avatar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullPath">full_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.runnersToken">runners_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput">auto_devops_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHashInput">avatar_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarInput">avatar_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput">default_branch_protection_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsDisabledInput">emails_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput">extra_shared_runners_minutes_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput">ip_restriction_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput">lfs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLockInput">membership_lock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput">mentions_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentIdInput">parent_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput">prevent_forking_outside_group_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput">project_creation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput">request_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput">require_two_factor_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput">shared_runners_minutes_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput">share_with_group_lock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput">subgroup_creation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput">two_factor_grace_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput">visibility_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput">wiki_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatar">avatar</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHash">avatar_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection">default_branch_protection</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsDisabled">emails_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit">extra_shared_runners_minutes_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges">ip_restriction_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabled">lfs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLock">membership_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabled">mentions_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentId">parent_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup">prevent_forking_outside_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevel">project_creation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled">request_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication">require_two_factor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit">shared_runners_minutes_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock">share_with_group_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel">subgroup_creation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod">two_factor_grace_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevel">visibility_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevel">wiki_access_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.group.Group.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.group.Group.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.group.Group.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.group.Group.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.Group.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.Group.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.group.Group.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.group.Group.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.Group.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.Group.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `avatar_url`<sup>Required</sup> <a name="avatar_url" id="@cdktf/provider-gitlab.group.Group.property.avatarUrl"></a>

```python
avatar_url: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-gitlab.group.Group.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `full_path`<sup>Required</sup> <a name="full_path" id="@cdktf/provider-gitlab.group.Group.property.fullPath"></a>

```python
full_path: str
```

- *Type:* str

---

##### `runners_token`<sup>Required</sup> <a name="runners_token" id="@cdktf/provider-gitlab.group.Group.property.runnersToken"></a>

```python
runners_token: str
```

- *Type:* str

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-gitlab.group.Group.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `auto_devops_enabled_input`<sup>Optional</sup> <a name="auto_devops_enabled_input" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput"></a>

```python
auto_devops_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `avatar_hash_input`<sup>Optional</sup> <a name="avatar_hash_input" id="@cdktf/provider-gitlab.group.Group.property.avatarHashInput"></a>

```python
avatar_hash_input: str
```

- *Type:* str

---

##### `avatar_input`<sup>Optional</sup> <a name="avatar_input" id="@cdktf/provider-gitlab.group.Group.property.avatarInput"></a>

```python
avatar_input: str
```

- *Type:* str

---

##### `default_branch_protection_input`<sup>Optional</sup> <a name="default_branch_protection_input" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput"></a>

```python
default_branch_protection_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.group.Group.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `emails_disabled_input`<sup>Optional</sup> <a name="emails_disabled_input" id="@cdktf/provider-gitlab.group.Group.property.emailsDisabledInput"></a>

```python
emails_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extra_shared_runners_minutes_limit_input`<sup>Optional</sup> <a name="extra_shared_runners_minutes_limit_input" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput"></a>

```python
extra_shared_runners_minutes_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.group.Group.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_restriction_ranges_input`<sup>Optional</sup> <a name="ip_restriction_ranges_input" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput"></a>

```python
ip_restriction_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lfs_enabled_input`<sup>Optional</sup> <a name="lfs_enabled_input" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput"></a>

```python
lfs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `membership_lock_input`<sup>Optional</sup> <a name="membership_lock_input" id="@cdktf/provider-gitlab.group.Group.property.membershipLockInput"></a>

```python
membership_lock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mentions_disabled_input`<sup>Optional</sup> <a name="mentions_disabled_input" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput"></a>

```python
mentions_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.group.Group.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktf/provider-gitlab.group.Group.property.parentIdInput"></a>

```python
parent_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-gitlab.group.Group.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `prevent_forking_outside_group_input`<sup>Optional</sup> <a name="prevent_forking_outside_group_input" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput"></a>

```python
prevent_forking_outside_group_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_creation_level_input`<sup>Optional</sup> <a name="project_creation_level_input" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput"></a>

```python
project_creation_level_input: str
```

- *Type:* str

---

##### `request_access_enabled_input`<sup>Optional</sup> <a name="request_access_enabled_input" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput"></a>

```python
request_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_two_factor_authentication_input`<sup>Optional</sup> <a name="require_two_factor_authentication_input" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput"></a>

```python
require_two_factor_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_runners_minutes_limit_input`<sup>Optional</sup> <a name="shared_runners_minutes_limit_input" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput"></a>

```python
shared_runners_minutes_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_with_group_lock_input`<sup>Optional</sup> <a name="share_with_group_lock_input" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput"></a>

```python
share_with_group_lock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subgroup_creation_level_input`<sup>Optional</sup> <a name="subgroup_creation_level_input" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput"></a>

```python
subgroup_creation_level_input: str
```

- *Type:* str

---

##### `two_factor_grace_period_input`<sup>Optional</sup> <a name="two_factor_grace_period_input" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput"></a>

```python
two_factor_grace_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `visibility_level_input`<sup>Optional</sup> <a name="visibility_level_input" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput"></a>

```python
visibility_level_input: str
```

- *Type:* str

---

##### `wiki_access_level_input`<sup>Optional</sup> <a name="wiki_access_level_input" id="@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput"></a>

```python
wiki_access_level_input: str
```

- *Type:* str

---

##### `auto_devops_enabled`<sup>Required</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled"></a>

```python
auto_devops_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `avatar`<sup>Required</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.Group.property.avatar"></a>

```python
avatar: str
```

- *Type:* str

---

##### `avatar_hash`<sup>Required</sup> <a name="avatar_hash" id="@cdktf/provider-gitlab.group.Group.property.avatarHash"></a>

```python
avatar_hash: str
```

- *Type:* str

---

##### `default_branch_protection`<sup>Required</sup> <a name="default_branch_protection" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection"></a>

```python
default_branch_protection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.group.Group.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `emails_disabled`<sup>Required</sup> <a name="emails_disabled" id="@cdktf/provider-gitlab.group.Group.property.emailsDisabled"></a>

```python
emails_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extra_shared_runners_minutes_limit`<sup>Required</sup> <a name="extra_shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit"></a>

```python
extra_shared_runners_minutes_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_restriction_ranges`<sup>Required</sup> <a name="ip_restriction_ranges" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges"></a>

```python
ip_restriction_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lfs_enabled`<sup>Required</sup> <a name="lfs_enabled" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabled"></a>

```python
lfs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `membership_lock`<sup>Required</sup> <a name="membership_lock" id="@cdktf/provider-gitlab.group.Group.property.membershipLock"></a>

```python
membership_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mentions_disabled`<sup>Required</sup> <a name="mentions_disabled" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabled"></a>

```python
mentions_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.Group.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-gitlab.group.Group.property.parentId"></a>

```python
parent_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `prevent_forking_outside_group`<sup>Required</sup> <a name="prevent_forking_outside_group" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup"></a>

```python
prevent_forking_outside_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_creation_level`<sup>Required</sup> <a name="project_creation_level" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevel"></a>

```python
project_creation_level: str
```

- *Type:* str

---

##### `request_access_enabled`<sup>Required</sup> <a name="request_access_enabled" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled"></a>

```python
request_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_two_factor_authentication`<sup>Required</sup> <a name="require_two_factor_authentication" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication"></a>

```python
require_two_factor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_runners_minutes_limit`<sup>Required</sup> <a name="shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit"></a>

```python
shared_runners_minutes_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_with_group_lock`<sup>Required</sup> <a name="share_with_group_lock" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock"></a>

```python
share_with_group_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subgroup_creation_level`<sup>Required</sup> <a name="subgroup_creation_level" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel"></a>

```python
subgroup_creation_level: str
```

- *Type:* str

---

##### `two_factor_grace_period`<sup>Required</sup> <a name="two_factor_grace_period" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod"></a>

```python
two_factor_grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `visibility_level`<sup>Required</sup> <a name="visibility_level" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevel"></a>

```python
visibility_level: str
```

- *Type:* str

---

##### `wiki_access_level`<sup>Required</sup> <a name="wiki_access_level" id="@cdktf/provider-gitlab.group.Group.property.wikiAccessLevel"></a>

```python
wiki_access_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.group.Group.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-gitlab.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.GroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  path: str,
  auto_devops_enabled: typing.Union[bool, IResolvable] = None,
  avatar: str = None,
  avatar_hash: str = None,
  default_branch_protection: typing.Union[int, float] = None,
  description: str = None,
  emails_disabled: typing.Union[bool, IResolvable] = None,
  extra_shared_runners_minutes_limit: typing.Union[int, float] = None,
  id: str = None,
  ip_restriction_ranges: typing.List[str] = None,
  lfs_enabled: typing.Union[bool, IResolvable] = None,
  membership_lock: typing.Union[bool, IResolvable] = None,
  mentions_disabled: typing.Union[bool, IResolvable] = None,
  parent_id: typing.Union[int, float] = None,
  prevent_forking_outside_group: typing.Union[bool, IResolvable] = None,
  project_creation_level: str = None,
  request_access_enabled: typing.Union[bool, IResolvable] = None,
  require_two_factor_authentication: typing.Union[bool, IResolvable] = None,
  shared_runners_minutes_limit: typing.Union[int, float] = None,
  share_with_group_lock: typing.Union[bool, IResolvable] = None,
  subgroup_creation_level: str = None,
  two_factor_grace_period: typing.Union[int, float] = None,
  visibility_level: str = None,
  wiki_access_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.name">name</a></code> | <code>str</code> | The name of this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.path">path</a></code> | <code>str</code> | The path of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. Default to Auto DevOps pipeline for all projects within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatar">avatar</a></code> | <code>str</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash">avatar_hash</a></code> | <code>str</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection">default_branch_protection</a></code> | <code>typing.Union[int, float]</code> | Defaults to 2. See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.description">description</a></code> | <code>str</code> | The description of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.emailsDisabled">emails_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. Disable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit">extra_shared_runners_minutes_limit</a></code> | <code>typing.Union[int, float]</code> | Can be set by administrators only. Additional CI/CD minutes for this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges">ip_restriction_ranges</a></code> | <code>typing.List[str]</code> | A list of IP addresses or subnet masks to restrict group access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled">lfs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to true. Enable/disable Large File Storage (LFS) for the projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock">membership_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Users cannot be added to projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled">mentions_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. Disable the capability of a group from getting mentioned. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.parentId">parent_id</a></code> | <code>typing.Union[int, float]</code> | Id of the parent group (creates a nested group). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup">prevent_forking_outside_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. When enabled, users can not fork projects from this group to external namespaces. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel">project_creation_level</a></code> | <code>str</code> | Defaults to maintainer. Determine if developers can create projects in the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled">request_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication">require_two_factor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. Require all users in this group to setup Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit">shared_runners_minutes_limit</a></code> | <code>typing.Union[int, float]</code> | Can be set by administrators only. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock">share_with_group_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. Prevent sharing a project with another group within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel">subgroup_creation_level</a></code> | <code>str</code> | Defaults to owner. Allowed to create subgroups. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod">two_factor_grace_period</a></code> | <code>typing.Union[int, float]</code> | Defaults to 48. Time before Two-factor authentication is enforced (in hours). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel">visibility_level</a></code> | <code>str</code> | The group's visibility. Can be `private`, `internal`, or `public`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel">wiki_access_level</a></code> | <code>str</code> | The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.GroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.GroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.group.GroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.GroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.GroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.GroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#name Group#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.GroupConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#path Group#path}

---

##### `auto_devops_enabled`<sup>Optional</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled"></a>

```python
auto_devops_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. Default to Auto DevOps pipeline for all projects within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#auto_devops_enabled Group#auto_devops_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatar"></a>

```python
avatar: str
```

- *Type:* str

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#avatar Group#avatar}

---

##### `avatar_hash`<sup>Optional</sup> <a name="avatar_hash" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash"></a>

```python
avatar_hash: str
```

- *Type:* str

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#avatar_hash Group#avatar_hash}

---

##### `default_branch_protection`<sup>Optional</sup> <a name="default_branch_protection" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection"></a>

```python
default_branch_protection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defaults to 2. See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#default_branch_protection Group#default_branch_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.group.GroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#description Group#description}

---

##### `emails_disabled`<sup>Optional</sup> <a name="emails_disabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.emailsDisabled"></a>

```python
emails_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. Disable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#emails_disabled Group#emails_disabled}

---

##### `extra_shared_runners_minutes_limit`<sup>Optional</sup> <a name="extra_shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit"></a>

```python
extra_shared_runners_minutes_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Can be set by administrators only. Additional CI/CD minutes for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.group.GroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_restriction_ranges`<sup>Optional</sup> <a name="ip_restriction_ranges" id="@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges"></a>

```python
ip_restriction_ranges: typing.List[str]
```

- *Type:* typing.List[str]

A list of IP addresses or subnet masks to restrict group access.

Will be concatenated together into a comma separated string. Only allowed on top level groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#ip_restriction_ranges Group#ip_restriction_ranges}

---

##### `lfs_enabled`<sup>Optional</sup> <a name="lfs_enabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled"></a>

```python
lfs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to true. Enable/disable Large File Storage (LFS) for the projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#lfs_enabled Group#lfs_enabled}

---

##### `membership_lock`<sup>Optional</sup> <a name="membership_lock" id="@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock"></a>

```python
membership_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users cannot be added to projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#membership_lock Group#membership_lock}

---

##### `mentions_disabled`<sup>Optional</sup> <a name="mentions_disabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled"></a>

```python
mentions_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. Disable the capability of a group from getting mentioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#mentions_disabled Group#mentions_disabled}

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktf/provider-gitlab.group.GroupConfig.property.parentId"></a>

```python
parent_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Id of the parent group (creates a nested group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#parent_id Group#parent_id}

---

##### `prevent_forking_outside_group`<sup>Optional</sup> <a name="prevent_forking_outside_group" id="@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup"></a>

```python
prevent_forking_outside_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. When enabled, users can not fork projects from this group to external namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#prevent_forking_outside_group Group#prevent_forking_outside_group}

---

##### `project_creation_level`<sup>Optional</sup> <a name="project_creation_level" id="@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel"></a>

```python
project_creation_level: str
```

- *Type:* str

Defaults to maintainer. Determine if developers can create projects in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#project_creation_level Group#project_creation_level}

---

##### `request_access_enabled`<sup>Optional</sup> <a name="request_access_enabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled"></a>

```python
request_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#request_access_enabled Group#request_access_enabled}

---

##### `require_two_factor_authentication`<sup>Optional</sup> <a name="require_two_factor_authentication" id="@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication"></a>

```python
require_two_factor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. Require all users in this group to setup Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#require_two_factor_authentication Group#require_two_factor_authentication}

---

##### `shared_runners_minutes_limit`<sup>Optional</sup> <a name="shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit"></a>

```python
shared_runners_minutes_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Can be set by administrators only.

Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}

---

##### `share_with_group_lock`<sup>Optional</sup> <a name="share_with_group_lock" id="@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock"></a>

```python
share_with_group_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. Prevent sharing a project with another group within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#share_with_group_lock Group#share_with_group_lock}

---

##### `subgroup_creation_level`<sup>Optional</sup> <a name="subgroup_creation_level" id="@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel"></a>

```python
subgroup_creation_level: str
```

- *Type:* str

Defaults to owner. Allowed to create subgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#subgroup_creation_level Group#subgroup_creation_level}

---

##### `two_factor_grace_period`<sup>Optional</sup> <a name="two_factor_grace_period" id="@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod"></a>

```python
two_factor_grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defaults to 48. Time before Two-factor authentication is enforced (in hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#two_factor_grace_period Group#two_factor_grace_period}

---

##### `visibility_level`<sup>Optional</sup> <a name="visibility_level" id="@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel"></a>

```python
visibility_level: str
```

- *Type:* str

The group's visibility. Can be `private`, `internal`, or `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#visibility_level Group#visibility_level}

---

##### `wiki_access_level`<sup>Optional</sup> <a name="wiki_access_level" id="@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel"></a>

```python
wiki_access_level: str
```

- *Type:* str

The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/group#wiki_access_level Group#wiki_access_level}

---



