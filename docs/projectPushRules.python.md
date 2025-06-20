# `projectPushRules` Submodule <a name="`projectPushRules` Submodule" id="@cdktf/provider-gitlab.projectPushRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectPushRulesA <a name="ProjectPushRulesA" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules gitlab_project_push_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_push_rules

projectPushRules.ProjectPushRulesA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  author_email_regex: str = None,
  branch_name_regex: str = None,
  commit_committer_check: typing.Union[bool, IResolvable] = None,
  commit_committer_name_check: typing.Union[bool, IResolvable] = None,
  commit_message_negative_regex: str = None,
  commit_message_regex: str = None,
  deny_delete_tag: typing.Union[bool, IResolvable] = None,
  file_name_regex: str = None,
  max_file_size: typing.Union[int, float] = None,
  member_check: typing.Union[bool, IResolvable] = None,
  prevent_secrets: typing.Union[bool, IResolvable] = None,
  reject_non_dco_commits: typing.Union[bool, IResolvable] = None,
  reject_unsigned_commits: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.authorEmailRegex">author_email_regex</a></code> | <code>str</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.branchNameRegex">branch_name_regex</a></code> | <code>str</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitCommitterCheck">commit_committer_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Users can only push commits to this repository that were committed with one of their own verified emails. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitCommitterNameCheck">commit_committer_name_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitMessageNegativeRegex">commit_message_negative_regex</a></code> | <code>str</code> | No commit message is allowed to match this regex, e.g. `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitMessageRegex">commit_message_regex</a></code> | <code>str</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.denyDeleteTag">deny_delete_tag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.fileNameRegex">file_name_regex</a></code> | <code>str</code> | All committed filenames must not match this regex, e.g. `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | Maximum file size (MB). |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.memberCheck">member_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Restrict commits by author (email) to existing GitLab users. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.preventSecrets">prevent_secrets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.rejectNonDcoCommits">reject_non_dco_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.rejectUnsignedCommits">reject_unsigned_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Reject commit when it’s not signed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.project"></a>

- *Type:* str

The ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#project ProjectPushRulesA#project}

---

##### `author_email_regex`<sup>Optional</sup> <a name="author_email_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.authorEmailRegex"></a>

- *Type:* str

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#author_email_regex ProjectPushRulesA#author_email_regex}

---

##### `branch_name_regex`<sup>Optional</sup> <a name="branch_name_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.branchNameRegex"></a>

- *Type:* str

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#branch_name_regex ProjectPushRulesA#branch_name_regex}

---

##### `commit_committer_check`<sup>Optional</sup> <a name="commit_committer_check" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitCommitterCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users can only push commits to this repository that were committed with one of their own verified emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#commit_committer_check ProjectPushRulesA#commit_committer_check}

---

##### `commit_committer_name_check`<sup>Optional</sup> <a name="commit_committer_name_check" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitCommitterNameCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#commit_committer_name_check ProjectPushRulesA#commit_committer_name_check}

---

##### `commit_message_negative_regex`<sup>Optional</sup> <a name="commit_message_negative_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitMessageNegativeRegex"></a>

- *Type:* str

No commit message is allowed to match this regex, e.g. `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#commit_message_negative_regex ProjectPushRulesA#commit_message_negative_regex}

---

##### `commit_message_regex`<sup>Optional</sup> <a name="commit_message_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.commitMessageRegex"></a>

- *Type:* str

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#commit_message_regex ProjectPushRulesA#commit_message_regex}

---

##### `deny_delete_tag`<sup>Optional</sup> <a name="deny_delete_tag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.denyDeleteTag"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#deny_delete_tag ProjectPushRulesA#deny_delete_tag}

---

##### `file_name_regex`<sup>Optional</sup> <a name="file_name_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.fileNameRegex"></a>

- *Type:* str

