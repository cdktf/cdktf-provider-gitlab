# `projectIssueBoard` Submodule <a name="`projectIssueBoard` Submodule" id="@cdktf/provider-gitlab.projectIssueBoard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIssueBoard <a name="ProjectIssueBoard" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board gitlab_project_issue_board}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue_board.ProjectIssueBoard;

ProjectIssueBoard.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .project(java.lang.String)
//  .assigneeId(java.lang.Number)
//  .id(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .lists(IResolvable|java.util.List<ProjectIssueBoardLists>)
//  .milestoneId(java.lang.Number)
//  .weight(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the board. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID or full path of the project maintained by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.assigneeId">assigneeId</a></code> | <code>java.lang.Number</code> | The assignee the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#id ProjectIssueBoard#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | The list of label names which the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.lists">lists</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>></code> | lists block. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.milestoneId">milestoneId</a></code> | <code>java.lang.Number</code> | The milestone the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.weight">weight</a></code> | <code>java.lang.Number</code> | The weight range from 0 to 9, to which the board should be scoped to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the board.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#name ProjectIssueBoard#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID or full path of the project maintained by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#project ProjectIssueBoard#project}

---

##### `assigneeId`<sup>Optional</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.assigneeId"></a>

- *Type:* java.lang.Number

The assignee the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#id ProjectIssueBoard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.labels"></a>

- *Type:* java.util.List<java.lang.String>

The list of label names which the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#labels ProjectIssueBoard#labels}

---

##### `lists`<sup>Optional</sup> <a name="lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.lists"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>>

lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#lists ProjectIssueBoard#lists}

---

##### `milestoneId`<sup>Optional</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.milestoneId"></a>

- *Type:* java.lang.Number

The milestone the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.weight"></a>

- *Type:* java.lang.Number

The weight range from 0 to 9, to which the board should be scoped to.

Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#weight ProjectIssueBoard#weight}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists">putLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetAssigneeId">resetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLists">resetLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetMilestoneId">resetMilestoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLists` <a name="putLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists"></a>

```java
public void putLists(IResolvable|java.util.List<ProjectIssueBoardLists> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>>

---

##### `resetAssigneeId` <a name="resetAssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetAssigneeId"></a>

```java
public void resetAssigneeId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLists` <a name="resetLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLists"></a>

```java
public void resetLists()
```

##### `resetMilestoneId` <a name="resetMilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetMilestoneId"></a>

```java
public void resetMilestoneId()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetWeight"></a>

```java
public void resetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIssueBoard resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue_board.ProjectIssueBoard;

ProjectIssueBoard.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue_board.ProjectIssueBoard;

ProjectIssueBoard.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue_board.ProjectIssueBoard;

ProjectIssueBoard.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue_board.ProjectIssueBoard;

ProjectIssueBoard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectIssueBoard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectIssueBoard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectIssueBoard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectIssueBoard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIssueBoard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lists">lists</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList">ProjectIssueBoardListsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeIdInput">assigneeIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.listsInput">listsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneIdInput">milestoneIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeId">assigneeId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneId">milestoneId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lists`<sup>Required</sup> <a name="lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lists"></a>

```java
public ProjectIssueBoardListsList getLists();
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList">ProjectIssueBoardListsList</a>

---

##### `assigneeIdInput`<sup>Optional</sup> <a name="assigneeIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeIdInput"></a>

```java
public java.lang.Number getAssigneeIdInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listsInput`<sup>Optional</sup> <a name="listsInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.listsInput"></a>

```java
public IResolvable|java.util.List<ProjectIssueBoardLists> getListsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>>

---

##### `milestoneIdInput`<sup>Optional</sup> <a name="milestoneIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneIdInput"></a>

```java
public java.lang.Number getMilestoneIdInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `assigneeId`<sup>Required</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeId"></a>

```java
public java.lang.Number getAssigneeId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `milestoneId`<sup>Required</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneId"></a>

```java
public java.lang.Number getMilestoneId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIssueBoardConfig <a name="ProjectIssueBoardConfig" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue_board.ProjectIssueBoardConfig;

ProjectIssueBoardConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .project(java.lang.String)
//  .assigneeId(java.lang.Number)
//  .id(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .lists(IResolvable|java.util.List<ProjectIssueBoardLists>)
//  .milestoneId(java.lang.Number)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the board. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID or full path of the project maintained by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.assigneeId">assigneeId</a></code> | <code>java.lang.Number</code> | The assignee the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#id ProjectIssueBoard#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | The list of label names which the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lists">lists</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>></code> | lists block. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.milestoneId">milestoneId</a></code> | <code>java.lang.Number</code> | The milestone the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.weight">weight</a></code> | <code>java.lang.Number</code> | The weight range from 0 to 9, to which the board should be scoped to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the board.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#name ProjectIssueBoard#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID or full path of the project maintained by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#project ProjectIssueBoard#project}

---

##### `assigneeId`<sup>Optional</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.assigneeId"></a>

```java
public java.lang.Number getAssigneeId();
```

- *Type:* java.lang.Number

The assignee the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#id ProjectIssueBoard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

The list of label names which the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#labels ProjectIssueBoard#labels}

---

##### `lists`<sup>Optional</sup> <a name="lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lists"></a>

```java
public IResolvable|java.util.List<ProjectIssueBoardLists> getLists();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>>

lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#lists ProjectIssueBoard#lists}

---

##### `milestoneId`<sup>Optional</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.milestoneId"></a>

```java
public java.lang.Number getMilestoneId();
```

- *Type:* java.lang.Number

The milestone the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

The weight range from 0 to 9, to which the board should be scoped to.

Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#weight ProjectIssueBoard#weight}

---

### ProjectIssueBoardLists <a name="ProjectIssueBoardLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue_board.ProjectIssueBoardLists;

ProjectIssueBoardLists.builder()
//  .assigneeId(java.lang.Number)
//  .iterationId(java.lang.Number)
//  .labelId(java.lang.Number)
//  .milestoneId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.assigneeId">assigneeId</a></code> | <code>java.lang.Number</code> | The ID of the assignee the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.iterationId">iterationId</a></code> | <code>java.lang.Number</code> | The ID of the iteration the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.labelId">labelId</a></code> | <code>java.lang.Number</code> | The ID of the label the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.milestoneId">milestoneId</a></code> | <code>java.lang.Number</code> | The ID of the milestone the list should be scoped to. Requires a GitLab EE license. |

---

##### `assigneeId`<sup>Optional</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.assigneeId"></a>

```java
public java.lang.Number getAssigneeId();
```

- *Type:* java.lang.Number

The ID of the assignee the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}

---

##### `iterationId`<sup>Optional</sup> <a name="iterationId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.iterationId"></a>

```java
public java.lang.Number getIterationId();
```

- *Type:* java.lang.Number

The ID of the iteration the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#iteration_id ProjectIssueBoard#iteration_id}

---

##### `labelId`<sup>Optional</sup> <a name="labelId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.labelId"></a>

```java
public java.lang.Number getLabelId();
```

- *Type:* java.lang.Number

The ID of the label the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#label_id ProjectIssueBoard#label_id}

---

##### `milestoneId`<sup>Optional</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.milestoneId"></a>

```java
public java.lang.Number getMilestoneId();
```

- *Type:* java.lang.Number

The ID of the milestone the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectIssueBoardListsList <a name="ProjectIssueBoardListsList" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue_board.ProjectIssueBoardListsList;

new ProjectIssueBoardListsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get"></a>

```java
public ProjectIssueBoardListsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ProjectIssueBoardLists> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>>

---


### ProjectIssueBoardListsOutputReference <a name="ProjectIssueBoardListsOutputReference" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_issue_board.ProjectIssueBoardListsOutputReference;

new ProjectIssueBoardListsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetAssigneeId">resetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetIterationId">resetIterationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetLabelId">resetLabelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetMilestoneId">resetMilestoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssigneeId` <a name="resetAssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetAssigneeId"></a>

```java
public void resetAssigneeId()
```

##### `resetIterationId` <a name="resetIterationId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetIterationId"></a>

```java
public void resetIterationId()
```

##### `resetLabelId` <a name="resetLabelId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetLabelId"></a>

```java
public void resetLabelId()
```

##### `resetMilestoneId` <a name="resetMilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetMilestoneId"></a>

```java
public void resetMilestoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeIdInput">assigneeIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationIdInput">iterationIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelIdInput">labelIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneIdInput">milestoneIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeId">assigneeId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationId">iterationId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelId">labelId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneId">milestoneId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `assigneeIdInput`<sup>Optional</sup> <a name="assigneeIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeIdInput"></a>

```java
public java.lang.Number getAssigneeIdInput();
```

- *Type:* java.lang.Number

---

##### `iterationIdInput`<sup>Optional</sup> <a name="iterationIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationIdInput"></a>

```java
public java.lang.Number getIterationIdInput();
```

- *Type:* java.lang.Number

---

##### `labelIdInput`<sup>Optional</sup> <a name="labelIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelIdInput"></a>

```java
public java.lang.Number getLabelIdInput();
```

- *Type:* java.lang.Number

---

##### `milestoneIdInput`<sup>Optional</sup> <a name="milestoneIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneIdInput"></a>

```java
public java.lang.Number getMilestoneIdInput();
```

- *Type:* java.lang.Number

---

##### `assigneeId`<sup>Required</sup> <a name="assigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeId"></a>

```java
public java.lang.Number getAssigneeId();
```

- *Type:* java.lang.Number

---

##### `iterationId`<sup>Required</sup> <a name="iterationId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationId"></a>

```java
public java.lang.Number getIterationId();
```

- *Type:* java.lang.Number

---

##### `labelId`<sup>Required</sup> <a name="labelId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelId"></a>

```java
public java.lang.Number getLabelId();
```

- *Type:* java.lang.Number

---

##### `milestoneId`<sup>Required</sup> <a name="milestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneId"></a>

```java
public java.lang.Number getMilestoneId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.internalValue"></a>

```java
public IResolvable|ProjectIssueBoardLists getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists">ProjectIssueBoardLists</a>

---



