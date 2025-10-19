# `projectFreezePeriod` Submodule <a name="`projectFreezePeriod` Submodule" id="@cdktf/provider-gitlab.projectFreezePeriod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectFreezePeriod <a name="ProjectFreezePeriod" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_freeze_period gitlab_project_freeze_period}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_freeze_period.ProjectFreezePeriod;

ProjectFreezePeriod.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .freezeEnd(java.lang.String)
    .freezeStart(java.lang.String)
    .project(java.lang.String)
//  .cronTimezone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.freezeEnd">freezeEnd</a></code> | <code>java.lang.String</code> | End of the Freeze Period in cron format (for example, `0 2 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.freezeStart">freezeStart</a></code> | <code>java.lang.String</code> | Start of the Freeze Period in cron format (for example, `0 1 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID or path of the project to add the freeze period to. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.cronTimezone">cronTimezone</a></code> | <code>java.lang.String</code> | The timezone. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `freezeEnd`<sup>Required</sup> <a name="freezeEnd" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.freezeEnd"></a>

- *Type:* java.lang.String

End of the Freeze Period in cron format (for example, `0 2 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_freeze_period#freeze_end ProjectFreezePeriod#freeze_end}

---

##### `freezeStart`<sup>Required</sup> <a name="freezeStart" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.freezeStart"></a>

- *Type:* java.lang.String

Start of the Freeze Period in cron format (for example, `0 1 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_freeze_period#freeze_start ProjectFreezePeriod#freeze_start}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID or path of the project to add the freeze period to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_freeze_period#project ProjectFreezePeriod#project}

---

##### `cronTimezone`<sup>Optional</sup> <a name="cronTimezone" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.Initializer.parameter.cronTimezone"></a>

- *Type:* java.lang.String

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_freeze_period#cron_timezone ProjectFreezePeriod#cron_timezone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.resetCronTimezone">resetCronTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCronTimezone` <a name="resetCronTimezone" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.resetCronTimezone"></a>

```java
public void resetCronTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectFreezePeriod resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_freeze_period.ProjectFreezePeriod;

ProjectFreezePeriod.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_freeze_period.ProjectFreezePeriod;

ProjectFreezePeriod.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_freeze_period.ProjectFreezePeriod;

ProjectFreezePeriod.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_freeze_period.ProjectFreezePeriod;

ProjectFreezePeriod.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectFreezePeriod.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectFreezePeriod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectFreezePeriod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectFreezePeriod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_freeze_period#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectFreezePeriod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.cronTimezoneInput">cronTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeEndInput">freezeEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeStartInput">freezeStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.cronTimezone">cronTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeEnd">freezeEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeStart">freezeStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `cronTimezoneInput`<sup>Optional</sup> <a name="cronTimezoneInput" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.cronTimezoneInput"></a>

```java
public java.lang.String getCronTimezoneInput();
```

- *Type:* java.lang.String

---

##### `freezeEndInput`<sup>Optional</sup> <a name="freezeEndInput" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeEndInput"></a>

```java
public java.lang.String getFreezeEndInput();
```

- *Type:* java.lang.String

---

##### `freezeStartInput`<sup>Optional</sup> <a name="freezeStartInput" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeStartInput"></a>

```java
public java.lang.String getFreezeStartInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `cronTimezone`<sup>Required</sup> <a name="cronTimezone" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.cronTimezone"></a>

```java
public java.lang.String getCronTimezone();
```

- *Type:* java.lang.String

---

##### `freezeEnd`<sup>Required</sup> <a name="freezeEnd" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeEnd"></a>

```java
public java.lang.String getFreezeEnd();
```

- *Type:* java.lang.String

---

##### `freezeStart`<sup>Required</sup> <a name="freezeStart" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.freezeStart"></a>

```java
public java.lang.String getFreezeStart();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriod.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectFreezePeriodConfig <a name="ProjectFreezePeriodConfig" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_freeze_period.ProjectFreezePeriodConfig;

ProjectFreezePeriodConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .freezeEnd(java.lang.String)
    .freezeStart(java.lang.String)
    .project(java.lang.String)
//  .cronTimezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.freezeEnd">freezeEnd</a></code> | <code>java.lang.String</code> | End of the Freeze Period in cron format (for example, `0 2 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.freezeStart">freezeStart</a></code> | <code>java.lang.String</code> | Start of the Freeze Period in cron format (for example, `0 1 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID or path of the project to add the freeze period to. |
| <code><a href="#@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.cronTimezone">cronTimezone</a></code> | <code>java.lang.String</code> | The timezone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `freezeEnd`<sup>Required</sup> <a name="freezeEnd" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.freezeEnd"></a>

```java
public java.lang.String getFreezeEnd();
```

- *Type:* java.lang.String

End of the Freeze Period in cron format (for example, `0 2 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_freeze_period#freeze_end ProjectFreezePeriod#freeze_end}

---

##### `freezeStart`<sup>Required</sup> <a name="freezeStart" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.freezeStart"></a>

```java
public java.lang.String getFreezeStart();
```

- *Type:* java.lang.String

Start of the Freeze Period in cron format (for example, `0 1 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_freeze_period#freeze_start ProjectFreezePeriod#freeze_start}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID or path of the project to add the freeze period to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_freeze_period#project ProjectFreezePeriod#project}

---

##### `cronTimezone`<sup>Optional</sup> <a name="cronTimezone" id="@cdktf/provider-gitlab.projectFreezePeriod.ProjectFreezePeriodConfig.property.cronTimezone"></a>

```java
public java.lang.String getCronTimezone();
```

- *Type:* java.lang.String

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_freeze_period#cron_timezone ProjectFreezePeriod#cron_timezone}

---