All committed filenames must not match this regex, e.g. `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#file_name_regex ProjectPushRulesA#file_name_regex}

---

##### `max_file_size`<sup>Optional</sup> <a name="max_file_size" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.maxFileSize"></a>

- *Type:* typing.Union[int, float]

Maximum file size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#max_file_size ProjectPushRulesA#max_file_size}

---

##### `member_check`<sup>Optional</sup> <a name="member_check" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.memberCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Restrict commits by author (email) to existing GitLab users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#member_check ProjectPushRulesA#member_check}

---

##### `prevent_secrets`<sup>Optional</sup> <a name="prevent_secrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.preventSecrets"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#prevent_secrets ProjectPushRulesA#prevent_secrets}

---

##### `reject_non_dco_commits`<sup>Optional</sup> <a name="reject_non_dco_commits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.rejectNonDcoCommits"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#reject_non_dco_commits ProjectPushRulesA#reject_non_dco_commits}

---

##### `reject_unsigned_commits`<sup>Optional</sup> <a name="reject_unsigned_commits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.rejectUnsignedCommits"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Reject commit when it’s not signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#reject_unsigned_commits ProjectPushRulesA#reject_unsigned_commits}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetAuthorEmailRegex">reset_author_email_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetBranchNameRegex">reset_branch_name_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterCheck">reset_commit_committer_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterNameCheck">reset_commit_committer_name_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageNegativeRegex">reset_commit_message_negative_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageRegex">reset_commit_message_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetDenyDeleteTag">reset_deny_delete_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetFileNameRegex">reset_file_name_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMaxFileSize">reset_max_file_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMemberCheck">reset_member_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetPreventSecrets">reset_prevent_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectNonDcoCommits">reset_reject_non_dco_commits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectUnsignedCommits">reset_reject_unsigned_commits</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_author_email_regex` <a name="reset_author_email_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetAuthorEmailRegex"></a>

```python
def reset_author_email_regex() -> None
```

##### `reset_branch_name_regex` <a name="reset_branch_name_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetBranchNameRegex"></a>

```python
def reset_branch_name_regex() -> None
```

##### `reset_commit_committer_check` <a name="reset_commit_committer_check" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterCheck"></a>

```python
def reset_commit_committer_check() -> None
```

##### `reset_commit_committer_name_check` <a name="reset_commit_committer_name_check" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterNameCheck"></a>

```python
def reset_commit_committer_name_check() -> None
```

##### `reset_commit_message_negative_regex` <a name="reset_commit_message_negative_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageNegativeRegex"></a>

```python
def reset_commit_message_negative_regex() -> None
```

##### `reset_commit_message_regex` <a name="reset_commit_message_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageRegex"></a>

```python
def reset_commit_message_regex() -> None
```

##### `reset_deny_delete_tag` <a name="reset_deny_delete_tag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetDenyDeleteTag"></a>

```python
def reset_deny_delete_tag() -> None
```

##### `reset_file_name_regex` <a name="reset_file_name_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetFileNameRegex"></a>

```python
def reset_file_name_regex() -> None
```

##### `reset_max_file_size` <a name="reset_max_file_size" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMaxFileSize"></a>

```python
def reset_max_file_size() -> None
```

##### `reset_member_check` <a name="reset_member_check" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMemberCheck"></a>

```python
def reset_member_check() -> None
```

##### `reset_prevent_secrets` <a name="reset_prevent_secrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetPreventSecrets"></a>

```python
def reset_prevent_secrets() -> None
```

##### `reset_reject_non_dco_commits` <a name="reset_reject_non_dco_commits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectNonDcoCommits"></a>

```python
def reset_reject_non_dco_commits() -> None
```

##### `reset_reject_unsigned_commits` <a name="reset_reject_unsigned_commits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectUnsignedCommits"></a>

