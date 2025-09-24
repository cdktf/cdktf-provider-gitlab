# `userRunner` Submodule <a name="`userRunner` Submodule" id="@cdktf/provider-gitlab.userRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserRunner <a name="UserRunner" id="@cdktf/provider-gitlab.userRunner.UserRunner"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner gitlab_user_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.user_runner.UserRunner;

UserRunner.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .runnerType(java.lang.String)
//  .accessLevel(java.lang.String)
//  .description(java.lang.String)
//  .groupId(java.lang.Number)
//  .locked(java.lang.Boolean)
//  .locked(IResolvable)
//  .maintenanceNote(java.lang.String)
//  .maximumTimeout(java.lang.Number)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .projectId(java.lang.Number)
//  .tagList(java.util.List<java.lang.String>)
//  .untagged(java.lang.Boolean)
//  .untagged(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.runnerType">runnerType</a></code> | <code>java.lang.String</code> | The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | The access level of the runner. Valid values are: `not_protected`, `ref_protected`. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the runner. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.Number</code> | The ID of the group that the runner is created in. Required if runner_type is group_type. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.locked">locked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the runner should be locked for the current project. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.maintenanceNote">maintenanceNote</a></code> | <code>java.lang.String</code> | Free-form maintenance notes for the runner (1024 characters). |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.maximumTimeout">maximumTimeout</a></code> | <code>java.lang.Number</code> | Maximum timeout that limits the amount of time (in seconds) that runners can run jobs. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the runner should ignore new jobs. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.Number</code> | The ID of the project that the runner is created in. Required if runner_type is project_type. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.tagList">tagList</a></code> | <code>java.util.List<java.lang.String></code> | A list of runner tags. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.untagged">untagged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the runner should handle untagged jobs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `runnerType`<sup>Required</sup> <a name="runnerType" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.runnerType"></a>

- *Type:* java.lang.String

The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#runner_type UserRunner#runner_type}

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

The access level of the runner. Valid values are: `not_protected`, `ref_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#access_level UserRunner#access_level}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#description UserRunner#description}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.groupId"></a>

- *Type:* java.lang.Number

The ID of the group that the runner is created in. Required if runner_type is group_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#group_id UserRunner#group_id}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.locked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the runner should be locked for the current project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#locked UserRunner#locked}

---

##### `maintenanceNote`<sup>Optional</sup> <a name="maintenanceNote" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.maintenanceNote"></a>

- *Type:* java.lang.String

Free-form maintenance notes for the runner (1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#maintenance_note UserRunner#maintenance_note}

---

##### `maximumTimeout`<sup>Optional</sup> <a name="maximumTimeout" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.maximumTimeout"></a>

- *Type:* java.lang.Number

Maximum timeout that limits the amount of time (in seconds) that runners can run jobs.

Must be at least 600 (10 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#maximum_timeout UserRunner#maximum_timeout}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.paused"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the runner should ignore new jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#paused UserRunner#paused}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.projectId"></a>

- *Type:* java.lang.Number

The ID of the project that the runner is created in. Required if runner_type is project_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#project_id UserRunner#project_id}

---

##### `tagList`<sup>Optional</sup> <a name="tagList" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.tagList"></a>

- *Type:* java.util.List<java.lang.String>

A list of runner tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#tag_list UserRunner#tag_list}

---

##### `untagged`<sup>Optional</sup> <a name="untagged" id="@cdktf/provider-gitlab.userRunner.UserRunner.Initializer.parameter.untagged"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the runner should handle untagged jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#untagged UserRunner#untagged}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetLocked">resetLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetMaintenanceNote">resetMaintenanceNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetMaximumTimeout">resetMaximumTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetTagList">resetTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.resetUntagged">resetUntagged</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.userRunner.UserRunner.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.userRunner.UserRunner.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.userRunner.UserRunner.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.userRunner.UserRunner.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.userRunner.UserRunner.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.userRunner.UserRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.userRunner.UserRunner.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.userRunner.UserRunner.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.userRunner.UserRunner.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.userRunner.UserRunner.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.userRunner.UserRunner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.userRunner.UserRunner.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.userRunner.UserRunner.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunner.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.userRunner.UserRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetLocked` <a name="resetLocked" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetLocked"></a>