```python
def reset_reject_unsigned_commits() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProjectPushRulesA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import project_push_rules

projectPushRules.ProjectPushRulesA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import project_push_rules

projectPushRules.ProjectPushRulesA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import project_push_rules

projectPushRules.ProjectPushRulesA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import project_push_rules

projectPushRules.ProjectPushRulesA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProjectPushRulesA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProjectPushRulesA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProjectPushRulesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectPushRulesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegexInput">author_email_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegexInput">branch_name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheckInput">commit_committer_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheckInput">commit_committer_name_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegexInput">commit_message_negative_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegexInput">commit_message_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTagInput">deny_delete_tag_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegexInput">file_name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSizeInput">max_file_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheckInput">member_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecretsInput">prevent_secrets_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommitsInput">reject_non_dco_commits_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommitsInput">reject_unsigned_commits_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegex">author_email_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegex">branch_name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheck">commit_committer_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheck">commit_committer_name_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegex">commit_message_negative_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegex">commit_message_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTag">deny_delete_tag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegex">file_name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheck">member_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecrets">prevent_secrets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommits">reject_non_dco_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommits">reject_unsigned_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `author_email_regex_input`<sup>Optional</sup> <a name="author_email_regex_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegexInput"></a>

```python
author_email_regex_input: str
```

- *Type:* str

---

##### `branch_name_regex_input`<sup>Optional</sup> <a name="branch_name_regex_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegexInput"></a>

```python
branch_name_regex_input: str
```

- *Type:* str

---

##### `commit_committer_check_input`<sup>Optional</sup> <a name="commit_committer_check_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheckInput"></a>

```python
commit_committer_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_committer_name_check_input`<sup>Optional</sup> <a name="commit_committer_name_check_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheckInput"></a>

```python
commit_committer_name_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_message_negative_regex_input`<sup>Optional</sup> <a name="commit_message_negative_regex_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegexInput"></a>

```python
commit_message_negative_regex_input: str
```

- *Type:* str

---

##### `commit_message_regex_input`<sup>Optional</sup> <a name="commit_message_regex_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegexInput"></a>

```python
commit_message_regex_input: str
```

- *Type:* str

---

##### `deny_delete_tag_input`<sup>Optional</sup> <a name="deny_delete_tag_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTagInput"></a>

```python
deny_delete_tag_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_name_regex_input`<sup>Optional</sup> <a name="file_name_regex_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegexInput"></a>

```python
file_name_regex_input: str
```

- *Type:* str

---

##### `max_file_size_input`<sup>Optional</sup> <a name="max_file_size_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSizeInput"></a>

```python
max_file_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `member_check_input`<sup>Optional</sup> <a name="member_check_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheckInput"></a>

```python
member_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prevent_secrets_input`<sup>Optional</sup> <a name="prevent_secrets_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecretsInput"></a>

```python
prevent_secrets_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `reject_non_dco_commits_input`<sup>Optional</sup> <a name="reject_non_dco_commits_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommitsInput"></a>

```python
reject_non_dco_commits_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reject_unsigned_commits_input`<sup>Optional</sup> <a name="reject_unsigned_commits_input" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommitsInput"></a>

```python
reject_unsigned_commits_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `author_email_regex`<sup>Required</sup> <a name="author_email_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegex"></a>

```python
author_email_regex: str
```

- *Type:* str

---

##### `branch_name_regex`<sup>Required</sup> <a name="branch_name_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegex"></a>

```python
branch_name_regex: str
```

- *Type:* str

---

##### `commit_committer_check`<sup>Required</sup> <a name="commit_committer_check" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheck"></a>

```python
commit_committer_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_committer_name_check`<sup>Required</sup> <a name="commit_committer_name_check" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheck"></a>

```python
commit_committer_name_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_message_negative_regex`<sup>Required</sup> <a name="commit_message_negative_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegex"></a>

```python
commit_message_negative_regex: str
```

- *Type:* str

---

##### `commit_message_regex`<sup>Required</sup> <a name="commit_message_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegex"></a>

```python
commit_message_regex: str
```

- *Type:* str

---

##### `deny_delete_tag`<sup>Required</sup> <a name="deny_delete_tag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTag"></a>

```python
deny_delete_tag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_name_regex`<sup>Required</sup> <a name="file_name_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegex"></a>

```python
file_name_regex: str
```

- *Type:* str

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `member_check`<sup>Required</sup> <a name="member_check" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheck"></a>

```python
member_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prevent_secrets`<sup>Required</sup> <a name="prevent_secrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecrets"></a>

```python
prevent_secrets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `reject_non_dco_commits`<sup>Required</sup> <a name="reject_non_dco_commits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommits"></a>

```python
reject_non_dco_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reject_unsigned_commits`<sup>Required</sup> <a name="reject_unsigned_commits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommits"></a>

```python
reject_unsigned_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectPushRulesAConfig <a name="ProjectPushRulesAConfig" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import project_push_rules

projectPushRules.ProjectPushRulesAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project: str,
  author_email_regex: str = None,
  branch_name_regex: str = None,
  commit_committer_check: typing.Union[bool, IResolvable] = None,
  commit_committer_name_check: typing.Union[bool, IResolvable] = None,
  commit_message_negative_regex: str = None,
  commit_message_regex: str = None,
  deny_delete_tag: typing.Union[bool, IResolvable] = None,
  file_name_regex: str = None,
  max_file_size: typing.Union[int, float] = None,
  member_check: typing.Union[bool, IResolvable] = None,
  prevent_secrets: typing.Union[bool, IResolvable] = None,
  reject_non_dco_commits: typing.Union[bool, IResolvable] = None,
  reject_unsigned_commits: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.project">project</a></code> | <code>str</code> | The ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.authorEmailRegex">author_email_regex</a></code> | <code>str</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.branchNameRegex">branch_name_regex</a></code> | <code>str</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterCheck">commit_committer_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Users can only push commits to this repository that were committed with one of their own verified emails. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterNameCheck">commit_committer_name_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageNegativeRegex">commit_message_negative_regex</a></code> | <code>str</code> | No commit message is allowed to match this regex, e.g. `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageRegex">commit_message_regex</a></code> | <code>str</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.denyDeleteTag">deny_delete_tag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.fileNameRegex">file_name_regex</a></code> | <code>str</code> | All committed filenames must not match this regex, e.g. `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | Maximum file size (MB). |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.memberCheck">member_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Restrict commits by author (email) to existing GitLab users. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.preventSecrets">prevent_secrets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectNonDcoCommits">reject_non_dco_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectUnsignedCommits">reject_unsigned_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Reject commit when it’s not signed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#project ProjectPushRulesA#project}

---

##### `author_email_regex`<sup>Optional</sup> <a name="author_email_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.authorEmailRegex"></a>

```python
author_email_regex: str
```

- *Type:* str

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#author_email_regex ProjectPushRulesA#author_email_regex}

---

##### `branch_name_regex`<sup>Optional</sup> <a name="branch_name_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.branchNameRegex"></a>

```python
branch_name_regex: str
```

- *Type:* str

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#branch_name_regex ProjectPushRulesA#branch_name_regex}

---

##### `commit_committer_check`<sup>Optional</sup> <a name="commit_committer_check" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterCheck"></a>

```python
commit_committer_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users can only push commits to this repository that were committed with one of their own verified emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#commit_committer_check ProjectPushRulesA#commit_committer_check}

---

##### `commit_committer_name_check`<sup>Optional</sup> <a name="commit_committer_name_check" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterNameCheck"></a>

```python
commit_committer_name_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#commit_committer_name_check ProjectPushRulesA#commit_committer_name_check}

---

##### `commit_message_negative_regex`<sup>Optional</sup> <a name="commit_message_negative_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageNegativeRegex"></a>

```python
commit_message_negative_regex: str
```

- *Type:* str

No commit message is allowed to match this regex, e.g. `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#commit_message_negative_regex ProjectPushRulesA#commit_message_negative_regex}

---

##### `commit_message_regex`<sup>Optional</sup> <a name="commit_message_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageRegex"></a>

```python
commit_message_regex: str
```

- *Type:* str

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#commit_message_regex ProjectPushRulesA#commit_message_regex}

---

##### `deny_delete_tag`<sup>Optional</sup> <a name="deny_delete_tag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.denyDeleteTag"></a>

```python
deny_delete_tag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#deny_delete_tag ProjectPushRulesA#deny_delete_tag}

---

##### `file_name_regex`<sup>Optional</sup> <a name="file_name_regex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.fileNameRegex"></a>

```python
file_name_regex: str
```

- *Type:* str

All committed filenames must not match this regex, e.g. `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#file_name_regex ProjectPushRulesA#file_name_regex}

---

##### `max_file_size`<sup>Optional</sup> <a name="max_file_size" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum file size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#max_file_size ProjectPushRulesA#max_file_size}

---

##### `member_check`<sup>Optional</sup> <a name="member_check" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.memberCheck"></a>

```python
member_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Restrict commits by author (email) to existing GitLab users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#member_check ProjectPushRulesA#member_check}

---

##### `prevent_secrets`<sup>Optional</sup> <a name="prevent_secrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.preventSecrets"></a>

```python
prevent_secrets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#prevent_secrets ProjectPushRulesA#prevent_secrets}

---

##### `reject_non_dco_commits`<sup>Optional</sup> <a name="reject_non_dco_commits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectNonDcoCommits"></a>

```python
reject_non_dco_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#reject_non_dco_commits ProjectPushRulesA#reject_non_dco_commits}

---

##### `reject_unsigned_commits`<sup>Optional</sup> <a name="reject_unsigned_commits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectUnsignedCommits"></a>

```python
reject_unsigned_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Reject commit when it’s not signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_push_rules#reject_unsigned_commits ProjectPushRulesA#reject_unsigned_commits}

---