```java
public void resetLocked()
```

##### `resetMaintenanceNote` <a name="resetMaintenanceNote" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetMaintenanceNote"></a>

```java
public void resetMaintenanceNote()
```

##### `resetMaximumTimeout` <a name="resetMaximumTimeout" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetMaximumTimeout"></a>

```java
public void resetMaximumTimeout()
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetPaused"></a>

```java
public void resetPaused()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetTagList` <a name="resetTagList" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetTagList"></a>

```java
public void resetTagList()
```

##### `resetUntagged` <a name="resetUntagged" id="@cdktf/provider-gitlab.userRunner.UserRunner.resetUntagged"></a>

```java
public void resetUntagged()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UserRunner resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.userRunner.UserRunner.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.user_runner.UserRunner;

UserRunner.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userRunner.UserRunner.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.user_runner.UserRunner;

UserRunner.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.user_runner.UserRunner;

UserRunner.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.userRunner.UserRunner.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.user_runner.UserRunner;

UserRunner.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),UserRunner.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a UserRunner resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the UserRunner to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing UserRunner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunner.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the UserRunner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.lockedInput">lockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.maintenanceNoteInput">maintenanceNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeoutInput">maximumTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.pausedInput">pausedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerTypeInput">runnerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.tagListInput">tagListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.untaggedInput">untaggedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.locked">locked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.maintenanceNote">maintenanceNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeout">maximumTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.projectId">projectId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerType">runnerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.tagList">tagList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.untagged">untagged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.groupIdInput"></a>

```java
public java.lang.Number getGroupIdInput();
```

- *Type:* java.lang.Number

---

##### `lockedInput`<sup>Optional</sup> <a name="lockedInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.lockedInput"></a>

```java
public java.lang.Object getLockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maintenanceNoteInput`<sup>Optional</sup> <a name="maintenanceNoteInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.maintenanceNoteInput"></a>

```java
public java.lang.String getMaintenanceNoteInput();
```

- *Type:* java.lang.String

---

##### `maximumTimeoutInput`<sup>Optional</sup> <a name="maximumTimeoutInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeoutInput"></a>

```java
public java.lang.Number getMaximumTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.pausedInput"></a>

```java
public java.lang.Object getPausedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.projectIdInput"></a>

```java
public java.lang.Number getProjectIdInput();
```

- *Type:* java.lang.Number

---

##### `runnerTypeInput`<sup>Optional</sup> <a name="runnerTypeInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerTypeInput"></a>

```java
public java.lang.String getRunnerTypeInput();
```

- *Type:* java.lang.String

---

##### `tagListInput`<sup>Optional</sup> <a name="tagListInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.tagListInput"></a>

```java
public java.util.List<java.lang.String> getTagListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `untaggedInput`<sup>Optional</sup> <a name="untaggedInput" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.untaggedInput"></a>

```java
public java.lang.Object getUntaggedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.locked"></a>

```java
public java.lang.Object getLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maintenanceNote`<sup>Required</sup> <a name="maintenanceNote" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.maintenanceNote"></a>

```java
public java.lang.String getMaintenanceNote();
```

- *Type:* java.lang.String

---

##### `maximumTimeout`<sup>Required</sup> <a name="maximumTimeout" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.maximumTimeout"></a>

```java
public java.lang.Number getMaximumTimeout();
```

- *Type:* java.lang.Number

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.projectId"></a>

```java
public java.lang.Number getProjectId();
```

- *Type:* java.lang.Number

---

##### `runnerType`<sup>Required</sup> <a name="runnerType" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.runnerType"></a>

```java
public java.lang.String getRunnerType();
```

- *Type:* java.lang.String

---

##### `tagList`<sup>Required</sup> <a name="tagList" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.tagList"></a>

```java
public java.util.List<java.lang.String> getTagList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `untagged`<sup>Required</sup> <a name="untagged" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.untagged"></a>

```java
public java.lang.Object getUntagged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunner.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.userRunner.UserRunner.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserRunnerConfig <a name="UserRunnerConfig" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.user_runner.UserRunnerConfig;

UserRunnerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .runnerType(java.lang.String)
//  .accessLevel(java.lang.String)
//  .description(java.lang.String)
//  .groupId(java.lang.Number)
//  .locked(java.lang.Boolean)
//  .locked(IResolvable)
//  .maintenanceNote(java.lang.String)
//  .maximumTimeout(java.lang.Number)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .projectId(java.lang.Number)
//  .tagList(java.util.List<java.lang.String>)
//  .untagged(java.lang.Boolean)
//  .untagged(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.runnerType">runnerType</a></code> | <code>java.lang.String</code> | The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | The access level of the runner. Valid values are: `not_protected`, `ref_protected`. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the runner. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | The ID of the group that the runner is created in. Required if runner_type is group_type. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.locked">locked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the runner should be locked for the current project. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.maintenanceNote">maintenanceNote</a></code> | <code>java.lang.String</code> | Free-form maintenance notes for the runner (1024 characters). |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.maximumTimeout">maximumTimeout</a></code> | <code>java.lang.Number</code> | Maximum timeout that limits the amount of time (in seconds) that runners can run jobs. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the runner should ignore new jobs. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.projectId">projectId</a></code> | <code>java.lang.Number</code> | The ID of the project that the runner is created in. Required if runner_type is project_type. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.tagList">tagList</a></code> | <code>java.util.List<java.lang.String></code> | A list of runner tags. |
| <code><a href="#@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.untagged">untagged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the runner should handle untagged jobs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `runnerType`<sup>Required</sup> <a name="runnerType" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.runnerType"></a>

```java
public java.lang.String getRunnerType();
```

- *Type:* java.lang.String

The scope of the runner. Valid values are: `instance_type`, `group_type`, `project_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#runner_type UserRunner#runner_type}

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

The access level of the runner. Valid values are: `not_protected`, `ref_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#access_level UserRunner#access_level}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#description UserRunner#description}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

The ID of the group that the runner is created in. Required if runner_type is group_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#group_id UserRunner#group_id}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.locked"></a>

```java
public java.lang.Object getLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the runner should be locked for the current project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#locked UserRunner#locked}

---

##### `maintenanceNote`<sup>Optional</sup> <a name="maintenanceNote" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.maintenanceNote"></a>

```java
public java.lang.String getMaintenanceNote();
```

- *Type:* java.lang.String

Free-form maintenance notes for the runner (1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#maintenance_note UserRunner#maintenance_note}

---

##### `maximumTimeout`<sup>Optional</sup> <a name="maximumTimeout" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.maximumTimeout"></a>

```java
public java.lang.Number getMaximumTimeout();
```

- *Type:* java.lang.Number

Maximum timeout that limits the amount of time (in seconds) that runners can run jobs.

Must be at least 600 (10 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#maximum_timeout UserRunner#maximum_timeout}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the runner should ignore new jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#paused UserRunner#paused}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.projectId"></a>

```java
public java.lang.Number getProjectId();
```

- *Type:* java.lang.Number

The ID of the project that the runner is created in. Required if runner_type is project_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#project_id UserRunner#project_id}

---

##### `tagList`<sup>Optional</sup> <a name="tagList" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.tagList"></a>

```java
public java.util.List<java.lang.String> getTagList();
```

- *Type:* java.util.List<java.lang.String>

A list of runner tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#tag_list UserRunner#tag_list}

---

##### `untagged`<sup>Optional</sup> <a name="untagged" id="@cdktf/provider-gitlab.userRunner.UserRunnerConfig.property.untagged"></a>

```java
public java.lang.Object getUntagged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the runner should handle untagged jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/user_runner#untagged UserRunner#untagged}

---



